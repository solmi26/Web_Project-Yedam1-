package com.yedam.control;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class BoardControl implements Control {

	@Override
	public void exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String bno = request.getParameter("bno");
		String page = request.getParameter("page");
		
		// 검색 조건.
		String sc = request.getParameter("searchCondition");
		String kw = request.getParameter("keyword");
		
		BoardService svc = new BoardServiceImpl();
		BoardVO board = svc.getBoard(Integer.parseInt(bno));
		request.setAttribute("board", board);
		request.setAttribute("page", page);
		
		request.setAttribute("sc", sc);
		request.setAttribute("kw", kw);
		
		RequestDispatcher rd =  request.getRequestDispatcher("board/board.tiles");
		rd.forward(request, response);
	}

}
