/**
 * boardTable.js
 */

 const table = new DataTable('#example', {
    ajax: 'replyTable.do?bno='+bno,
     columnDefs: [
        {
            render: (data, type, row) => '<button onclick="deleteRow(event, ' + row.replyNo +')">삭제</button>',
            targets: 4
        },
        //{ visible: false, targets: [3] }
    ],
    columns: [
        { data: 'replyNo' },
        { data: 'reply' },
        { data: 'replyer' },
        { data: 'replyDate' }
    ],
    lengthMenu:[
		[5,10,20,-1],
		[5,10,20,'All']
	],
	order:{
		idx:0,
		dir:'desc'
	}
 
});



// addReply에 클릭.
// replyNo: 111, reply:test, replyer:uer01, replyDate: 2023.11.11
function addNewRow() {
let reply = document.querySelector('#reply').value;
	fetch('addReply.do', {
		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: 'bno=' + bno + '&reply=' + reply + '&replyer=' + writer

	})
	.then(resolve => resolve.json())
	.then(result => {
		if (result.retCode == 'OK') {
			console.log(result)
		    table.row
		        .add({
		            replyNo:result.retVal.replyNo,
		            reply:result.retVal.reply,
		            replyer:result.retVal.replyer,
		            replyDate:result.retVal.replyDate,
		        })
		        .draw(false);
		        }else{
					alert('예외!');
				}		
			})
	.catch(err => console.log(err));

}
 
 
document.querySelector('#addReply').addEventListener('click', addNewRow);

// 단건 삭제 
function deleteRow(e, rno){
	if(e.target.parentElement.parentElement.classList.contains('selected')){
		e.stopPropagation(); // 상위요소로의 이벤트 차단
	}
	
	console.log(e.target.parentElement.parentElement.firstChild)
		let delNum = e.target.parentElement.parentElement.firstChild.innerHTML;
		fetch('removeReply.do?rno=' + delNum )
		.then(resolve => resolve.json())
		.then(result => {
			if (result.retCode == 'OK') {			
				 table.row('.selected').remove().draw(false);
				alert('삭제 완료!');		
			}else{
				alert('예외!');
			}
		
	})
	.catch(err => console.log(err));
	
	console.log(e.target); // button 상위 상위. 첫번째 자식요소.html
}
 
 // 삭제 기능
 let delNum = '';
 document.querySelector('#delReply').addEventListener('click', function(){
	 if(!delNum){
		 alert('삭제할 댓글을 선택하세요.');
		 return;
	 }
	 // Ajax 호출
	fetch('removeReply.do?rno=' + delNum )
		.then(resolve => resolve.json())
		.then(result => {
			if (result.retCode == 'OK') {			
				 table.row('.selected').remove().draw(false);
				alert('삭제 완료!');		
			}else{
				alert('예외!');
			}
		
	})
	.catch(err => console.log(err));
	 
 });
 
 table.on('click', 'tbody tr', (e) => {
    let classList = e.currentTarget.classList;
    delNum = e.currentTarget.firstChild.innerHTML;
 
    if (classList.contains('selected')) {
        classList.remove('selected');
    }
    else {
        table.rows('.selected').nodes().each((row) => row.classList.remove('selected'));
        classList.add('selected');
    }
});
 
document.querySelector('#delReply').addEventListener('click', function () {
    table.row('.selected').remove().draw(false);
});