/* actor https://github.com/MiladiCode/Movie-Website*/
//gọi giá trị từ html
let Nextfilm = document.getElementById('next');
let previewfilm = document.getElementById('preview');

let carouselDom = document.querySelector('.show');
let SliderDom = carouselDom.querySelector('.show .list');
let thumbnailBorderDom = document.querySelector('.show .thumnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.show .time');

//add giá trị vào string
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
//set thời gian chạy của slide
let timeRunning = 2000;
//event khi click vào button sẽ gọi ra hàm
Nextfilm.onclick = function(){
    showSlider('next');    
}

previewfilm.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
//Hàm cho event click button
function showSlider(type){
    //khai báo giá trị
    let  SliderItemsDom = SliderDom.querySelectorAll('.show .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.show .thumnail .item');
    
    if(type === 'next'){
        //thêm một phần tử làm con của phần tử cuối cùng vào id slider và nó là giá trị đầu của string
        SliderDom.appendChild(SliderItemsDom[0]);
        
        //thêm một phần tử làm con của phần tử cuối cùng vào id thumbnail và nó là giá trị đầu của string
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        
        carouselDom.classList.add('next');

        
    }else{
        //chèn thêm phần tử vào silederdomme và thumbnail với vị trị cuối cùng
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        
        carouselDom.classList.add('prev');

    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

}
