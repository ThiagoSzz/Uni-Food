package com.unifood.rn;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.unifood.bd.FuncaoBD;
import com.unifood.ed.FuncaoED;
import com.unifood.util.BD;
import com.unifood.util.RN;
import com.unifood.util.Val;
import com.unifood.val.FuncaoVal;

@Stateless
public class FuncaoRN extends RN<FuncaoED>
{
	@Inject
	private FuncaoBD funcaoBD;

	@Inject
	private FuncaoVal funcaoVal;

	@Override
	public BD<FuncaoED> getBD()
	{
		return funcaoBD;
	}

	@Override
	public Val<FuncaoED> getVal()
	{
		return funcaoVal;
	}

}