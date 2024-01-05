package com.unifood.bd;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.unifood.ed.NotaED;
import com.unifood.util.BD;

@Stateless
public class NotaBD extends BD<NotaED, Integer>
{
	@PersistenceContext(unitName = "UniFood")
	private EntityManager em;

	@PostConstruct
	public void init() {
		super.setEntityManager(em);
	}
	
}
