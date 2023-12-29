package com.unifood.rn;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.unifood.bd.UniversidadeBD;
import com.unifood.ed.UniversidadeED;
import com.unifood.util.BD;
import com.unifood.util.RN;
import com.unifood.util.Val;
import com.unifood.val.UniversidadeVal;

@Stateless
public class UniversidadeRN extends RN<UniversidadeED>
{
	@Inject
	private UniversidadeBD universidadeBD;

	@Inject
	private UniversidadeVal universidadeVal;

	@Override
	public BD<UniversidadeED> getBD()
	{
		return universidadeBD;
	}

	@Override
	public Val<UniversidadeED> getVal()
	{
		return universidadeVal;
	}

}
