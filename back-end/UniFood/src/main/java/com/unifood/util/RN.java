package com.unifood.util;

import java.util.List;

public abstract class RN<E extends ED>
{

	public abstract BD<E> getBD();

	public abstract Val<E> getVal();

	public List<E> lista(E ed)
	{
		getVal().validaLista(ed);
		return getBD().lista(ed);
	}

	public E inclui(E ed)
	{
		getVal().validaInclui(ed);
		return getBD().inclui(ed);
	}

	public void remove(E ed)
	{
		getVal().validaRemove(ed);
		getBD().remove(ed);
	}

	public E atualiza(E ed)
	{
		getVal().validaRemove(ed);
		return getBD().atualiza(ed);
	}

}
