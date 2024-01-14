package com.unifood.bd;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.unifood.ed.AvaliacaoED;
import com.unifood.ed.RestauranteNotaED;
import com.unifood.util.BD;

@Stateless
public class AvaliacaoBD extends BD<AvaliacaoED, Integer>
{
	@PersistenceContext(unitName = "UniFood")
	private EntityManager em;

	@PostConstruct
	public void init() {
		super.setEntityManager(em);
	}
	
	public List<RestauranteNotaED> listaRestauranteNota() 
	{
		StringBuilder sb = new StringBuilder();
		
		sb.append("SELECT                                           ");
		sb.append("    A.cod_avaliacao AS id,                       ");
		sb.append("    R.sigla_ru AS sigla_restaurante,             ");
		sb.append("    R.sigla_universidade AS sigla_universidade,  ");
		sb.append("    N.nota_estrelas AS nota_dada,                ");
		sb.append("    N.comentario,                                ");
		sb.append("    N.tags,                                      ");
		sb.append("    N.periodo_nota                               ");
		sb.append("  FROM                                           ");
		sb.append("    Avaliacao A                                  ");
		sb.append("  JOIN                                           ");
		sb.append("    Nota N ON A.cod_nota = N.cod_nota            ");
		sb.append("  JOIN                                           ");
		sb.append("    Restaurante R ON A.cod_ru = R.cod_ru;			");
		
		Query query = em.createNativeQuery(sb.toString(), RestauranteNotaED.class);
		
		@SuppressWarnings("unchecked")
		List<RestauranteNotaED> lista = query.getResultList();
		
		return lista;		
	}
	
}
