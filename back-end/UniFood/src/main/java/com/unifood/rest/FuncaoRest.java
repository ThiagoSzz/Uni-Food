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

import com.unifood.ed.FuncaoED;
import com.unifood.rn.FuncaoRN;
import com.unifood.util.Rest;

import io.swagger.v3.oas.annotations.tags.Tag;

@Path("/funcao")
public class FuncaoRest extends Rest
{
	@Inject
	private FuncaoRN funcaoRN;
	
	public FuncaoRest() 
	{
		super("função", "funções");
	}

	@POST
	@Path("/lista")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Funcões", description = "Operações relacionadas a funções")
	public Response lista(FuncaoED funcaoED) 
	{
		return lista(funcaoRN, funcaoED);
	}
	
	@POST
	@Path("/conta")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Funcões", description = "Operações relacionadas a funções")
	public Response conta(FuncaoED funcaoED) 
	{
		return conta(funcaoRN, funcaoED);
	}	
	
	@POST
	@Path("/inclui")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Funcões", description = "Operações relacionadas a funções")
	public Response inclui(FuncaoED funcaoED)
	{
		return inclui(funcaoRN, funcaoED);
	}
	
	@POST
	@Path("/remove")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Funcões", description = "Operações relacionadas a funções")
	public Response remove(FuncaoED funcaoED)
	{
		return remove(funcaoRN, funcaoED);
	}
	
	@POST
	@Path("/removelista")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Funcões", description = "Operações relacionadas a funções")
	public Response removeLista(List<FuncaoED> listaFuncaoED)
	{
		return removeLista(funcaoRN, listaFuncaoED);
	}
	
	@POST
	@Path("/altera")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Funcões", description = "Operações relacionadas a funções")
	public Response altera(FuncaoED funcaoED)
	{
		return altera(funcaoRN, funcaoED);
	}
	
	@POST
	@Path("/consulta")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Funcões", description = "Operações relacionadas a funções")
	public Response consulta(FuncaoED funcaoED)
	{
		return consulta(funcaoRN, funcaoED);
	}
	
	@GET
	@Path("/consulta/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Funcões", description = "Operações relacionadas a funções")
	public Response consulta(@PathParam("id") Integer id)
	{
		return consulta(funcaoRN, id);
	}

}
