package com.unifood.bd;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.unifood.ed.UsuarioED;
import com.unifood.util.BD;

@Stateless
public class UsuarioBD extends BD<UsuarioED, String>
{
	@PersistenceContext(unitName = "UniFood")
	private EntityManager em;

	@PostConstruct
	public void init() {
		super.setEntityManager(em);
	}
	
}
