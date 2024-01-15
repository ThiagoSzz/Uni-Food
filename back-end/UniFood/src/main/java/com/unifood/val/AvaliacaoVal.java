package com.unifood.val;

import java.util.List;

import javax.ejb.Stateless;

import com.unifood.ed.AvaliacaoED;
import com.unifood.ed.AvaliacaoUsuarioED;
import com.unifood.ed.RestauranteED;
import com.unifood.util.Val;

@Stateless
public class AvaliacaoVal extends Val<AvaliacaoED, Integer>
{

	public void validaIncluiAvaliacaoUsuario(AvaliacaoUsuarioED avaliacaoUsuarioED)
	{
		if (avaliacaoUsuarioED == null)
		{
			throw new IllegalArgumentException("Parâmetro nulo na inclusão de avaliação pelo usuário.");
		}
		if (avaliacaoUsuarioED.getSiglaRU() == null || avaliacaoUsuarioED.getSiglaRU().isEmpty())
		{
			throw new IllegalArgumentException("É necessário informar a sigla do RU.");			
		}
		if (avaliacaoUsuarioED.getSiglaUniversidade() == null || avaliacaoUsuarioED.getSiglaUniversidade().isEmpty())
		{
			throw new IllegalArgumentException("É necessário informar a sigla da Universidade.");			
		}		
		if (avaliacaoUsuarioED.getPeriodoNota() == null || avaliacaoUsuarioED.getPeriodoNota().isEmpty())
		{
			throw new IllegalArgumentException("É necessário informar um período.");			
		}		
		if (avaliacaoUsuarioED.getNotaEstrelas() == null)
		{
			throw new IllegalArgumentException("É necessário informar uma nota.");			
		}		
		if (avaliacaoUsuarioED.getDuracaoNota() == null)
		{
			throw new IllegalArgumentException("É necessário informar uma duração da nota.");			
		}			
		
	}

	public void validaListaComUnicoRestaurante(List<RestauranteED> listaRestaurantes)
	{
		if (listaRestaurantes.isEmpty())
		{
			throw new IllegalArgumentException("Não existe restaurante com essa SiglaRU e essa SiglaUniversidade.");
		} else if (listaRestaurantes.size() > 1)
		{
			throw new IllegalStateException("Estado inconsistente. Mais de um restaurnte com a mesma SiglaRU e essa SiglaUniversidade.");
		}
	}

}
