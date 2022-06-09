function op(){
	car = parseInt(document.querySelector('#cars').value);
	
	result = document.querySelector('.result');
	switch(car) {
		case 1:
			car = 'https://static8.depositphotos.com/1003800/983/i/600/depositphotos_9836343-stock-photo-march-31st-beesd-the-netherlands.jpg';
			break;
		case 2:
			car = 'https://4.bp.blogspot.com/-YWX49-tssC8/V2qwaS_nDLI/AAAAAAAAyGM/altsby7klyoHSkSJDcfGbcq1d1ULU4yqACLcB/s1600/Saab-95%2B%25286%2529.jpg';
			break;
		case 3:
			car = 'https://www2.mercedes-benz.com.br/passengercars/mercedes-benz-cars/models/e-class/saloon-w213-fl/amg/exterior-design/_jcr_content/par/productinfotabnav/tabnav/productinfotabnavite_1951209224/tabnavitem/videoimageslider/slides/videoimageslide/image.MQ6.12.20210310112112.jpeg';
			break;
		case 4:
			car = 'https://static.poder360.com.br/2021/02/Audi-anuncia-paralisacao-Brasil.jpeg';
			break;
		default:
			car = 'https://www.canaldapeca.com.br/blog/wp-content/uploads/2014/01/Curiosidades-Canal-da-Pe%C3%A7a-A-hist%C3%B3ria-do-Camaro.jpg';
	}
	result.innerHTML = '<img src='+car+'>';
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