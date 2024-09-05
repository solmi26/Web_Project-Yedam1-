package com.yedam.common;

import lombok.Data;

// 검색 조건을 담기 위한 클래스
@Data
public class SearchDTO {
	String condition;
	String keyword;
	int page;

}
