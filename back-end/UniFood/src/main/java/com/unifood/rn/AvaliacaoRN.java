package com.unifood.rn;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.inject.Inject;

import com.unifood.bd.AvaliacaoBD;
import com.unifood.ed.AvaliacaoED;
import com.unifood.ed.RestauranteNotaED;
import com.unifood.util.RN;
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
	
	public List<RestauranteNotaED> listaRestauranteNota() 
	{
		return avaliacaoBD.listaRestauranteNota();
	}

}
