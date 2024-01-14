package com.unifood.ed;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode(callSuper=false)
public class RestauranteNotaED
{
	@Id
	@Column
	@Schema(description = "ID da avaliação", example = "1")
	private Integer id; 
	
	@Column(name = "sigla_restaurante")
	private String siglaRestaurante;
	
	@Column(name = "sigla_universidade")
	private String siglaUniversidade;
	
	@Column(name = "nota_dada")
	private Integer notaDada;
	
	@Column
	private String comentario;

	@Column
	private String tags;
	
	@Column(name = "periodo_nota")
	private String periodoNota;
	
}
