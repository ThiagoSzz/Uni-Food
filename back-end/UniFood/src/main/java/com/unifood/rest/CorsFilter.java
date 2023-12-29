package com.unifood.rest;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletResponse;

@WebFilter("/json")
public class CorsFilter implements Filter
{
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException
	{
		HttpServletResponse httpResponse = (HttpServletResponse) response;

		// Configuração dos cabeçalhos CORS
		httpResponse.setHeader("Access-Control-Allow-Origin", "*");
		httpResponse.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
		httpResponse.setHeader("Access-Control-Allow-Headers", "Content-Type");

		// Continua a cadeia de filtros
		chain.doFilter(request, response);
	}

	@Override
	public void init(FilterConfig filterConfig) throws ServletException
	{
		// Inicialização do filtro (se necessário)
	}

	@Override
	public void destroy()
	{
		// Liberação de recursos (se necessário)
	}
}