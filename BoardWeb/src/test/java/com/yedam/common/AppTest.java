package com.yedam.common;

import org.apache.ibatis.session.SqlSession;

import com.yedam.mapper.ReplyMapper;

public class AppTest {
	public static void main(String[] args) {
		
		SqlSession sqlSesson = DataSource.getInstance().openSession(true);
		ReplyMapper mapper = sqlSesson.getMapper(ReplyMapper.class);
		
		
		SearchDTO search = new SearchDTO();
		
		search.setBoardNo(526);
		search.setPage(2);
		
		mapper.selectListPaging(search).forEach(reply -> System.out.println(reply));
//		BoardVO board = new BoardVO();
//		board.setTitle("수정2 입력테스트");
////		board.setContent("수정2 내용 냐용");
//		board.setWriter("수정 lee");
//		board.setBoardNo(258);
//		
//		BoardService svc = new BoardServiceImpl();
//		
//		// 추가
//		//svc.addBoard(board);
//		
//		// 목록
////		svc.boardList().forEach(System.out::println);
//		
//		// 수정
////		svc.modifyBoard(board);
//		
//		// 단건 조회
////		System.out.println(svc.getBoard(board.getBoardNo()));
//		
//		// 삭제
//		svc.removeBoard(258);
//		
//		// 목록
////		svc.boardList().forEach(System.out::println);
//		

		
		
		
		
	}

}
