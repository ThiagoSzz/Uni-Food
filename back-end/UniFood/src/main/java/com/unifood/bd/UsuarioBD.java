package com.unifood.bd;

import javax.ejb.Stateful;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.unifood.ed.UsuarioED;
import com.unifood.util.BD;

@Stateful
public class UsuarioBD extends BD<UsuarioED>
{
	@PersistenceContext(unitName = "UniFood")
	private EntityManager em;

	@Override
	public EntityManager getEntityManager()
	{
		return em;
	}

}
