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
@Table(name = "usuario")
public class UsuarioED implements ED<String>
{
	@Id
	@Column(name = "email")
	private String id;

	@Column
	private String senha;

	@Column
	private String nome;

	@Column
	private String sexo;

	@Column(name = "preferencia_alimentar")
	private String preferenciaAlimentar;

	@Column
	private Integer tipo;
	
	public void setEmail(String email)
	{
		setId(email);
	}
	
	public String getEmail()
	{
		return id;
	}
}
