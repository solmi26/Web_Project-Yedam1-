package com.yedam.mapper;

import java.util.List;

import com.yedam.common.SearchDTO;
import com.yedam.vo.ReplyVO;

public interface ReplyMapper {
	// 댓글목록.
	List<ReplyVO> selectList(int bno);
	// 페이지당 건수 출력
	List<ReplyVO> selectListPaging(SearchDTO search);
	// 삭제.
	int deleteReply(int rno);
	// 다건삭제.
	int deleteReplys(String[] array);
	// 등록.
	int selectKey();
	int insertReply(ReplyVO rvo);
	
	// 댓글 건수.
	int selectReplyCount(int bno);
}
