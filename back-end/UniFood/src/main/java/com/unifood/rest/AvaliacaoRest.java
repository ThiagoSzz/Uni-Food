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
import com.unifood.util.Rest;

import io.swagger.v3.oas.annotations.tags.Tag;

@Path("/avaliacao")
public class AvaliacaoRest extends Rest
{
	@Inject
	private AvaliacaoRN avaliacaoRN;
	
	public AvaliacaoRest() 
	{
		super("avaliação", "avaliações");
	}

	@POST
	@Path("/lista")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Avaliações", description = "Operações relacionadas a avaliações")
	public Response lista(AvaliacaoED avaliacaoED) 
	{
		return lista(avaliacaoRN, avaliacaoED);
	}
	
	@POST
	@Path("/conta")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Avaliações", description = "Operações relacionadas a avaliações")
	public Response conta(AvaliacaoED avaliacaoED) 
	{
		return conta(avaliacaoRN, avaliacaoED);
	}	
	
	@POST
	@Path("/inclui")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Avaliações", description = "Operações relacionadas a avaliações")
	public Response inclui(AvaliacaoED avaliacaoED)
	{
		return inclui(avaliacaoRN, avaliacaoED);
	}
	
	@POST
	@Path("/remove")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Avaliações", description = "Operações relacionadas a avaliações")
	public Response remove(AvaliacaoED avaliacaoED)
	{
		return remove(avaliacaoRN, avaliacaoED);
	}
	
	@POST
	@Path("/removelista")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Avaliações", description = "Operações relacionadas a avaliações")
	public Response removeLista(List<AvaliacaoED> listaAvaliacaoED)
	{
		return removeLista(avaliacaoRN, listaAvaliacaoED);
	}
	
	@POST
	@Path("/altera")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Avaliações", description = "Operações relacionadas a avaliações")
	public Response altera(AvaliacaoED avaliacaoED)
	{
		return altera(avaliacaoRN, avaliacaoED);
	}
	
	@POST
	@Path("/consulta")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Avaliações", description = "Operações relacionadas a avaliações")
	public Response consulta(AvaliacaoED avaliacaoED)
	{
		return consulta(avaliacaoRN, avaliacaoED);
	}
	
	@GET
	@Path("/consulta/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Avaliações", description = "Operações relacionadas a avaliações")
	public Response consulta(@PathParam("id") Integer id)
	{
		return consulta(avaliacaoRN, id);
	}

}