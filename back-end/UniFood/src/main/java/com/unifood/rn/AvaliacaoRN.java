package com.unifood.rn;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.unifood.bd.AvaliacaoBD;
import com.unifood.ed.AvaliacaoED;
import com.unifood.util.BD;
import com.unifood.util.RN;
import com.unifood.util.Val;
import com.unifood.val.AvaliacaoVal;

@Stateless
public class AvaliacaoRN extends RN<AvaliacaoED>
{
	@Inject
	private AvaliacaoBD avaliacaoBD;

	@Inject
	private AvaliacaoVal avaliacaoVal;

	@Override
	public BD<AvaliacaoED> getBD()
	{
		return avaliacaoBD;
	}

	@Override
	public Val<AvaliacaoED> getVal()
	{
		return avaliacaoVal;
	}

}
