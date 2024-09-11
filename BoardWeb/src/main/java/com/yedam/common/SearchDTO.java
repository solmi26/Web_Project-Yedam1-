package com.yedam.common;

import lombok.Data;

// 검색 조건을 담기 위한 클래스
@Data
public class SearchDTO {
	private String condition; // 검색 조건
	private String keyword; // 검색어
	private int page; // 페이지
	private int boardNo; // 몇번글의 댓글

}
