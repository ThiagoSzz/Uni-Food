package com.unifood.rn;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.inject.Inject;

import com.unifood.bd.NotaBD;
import com.unifood.ed.NotaED;
import com.unifood.util.RN;
import com.unifood.val.NotaVal;

@Stateless
public class NotaRN extends RN<NotaED, Integer>
{
	@Inject
	private NotaBD notaBD;

	@Inject
	private NotaVal notaVal;

	@PostConstruct
	public void initBDVal()
	{
		init(notaBD, notaVal);
	}
}
