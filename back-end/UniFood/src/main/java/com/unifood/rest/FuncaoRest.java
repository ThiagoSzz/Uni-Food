package com.unifood.rest;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.unifood.ed.FuncaoED;
import com.unifood.rn.FuncaoRN;
import com.unifood.util.Rest;

@Path("/funcao")
public class FuncaoRest extends Rest
{
	@Inject
	private FuncaoRN funcaoRN;

	@POST
	@Path("/lista")
	@Consumes("application/json")
	@Produces("application/json")
	public Response lista(FuncaoED funcaoED) {
		return  addCorsHeaders(Response.ok(funcaoRN.lista(funcaoED))).build();
	}

}
