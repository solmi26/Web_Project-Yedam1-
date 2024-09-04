<%@page import="com.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<jsp:include page = "../includes/header.jsp"></jsp:include>


<h3>글 상세 페이지</h3>

<div class="row" style="margin-bottom:20px; margin-left:1px;">
<div class="col-lg-12">

</div>
</div>

<div class="panel" style="margin-left:1px;">
<div id="contAreaBox">
<div class="panel">
<div class="panel-body">
<form role="form" action="/board/create_action" method="post">
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
			<td>
			${board.boardNo}
			</td>
		</tr>
		<tr>
			<th class="active">제목</th>
			<td>
			${board.title}
			</td>
		</tr>
		<tr>
			<th class="active" >내용</th>
			<td>
			${board.content}
			</td>
		</tr>
		<tr>
			<th class="active" >작성자</th>
			<td>
			${board.writer}
			</td>
		</tr>
				<tr>
			<th class="active" >조회수</th>
			<td>
			${board.viewCnt}
			</td>
		</tr>
				<tr>
			<th class="active" >작성일자</th>
			<td>
				${board.creationDate}
			</td>
		</tr>
	</tbody>
</table>
</div>
<div style="margin-left:1px;">

<a href="boardList.do?page=${page}" class="btn btn-primary">목록</a>
</div>
</form>
</div>
</div>
</div>
</div>



<jsp:include page = "../includes/footer.jsp"></jsp:include>