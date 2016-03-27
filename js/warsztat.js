
document.addEventListener("DOMContentLoaded", function(){


//znikajacy textbox na obrazkach

  var txtBox1 = document.querySelector("#txt_box1");
  // console.log(txtBox1);
  var txtBox2 = document.querySelector('#txt_box2');
  // console.log(txtBox2);


  txtBox1.addEventListener('mouseover', function(event){
    this.style.display = "none";
  });
  txtBox1.addEventListener('mouseout', function(event){
    this.style.display = "block";
  });

  txtBox2.addEventListener('mouseover', function(event){
    this.style.display = "none";
  });
  txtBox2.addEventListener('mouseout', function(event){
    this.style.display = "block";
  });

  //dropDown menu

  var listItem = document.querySelectorAll('.nav > ul > li');

  for(var i = 0; i<listItem.length; i++){
    listItem[i].addEventListener('mouseover', function(event){
     if(this.children.length !== 0 ){
       this.children[0].style.display = "block";
     }
  });
};
for(var i = 0; i<listItem.length; i++){
  listItem[i].addEventListener('mouseout', function(event){
   if(this.children.length !== 0 ){
     this.children[0].style.display = "none";
   }
 });
};

//big slider section1

var bigGallery = document.querySelector('.section1_gallery');
var galleryList = document.querySelectorAll('.section1_gallery li');
var forward = document.querySelector('#section1_right');
var previous = document.querySelector('#section1_left');
var activePicIndex2 = 0;

galleryList[activePicIndex2].classList.add('visible');

forward.addEventListener('click', function(event){
  galleryList[activePicIndex2].classList.remove('visible');
  activePicIndex2++;

  if(activePicIndex2 >= galleryList.length){
    activePicIndex2 = 0;
  }
  galleryList[activePicIndex2].classList.add('visible');
});

previous.addEventListener('click', function(event){
  galleryList[activePicIndex2].classList.remove('visible');
  activePicIndex2--;

  if(activePicIndex2 < 0 ){
    activePicIndex2 = galleryList.length - 1;
  }
  galleryList[activePicIndex2].classList.add('visible');
});

// maly slider na dole

var sliderBox = document.querySelector('.slider');
var imgList = document.querySelectorAll('.slider li');
var nextButton = document.querySelector('.slider #nextPicture');
var prevButton = document.querySelector('.slider #prevPicture');
var activePicIndex = 0;

imgList[activePicIndex].classList.add('visible');


nextButton.addEventListener('click', function(event){
  imgList[activePicIndex].classList.remove('visible');
  activePicIndex++;

  if(activePicIndex >= imgList.length){
    activePicIndex = 0;
  }
  imgList[activePicIndex].classList.add('visible');
});

prevButton.addEventListener('click', function(event){
  imgList[activePicIndex].classList.remove('visible');
  activePicIndex--;

  if(activePicIndex < 0 ){
    activePicIndex = imgList.length - 1;
  }
  imgList[activePicIndex].classList.add('visible');
});














































});
