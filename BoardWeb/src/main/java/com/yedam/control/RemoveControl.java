package com.yedam.control;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class RemoveControl implements Control {

	@Override
	public void exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// bno(글 삭제 용도), page(page로 이동)
		
		String bno = request.getParameter("bno");
		String page = request.getParameter("page");
		
		// 로그인 정보.
		HttpSession session = request.getSession();
		String logid = (String) session.getAttribute("logid");
		
		String sc = request.getParameter("searchCondition");
		String kw = request.getParameter("keyword");
		
		BoardService svc = new BoardServiceImpl();
		BoardVO board = svc.getBoard(Integer.parseInt(bno));
		
		// 로그인 정보가 없거나 로그인 정보와 작성자 다르면 삭제 불가
		if(logid == null || !logid.equals(board.getWriter())) {
			request.setAttribute("message", "삭제 권한이 없습니다.");
			request.setAttribute("board", board);
			request.setAttribute("page", page);
			
			RequestDispatcher rd =  request.getRequestDispatcher("board/board.tiles");
			rd.forward(request, response);
			return;
			
			
		}
		
		// 게시글 삭제
		if(svc.removeBoard(Integer.parseInt(bno))) {
			response.sendRedirect("boardList.do?page=" + page + "&searchCondition=" + sc + "&keyword=" + kw);
			
		};
		
		
	}

}
