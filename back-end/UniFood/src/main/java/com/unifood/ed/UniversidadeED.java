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
@Table(name = "universidade")
public class UniversidadeED extends ED
{
	@Id
	@Column
	private String sigla;

	@Column
	private String nome;

	@Column(name = "estado_uf")
	private String estadoUF;

	@Column
	private String cidade;
}
