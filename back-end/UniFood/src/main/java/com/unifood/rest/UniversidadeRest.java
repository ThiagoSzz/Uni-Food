package com.unifood.rest;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.unifood.ed.UniversidadeED;
import com.unifood.rn.UniversidadeRN;
import com.unifood.util.Rest;

@Path("/universidade")
public class UniversidadeRest extends Rest
{
	@Inject
	private UniversidadeRN universidadeRN;

	@POST
	@Path("/lista")
	@Consumes("application/json")
	@Produces("application/json")
	public Response lista(UniversidadeED universidadeED) {
		return  addCorsHeaders(Response.ok(universidadeRN.lista(universidadeED))).build();
	}

}
