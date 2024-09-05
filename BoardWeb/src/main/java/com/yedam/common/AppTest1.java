package com.yedam.common;

import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;

public class AppTest1 {

	public static void main(String[] args) {
		
		
		SearchDTO search= new SearchDTO();
		BoardService svc = new BoardServiceImpl();
		
		search.setCondition("T");
		search.setKeyword("Java");
		search.setPage(1);

		svc.boardList(search).forEach(System.out::println);
		}

}
