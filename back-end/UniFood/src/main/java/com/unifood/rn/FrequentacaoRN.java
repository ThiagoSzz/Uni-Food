package com.unifood.rn;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.unifood.bd.FrequentacaoBD;
import com.unifood.ed.FrequentacaoED;
import com.unifood.util.BD;
import com.unifood.util.RN;
import com.unifood.util.Val;
import com.unifood.val.FrequentacaoVal;

@Stateless
public class FrequentacaoRN extends RN<FrequentacaoED>
{
	@Inject
	private FrequentacaoBD frequentacaoBD;

	@Inject
	private FrequentacaoVal frequentacaoVal;

	@Override
	public BD<FrequentacaoED> getBD()
	{
		return frequentacaoBD;
	}

	@Override
	public Val<FrequentacaoED> getVal()
	{
		return frequentacaoVal;
	}

}
