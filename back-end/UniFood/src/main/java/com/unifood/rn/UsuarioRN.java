package com.unifood.rn;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.unifood.bd.UsuarioBD;
import com.unifood.ed.UsuarioED;
import com.unifood.util.BD;
import com.unifood.util.RN;
import com.unifood.util.Val;
import com.unifood.val.UsuarioVal;

@Stateless
public class UsuarioRN extends RN<UsuarioED>
{
	@Inject
   private UsuarioBD usuarioBD;

	@Inject
	private UsuarioVal usuarioVal;

	@Override
	public BD<UsuarioED> getBD()
	{
		return usuarioBD;
	}

	@Override
	public Val<UsuarioED> getVal()
	{
		return usuarioVal;
	}

}
