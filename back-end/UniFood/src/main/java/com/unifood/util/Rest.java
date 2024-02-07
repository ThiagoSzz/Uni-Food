package com.unifood.util;

import java.io.IOException;
import java.util.List;

import javax.ws.rs.core.Response;

import org.apache.maven.model.Model;
import org.apache.maven.model.io.xpp3.MavenXpp3Reader;
import org.codehaus.plexus.util.xml.pull.XmlPullParserException;

public class Rest
{
	private String classeSingular;
	private String classePlural;
	private String classeSingularMaiusculo;
	
	public Rest()
	{
		
	}
	
	public Rest(String classeSingular, String classePlural)
	{
		this.classeSingular = classeSingular;
		this.classePlural = classePlural;
		classeSingularMaiusculo = classeSingular.charAt(0) + classeSingular.substring(1);
	}
	
	public <E extends ED<PK>, PK> Response lista(RN<E, PK> rn, E ed)
	{
		Response response;
		try
		{
			List<E> lista = rn.lista(ed);			
			response = addCorsHeaders(Response.ok(lista)).build(); 
		} catch (Exception e)
		{
			RespostaMensagem respostaMensagem = new RespostaMensagem(String.format("Erro ao listar %s: %s", classePlural, e.getMessage()));
			response = addCorsHeaders(Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(respostaMensagem)).build(); 
		}		
		return response;		
	}
	
	public <E extends ED<PK>, PK> Response conta(RN<E, PK> rn, E ed)
	{
		Response response;
		RespostaMensagem respostaMensagem;
		try
		{
			int total = rn.conta(ed);
			respostaMensagem = new RespostaMensagem(String.valueOf(total));			
			response = addCorsHeaders(Response.ok(respostaMensagem)).build();
		} catch (Exception e)
		{
			respostaMensagem = new RespostaMensagem(String.format("Erro ao contar %s: %s", classePlural, e.getMessage()));
			response = addCorsHeaders(Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(respostaMensagem)).build(); 
		}		
		return response;
		
	}
	
	public <E extends ED<PK>, PK> Response inclui(RN<E, PK> rn, E ed)
	{
		Response response;
		RespostaMensagem respostaMensagem = new RespostaMensagem();
		try
		{
			rn.inclui(ed);
			respostaMensagem.setMensagem(String.format("%s incluída com sucesso.", classeSingularMaiusculo));
			response = addCorsHeaders(Response.status(Response.Status.CREATED).entity(respostaMensagem)).build();
		} catch (Exception e)
		{
			respostaMensagem.setMensagem(String.format("Erro ao incluir %s: %s", classeSingular, e.getMessage()));
			response = addCorsHeaders(Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(respostaMensagem)).build();
		}

		return response;		
	}
	
	public <E extends ED<PK>, PK> Response remove(RN<E, PK> rn, E ed)
	{
		Response response;
		RespostaMensagem respostaMensagem = new RespostaMensagem();
		try
		{
			rn.remove(ed);
			respostaMensagem.setMensagem(String.format("%s removida com sucesso.", classeSingularMaiusculo));
			response = addCorsHeaders(Response.status(Response.Status.ACCEPTED).entity(respostaMensagem)).build();
		} catch (Exception e)
		{
			respostaMensagem.setMensagem(String.format("Erro ao remover %s: %s", classeSingular, e.getMessage()));
			response = addCorsHeaders(Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(respostaMensagem)).build();
		}
		
		return response;		
	}
	
	public <E extends ED<PK>, PK> Response removeLista(RN<E, PK> rn, List<E> lista)
	{
		Response response;
		RespostaMensagem respostaMensagem = new RespostaMensagem();
		try
		{
			rn.remove(lista);
			respostaMensagem.setMensagem(String.format("%s removidas com sucesso.", classeSingularMaiusculo));
			response = addCorsHeaders(Response.status(Response.Status.ACCEPTED).entity(respostaMensagem)).build();
		} catch (Exception e)
		{
			respostaMensagem.setMensagem(String.format("Erro ao remover %s: %s", classePlural, e.getMessage()));
			response = addCorsHeaders(Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(respostaMensagem)).build();
		}
		
		return response;		
	}
	
	public <E extends ED<PK>, PK> Response altera(RN<E, PK> rn, E ed)
	{
		Response response;
		RespostaMensagem respostaMensagem = new RespostaMensagem();
		try
		{
			rn.altera(ed);
			respostaMensagem.setMensagem(String.format("%s alterada com sucesso.", classeSingularMaiusculo));
			response = addCorsHeaders(Response.status(Response.Status.ACCEPTED).entity(respostaMensagem)).build();
		} catch (Exception e)
		{
			respostaMensagem.setMensagem(String.format("Erro ao alterar %s: %s", classeSingular, e.getMessage()));
			response = addCorsHeaders(Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(respostaMensagem)).build();
		}
		
		return response;		
	}
	
	public <E extends ED<PK>, PK> Response consulta(RN<E, PK> rn, E ed)
	{
		Response response;
		RespostaMensagem respostaMensagem;
		try
		{
			E resposta = rn.consulta(ed);
			
			if (resposta != null)
			{
				response = addCorsHeaders(Response.ok(ed)).build();
			} else 
			{
				respostaMensagem = new RespostaMensagem("Registro não encontrado."); 
				response = addCorsHeaders(Response.status(Response.Status.NO_CONTENT).entity(respostaMensagem)).build();
			}
		} catch (Exception e)
		{
			respostaMensagem = new RespostaMensagem(String.format("Erro ao consultar %s: %s", classeSingular, e.getMessage()));
			response = addCorsHeaders(Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(respostaMensagem)).build();
		}
		
		return response;		
	}

	public <E extends ED<PK>, PK> Response consulta(RN<E, PK> rn, PK id)
	{
		Response response;
		RespostaMensagem respostaMensagem;
		try
		{
			E resposta = rn.consulta(id);
			
			if (resposta != null)
			{
				response = addCorsHeaders(Response.ok(resposta)).build();
			} else 
			{
				respostaMensagem = new RespostaMensagem("Registro não encontrado."); 
				response = addCorsHeaders(Response.status(Response.Status.NO_CONTENT).entity(respostaMensagem)).build();
			}
		} catch (Exception e)
		{
			respostaMensagem = new RespostaMensagem(String.format("Erro ao consultar %s: %s", classeSingular, e.getMessage()));
			response = addCorsHeaders(Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(respostaMensagem)).build();
		}
		
		return response;
		
	}
	
	public String getVersaoUniFoodBackEnd()
	{
		MavenXpp3Reader reader = new MavenXpp3Reader();
		Model model;
		try
		{
			model = reader.read(Rest.class.getResourceAsStream("/META-INF/maven/UniFood/UniFood/pom.xml"));
			return model.getVersion();
		} catch (IOException | XmlPullParserException e)
		{
			e.printStackTrace();
		}
		return null;
	}
	
	protected Response.ResponseBuilder addCorsHeaders(Response.ResponseBuilder responseBuilder)
	{
		return responseBuilder
				.header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD")
				.header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
				.header("Access-Control-Allow-Credentials", "true");
	}
}
