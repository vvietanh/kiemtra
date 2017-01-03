function js_style() {
	document.getElementById("changeColorDiv").style.backgroundColor = 'lightblue';
}

function changecolorp() {
	document.getElementById("p1").className ="myclass";
	document.getElementById("p2").className ="myclass";
}

function insert_Row(){
	document.getElementById("sampleTable").insertRow(-1).innerHTML='<td>New Row</td>'+ '<td>New Row</td>'
}

function myFunction() {
    var x,y,z, textX, textY, textZ;


    x = document.getElementById("numb1").value;
	y = document.getElementById("numb2").value;
	z = document.getElementById("numb3").value;

    if (x == "") {
        text = "A number is requied";
    }
	
	if (y%10 != 0) {
        text = "so phai chi het cho 10";
    }
	
	if (z.length() < 7) {
        text = "it nhat co 7 chu so";
    }
	
    document.getElementById("demo1").innerHTML = textX;
	document.getElementById("demo2").innerHTML = textY;
	document.getElementById("demo3").innerHTML = textZ;
}