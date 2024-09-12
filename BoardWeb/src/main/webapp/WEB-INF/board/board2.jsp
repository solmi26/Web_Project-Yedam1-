<%@page import="com.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<style>
	div.reply.div {
		margin: auto;
	}

	div.reply ul {
		list-style-type: none;
	}

	div.reply span {
		display: inline-block;
	}
</style>

<script>
const bno = '${board.boardNo}';
const writer = '${logid}'; // 로그인 정보
</script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="js/replyService.js"></script>
<script src="js/replyBoard.js"></script>

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
					<table id="datatable-scroller" class="table table-bordered tbl_Form">
						<caption></caption>
						<colgroup>
							<col width="250px" />
							<col />
						</colgroup>
						<tbody>
							<tr>
								<th class="active">번호</th>
								<td align="left" colspan="3">
									${board.boardNo}
								</td>
							</tr>
							<tr>
								<th class="active">제목</th>
								<td align="left" colspan="3">
									${board.title}
								</td>
							</tr>
							<tr>
								<th class="active">내용</th>
								<td colspan="3" align="left">${board.content}</td>
								<c:choose>
									<c:when test="${!empty board.image}">
										<td rowspan="5"><img width="300px" src="images/${board.image}"></td>
									</c:when>
									<c:otherwise>
										<td rowspan="5"></td> <!-- 이미지가 없을 때 빈 셀을 추가 -->
									</c:otherwise>
								</c:choose>
							</tr>

							<tr>
								<th>작성자</th>
								<td class="active" align="left">
									${board.writer}
								</td>
							</tr>
							<tr>
								<th class="active">조회수</th>
								<td align="left">
									${board.viewCnt}
								</td>
							</tr>
							<tr>
								<th class="active">작성일자</th>
								<td class="active" align="left">
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
					<a class="btn btn-warning ${board.writer ne logid ? 'disabled' : '' }"
						onclick="form_submit('modBoardForm.do')">수정</a>
					<a class="btn btn-danger" onclick="form_submit('removeBoard.do')">삭제</a>
					<c:if test="${!empty message}">
						<span style="color:red;">${message}</span>
					</c:if>
				</div>

			</div>
		</div>
	</div>
</div>

<!-- 댓글관련-->
<div class="container reply">
	<!-- 댓글 등록-->
	<div class="header">
		<input type="text" id="reply" class="col-sm-9">
		<button id="addReply" class="btn btn-primary">댓글 등록</button>
	</div>

	<!--댓글 목록-->
	<div class="content">
		<ul>
			<li>
				<span class="col-sm-2">글번호</span>
				<span class="col-sm-5">댓글내용</span>
				<span class="col-sm-2">작성자</span>
				<span class="col-sm-2"> <button>삭제</button> </span>
			</li>
			<li><hr /></li>
			<li id="template" style="display:none">
				<span class="col-sm-2">24</span>
				<span class="col-sm-5">테스형입니다.</span>
				<span class="col-sm-2">user01</span>
				<span class="col-sm-2"><button class="btn btn-danger">삭제</button></span>
			</li>
		</ul>
	</div>
	<!-- 댓글 페이징 -->
	<nav aria-label="Page navigation example">
		<ul class="pagination justify-content-center">
			<li class="page-item disabled">
				<a class="page-link">Previous</a>
			</li>
			<li class="page-item"><a class="page-link" href="#">1</a></li>
			<li class="page-item"><a class="page-link" href="#">2</a></li>
			<li class="page-item"><a class="page-link" href="#">3</a></li>
			<li class="page-item">
				<a class="page-link" href="#">Next</a>
			</li>
		</ul>
	</nav>
</div>

<script type="text/javascript">


	function form_submit(uri) {
		document.forms.actForm.action = uri;
		document.forms.actForm.submit();
	}
</script>

