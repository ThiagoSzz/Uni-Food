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

import com.unifood.ed.UniversidadeED;
import com.unifood.rn.UniversidadeRN;
import com.unifood.util.Rest;

import io.swagger.v3.oas.annotations.tags.Tag;

@Path("/universidade")
public class UniversidadeRest extends Rest
{
	@Inject
	private UniversidadeRN UniversidadeRN;
	
	public UniversidadeRest() 
	{
		super("universidade", "universidades");
	}

	@POST
	@Path("/lista")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Universidade", description = "Operações relacionadas a universidade")
	public Response lista(UniversidadeED UniversidadeED) 
	{
		return lista(UniversidadeRN, UniversidadeED);
	}
	
	@POST
	@Path("/conta")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Universidade", description = "Operações relacionadas a universidade")
	public Response conta(UniversidadeED UniversidadeED) 
	{
		return conta(UniversidadeRN, UniversidadeED);
	}	
	
	@POST
	@Path("/inclui")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Universidade", description = "Operações relacionadas a universidade")
	public Response inclui(UniversidadeED UniversidadeED)
	{
		return inclui(UniversidadeRN, UniversidadeED);
	}
	
	@POST
	@Path("/remove")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Universidade", description = "Operações relacionadas a universidade")
	public Response remove(UniversidadeED UniversidadeED)
	{
		return remove(UniversidadeRN, UniversidadeED);
	}
	
	@POST
	@Path("/removelista")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Universidade", description = "Operações relacionadas a universidade")
	public Response removeLista(List<UniversidadeED> listaUniversidadeED)
	{
		return removeLista(UniversidadeRN, listaUniversidadeED);
	}
	
	@POST
	@Path("/altera")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Universidade", description = "Operações relacionadas a universidade")
	public Response altera(UniversidadeED UniversidadeED)
	{
		return altera(UniversidadeRN, UniversidadeED);
	}
	
	@POST
	@Path("/consulta")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Universidade", description = "Operações relacionadas a universidade")
	public Response consulta(UniversidadeED UniversidadeED)
	{
		return consulta(UniversidadeRN, UniversidadeED);
	}
	
	@GET
	@Path("/consulta/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Universidade", description = "Operações relacionadas a universidade")
	public Response consulta(@PathParam("id") String id)
	{
		return consulta(UniversidadeRN, id);
	}

}
