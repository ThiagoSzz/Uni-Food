package com.unifood.rn;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.unifood.bd.RestauranteBD;
import com.unifood.ed.RestauranteED;
import com.unifood.util.BD;
import com.unifood.util.RN;
import com.unifood.util.Val;
import com.unifood.val.RestauranteVal;

@Stateless
public class RestauranteRN extends RN<RestauranteED>
{
	@Inject
	private RestauranteBD restauranteBD;

	@Inject
	private RestauranteVal restauranteVal;

	@Override
	public BD<RestauranteED> getBD()
	{
		return restauranteBD;
	}

	@Override
	public Val<RestauranteED> getVal()
	{
		return restauranteVal;
	}

}