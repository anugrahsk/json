var tag=[
	  "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "Guardians of the Galaxy Vol. 2",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
	  ];

$(document).ready(() => {
	
	$("#level").autocomplete({
	source:tag
	});
	
		$("sb").on("click",function(e){
		e.preventDefault();
		});
		$('#sb').click(function(){
			getAllData();
		});
	/*getAllData();*/
});
	
function getAllData(){
	console.log("making request")
	
	$.ajax({
		type:'GET',
		datatype:'JSON',
		async: true,
		url: 'http://www.omdbapi.com/?i=tt3896198&apikey=72b7321f',
		method:'GET',
		success:(response)=>{
			console.log(response);
			
		}
		
	
	});
}
