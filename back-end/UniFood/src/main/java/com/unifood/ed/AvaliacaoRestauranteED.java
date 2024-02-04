package com.unifood.ed;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class AvaliacaoRestauranteED
{
	@Id
	private Integer id;

	@Column(name = "sigla_restaurante")
	private String siglaRestaurante;

	@Column(name = "sigla_universidade")
	private String siglaUniversidade;

	@Column(name = "nota_dada")
	private Integer notaDada;

	private String comentario;

	private String tags;

	@Column(name = "periodo_nota")
	private String periodoNota;

	@Column(name = "preferencia_alimentar")
	private String preferenciaAlimentar;

	@Column(name = "nome_curso")
	private String nomeCurso;

	public String getTags()
	{
		return trimWhitespaceInJson(tags);
	}

	public static String trimWhitespaceInJson(String input)
	{
		StringBuilder result = new StringBuilder();
		result.append("[");
		boolean adiciona = false;
		boolean first = true;
		
		int j;

		do
		{
			j = input.indexOf("\"}");
			adiciona = j > -1;
			if (adiciona)
			{
				if (!first)
				{
					result.append(",");
				} else {
					first = false;
				}
				String[] s = input.substring(input.indexOf("{\"") + 2, j).split("\",\"");
				result.append(String.format("{\"nome\": \"%s\", \"tipo\": \"%s\"}", s[0].trim(), s[1].trim()));
				input = input.substring(j + 2);
			}
		} while (adiciona);

		result.append("]");
		return result.toString();
	}

}