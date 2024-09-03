package com.yedam.common;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.yedam.mapper.MemberMapper;
import com.yedam.vo.MemberVO;

public class AppTest {
	public static void main(String[] args) {
		MemberVO mvo = new MemberVO();
		
		mvo.setMemberId("user04");
		mvo.setMemberName("이망고");
		mvo.setPassword("1111");
		mvo.setEmail("mango@naver.com");
		
		SqlSessionFactory factory = DataSource.getInstance();
		SqlSession session = factory.openSession();
		MemberMapper mapper = session.getMapper(MemberMapper.class);
		
		if(mapper.insertMember(mvo) == 1) {
			session.commit();
			System.out.println("정상 추가 되었습니다.");
		}
		
		List<MemberVO> list =  mapper.memberList();
		
		list.forEach(member -> {
			System.out.println(member.toString());
		});
	}

}
