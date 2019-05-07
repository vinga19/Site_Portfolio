
/*
var test = document.getElementById("logo")

var logo1 = "logo_rcs3.png"
var logo2 = "logo_rcs3_white.png"
function trocar(){
	src_logo = document.getElementById("logo").src.split("/");
	len_logo = src_logo.length;
	if(src_logo[len_logo-1]==logo1)
		{
			test.src = "./img/"+logo2;
			console.log("Logo 2");
		}else {
		test.src = "./img/"+logo1;
		console.log("Logo 1");
	return test;

	}
}

*/
var mostra = true;

function trocar(){
	mostra = !mostra;
	console.log(mostra)
	if(mostra == false){
		document.getElementById('text1').style.display = "none";
		document.getElementById('text2').style.display = "block";
	}else if(mostra == true){
		document.getElementById('text1').style.display = "block";
		document.getElementById('text2').style.display = "none";
	}
	
}


