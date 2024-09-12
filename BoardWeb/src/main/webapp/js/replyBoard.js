/**
 * replyBoard.js
 * replyService에 정의된 메소드를 통해서 기능 실행 
 */
// DOM 요소를 다 읽어드린 다음 코드 실행

let pagination
document.addEventListener("DOMContentLoaded", function(e) {
	/*----------------------------
	이벤트(댓글등록)
-----------------------------*/
	document.querySelector('#addReply').addEventListener('click', addReplyFnc);

	// 페이지 링크 클릭.
	document.querySelectorAll('ul.pagination a').forEach(aTag => {
		aTag.addEventListener('click', showReplyListFnc);
	})

	pagination = document.querySelector('ul.pagination')

	/*----------------------------
		댓글 목록 출력
	-----------------------------*/
	showReplyListAndPagingList()
})

/*----------------------------
   댓글 정보 -> li 생성하는 함수
-----------------------------*/
function makeLi(reply = {}) {
	let cloned = document.querySelector('#template').cloneNode(true);
	cloned.style.display = 'block';
	cloned.setAttribute('data-rno', reply.replyNo);
	cloned.querySelector('span').innerHTML = reply.replyNo;
	cloned.querySelector('span:nth-of-type(2)').innerHTML = reply.reply;
	cloned.querySelector('span:nth-of-type(3)').innerHTML = reply.replyer;
	cloned.querySelector('button').addEventListener('click', deleteLiFnc);
	console.log(cloned);
	return cloned;
}

/*----------------------------
   함수: deleteLiFnc
   기능: 버튼이 포함된 row 삭제. (ajax 포함)
-----------------------------*/
function deleteLiFnc(e) {
	Swal.fire({
		title: "Are you sure?",
		text: "You won't be able to revert this!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes, delete it!"
	}).then((result) => {

		if (result.isConfirmed) {
			let rno = e.target.parentElement.parentElement.dataset.rno;
			svc.removeReply(rno, // 삭제번호
				function(result) {
					if (result.retCode == 'OK') {
						Swal.fire({
							title: "Deleted!",
							text: "Your file has been deleted.",
							icon: "success"
						});
						//e.target.parentElement.parentElement.remove();
						showReplyListAndPagingList()

					} else {
						Swal.fire({
							title: "Error!",
							text: "There was a problem deleting your file. Please try again.",
							icon: "error"
						});
					}

				},
				function(err) {
					console.log(err);
				}
			);
		}
	});


};

/*----------------------------
	이벤트(댓글등록)
-----------------------------*/
function addReplyFnc(e) {
	let reply = document.querySelector('#reply').value;
	let param = {
		bno: bno,
		reply: reply,
		replyer: writer
	}
	svc.addReply(param,
		function(result) {
			//let newReply = result.retVal;
			if (result.retCode == 'OK') {
				Swal.fire({
					title: "성공!",
					text: "등록이 처리되었습니다!",
					icon: "success"
				});
				//document.querySelector('div.content ul').appendChild(makeLi(result.retVal));
				page = 1;
				showReplyListAndPagingList()
			} else {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
					footer: '<a href="#">Why do I have this issue?</a>'
				});
			}
		}, function(err) {
			console.log(err);
		}

	);

};
let page = 1; // 페이지가 변경될 때마다 사용해야함 
/*----------------------------
	링크 클릭 시 댓글 목록 새로 출력
	showReplyListFnc
-----------------------------*/
function showReplyListFnc(e) {

	// 기존 출력 리스트 치워주고.
	document.querySelectorAll('div.content li').forEach((li, idx) => {
		if (idx > 2) {
			li.remove();
		}
	})
	page = e.target.dataset.page; // 페이지 번호
	svc.replyList({ bno, page }, function(result) {
		console.log(result);
		result.forEach(reply => {
			document.querySelector('div.content ul').appendChild(makeLi(reply));
		});
		showPagingListFnc() // 목록을 새로 그려주면 페이지 리스트도 새로 생성
	}, // 성공 처리 됐을 때 실행 함수 
		function(err) {
			console.log(err)
		}// 실패했을 때 실행 함수
	);

}

/*----------------------------
	댓글 개수를 활용해서 페이지 리스트 생성
	showPagingListFnc
-----------------------------*/


function showPagingListFnc() {
	svc.replyPagingCount(bno, // 글번호
		makePagingList,
		function(err) {
			console.log(err);
		}
	)
};


// 정상저리 실행할 콜백함수
function makePagingList(result) {
	pagination.innerHTML = "";

	console.log(result);
	let totalCnt = result.totalCount;
	// 페이지 목록 만들기
	let startPate, endPage, realEnd; // 첫페이지 ~ 마지막페이지
	let prev, next; // 이전페이지, 이후페이지

	endPage = Math.ceil(page / 5) * 5;
	startPage = endPage - 4; // 6 ~ 10
	realEnd = Math.ceil(totalCnt / 5);

	endPage = endPage > realEnd ? realEnd : endPage;
	prev = startPage > 1;
	next = endPage < realEnd;

	// 이전 페이지 생성
	let li = document.createElement('li');
	li.className = 'page-item';
	let aTag = document.createElement('a');
	aTag.className = 'page-link';
	aTag.innerHTML = 'Previous';
	li.appendChild(aTag); //  <li class="page-item"><a class="page-link" href="#">1</a></li>
	if (prev) {
		aTag.setAttribute('href', '#');
		aTag.setAttribute('data-page', startPage - 1);
	} else {
		li.classList.add('disabled');
	}
	pagination.appendChild(li)

	// li 생성. 페이지 범위에 들어갈...
	for (let p = startPage; p <= endPage; p++) {
		let li = document.createElement('li');
		li.className = 'page-item';
		let aTag = document.createElement('a');
		aTag.className = 'page-link';
		aTag.setAttribute('href', '#');
		aTag.setAttribute('data-page', p)
		aTag.innerHTML = p;
		li.appendChild(aTag); //  <li class="page-item"><a class="page-link" href="#">1</a></li>
		if (p == page) { // 현재 페이지 스타일 변경
			li.classList.add('active')
			li.setAttribute('aria-current', 'page');
		}
		pagination.appendChild(li)
	}

	// 하위 페이지 생성
	li = document.createElement('li');
	li.className = 'page-item';
	aTag = document.createElement('a');
	aTag.className = 'page-link';
	aTag.innerHTML = 'Next';
	li.appendChild(aTag); //  <li class="page-item"><a class="page-link" href="#">1</a></li>
	if (next) {
		aTag.setAttribute('href', '#');
		aTag.setAttribute('data-page', endPage + 1)
	} else {
		li.classList.add('disabled');
	}
	pagination.appendChild(li)

	// 이벤트 등록
	document.querySelectorAll('ul.pagination a').forEach(aTag => {
		aTag.addEventListener('click', showReplyListFnc);
	});

}

function showReplyListAndPagingList() {
	svc.replyList({ bno, page },
		function(result) {
			// 기존 출력 리스트 치워주고.
			document.querySelectorAll('div.content li').forEach((li, idx) => {
				if (idx > 2) {
					li.remove();
				}
			})
			// 출력
			result.forEach(reply => {
				document.querySelector('div.content ul').appendChild(makeLi(reply));
			});
			showPagingListFnc()
		}, // 성공 처리 됐을 때 실행 함수 
		function(err) {
			console.log(err)
		}// 실패했을 때 실행 함수
	);

}

