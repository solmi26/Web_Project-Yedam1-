/**
 * basic3 
 */

 document.querySelector('#addBtn').addEventListener('click', function(){	 
	 let obj = {
		 id : document.querySelector('#id').value,
		 name : document.querySelector('#name').value,
		 point : document.querySelector('#point').value
	 }
	 
	let tr = document.createElement('tr');
	
	for(let item in obj){
	 let td = document.createElement('td');
     td.innerHTML = obj[item];
     tr.appendChild(td);	
	}
	 
	 document.querySelector('#list').append(tr);
	 
	 	document.querySelector('#id').value = '';
		document.querySelector('#name').value = '';
		document.querySelector('#point').value = '';
	 
	 
 });