package com.unifood.rn;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.unifood.bd.NotaBD;
import com.unifood.ed.NotaED;
import com.unifood.util.BD;
import com.unifood.util.RN;
import com.unifood.util.Val;
import com.unifood.val.NotaVal;

@Stateless
public class NotaRN extends RN<NotaED>
{
	@Inject
	private NotaBD notaBD;

	@Inject
	private NotaVal notaVal;

	@Override
	public BD<NotaED> getBD()
	{
		return notaBD;
	}

	@Override
	public Val<NotaED> getVal()
	{
		return notaVal;
	}

}
