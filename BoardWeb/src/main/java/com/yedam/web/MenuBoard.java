package com.yedam.web;

import java.util.HashMap;
import java.util.Map;

import com.yedam.common.Control;
import com.yedam.control.AddBoardControl;
import com.yedam.control.BoardControl;
import com.yedam.control.BoardFormControl;
import com.yedam.control.BoardListControl;

public class MenuBoard {
	public static MenuBoard instance = new MenuBoard();
	private MenuBoard() {}
	
	public static MenuBoard getInstance() {
		return instance;
	}
	
	
	
	public Map<String, Control> menuMap() {
		Map<String, Control> menu = new HashMap<>();
		// 기능등록
		menu.put("/boardList.do", new BoardListControl());
	
		// 단건조회
		menu.put("/getBoard.do", new BoardControl());
		
		// 등록(등록화면, 기능)
		menu.put("/addBoardForm.do", new BoardFormControl());
		menu.put("/addBoard.do", new AddBoardControl());
		
		return menu;
	
	}
	



}
