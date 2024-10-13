

function changeImgOp(weather){
  
    const imageOp = document.getElementById('weather-image');

    if(weather == 'summer'){

        imageOp.src = './images/beautiful-tropical-beach-sea-with-chair-blue-sky.jpg';
    }else if(weather == 'winter'){

        imageOp.src = './images/minimalist-photorealistic-road.jpg';
    }else if(weather == 'mansoon'){

        imageOp.src = './images/weather-effects-composition.jpg';
    }

}