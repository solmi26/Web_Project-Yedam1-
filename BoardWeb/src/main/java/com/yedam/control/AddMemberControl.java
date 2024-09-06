package com.yedam.control;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.MemberService;
import com.yedam.service.MemberServiceImpl;
import com.yedam.vo.MemberVO;

public class AddMemberControl implements Control {

	@Override
	public void exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		response.setContentType("text/html; charset=utf-8");
		
		String id = request.getParameter("id"); // 사용자의 요청정보 중 id 값을 읽도록 함.
		String name = request.getParameter("name"); // input 태그의 name 속성과 맞춰줘야 함.
		String pw = request.getParameter("pass");
		String mail = request.getParameter("email");
		
		MemberService svc = new MemberServiceImpl();
	
		
		MemberVO mvo = new MemberVO();
		
		mvo.setMemberId(id);
		mvo.setMemberName(name);
		mvo.setPassword(pw);
		mvo.setEmail(mail);
		
//		SqlSessionFactory factory = DataSource.getInstance();
//		SqlSession session = factory.openSession(true);
//		MemberMapper mapper = session.getMapper(MemberMapper.class);
		
		// 회원 등록이 정상적일 경우 => 회원 목록 페이지 출력
		// 회원 등록이 비정상적일 경우 => 회원 등록 페이지 이동(msg 전달)
		// 현재 페이지 : addMember.do -> 페이지를 재지정 1) forwarding:파라미터 전달 2)redirect 파라미터 전달 불가
		if(svc.addMember(mvo)) {			
//			PrintWriter out = response.getWriter(); // 출력 스트림을 반환
//			out.println("회원이 정상적으로 추가되었습니다."); // 웹 브라우저에 전달
			response.sendRedirect("memberList.do");
		}else {
			request.setAttribute("message", "등록 중 오류가 발생했습니다.");
			request.getRequestDispatcher("html/addForm.tiles").forward(request,response);
		}
	}

}
