/**
 * basic4
 */

 console.log(json);
 
 let data = JSON.parse(json); // 문자열 -> 객체 변경
 
 console.log(data);
 
 data.forEach(function(item,idx,ary){
	 if(item.salary >= 8000 && item.gender == 'Female'){
		 console.log(item);
	 }
 });
 
let result =  data.filter(function(item,idx,ary){
	 if(item.salary >= 8000 && item.gender == 'Female'){
		 //console.log(item);
		  return true;
	 } 
	
 });
 
 // 검색 클릭 이벤트
 document.getElementById('searchBtn').addEventListener('click', function(e){
	 let salary = document.getElementById('salary').value;
	 let gender = document.getElementById('gender').value;
	 console.log(salary, gender);
	 
	 let result = data.filter(function(item, idx, ary){
		 if(item.salary >= salary && item.gender == gender){
			 return true;
		 }
	 });
	 console.log(result)
 })