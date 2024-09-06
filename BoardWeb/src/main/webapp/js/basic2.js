/**
 * basic2
 */

 let students = [
	 {sno:111, sname:'강동원', score:90},
	 {sno:112, sname:'정해인', score:80},
	 {sno:113, sname:'김선호', score:70}
 ]
 
 let table = document.createElement('table');
 table.setAttribute('border', 2)
 
 for(let student of students){
	 let tr = document.createElement('tr');
	 
	 for(let prop in student){
		 let td = document.createElement('td');
		 td.innerHTML = student[prop];
		 tr.appendChild(td);
		 //console.log(`속성: ${prop}, 값: ${student[prop]}`)
	 } 
	 table.appendChild(tr);
 }
 document.querySelector('#show').appendChild(table);