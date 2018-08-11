/* 
   Author:   khoo jing jie
 */
var selectedTab = document.querySelector(".tab0");
var Tab1 = document.querySelector(".tab1");
var Tab2 = document.querySelector(".tab2");


function tab1Selected(){
    selectedTab.className = "tab1";
    Tab1.className = "tab0";
    Tab2.className = "tab2";
  }
  function tab2Selected(){
    selectedTab.className = "tab1";
    Tab1.className = "tab2";
    Tab2.className = "tab0";
  }
  function tab0Selected(){
    selectedTab.className = "tab0";
    Tab1.className = "tab1";
    Tab2.className = "tab2";
  }


var clickTab1 = Tab1.addEventListener("click",tab1Selected);
var clickTab2 = Tab2.addEventListener("click",tab2Selected);
var clickTab0 = selectedTab.addEventListener("click",tab0Selected);

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg2');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg3');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}