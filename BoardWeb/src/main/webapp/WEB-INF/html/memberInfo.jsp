<%@page import="com.yedam.vo.MemberVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<jsp:include page = "../includes/header.jsp"></jsp:include>

<h3>회원 상세 정보</h3>
<% MemberVO member = (MemberVO)  request.getAttribute("memberInfo"); %>
	<table class = "table">
  <tr>
    <th>회원 아이디</th> <td><%=member.getMemberId() %></td>
  </tr>
	  <tr>
    <th>회원 이름</th> <td><%=member.getMemberName() %></td>
  </tr>
    <tr>
    <th>바밀번호</th> <td><%=member.getPassword() %></td>
  </tr>
    <tr>
    <th>이메일</th> <td><%=member.getEmail() %></td>
  </tr>
    <tr>
    <th>가입 날짜</th> <td><%=member.getCreationDate() %></td>
  </tr>
  
  <tr>
  <td colspan="2" align="center"> <button class="btn btn-info" onclick="location.href='modifyForm.do?id=<%=member.getMemberId() %>'">수정</button> 
  	   <button class="btn btn-danger">삭제</button></td>
  </tr>
</table>




<jsp:include page = "../includes/footer.jsp"></jsp:include>