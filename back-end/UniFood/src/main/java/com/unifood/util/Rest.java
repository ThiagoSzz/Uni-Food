package com.unifood.util;

import javax.ws.rs.core.Response;

public class Rest
{
	protected Response.ResponseBuilder addCorsHeaders(Response.ResponseBuilder responseBuilder)
	{
		return responseBuilder
				.header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD")
				.header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
				.header("Access-Control-Allow-Credentials", "true");
	}
}
