package com.unifood.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.unifood.util.RespostaMensagem;
import com.unifood.util.Rest;

import io.swagger.v3.oas.annotations.tags.Tag;

@Path("/api")
public class UniFoodService extends Rest
{
	@GET
	@Path("/json")
	@Produces("application/json")
	@Tag(name = "Teste", description = "Serviço para testar a responsividade do Servidor UniFood")
	public Response testaServicoJson()
	{
		RespostaMensagem respostaMensagem = new RespostaMensagem(String.format("Sistema UniFood - Servidor Back-End - versão %s", getVersaoUniFoodBackEnd()));		
		return addCorsHeaders(Response.ok(respostaMensagem)).build();
	}
}
