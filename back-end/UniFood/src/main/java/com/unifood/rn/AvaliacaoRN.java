package com.unifood.rn;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.inject.Inject;

import com.unifood.bd.AvaliacaoBD;
import com.unifood.ed.AvaliacaoED;
import com.unifood.ed.AvaliacaoRestauranteED;
import com.unifood.ed.AvaliacaoUsuarioED;
import com.unifood.ed.NotaED;
import com.unifood.ed.RestauranteED;
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
	
	@Inject 
	private RestauranteRN restauranteRN;
	
	@Inject
	private NotaRN notaRN;

	@PostConstruct
	public void initBDVal()
	{
		init(avaliacaoBD, avaliacaoVal);
	}
	
	public List<RestauranteNotaED> listaRestauranteNota() 
	{
		return avaliacaoBD.listaRestauranteNota();
	}

	@TransactionAttribute(TransactionAttributeType.SUPPORTS)
	public void incluiAvaliacaoUsuario(AvaliacaoUsuarioED avaliacaoUsuarioED)
	{
		avaliacaoVal.validaIncluiAvaliacaoUsuario(avaliacaoUsuarioED);
		
		RestauranteED restauranteED = new RestauranteED();
		restauranteED.setSiglaRU(avaliacaoUsuarioED.getSiglaRU());
		restauranteED.setSiglaUniversidade(avaliacaoUsuarioED.getSiglaUniversidade());
		
		List<RestauranteED> listaRestaurantes = restauranteRN.lista(restauranteED);
		
		avaliacaoVal.validaListaComUnicoRestaurante(listaRestaurantes);
		
		restauranteED = listaRestaurantes.get(0);
		
		AvaliacaoED avaliacaoED = new AvaliacaoED();
		avaliacaoED.setCodRU(restauranteED.getId());
		avaliacaoED.setEmailUsuario(avaliacaoUsuarioED.getEmailUsuario());
		avaliacaoED.setCodNota(1); 
		avaliacaoED = inclui(avaliacaoED);		
		
		NotaED notaED = new NotaED();
		notaED.setId(avaliacaoED.getId());
		notaED.setEmailUsuario(avaliacaoUsuarioED.getEmailUsuario());
		notaED.setPeriodoNota(avaliacaoUsuarioED.getPeriodoNota());
		notaED.setNotaEstrelas(avaliacaoUsuarioED.getNotaEstrelas());
		notaED.setComentario(avaliacaoUsuarioED.getComentario());
		notaED.setTags(avaliacaoUsuarioED.getTags());
		notaED.setDuracaoNota(avaliacaoUsuarioED.getDuracaoNota());
		
		notaED = notaRN.inclui(notaED);
		
		avaliacaoED.setCodNota(avaliacaoED.getId());
		altera(avaliacaoED);
	}
	
	public List<AvaliacaoRestauranteED> listaAvaliacaoRestauranteED() {
		return avaliacaoBD.listaAvaliacaoRestauranteED();
	}

}
