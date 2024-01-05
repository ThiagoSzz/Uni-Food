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

import com.unifood.ed.NotaED;
import com.unifood.rn.NotaRN;
import com.unifood.util.Rest;

import io.swagger.v3.oas.annotations.tags.Tag;

@Path("/nota")
public class NotaRest extends Rest
{
	@Inject
	private NotaRN notaRN;
	
	public NotaRest() 
	{
		super("nota", "notas");
	}

	@POST
	@Path("/lista")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Notas", description = "Operações relacionadas a notas")
	public Response lista(NotaED notaED) 
	{
		return lista(notaRN, notaED);
	}
	
	@POST
	@Path("/conta")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Notas", description = "Operações relacionadas a notas")
	public Response conta(NotaED notaED) 
	{
		return conta(notaRN, notaED);
	}	
	
	@POST
	@Path("/inclui")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Notas", description = "Operações relacionadas a notas")
	public Response inclui(NotaED notaED)
	{
		return inclui(notaRN, notaED);
	}
	
	@POST
	@Path("/remove")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Notas", description = "Operações relacionadas a notas")
	public Response remove(NotaED notaED)
	{
		return remove(notaRN, notaED);
	}
	
	@POST
	@Path("/removelista")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Notas", description = "Operações relacionadas a notas")
	public Response removeLista(List<NotaED> listaNotaED)
	{
		return removeLista(notaRN, listaNotaED);
	}
	
	@POST
	@Path("/altera")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Notas", description = "Operações relacionadas a notas")
	public Response altera(NotaED notaED)
	{
		return altera(notaRN, notaED);
	}
	
	@POST
	@Path("/consulta")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Notas", description = "Operações relacionadas a notas")
	public Response consulta(NotaED notaED)
	{
		return consulta(notaRN, notaED);
	}
	
	@GET
	@Path("/consulta/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Notas", description = "Operações relacionadas a notas")
	public Response consulta(@PathParam("id") Integer id)
	{
		return consulta(notaRN, id);
	}

}
