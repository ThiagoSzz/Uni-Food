package com.unifood.util;

import java.util.List;

public abstract class RN<E extends ED<PK>, PK>
{
	private BD<E, PK> bd;
	
	public Val<E, PK> val;

	public List<E> lista(E ed)
	{
		val.validaLista(ed);
		return bd.lista(ed);
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

	public E atualiza(E ed)
	{
		val.validaRemove(ed);
		return bd.atualiza(ed);
	}
	
	public void init(BD<E, PK> bd, Val<E, PK> val) 
	{
		this.bd = bd;
		this.val = val;
	}

}
