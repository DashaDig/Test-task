
document.querySelector('.arrow-prev-right').onclick = function() {
    if (document.querySelector('.left .slider-item').style.display ==='flex'){
        document.querySelector('.left .slider-item').style.display='none';
        document.querySelector('.left .slider-item-two').style.display='none';
        document.querySelector('.middle .slider-item').style.display='flex';
        document.querySelector('.middle .slider-item-two').style.display='block';
        rad2.checked = true;
    }
    else{
        document.querySelector('.middle .slider-item').style.display='none';
        document.querySelector('.middle .slider-item-two').style.display='none';
        document.querySelector('.left .slider-item').style.display='flex';
        document.querySelector('.left .slider-item-two').style.display='block';
        rad1.checked = true;
    }
}

document.querySelector('.arrow-prev-left').onclick = function() {
    if (document.querySelector('.left .slider-item').style.display ==='flex'){
        document.querySelector('.left .slider-item').style.display='none';
        document.querySelector('.left .slider-item-two').style.display='none';
        document.querySelector('.middle .slider-item').style.display='flex';
        document.querySelector('.middle .slider-item-two').style.display='block';
        rad2.checked = true;
    }
    else{
        document.querySelector('.middle .slider-item').style.display='none';
        document.querySelector('.middle .slider-item-two').style.display='none';
        document.querySelector('.left .slider-item').style.display='flex';
        document.querySelector('.left .slider-item-two').style.display='block';
        rad1.checked = true;
    }
}

document.querySelector('#rad1').onclick = function() {
    document.querySelector('.middle .slider-item').style.display='none';
    document.querySelector('.middle .slider-item-two').style.display='none';
    document.querySelector('.left .slider-item').style.display='flex';
    document.querySelector('.left .slider-item-two').style.display='block';
}

document.querySelector('#rad2').onclick = function() {
    document.querySelector('.left .slider-item').style.display='none';
    document.querySelector('.left .slider-item-two').style.display='none';
    document.querySelector('.middle .slider-item').style.display='flex';
    document.querySelector('.middle .slider-item-two').style.display='block';
}