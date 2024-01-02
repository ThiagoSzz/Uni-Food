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
@Table(name = "nota")
public class NotaED implements ED<Integer>
{
	@Id
	@Column(name = "cod_nota")
	private Integer id;

	@Column(name = "email_usuario")
	private String emailUsuario;

	@Column(name = "periodo_nota")
	private String periodoNota;

	@Column(name = "nota_estrelas")
	private Integer notaEstrelas;

	@Column
	private String comentario;

	@Column
	private String tags;

	@Column(name = "duracao_nota")
	private Integer duracaoNota;

}
