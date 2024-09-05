package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class ModBoardFormControl implements Control {

	@Override
	public void exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 등록화면
		String bno = request.getParameter("bno");
		String page = request.getParameter("page");
		String sc = request.getParameter("searchCondition");
		String kw = request.getParameter("keyword");
		
		// 조회한 정보를 jsp 전달
		BoardService svc = new BoardServiceImpl();
		BoardVO board = svc.getBoard(Integer.parseInt(bno));
		
		request.setAttribute("boardInfo", board);
		request.setAttribute("pg", page);
		request.setAttribute("sc", sc);
		request.setAttribute("kw", kw);
		
		request.getRequestDispatcher("WEB-INF/board/modBoardForm.jsp").forward(request, response);
	}

}
