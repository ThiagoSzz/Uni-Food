package com.unifood.util;

import io.swagger.v3.oas.annotations.media.Schema;

public class RespostaMensagem
{
	@Schema(description = "Resposta de Mensagem")
	private String mensagem;

	public RespostaMensagem()
	{		
	}
	
	public RespostaMensagem(String mensagem)
	{
		this.mensagem = mensagem;
	}

	public String getMensagem()
	{
		return mensagem;
	}

	public void setMensagem(String mensagem)
	{
		this.mensagem = mensagem;
	}
}
