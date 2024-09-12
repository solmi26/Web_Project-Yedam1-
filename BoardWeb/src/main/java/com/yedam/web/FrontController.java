package com.yedam.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.control.EventControl;
import com.yedam.control.IntroControl;
import com.yedam.control.JavaScriptControl;
import com.yedam.control.MainControl;
import com.yedam.control.SubControl;

//@WebServlet("*.do")
public class FrontController extends HttpServlet{
	
	// url patten - 실행되는 기능 -> map 컬렉션에 지정.
	Map<String, Control> map;
	
	public FrontController() {
		System.out.println("FrontController 생성자.");
		map = new HashMap<>();
	}
	
	@Override
	public void init() throws ServletException {
//		System.out.println("init 메소드.");
		map.put("/main.do", new MainControl());
		map.put("/sub.do", new SubControl());
		map.put("/intro.do", new IntroControl());
		map.put("/javascript.do", new JavaScriptControl());
		
		// fullCalendar 관련
		map.put("/eventList.do", new EventControl());
		map.put("/addEvent.do", new EventControl());
		map.put("/removeEvent.do", new EventControl());
		
//		// 기능등록
//		map.put("/addForm.do", new AddFormControl()); // 회원 등록 페이지
//		map.put("/addMember.do", new AddMemberControl()); // 회원 등록 처리
//		map.put("/memberList.do", new MemberListControl());
//		map.put("/getMember.do", new GetMemberControl()); // 회원 아이디로 상세조회
//		map.put("/modifyForm.do", new ModifyFormControl()); // 수정 화면 호출
//		map.put("/modifyMember.do", new ModifyMemberControl()); // 수정 처리
//		map.put("/removeMember.do", new RemoveMemberControl()); // 삭제 처리
		
		Map<String, Control> memberMenu = MenuMember.getInstance().menuMap();
		Map<String, Control> boardMenu = MenuBoard.getInstance().menuMap();
		Map<String, Control> replyMenu = MenuReply.getInstance().menuMap();
		
		map.putAll(memberMenu); // 멤버 관련 메뉴 추가
		map.putAll(boardMenu); // 게시글 관련 메뉴 추가
		map.putAll(replyMenu); // 댓글 관련 메뉴 추가
	}
	
	// HttpServletRequest
	// HttpSerbletResponce
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//		System.out.println("service 메소드.");
		req.setCharacterEncoding("utf-8"); // 요청 방식이 post 일 경우에 body에 포함되어 값이 넘어오는데 그때 문자열을 utg-8로 인코딩 시켜줘야 한글도 사용 가능함
		String uri = req.getRequestURI(); // /BoardWeb/main.do
		String context = req.getContextPath(); // BoardWeb
		String page = uri.substring(context.length()); // /main.do
		
		Control control = map.get(page);
		control.exec(req,resp);
	}
}
