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

import com.unifood.ed.UsuarioED;
import com.unifood.rn.UsuarioRN;
import com.unifood.util.Rest;

import io.swagger.v3.oas.annotations.tags.Tag;

@Path("/usuario")
public class UsuarioRest extends Rest
{
	@Inject
	private UsuarioRN UsuarioRN;
	
	public UsuarioRest() 
	{
		super("usuario", "usuarios");
	}

	@POST
	@Path("/lista")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Usuarios", description = "Operações relacionadas a usuarios")
	public Response lista(UsuarioED UsuarioED) 
	{
		return lista(UsuarioRN, UsuarioED);
	}
	
	@POST
	@Path("/conta")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Usuarios", description = "Operações relacionadas a usuarios")
	public Response conta(UsuarioED UsuarioED) 
	{
		return conta(UsuarioRN, UsuarioED);
	}	
	
	@POST
	@Path("/inclui")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Usuarios", description = "Operações relacionadas a usuarios")
	public Response inclui(UsuarioED UsuarioED)
	{
		return inclui(UsuarioRN, UsuarioED);
	}
	
	@POST
	@Path("/remove")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Usuarios", description = "Operações relacionadas a usuarios")
	public Response remove(UsuarioED UsuarioED)
	{
		return remove(UsuarioRN, UsuarioED);
	}
	
	@POST
	@Path("/removelista")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Usuarios", description = "Operações relacionadas a usuarios")
	public Response removeLista(List<UsuarioED> listaUsuarioED)
	{
		return removeLista(UsuarioRN, listaUsuarioED);
	}
	
	@POST
	@Path("/altera")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Usuarios", description = "Operações relacionadas a usuarios")
	public Response altera(UsuarioED UsuarioED)
	{
		return altera(UsuarioRN, UsuarioED);
	}
	
	@POST
	@Path("/consulta")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Usuarios", description = "Operações relacionadas a usuarios")
	public Response consulta(UsuarioED UsuarioED)
	{
		return consulta(UsuarioRN, UsuarioED);
	}
	
	@GET
	@Path("/consulta/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Usuarios", description = "Operações relacionadas a usuarios")
	public Response consulta(@PathParam("id") String id)
	{
		return consulta(UsuarioRN, id);
	}

}
