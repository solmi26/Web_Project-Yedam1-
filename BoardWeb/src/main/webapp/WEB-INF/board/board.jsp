<%@page import="com.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
  <%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<jsp:include page = "../includes/header.jsp"></jsp:include>


<h3>글 상세 페이지</h3>

<p>${sc}</p>
<p>${kw}</p>

<div class="row" style="margin-bottom:20px; margin-left:1px;">
<div class="col-lg-12">

</div>
</div>

<div class="panel" style="margin-left:1px;">
<div id="contAreaBox">
<div class="panel">
<div class="panel-body">
<div class="table-responsive" style="text-align:center;">
<table id="datatable-scroller"
	class="table table-bordered tbl_Form">
	<caption></caption>
	<colgroup>
		<col width="250px" />
		<col />
	</colgroup>
	<tbody>
		<tr>
			<th class="active" >번호</th>
			<td align="left" colspan="3">
			${board.boardNo}
			</td>
		</tr>
		<tr>
			<th class="active">제목</th>
			<td  align="left" colspan="3">
			${board.title}
			</td>
		</tr>
		<tr>
			<th class="active" >내용</th>
			<td colspan="3" align="left">${board.content}</td>
			<c:if test="${!empty board.image}">
			<td rowspan="5"><img width="300px" src="images/${board.image}"></td>			
			</c:if>
		</tr>
		
		<tr>
			<th >작성자</th>
			<td class="active" align="left" >
			${board.writer}
			</td>
		</tr>
				<tr>
			<th class="active" >조회수</th>
			<td  align="left">
			${board.viewCnt}
			</td>
		</tr>
				<tr>
			<th class="active" >작성일자</th>
			<td class="active" align="left" >
				${board.creationDate}
			</td>
		</tr>
	</tbody>
</table>
</div>
<div style="margin-left:1px;">

<form action="removeBoard.do" name="actForm">
	<input type="hidden" name="keyword" value="${kw }">
	<input type="hidden" name="searchCondition" value="${sc}">
	<input type="hidden" name="page" value="${page}">
	<input type="hidden" name="bno" value="${board.boardNo}">
</form>

<a class="btn btn-primary" onclick="form_submit('boardList.do')">목록</a>
<a href="boardList.do?page=${page}"  class="btn btn-warning ${board.writer ne logid ? 'disabled' : '' }">수정</a>
<a class="btn btn-danger" onclick="form_submit('removeBoard.do')">삭제</a>
<c:if test="${!empty message}">
<span style="color:red;">${message}</span>
</c:if>
</div>

<script type="text/javascript">

	function form_submit(uri) {
		document.forms.actForm = uri;
		document.forms.actForm.submit();
		console.log(document.forms.actForm.submit())
	}
</script>

</form>
</div>
</div>
</div>
</div>



<jsp:include page = "../includes/footer.jsp"></jsp:include>