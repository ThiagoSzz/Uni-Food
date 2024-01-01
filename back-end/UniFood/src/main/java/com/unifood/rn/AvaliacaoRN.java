package com.unifood.rn;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.inject.Inject;

import com.unifood.bd.AvaliacaoBD;
import com.unifood.ed.AvaliacaoED;
import com.unifood.util.BD;
import com.unifood.util.RN;
import com.unifood.util.Val;
import com.unifood.val.AvaliacaoVal;

@Stateless
public class AvaliacaoRN extends RN<AvaliacaoED, Integer>
{
	@Inject
	private AvaliacaoBD avaliacaoBD;

	@Inject
	private AvaliacaoVal avaliacaoVal;

	@PostConstruct
	public void initBDVal()
	{
		init(avaliacaoBD, avaliacaoVal);
	}

}
