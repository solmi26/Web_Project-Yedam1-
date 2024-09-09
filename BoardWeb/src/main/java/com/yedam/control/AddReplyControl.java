package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;

public class AddReplyControl implements Control {

	@Override
	public void exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 댓글 작성자, 원본글번호, 댓글내용
		
		// retCode => OK,  retCode => NG
		String replyer = request.getParameter("replyer");
		String reply = request.getParameter("reply");
		String bno = request.getParameter("bno");
		
		
		
		
	}

}
