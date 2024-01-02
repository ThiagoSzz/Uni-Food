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
@Table(name = "funcao")
public class FuncaoED implements ED<Integer>
{
	@Id
	@Column(name = "cod_funcao")
	private Integer id;

	@Column
	private String tipo;

	@Column(name = "nome_curso")
	private String nomeCurso;

	@Column
	private String periodo;

}
