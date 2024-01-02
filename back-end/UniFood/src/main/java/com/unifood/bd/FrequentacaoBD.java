package com.unifood.bd;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.unifood.ed.FrequentacaoED;
import com.unifood.util.BD;

@Stateless
public class FrequentacaoBD extends BD<FrequentacaoED, Integer>
{
	@PersistenceContext(unitName = "UniFood")
	private EntityManager em;

	@PostConstruct
	public void init() {
		super.setEntityManager(em);
	}
	
}
