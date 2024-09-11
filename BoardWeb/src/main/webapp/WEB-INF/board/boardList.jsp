<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%> <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"
%> <%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<link rel="stylesheet" href="//cdn.datatables.net/2.1.5/css/dataTables.dataTables.min.css" />
<script src="js/jquery-3.7.1.js"></script>
<script src="//cdn.datatables.net/2.1.5/js/dataTables.min.js"></script>
<!DOCTYPE html>

<h3>게시글 목록</h3>
<!-- 
<p>${msg} </p>
<p>${list} </p>

 
<c:set var="name" value="Solmi"></c:set>
<c:out value="${name }"></c:out>

<c:set var="age" value="17"></c:set>
<c:out value="${age >= 20 ? '성인' : '미성년' }"></c:out>

<c:if test="${name ne 'Solmi'}">
	<p>아닙니다.</p>
</c:if>

 -->

<c:choose>
  <c:when test="${!empty message}">
    <p style="color: red">${message}</p>
  </c:when>
  <c:otherwise>
    <table id="example" class="display" style="width: 100%">
      <thead>
        <tr>
          <th>글번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일시</th>
        </tr>
      </thead>
      <tbody>
        <c:forEach var="board" items="${list}">
          <tr>
            <td><c:out value="${board.boardNo}"></c:out></td>
            <td><a href="getBoard.do?keyword=${kw }&searchCondition=${sc}&page=${paging.page}&bno=${board.boardNo}">${board.title}</a></td>
            <td>${board.writer}</td>
            <td><fmt:formatDate value="${board.creationDate}" pattern="yyyy.MM.dd HH:mm:ss" /></td>
          </tr>
        </c:forEach>
      </tbody>
      <tfoot>
        <tr>
          <th>글번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일시</th>
        </tr>
      </tfoot>
    </table>
  </c:otherwise>
</c:choose>

<script>
  new DataTable("#example");
</script>
