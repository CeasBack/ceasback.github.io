function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var date = new Date();
var y = date.getFullYear();
var m = date.getMonth();
//y = 2019;
//m = 9;
var firstDate = new Date(y,m,1);
var lastDate = new Date(y,m+1,0);
var firstDay = firstDate.getDay();
var lastDay = lastDate.getDate();
var Today = date.getDate();
var refresh_counter = 0;
async function init_cal() {
	var i = 0;
	var id_num = 'day';
	var marker = '';
	i_temp2 = 0;
	i_temp = 0;
	fillDate = 10;
	for (var i = 0; i < lastDay ; i++) {
		fillDate = i + 1;
		if (fillDate == Today) {
			i_temp2 = i_temp + 1;
			document.getElementById("day" + i_temp2).style.color = '#d9cfb6';
		}

		i_temp = i + firstDay + 6;
		document.getElementById("day" + i_temp).textContent = fillDate;
		await sleep(50);
	}
	refresh_counter = refresh_counter + 1;
	try {
		console.log(refresh_counter);
		document.getElementById("count_track").textContent = refresh_counter;
		document.getElementById("time_track").textContent = Date();
	}
	catch(err) {
		//document.getElementById("time_track").textContent = 2;
	}
	await sleep(5000);
	init_cal();
}

//setInterval(init_cal,5000);
init_cal();

//document.getElementById("w3d6").style.color = '#ffffff';
//document.getElementById("w3d6").style.fontWeight = 900;