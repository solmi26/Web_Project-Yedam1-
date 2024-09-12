/**
 * frtch.js(비동기처리 : 서버상의 리소스 요청)
 */
/* ---------------------
	초기 변수 선언하는 부분
	------------------- */
 let bno = 148;
 let writer = 'user01';
 console.log(fields);
 
/* ----------------------
	예제 목록
------------------------- */
 fetch('js/data.js') // promis 반환 -> 정상 실행 시 then(함수) 실행
 					 //			   -> 비정상 실행 시 catch(함수) 실행
.then(function(resolve){ 
	console.log(resolve); // response 객체
	return resolve.text();
})
.then(function(result){
	console.log(result);
	let json = result.substring(result.indexOf('['), result.indexOf(']')+1); //[의 위치]의 위치의 사이의 substring
	console.log(JSON.parse(json));
})
.catch(function(err){
	console.log('에러가 발생', err);
})

/* ----------------------
	서버의 댓글목록 요청작업
------------------------- */

const list = document.querySelector('tbody.list');

fetch('replyList.do?bno=' + bno)
.then(resolve => resolve.json()) // 응답 객체(response)의 정보를 json 문자열 -> 객체 변경 메소드 : JSON()
.then(result => {
	console.log(result); // [배열]
	// 반복처리
	result.forEach(reply => {
		let tr = makeRow(reply);
		list.appendChild(tr);
	})
})
.catch(err => {
	console.log('catch 예외', err);
})

/* ----------------------
	삭제 처리를위한 함수 : deleteRowFnc
------------------------- */
function deleteRowFnc(e) {
	let rno = e.target.parentElement.parentElement.dataset.rno; // <tr data-rno=23
	fetch('removeReply.do?rno=' + rno)
	.then(resolve => resolve.json())
	.then(result => {
		console.log(result)
		if(result.retCode == 'OK'){
			alert('삭제완료');
			e.target.parentElement.parentElement.remove();
		}else{
			
		}
	})
	
}

/* ----------------------
	등록 이벤트
------------------------- */
document.querySelector('#addReply').addEventListener('click', addReplyFnc);

/* ----------------------
	함수들
------------------------- */
function addReplyFnc(){
	let reply = document.querySelector('#reply').value;
	fetch('addReply.do',{
		method: 'post',
		headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
		body: 'bno='+bno+'&reply='+reply +'&replyer='+writer
	}) // 주소 표시줄 addReply.do?bno=148&reply=test&replyer=user01
	.then(resolve => resolve.json())
	.then(result => {
		console.log(result);
		// 정상일 경우 => result.retCode = 'OK'
		if(result.retCode == 'OK'){
			list.appendChild(makeRow(result.retVal));
		}else{
			alert('처리 중 예외')
		}
	})
}
