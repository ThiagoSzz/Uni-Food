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
@Table(name = "avaliacao")
public class AvaliacaoED implements ED<Integer>
{
	@Id
	@Column(name = "cod_avaliacao")
	private Integer id;

	@Column(name = "cod_nota")
	private Integer codNota;

	@Column(name = "email_usuario")
	private String emailUsuario;

	@Column(name = "cod_ru")
	private Integer codRU;

}
