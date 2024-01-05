package com.unifood.util;

import java.util.List;

public abstract class Val<E extends ED<PK>, PK>
{
	private String entidade;
	
	public Val() {
		entidade = getClass().getName().substring(0, getClass().getName().length() - 3);
	}
	
	public void validaLista(E ed)
	{
	}
	
	public void validaConta(E ed) 
	{
		validaLista(ed);
	}
	
	public void validaConsulta(E ed)
	{
		if (ed == null)
		{
			throw new IllegalArgumentException(String.format("Não é possível consultar registro nulo.", entidade));
		}
		validaConsulta(ed.getId());
	}
	
	public void validaConsulta(PK id)
	{
		if (id == null)
		{
			throw new IllegalArgumentException(String.format("Não é possível consultar registro de %s sem o identificado primário.", entidade));
		}
	}

	public void validaInclui(E ed)
	{
	}

	public void validaRemove(E ed)
	{
		if (ed.getId() == null) 
		{
			
			throw new IllegalArgumentException(String.format("Não é possível remover registro de %s sem o identificado primário.", entidade));
		}
	}
	
	public void validaRemove(List<E> lista)
	{
		for (E ed : lista)
		{
			if (ed.getId() == null)
			{
				throw new IllegalArgumentException(String.format("Não é possível remover registro de %s sem o identificado primário.", entidade));
			}
		}
	}

	public void validaAltera(E ed)
	{
		if (ed.getId() == null) 
		{
			throw new IllegalArgumentException(String.format("Não é possível atualizar registro de %s sem o identificado primário.", entidade));
		}		
	}
	
}
