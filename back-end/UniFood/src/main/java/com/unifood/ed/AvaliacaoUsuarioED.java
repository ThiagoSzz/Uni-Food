package com.unifood.ed;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=false)
public class AvaliacaoUsuarioED
{
	private String siglaRU;
	private String siglaUniversidade; 
	private String emailUsuario;
	private String periodoNota;
	private Integer notaEstrelas;
	private String comentario;
	private String tags;
	private Integer duracaoNota;
}
