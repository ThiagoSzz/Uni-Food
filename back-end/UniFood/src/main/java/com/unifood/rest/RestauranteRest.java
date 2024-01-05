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

import com.unifood.ed.RestauranteED;
import com.unifood.rn.RestauranteRN;
import com.unifood.util.Rest;

import io.swagger.v3.oas.annotations.tags.Tag;

@Path("/restaurante")
public class RestauranteRest extends Rest
{
	@Inject
	private RestauranteRN restauranteRN;
	
	public RestauranteRest() 
	{
		super("restaurante", "restaurantes");
	}

	@POST
	@Path("/lista")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Restaurantes", description = "Operações relacionadas a restaurantes")
	public Response lista(RestauranteED restauranteED) 
	{
		return lista(restauranteRN, restauranteED);
	}
	
	@POST
	@Path("/conta")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Restaurantes", description = "Operações relacionadas a restaurantes")
	public Response conta(RestauranteED restauranteED) 
	{
		return conta(restauranteRN, restauranteED);
	}	
	
	@POST
	@Path("/inclui")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Restaurantes", description = "Operações relacionadas a restaurantes")
	public Response inclui(RestauranteED restauranteED)
	{
		return inclui(restauranteRN, restauranteED);
	}
	
	@POST
	@Path("/remove")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Restaurantes", description = "Operações relacionadas a restaurantes")
	public Response remove(RestauranteED restauranteED)
	{
		return remove(restauranteRN, restauranteED);
	}
	
	@POST
	@Path("/removelista")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Restaurantes", description = "Operações relacionadas a restaurantes")
	public Response removeLista(List<RestauranteED> listaRestauranteED)
	{
		return removeLista(restauranteRN, listaRestauranteED);
	}
	
	@POST
	@Path("/altera")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Restaurantes", description = "Operações relacionadas a restaurantes")
	public Response altera(RestauranteED restauranteED)
	{
		return altera(restauranteRN, restauranteED);
	}
	
	@POST
	@Path("/consulta")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Restaurantes", description = "Operações relacionadas a restaurantes")
	public Response consulta(RestauranteED restauranteED)
	{
		return consulta(restauranteRN, restauranteED);
	}
	
	@GET
	@Path("/consulta/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Restaurantes", description = "Operações relacionadas a restaurantes")
	public Response consulta(@PathParam("id") Integer id)
	{
		return consulta(restauranteRN, id);
	}


}
