
document.addEventListener("DOMContentLoaded", function(){


//znikajacy textbox na obrazkach

  var txtBox1 = document.querySelector("#txt_box1");
  console.log(txtBox1);
  var txtBox2 = document.querySelector('#txt_box2');
  console.log(txtBox2);


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




});
