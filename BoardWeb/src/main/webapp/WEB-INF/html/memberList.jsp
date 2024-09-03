<%@page import="com.yedam.vo.MemberVO"%>
<%@page import="java.util.List"%>
<%@page import="com.yedam.service.MemberServiceImpl"%>
<%@page import="com.yedam.service.MemberService"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<jsp:include page = "../includes/header.jsp"></jsp:include>	
	<%
	MemberService svc = new MemberServiceImpl();
	List<MemberVO> list = svc.getMembers();
	
	
	%>
	<h3>회원 목록</h3>
	<table class=table>
		<thead>
			<tr>
				<th>회원 아이디</th>
				<th>회원 이름</th>
				<th>이메일</th>
				<th>권한</th>
			</tr>
		</thead>
		<tbody>
		<%for(MemberVO member:list){ %>
			<tr>
				<td><a href="getMember.do?id=user03"> <%=member.getMemberId() %></a></td>
				<td><%=member.getMemberName()%></td>
				<td><%=member.getEmail() %></td>
				<td><%=member.getAuthority() %></td>
			</tr>
			<%} %>
		</tbody>
	</table>
<jsp:include page = "../includes/footer.jsp"></jsp:include>