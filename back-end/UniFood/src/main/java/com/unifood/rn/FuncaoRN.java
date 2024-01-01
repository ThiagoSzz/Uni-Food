package com.unifood.rn;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.inject.Inject;

import com.unifood.bd.FuncaoBD;
import com.unifood.ed.FuncaoED;
import com.unifood.util.RN;
import com.unifood.val.FuncaoVal;

@Stateless
public class FuncaoRN extends RN<FuncaoED, Integer>
{
	@Inject
	private FuncaoBD funcaoBD;

	@Inject
	private FuncaoVal funcaoVal;

	@PostConstruct
	public void initBDVal()
	{
		init(funcaoBD, funcaoVal);
	}
}