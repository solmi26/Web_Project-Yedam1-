<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<h3>스크립트 연습.</h3>

<div id="show">
<!-- <p>이름 : </p> -->	
</div>

<table>
	<tr>
		<th>id</th> <td><input type="text" id="id"></td>
	</tr>
	<tr>
	<th>name</th> <td><input type="text" id="name"></td>
	</tr>
	<tr>
	<th>point</th> <td><input type="number" id="point"></td>
	</tr>
	<tr>
		<td colspan="2"><button id="addBtn">추가</button></td>
	</tr>
</table>

<table id="target">
<thead>
  <tr>
    <th>아이디</th>
    <th>이름</th>
    <th>포인트</th>
  </tr>
  <thead>
<tbody id="list"></tbody>
</table>

<div>
	salary: <input id="salary">
	gender: <select id="genger">
			<option value="Male">남성</option>
			<option value="Female">여성</option>
	</select>
	<button id="searchBtn">검색</button>
</div>

<script src="js/basic.js"></script>
<script src="js/basic2.js"></script>
<script src="js/basic3.js"></script>
<script src="js/data.js"></script>
<script src="js/basic4.js"></script>