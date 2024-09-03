package com.yedam.vo;

import java.util.Date;

import lombok.Data;
//import lombok.Getter;
//import lombok.Setter;
//import lombok.ToString;

//@Getter
//@Setter
//@ToString
@Data
public class MemberVO {
	// lombok 활용 : getter, setter, toStrion, 메소드 생성.
	// lombok 설치, 라이브러리 pom에 추가.
	private String memberId;
	private String memberName;
	private String password;
	private String email;
	private String authority;
	private Date creationDate;

}
