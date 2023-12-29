package com.unifood.rest;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.unifood.ed.FrequentacaoED;
import com.unifood.rn.FrequentacaoRN;
import com.unifood.util.Rest;

@Path("/frequentacao")
public class FrequentacaoRest extends Rest
{
	@Inject
	private FrequentacaoRN frequentacaoRN;

	@POST
	@Path("/lista")
	@Consumes("application/json")
	@Produces("application/json")
	public Response lista(FrequentacaoED frequentacaoED) {
		return  addCorsHeaders(Response.ok(frequentacaoRN.lista(frequentacaoED))).build();
	}

}
