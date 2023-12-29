package com.unifood.rest;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.unifood.ed.RestauranteED;
import com.unifood.rn.RestauranteRN;
import com.unifood.util.Rest;

@Path("/restaurante")
public class RestauranteRest extends Rest
{
	@Inject
	private RestauranteRN restauranteRN;

	@POST
	@Path("/lista")
	@Consumes("application/json")
	@Produces("application/json")
	public Response lista(RestauranteED restauranteED) {
		return  addCorsHeaders(Response.ok(restauranteRN.lista(restauranteED))).build();
	}

}
