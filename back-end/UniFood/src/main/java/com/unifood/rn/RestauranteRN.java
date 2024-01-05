package com.unifood.rn;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.inject.Inject;

import com.unifood.bd.RestauranteBD;
import com.unifood.ed.RestauranteED;
import com.unifood.util.RN;
import com.unifood.val.RestauranteVal;

@Stateless
public class RestauranteRN extends RN<RestauranteED, Integer>
{
	@Inject
	private RestauranteBD restauranteBD;

	@Inject
	private RestauranteVal restauranteVal;

	@PostConstruct
	public void initBDVal()
	{
		init(restauranteBD, restauranteVal);
	}

}