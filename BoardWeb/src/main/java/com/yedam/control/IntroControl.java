package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;

public class IntroControl implements Control {

	@Override
	public void exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// addForm.do -> 요청 재지정(WEB-INF/html/addForm.jsp)
		request.getRequestDispatcher("WEB-INF/html/intro.jsp").forward(request, response);
	}



}
