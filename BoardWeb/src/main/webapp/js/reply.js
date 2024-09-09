/**
 * reply.js
 */

let replyer = 'user01';
let bno = 148;

 const xhtp = new XMLHttpRequest(); // 객체 생성

xhtp.open('get','replyList.do?bno=148'); // 서버 페이지 지정.
xhtp.send(); // 서버 요청
xhtp.onload = function(){
	console.log(xhtp.responseText);
	let result = JSON.parse(xhtp.responseText);
	console.log(result);
	result.forEach(reply => {
		document.querySelector(".list").appendChild(makeRow(reply));
	});
}

// 댓글정보 -> tr>td*4 생성 반환

let fields = ['replyNo', 'reply', 'replyer', 'replyDate'];

function makeRow(reply = {}){
	let tr = document.createElement('tr');
	// 체크박스 생성
	let btn = document.createElement('input');
	btn.setAttribute('type', 'checkbox');

	
	let td = document.createElement('td');
	td.appendChild(btn);
	tr.appendChild(td);
	
	fields.forEach(field => {
		let td = document.createElement('td');
		
		td.innerHTML = reply[field];
		tr.appendChild(td);
	})
	
	// 삭제 버튼
	btn = document.createElement('button');
	btn.innerHTML = '삭제';
	btn.addEventListener('click', deleteRowFnc);
	
	td = document.createElement('td');
	td.appendChild(btn);
	tr.appendChild(td);
	
	return tr;
};

// 삭제 처리를 할 함수
function deleteRowFnc(e){
	console.log(e.target.parentElement.parentElement.firstChild.innerHTML);
	let rno = e.target.parentElement.parentElement.firstChild.innerHTML;
	console.log(e.target.parentElement.parentElement.children[1].innerHTML);
	rno = e.target.parentElement.parentElement.children[1].innerHTML
	const delHtp = new XMLHttpRequest();
	delHtp.open('get', 'removeReply.do?rno=' + rno); // 컨트롤 지정
	delHtp.send();
	delHtp.onload = function(){
		let result = JSON.parse(delHtp.responseText);
		if(result.retCode == 'OK'){
			e.target.parentElement.parentElement.remove(); // tr을 삭제
		}else if(result.retCode == 'NG'){
			alert('알 수 없는 예외 발생');
		}else{
			alert('잘못된 반환 코드')
		}
	}
}

// 전체선택 체크박스 이벤트
 document.querySelector('thead input[type="checkbox"]').addEventListener('change', function(e) {
	 document.querySelectorAll('.list input[type="checkbox"]').forEach(item => {
		 item.checked = this.checked; //  리스트 내 모든 체크박스(item)의 체크 상태를 thead의 체크박스 상태(this.checked)와 동일하게 설정
	 })
 });
 
 // 선택삭제 이벤트
 document.querySelector('#dekChecked').addEventListener('click', delCheckFnc1);
 
 // 선택 삭제 함수 실행
 function delCheckFnc1(e){
	 // ?rno=21&rno=22&rno=23
	 let params = "rno=";
	  document.querySelectorAll('.list input[type="checkbox"]:checked').forEach(item => {
		  let rno = item.parentElement.nextElementSibling.innerHTML;
		  params += rno + "&rno=";
		  console.log(params)
	  });
	  
	  const delHtp = new XMLHttpRequest();
	  delHtp.open('get', "removeReplys.do?" + params);
	  delHtp.send();
	  delHtp.onload = function(){
		  let result =JSON.parse(delHtp.responseText);
		  
		  if(result.retCode == 'OK'){
			  document.querySelectorAll('.list input[type="checkbox"]').forEach(item => {
				  item.parentElement.parentElement.remove();
				  });
		  }else{
			  alert("처리 중 예외");
		  }
	  }
 }
 
 function delCheckFnc(e){
	  document.querySelectorAll('.list input[type="checkbox"]:checked').forEach(item => {
		  
		let rno = item.parentElement.nextElementSibling.innerHTML;
		
		const delHtp = new XMLHttpRequest();
		delHtp.open('get', 'removeReply.do?rno=' + rno); // 컨트롤 지정
		delHtp.send();
		delHtp.onload = function(){
			let result = JSON.parse(delHtp.responseText);
			if(result.retCode == 'OK'){
				item.parentElement.parentElement.remove(); // tr을 삭제
			}else if(result.retCode == 'NG'){
				alert('알 수 없는 예외 발생');
			}else{
				alert('잘못된 반환 코드')
			}
		}
		  
	  })
 };
 
  document.querySelector('#addReply').addEventListener('click', function(){	 
	let reply = document.querySelector('#reply').value;
	const addHtp = new XMLHttpRequest();
	addHtp.open('get', 'addReply.do?bno='+bno+'&reply'+reply+'&replyer='+replyer);
	addHtp.send();
	addHtp.onload() = function(){
		let result = JSON.parse(addHtp.responseText);
		console.log(result);
		let tr = makeRow(result.retVal);
		document.querySelector('.list').appendChild(tr);
	}
	 

	 

	 
	 
	 document.querySelector('#reply').value = '';
	 });
 
 

  