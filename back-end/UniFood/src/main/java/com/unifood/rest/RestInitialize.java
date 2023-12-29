package com.unifood.rest;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
	    info = @Info(title = "UniFood", version = "v1", description = "API REST do UniFood"),
	    servers = @Server(url = "/UniFood/rest")
	    )
@ApplicationPath("/rest")
public class RestInitialize extends Application
{

}
