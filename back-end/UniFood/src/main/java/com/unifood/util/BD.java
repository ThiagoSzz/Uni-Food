package com.unifood.util;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;

import javax.ejb.Stateful;
import javax.persistence.Column;
import javax.persistence.EntityManager;
import javax.persistence.Query;

@Stateful
public abstract class BD<E extends ED>
{
	private Class<E> entidade;

	public abstract EntityManager getEntityManager();

	@SuppressWarnings("unchecked")
	public List<E> lista(E e)
	{
		String sql = montaSqlSelect(e);
		Query query = getEntityManager().createNativeQuery(sql, entidade);
		System.out.println(String.format("[ %s ]", sql));

		return query.getResultList();
	}

	@SuppressWarnings("unchecked")
	private Class<E> getEntityClass()
	{
		Type type = getClass().getGenericSuperclass();
		ParameterizedType paramType = (ParameterizedType) type;
		return (Class<E>) paramType.getActualTypeArguments()[0];
	}

	private String montaSqlSelect(E e)
	{
		StringBuilder sql = new StringBuilder();

		montaSelect(sql);

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

		return sql.toString();
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


	private void montaSelect(StringBuilder sql)
	{
		sql.append("select * from ");
		sql.append(obtemNomeTabela());
		sql.append(" where 1 = 1"); // apenas para facilitar a montagem do sql
	}

	private String obtemNomeTabela()
	{
		String result = getEntidade().getName().substring(0, getEntidade().getName().length() - 2);
		return result.substring(result.lastIndexOf(".") + 1);
	}

	public E inclui(E ed)
	{
		return ed;
	}

	public void remove(E ed)
	{

	}

	public E atualiza(E ed)
	{
		return ed;
	}

	private Class<E> getEntidade()
	{
		if (entidade == null)
		{
			entidade = getEntityClass();
		}

		return entidade;
	}

}

