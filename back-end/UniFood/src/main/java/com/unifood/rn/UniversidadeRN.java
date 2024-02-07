package com.unifood.rn;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.inject.Inject;

import com.unifood.bd.UniversidadeBD;
import com.unifood.ed.UniversidadeED;
import com.unifood.util.RN;
import com.unifood.val.UniversidadeVal;

@Stateless
public class UniversidadeRN extends RN<UniversidadeED, String>
{
	@Inject
	private UniversidadeBD universidadeBD;

	@Inject
	private UniversidadeVal universidadeVal;

	@PostConstruct
	public void initBDVal()
	{
		init(universidadeBD, universidadeVal);
	}

}
