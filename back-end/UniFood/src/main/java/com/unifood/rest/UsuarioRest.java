package com.unifood.rest;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.unifood.ed.UsuarioED;
import com.unifood.rn.UsuarioRN;
import com.unifood.util.Rest;

@Path("/usuario")
public class UsuarioRest extends Rest
{
	@Inject
	private UsuarioRN usuarioRN;

	@POST
	@Path("/lista")
	@Consumes("application/json")
	@Produces("application/json")
	public Response lista(UsuarioED usuarioED) {
		return  addCorsHeaders(Response.ok(usuarioRN.lista(usuarioED))).build();
	}

}
