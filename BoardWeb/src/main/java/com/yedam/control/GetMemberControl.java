package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.MemberService;
import com.yedam.service.MemberServiceImpl;
import com.yedam.vo.MemberVO;

public class GetMemberControl implements Control{

	@Override
	//  회원 아이디 파라미터 : id
	public void exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String id = request.getParameter("id");
		
		// 조회한 정보를 jsp 전달
		MemberService svc = new MemberServiceImpl();
		MemberVO mvo = svc.getMember(id);
		
		request.setAttribute("memberInfo", mvo);
		
		request.getRequestDispatcher("WEB-INF/html/memberInfo.jsp").forward(request, response);
	}


}
