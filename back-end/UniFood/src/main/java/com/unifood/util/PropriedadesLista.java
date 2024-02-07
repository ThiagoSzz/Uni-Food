package com.unifood.util;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PropriedadesLista implements Serializable
{
	private static final long serialVersionUID = 1L;
	private int inicio;
	private int tamanho;
	private Map<String, Object> filtros;
	private List<Ordem> ordem;

	public PropriedadesLista(int inicio, int tamanho)
	{
		this.inicio = inicio;
		this.tamanho = tamanho;
	}

	public PropriedadesLista()
	{
		this.filtros = new HashMap<String, Object>();
		this.ordem = new ArrayList<>();
	}

	public int getInicio()
	{
		return this.inicio;
	}

	public void setInicio(int inicio)
	{
		this.inicio = inicio;
	}

	public int getTamanho()
	{
		return this.tamanho;
	}

	public void setTamanho(int tamanho)
	{
		this.tamanho = tamanho;
	}

	public Map<String, Object> getFiltros()
	{
		return this.filtros;
	}

	public List<Ordem> getOrdem()
	{
		return this.ordem;
	}

	public void setOrdem(List<Ordem> ordem)
	{
		this.ordem = ordem;
	}
}
