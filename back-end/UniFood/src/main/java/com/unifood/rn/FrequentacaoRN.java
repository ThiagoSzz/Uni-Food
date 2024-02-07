package com.unifood.rn;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.inject.Inject;

import com.unifood.bd.FrequentacaoBD;
import com.unifood.ed.FrequentacaoED;
import com.unifood.util.RN;
import com.unifood.val.FrequentacaoVal;

@Stateless
public class FrequentacaoRN extends RN<FrequentacaoED, Integer>
{
	@Inject
	private FrequentacaoBD frequentacaoBD;

	@Inject
	private FrequentacaoVal frequentacaoVal;

	@PostConstruct
	public void initBDVal()
	{
		init(frequentacaoBD, frequentacaoVal);
	}
}
