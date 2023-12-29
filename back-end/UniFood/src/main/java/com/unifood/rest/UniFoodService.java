package com.unifood.rest;

import javax.json.Json;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.unifood.util.Rest;

@Path("/api")
public class UniFoodService extends Rest
{
	@GET
	@Path("/json")
	@Produces("application/json")
	public Response testaServicoJson()
	{
		JsonObject value = Json.createObjectBuilder()
				.add("sistema", "UniFood back-end")
				.add("versao", "0.0.1-SNAPSHOT")
				.build();
		return addCorsHeaders(Response.ok(value)).build();
	}
}
