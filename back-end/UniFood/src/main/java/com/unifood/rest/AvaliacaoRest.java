package com.unifood.rest;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.unifood.ed.AvaliacaoED;
import com.unifood.rn.AvaliacaoRN;
import com.unifood.util.Rest;

@Path("/avaliacao")
public class AvaliacaoRest extends Rest
{
	@Inject
	private AvaliacaoRN avaliacaoRN;

	@POST
	@Path("/lista")
	@Consumes("application/json")
	@Produces("application/json")
	public Response lista(AvaliacaoED avaliacaoED) {
		return  addCorsHeaders(Response.ok(avaliacaoRN.lista(avaliacaoED))).build();
	}

}
