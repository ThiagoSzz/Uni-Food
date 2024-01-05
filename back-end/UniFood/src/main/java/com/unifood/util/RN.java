package com.unifood.util;

import java.util.List;

public abstract class RN<E extends ED<PK>, PK>
{
	private BD<E, PK> bd;
	
	public Val<E, PK> val;	
	
	public void init(BD<E, PK> bd, Val<E, PK> val) 
	{
		this.bd = bd;
		this.val = val;
	}	
	
	public E consulta(PK id)
	{
		val.validaConsulta(id);
		return bd.consulta(id);
	}
	
	public E consulta(E ed)
	{
		val.validaConsulta(ed);
		return bd.consulta(ed);
	}

	public List<E> lista(E ed)
	{
		val.validaLista(ed);
		return bd.lista(ed);
	}
	
	public int conta(E ed)
	{
		val.validaConta(ed);
		return bd.conta(ed);
	}

	public E inclui(E ed)
	{
		val.validaInclui(ed);
		return bd.inclui(ed);
	}

	public void remove(E ed)
	{
		val.validaRemove(ed);
		bd.remove(ed);
	}
	
	public void remove(List<E> lista)
	{
		val.validaRemove(lista);
		bd.remove(lista);
	}

	public E altera(E ed)
	{
		val.validaRemove(ed);
		return bd.altera(ed);
	}

}
