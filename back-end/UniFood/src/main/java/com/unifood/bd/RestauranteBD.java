package com.unifood.bd;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.unifood.ed.RestauranteED;
import com.unifood.util.BD;

@Stateless
public class RestauranteBD extends BD<RestauranteED>
{
	@PersistenceContext(unitName = "UniFood")
	private EntityManager em;

	@Override
	public EntityManager getEntityManager()
	{
		return em;
	}
}
