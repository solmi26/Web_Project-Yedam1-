<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
     <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
  <%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<jsp:include page = "../includes/header.jsp"></jsp:include>
<h3>게시글 수정 화면</h3>
<p></p>
<form action="modBoard.do" method="post" enctype="multipart/form-data">
	<input type="hidden" name ="writer" value="${logid}">
	
    <input type="hidden" name="keyword" value="${param.keyword}">
    <input type="hidden" name="searchCondition" value="${param.searchCondition}">
    <input type="hidden" name="page" value="${param.page}">
<table class="table">
	<tr>
		<th>제목</th><td><input class="form-control" name="title" type="text" value="${boardInfo.title }"></td>
	</tr>
		<tr>
		<th>내용</th><td ><textarea class="form-control" name="content" >${boardInfo.content } </textarea></td>
	

	</tr>
		<tr>
		<th>작성자</th><td>${logid}</td>
	</tr>
			<tr>
	 <th>이미지</th>
            <td>
                <!-- 기존 파일명 출력 -->
                <c:if test="${!empty boardInfo.image}">
                    <p>현재 이미지 파일명: ${boardInfo.image}</p> <!-- 기존 파일명 표시 -->
                    <img src="images/${boardInfo.image}" alt="이미지" width="150px"><br>
                </c:if>
                <br>
                <input type="file" name="srcImage">
            </td>
	</tr>
	
	  <tr>
  <td colspan="2" align="center"> <button type="submit" class="btn btn-primary">저장</button> 
  	   <button class="btn btn-secondary" type="button" onclick="location.href='boardList.do?keyword=${kw }&searchCondition=${sc}&page=${pg}'">취소</button></td>
  </tr>

</table>
</form>

<jsp:include page = "../includes/footer.jsp"></jsp:include>