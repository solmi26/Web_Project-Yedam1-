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