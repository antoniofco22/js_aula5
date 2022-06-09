function op(){
	data = document.querySelector('#date').value;
	
	const d = new Date(data);

	//
	day = d.getDate();
	month = d.getMonth();
	year = d.getFullYear();
	week = d.getDay();
	
	result = document.querySelector('.result');
	switch(week) {
		case 1:
			week = 'segunda';
			break;
		case 2:
			week = 'terça';
			break;
		case 3:
			week = 'quarta';
			break;
		case 4:
			week = 'quinta';
			break;
		case 5:
			week = 'sexta';
			break;
		case 6:
			week = 'sabado';
			break;
		default:
			week = 'domingo';
	}
	
	switch(month) {
		case 1:
			month = 'fevereiro';
			break;
		case 2:
			month = 'março';
			break;
		case 3:
			month = 'abril';
			break;
		case 4:
			month = 'maio';
			break;
		case 5:
			month = 'junho';
			break;
		case 6:
			month = 'julho';
			break;
		case 7:
			month = 'agosto';
			break;
		case 8:
			month = 'setembro';
			break;
		case 9:
			month = 'outubro';
			break;
		case 10:
			month = 'novembro';
			break;
		case 11:
			month = 'dezembro';
			break;
		default:
			month = 'janeiro';
	}
	result.innerHTML = '<p>'+day+',</p>'+'<p>'+d.getMonth()+',</p>'+'<p>'+year+',</p>'+'<p>'+week+',</p>'+'<p>'+month+',</p>'+'<p>'+d+'.</p>';
}

function back(){
al = document.querySelector('#all');
array = ['https://img.freepik.com/vetores-gratis/wallpaper-de-paisagem-em-design-plano_74890-34.jpg?w=2000',
'https://www.10wallpaper.com/wallpaper/1366x768/1610/Canada_Harrison_Lake_Beautiful_Landscape_Wallpaper_13_1366x768.jpg',
'https://images7.alphacoders.com/423/423348.jpg'];
x = parseInt(Math.random()*3)
al.style.background = "url('"+array[x]+"')";
}

window.onload = function(){
back();
};