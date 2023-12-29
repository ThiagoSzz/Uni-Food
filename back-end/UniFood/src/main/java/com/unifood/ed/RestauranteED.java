package com.unifood.ed;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.unifood.util.ED;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode(callSuper=false)
@Table(name = "restaurante")
public class RestauranteED extends ED
{
	@Id
	@Column(name = "cod_ru")
	private Integer codRU;

	@Column(name = "sigla_ru")
	private String siglaRU;

	@Column
	private String campus;

	@Column(name = "sigla_universidade")
	private String siglaUniversidade;

	@Column(name = "media_avaliacao")
	private String mediaAvaliacao;
}
