package com.unifood.bd;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.unifood.ed.FuncaoED;
import com.unifood.util.BD;

@Stateless
public class FuncaoBD extends BD<FuncaoED, Integer>
{
	@PersistenceContext(unitName = "UniFood")
	private EntityManager em;

	@Override
	public EntityManager getEntityManager()
	{
		return em;
	}
}
