package com.yedam.web;

import java.util.HashMap;
import java.util.Map;

import com.yedam.common.Control;
import com.yedam.control.AddBoardControl;
import com.yedam.control.AddReplyControl;
import com.yedam.control.BoardControl;
import com.yedam.control.BoardFormControl;
import com.yedam.control.BoardListControl;
import com.yedam.control.ModBoardControl;
import com.yedam.control.ModBoardFormControl;
import com.yedam.control.ReomveReplyControl;
import com.yedam.control.ReomveReplysControl;
import com.yedam.control.ReplyListControl;

public class MenuReply {
	public static MenuReply instance = new MenuReply();
	private MenuReply() {}
	
	public static MenuReply getInstance() {
		return instance;
	}
	
	
	
	public Map<String, Control> menuMap() {
		Map<String, Control> menu = new HashMap<>();
		
		// 댓글의 목록을 json 형식으로 출력하는 페이지
		menu.put("/replyList.do", new ReplyListControl());
		// 삭제 컨트롤
		menu.put("/removeReply.do", new ReomveReplyControl());
		menu.put("/removeReplys.do", new ReomveReplysControl());
		//등록 컨트롤
		menu.put("/addReply.do", new AddReplyControl());
		
		return menu;
	
	}
	



}
