function op(){
	num = parseInt(document.querySelector('#number').value);
	
	if(isNaN(num)){
		return alert('Type number, please!');
	}
	
	result = document.querySelector('.result');
	switch(num) {
		case 1:
			result.innerHTML = "Um";
			break;
		case 2:
			result.innerHTML = "Dois";
			break;
		case 3:
			result.innerHTML = "Três";
			break;
		case 4:
			result.innerHTML = "Quatro";
			break;
		case 5:
			result.innerHTML = "Cinco";
			break;
		case 6:
			result.innerHTML = "Seis";
			break;
		case 7:
			result.innerHTML = "Sete";
			break;
		case 8:
			result.innerHTML = "Oito";
			break;
		case 9:
			result.innerHTML = "Nove";
			break;
		case 10:
			result.innerHTML = "Dez";
			break;
		default:
			result.innerHTML = "Zero";
}
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