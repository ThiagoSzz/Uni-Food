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
@Table(name = "frequentacao")
public class FrequentacaoED extends ED
{
	@Id
	@Column(name = "cod_frequentacao")
	private Integer codFrequentacao;

	@Column(name = "email_usuario")
	private String emailUsuario;

	@Column(name = "sigla_universidade")
	private String siglaUniversidade;
}