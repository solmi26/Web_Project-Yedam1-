package com.yedam.service;

import java.util.List;

import com.yedam.vo.ReplyVO;

public interface ReplyService {
	List<ReplyVO> replyList(int bno);
	boolean removeReply(int rno); // 삭제
	boolean removeReplys(String[] array); // 다 건 삭제
	boolean addReply(ReplyVO reply);
}
