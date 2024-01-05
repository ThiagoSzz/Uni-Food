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

import com.unifood.ed.FrequentacaoED;
import com.unifood.rn.FrequentacaoRN;
import com.unifood.util.Rest;

import io.swagger.v3.oas.annotations.tags.Tag;

@Path("/frequentacao")
public class FrequentacaoRest extends Rest
{
	@Inject
	private FrequentacaoRN frequentacaoRN;
	
	public FrequentacaoRest() 
	{
		super("frequentação", "frequentações");
	}

	@POST
	@Path("/lista")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Frequentações", description = "Operações relacionadas a frequentações")
	public Response lista(FrequentacaoED frequentacaoED) 
	{
		return lista(frequentacaoRN, frequentacaoED);
	}
	
	@POST
	@Path("/conta")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Frequentações", description = "Operações relacionadas a frequentações")
	public Response conta(FrequentacaoED frequentacaoED) 
	{
		return conta(frequentacaoRN, frequentacaoED);
	}	
	
	@POST
	@Path("/inclui")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Frequentações", description = "Operações relacionadas a frequentações")
	public Response inclui(FrequentacaoED frequentacaoED)
	{
		return inclui(frequentacaoRN, frequentacaoED);
	}
	
	@POST
	@Path("/remove")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Frequentações", description = "Operações relacionadas a frequentações")
	public Response remove(FrequentacaoED frequentacaoED)
	{
		return remove(frequentacaoRN, frequentacaoED);
	}
	
	@POST
	@Path("/removelista")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Frequentações", description = "Operações relacionadas a frequentações")
	public Response removeLista(List<FrequentacaoED> listaFrequentacaoED)
	{
		return removeLista(frequentacaoRN, listaFrequentacaoED);
	}
	
	@POST
	@Path("/altera")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Frequentações", description = "Operações relacionadas a frequentações")
	public Response altera(FrequentacaoED frequentacaoED)
	{
		return altera(frequentacaoRN, frequentacaoED);
	}
	
	@POST
	@Path("/consulta")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Frequentações", description = "Operações relacionadas a frequentações")
	public Response consulta(FrequentacaoED frequentacaoED)
	{
		return consulta(frequentacaoRN, frequentacaoED);
	}
	
	@GET
	@Path("/consulta/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Frequentações", description = "Operações relacionadas a frequentações")
	public Response consulta(@PathParam("id") Integer id)
	{
		return consulta(frequentacaoRN, id);
	}	
}
