package com.unifood.rest;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.unifood.ed.AvaliacaoED;
import com.unifood.rn.AvaliacaoRN;
import com.unifood.util.RespostaMensagem;
import com.unifood.util.Rest;

import io.swagger.v3.oas.annotations.tags.Tag;


@Path("/avaliacao")
public class AvaliacaoRest extends Rest
{
	@Inject
	private AvaliacaoRN avaliacaoRN;

	@POST
	@Path("/lista")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Avaliações", description = "Operações relacionadas a avaliações")
	public Response lista(AvaliacaoED avaliacaoED) 
	{
		Response response;
		try
		{
			List<AvaliacaoED> lista = avaliacaoRN.lista(avaliacaoED);
			
			if (lista.isEmpty())
			{
				response = addCorsHeaders(Response.status(Response.Status.NO_CONTENT).entity(lista)).build();
			} else 
			{
				response = addCorsHeaders(Response.ok(lista)).build(); 
			}
		} catch (Exception e)
		{
			RespostaMensagem respostaMensagem = new RespostaMensagem(String.format("Erro ao listar avaliações: %s", e.getMessage()));
			response = addCorsHeaders(Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(respostaMensagem).type(MediaType.APPLICATION_JSON)).build(); 
		}		
		return response;
	}
	
	@POST
	@Path("/conta")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Avaliações", description = "Operações relacionadas a avaliações")
	public Response conta(AvaliacaoED avaliacaoED) 
	{
		Response response;
		RespostaMensagem respostaMensagem;
		try
		{
			int total = avaliacaoRN.conta(avaliacaoED);
			respostaMensagem = new RespostaMensagem(String.valueOf(total));			
			response = addCorsHeaders(Response.status(total == 0 ? Response.Status.NO_CONTENT : Response.Status.OK)
					.entity(respostaMensagem)).build();
		} catch (Exception e)
		{
			respostaMensagem = new RespostaMensagem(String.format("Erro ao contar avaliações: %s", e.getMessage()));
			response = addCorsHeaders(Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(respostaMensagem).type(MediaType.APPLICATION_JSON)).build(); 
		}		
		return response;
	}	
	
	@POST
	@Path("/inclui")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Avaliações", description = "Operações relacionadas a avaliações")
	public Response inclui(AvaliacaoED avaliacaoED)
	{
		Response response;
		RespostaMensagem respostaMensagem = new RespostaMensagem();
		try
		{
			avaliacaoRN.inclui(avaliacaoED);
			respostaMensagem.setMensagem("Avaliação incluída com sucesso.");
			response = addCorsHeaders(Response.status(Response.Status.CREATED).entity(respostaMensagem).type(MediaType.APPLICATION_JSON)).build();
		} catch (Exception e)
		{
			respostaMensagem.setMensagem(String.format("Erro ao incluir avaliação: %s", e.getMessage()));
			response = addCorsHeaders(Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(respostaMensagem)).build();
		}

		return response;
	}
	
	@POST
	@Path("/remove")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Avaliações", description = "Operações relacionadas a avaliações")
	public Response remove(AvaliacaoED avaliacaoED)
	{
		Response response;
		RespostaMensagem respostaMensagem = new RespostaMensagem();
		try
		{
			avaliacaoRN.remove(avaliacaoED);
			respostaMensagem.setMensagem("Avaliação removida com sucesso.");
			response = addCorsHeaders(Response.status(Response.Status.ACCEPTED).entity(respostaMensagem).type(MediaType.APPLICATION_JSON)).build();
		} catch (Exception e)
		{
			respostaMensagem.setMensagem(String.format("Erro ao remover avaliação: %s", e.getMessage()));
			response = addCorsHeaders(Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(respostaMensagem).type(MediaType.APPLICATION_JSON)).build();
		}
		
		return response;
	}
	
	@POST
	@Path("/removelista")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Avaliações", description = "Operações relacionadas a avaliações")
	public Response removeLista(List<AvaliacaoED> listaAvaliacaoED)
	{
		Response response;
		RespostaMensagem respostaMensagem = new RespostaMensagem();
		try
		{
			avaliacaoRN.remove(listaAvaliacaoED);
			respostaMensagem.setMensagem("Avaliações removidas com sucesso.");
			response = addCorsHeaders(Response.status(Response.Status.ACCEPTED).entity(respostaMensagem).type(MediaType.APPLICATION_JSON)).build();
		} catch (Exception e)
		{
			respostaMensagem.setMensagem(String.format("Erro ao remover avaliações: %s", e.getMessage()));
			response = addCorsHeaders(Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(respostaMensagem)
					.type(MediaType.APPLICATION_JSON)).build();
		}
		
		return response;
	}
	
	@POST
	@Path("/altera")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Avaliações", description = "Operações relacionadas a avaliações")
	public Response altera(AvaliacaoED avaliacaoED)
	{
		Response response;
		RespostaMensagem respostaMensagem = new RespostaMensagem();
		try
		{
			avaliacaoRN.altera(avaliacaoED);
			respostaMensagem.setMensagem("Avaliação alterada com sucesso.");
			response = addCorsHeaders(Response.status(Response.Status.ACCEPTED).entity(respostaMensagem).type(MediaType.APPLICATION_JSON)).build();
		} catch (Exception e)
		{
			respostaMensagem.setMensagem(String.format("Erro ao alterar avaliação: %s", e.getMessage()));
			response = addCorsHeaders(Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(respostaMensagem)
					.type(MediaType.APPLICATION_JSON)).build();
		}
		
		return response;
	}
	
	@POST
	@Path("/consulta")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Avaliações", description = "Operações relacionadas a avaliações")
	public Response consulta(AvaliacaoED avaliacaoED)
	{
		Response response;
		RespostaMensagem respostaMensagem;
		try
		{
			AvaliacaoED resposta = avaliacaoRN.consulta(avaliacaoED);
			
			if (resposta != null)
			{
				response = addCorsHeaders(Response.ok(avaliacaoED)).build();
			} else 
			{
				respostaMensagem = new RespostaMensagem("Rgistro não encontrado."); 
				response = addCorsHeaders(Response.status(Response.Status.NO_CONTENT).entity(respostaMensagem)).build();
			}
		} catch (Exception e)
		{
			respostaMensagem = new RespostaMensagem(String.format("Erro ao consultar avaliação: %s", e.getMessage()));
			response = addCorsHeaders(Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(respostaMensagem)
					.type(MediaType.APPLICATION_JSON)).build();
		}
		
		return response;
	}
	
	@GET
	@Path("/consulta/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Avaliações", description = "Operações relacionadas a avaliações")
	public Response consulta(@PathParam("id") Integer id)
	{
		Response response;
		RespostaMensagem respostaMensagem;
		try
		{
			AvaliacaoED resposta = avaliacaoRN.consulta(id);
			
			if (resposta != null)
			{
				response = addCorsHeaders(Response.ok(resposta)).build();
			} else 
			{
				respostaMensagem = new RespostaMensagem("Rgistro não encontrado."); 
				response = addCorsHeaders(Response.status(Response.Status.NO_CONTENT).entity(respostaMensagem)).build();
			}
		} catch (Exception e)
		{
			respostaMensagem = new RespostaMensagem(String.format("Erro ao consultar avaliação: %s", e.getMessage()));
			response = addCorsHeaders(Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(respostaMensagem)
					.type(MediaType.APPLICATION_JSON)).build();
		}
		
		return response;
	}

}