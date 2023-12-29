package com.unifood.rest;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.unifood.ed.NotaED;
import com.unifood.rn.NotaRN;
import com.unifood.util.Rest;

@Path("/nota")
public class NotaRest extends Rest
{
	@Inject
	private NotaRN notaRN;

	@POST
	@Path("/lista")
	@Consumes("application/json")
	@Produces("application/json")
	public Response lista(NotaED notaED) {
		return  addCorsHeaders(Response.ok(notaRN.lista(notaED))).build();
	}

}
