package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.MemberService;
import com.yedam.service.MemberServiceImpl;
import com.yedam.vo.MemberVO;

public class RemoveMemberControl implements Control {

	@Override
	public void exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// id 파라미터를 받아서 db 삭제처리. 목록이동
		String id = request.getParameter("id");
		
		// 조회한 정보를 jsp 전달
		MemberService svc = new MemberServiceImpl();

		if(svc.removeMember(id)) {			
//			PrintWriter out = response.getWriter(); // 출력 스트림을 반환
//			out.println("회원이 정상적으로 추가되었습니다."); // 웹 브라우저에 전달
			response.sendRedirect("memberList.do");
		}else {
			request.setAttribute("message", "삭제 중 오류가 발생했습니다.");
			request.getRequestDispatcher("WEB-INF/html/memberInfo.jsp").forward(request,response);
		}
				
	}

}
