package com.unifood.util;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.ejb.Stateful;
import javax.persistence.Column;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.Query;

@Stateful
public abstract class BD<E extends ED<PK>, PK>
{
	private EntityManager em;
	private Class<E> entidade;
	private String queryConsulta;
	private String queryExclui;
	private String queryExcluiLista;	
	
	public BD() 
	{
	    entidade = getEntityClass();
	    queryConsulta = String.format("select e from %s e where e.id = :id", entidade.getSimpleName());  
	    queryExclui = ("DELETE " + entidade.getSimpleName() + " e WHERE e.id = :id");
	    queryExcluiLista = ("DELETE " + entidade.getSimpleName() + " e WHERE e.id IN :ids");		
	}
	
	public void setEntityManager(EntityManager em)
	{
		this.em = em;
	}

	@SuppressWarnings("unchecked")
	public List<E> lista(E e)
	{
		String sql = montaSelect(e);
		Query query = em.createNativeQuery(sql, entidade);
		System.out.println(String.format("[ %s ]", sql));

		return query.getResultList();
	}
	
	public int conta(E e) 
	{
		String sql = montaConta(e);
		Query query = em.createNativeQuery(sql, entidade);
		Object resultado = query.getSingleResult();		
		return ((Number) resultado).intValue();
	}
	
	@SuppressWarnings("unchecked")
	public E consulta(PK id)
	{
		Query query = em.createQuery(queryConsulta);
		query.setParameter("id", id);
		E resultado;

		try
		{
			resultado = (E) query.getSingleResult();
		} catch (NoResultException e)
		{
			resultado = null;
		}

		return resultado;
	}
	
	public E consulta(E ed) 
	{
		return consulta(ed.getId());
	}
	
	public E inclui(E ed)
	{
		em.persist(ed);
		em.flush();
		return ed;
	}

	public E altera(E ed)
	{
		ed = em.merge(ed);
		em.flush();
		return ed;
	}
	
	public void remove(E ed)
	{
		Query query = em.createQuery(queryExclui);
	   query.setParameter("id", ed.getId());
	   query.executeUpdate();		
	}
	
	public void remove(List<E> lista)
	{
		Set<PK> ids = new HashSet<>();
		for (E ed : lista)
		{
			ids.add(ed.getId());
		}
		
		Query query = em.createQuery(queryExcluiLista);
		query.setParameter("ids", ids);
		query.executeUpdate();
	}


	@SuppressWarnings("unchecked")
	private Class<E> getEntityClass()
	{
		ParameterizedType genericSuperclass = null;
		if (super.getClass().getGenericSuperclass() instanceof ParameterizedType) 
		{
			genericSuperclass = (ParameterizedType) super.getClass().getGenericSuperclass();
		}
		else if (super.getClass().getSuperclass().getGenericSuperclass() instanceof ParameterizedType)
		{
			genericSuperclass = (ParameterizedType) super.getClass().getSuperclass().getGenericSuperclass();
		}
	    
		return ((Class<E>) genericSuperclass.getActualTypeArguments()[0]);
	}

	private void montaWhere(StringBuilder sql, E e)
	{		
		sql.append(" where 1 = 1"); // apenas para facilitar a montagem do sql

      Field[] campos = e.getClass().getDeclaredFields();

		for (Field campo : campos)
		{
			{
				if (campo.isAnnotationPresent(Column.class))
				{
					String nomeDaColuna = campo.getAnnotation(Column.class).name();
					if (nomeDaColuna.isEmpty())
					{
						nomeDaColuna = campo.getName();
					}
					Object valor = extraiValorCampo(e, campo, nomeDaColuna);

					if (valor != null)
					{
						sql.append(" and ");
						sql.append(nomeDaColuna);

						if ("java.lang.String".equals(campo.getType().getName()))
						{
							sql.append(String.format(" like '%%%s%%'", valor));
						} else
						{
							sql.append(" = ").append(valor.toString());
						}
					}
				}
			}
		}
	}

	private Object extraiValorCampo(E e, Field campo, String nomeDaColuna)
	{
		Object valorDoCampo;
		String nomeDoMetodoGetter = "get" + Character.toUpperCase(campo.getName().charAt(0)) + campo.getName().substring(1);

		 try {
		    Method metodoGetter = e.getClass().getMethod(nomeDoMetodoGetter);

		    valorDoCampo = metodoGetter.invoke(e);

		    System.out.println(nomeDaColuna + ": " + valorDoCampo);
		} catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException ex) {
		    ex.printStackTrace();
		    valorDoCampo = null;
		}

		return valorDoCampo;
	}

	private String montaSelect(E e)
	{
		StringBuilder sql = new StringBuilder();
		sql.append("select * from ");
		sql.append(getNomeTabela());
		montaWhere(sql, e);
		return sql.toString();
	}
	
	private String montaConta(E e)
	{
		StringBuilder sql = new StringBuilder();
		sql.append("select count(*) from ");
		sql.append(getNomeTabela());
		montaWhere(sql, e);
		return sql.toString();
	}

	private String getNomeTabela()
	{
		String result = entidade.getName().substring(0, entidade.getName().length() - 2);
		return result.substring(result.lastIndexOf(".") + 1);
	}

}