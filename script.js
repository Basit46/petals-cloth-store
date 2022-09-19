const imgBox = document.querySelector(".frame1 .img-box");

let counter1 = 0;
function move1() {
  if (counter1 === 0) {
    imgBox.style.transform = "";
    imgBox.style.transform = "translateX(-33.5%)";
    imgBox.style.transition = "1s";
    counter1 += 1;
  } else if (counter1 === 1) {
    imgBox.style.transform = "";
    imgBox.style.transform = "translateX(-66.9%)";
    imgBox.style.transition = "1s";
    counter1 += 1;
  } else {
    imgBox.style.transform = "";
    imgBox.style.transition = "";
    counter1 = 0;
  }
}

setInterval(move1, 2500);

const imgBox2 = document.querySelector(".frame2 .img-box");

let counter2 = 0;
function move2() {
  if (counter2 === 0) {
    imgBox2.style.transform = "";
    imgBox2.style.transform = "translateX(-20%)";
    imgBox2.style.transition = "1s";
    counter2 += 1;
  } else if (counter2 === 1) {
    imgBox2.style.transform = "";
    imgBox2.style.transform = "translateX(-40%)";
    imgBox2.style.transition = "1s";
    counter2 += 1;
  } else if (counter2 === 2) {
    imgBox2.style.transform = "";
    imgBox2.style.transform = "translateX(-60%)";
    imgBox2.style.transition = "1s";
    counter2 += 1;
  } else if (counter2 === 3) {
    imgBox2.style.transform = "";
    imgBox2.style.transform = "translateX(-80%)";
    imgBox2.style.transition = "1s";
    counter2 += 1;
  } else {
    imgBox2.style.transform = "";
    imgBox2.style.transition = "";
    counter2 = 0;
  }
}

setInterval(move2, 3000);

//

const show1 = document.querySelector("#show1");

let sho1 = 0;
var stopint1;
show1.addEventListener("mouseover", function () {
  stopint1 = setInterval(() => {
    if (sho1 === 0) {
      show1.src = "images/slideImgs/image 42.png";
      sho1 += 1;
    } else if (sho1 === 1) {
      show1.src = "images/slideImgs/image 43.png";
      sho1 += 1;
    } else if (sho1 === 2) {
      show1.src = "images/menImgs/image 29.png";
      sho1 = 0;
    }
  }, 2000);
});
show1.addEventListener("mouseout", function () {
  clearInterval(stopint1);
  sho1 = 0;

  show1.src = "images/menImgs/image 29.png";
});

const show2 = document.querySelector("#show2");

let sho2 = 0;
var stopint2;
show2.addEventListener("mouseover", function () {
  stopint2 = setInterval(() => {
    if (sho2 === 0) {
      show2.src = "images/slideImgs2/blue2.png";
      sho2 += 1;
    } else if (sho2 === 1) {
      show2.src = "images/slideImgs2/blue3.png";
      sho2 += 1;
    } else if (sho2 === 2) {
      show2.src = "images/menImgs/image 27.png";
      sho2 = 0;
    }
  }, 2000);
});
show2.addEventListener("mouseout", function () {
  clearInterval(stopint2);
  sho2 = 0;
  show2.src = "images/menImgs/image 27.png";
});

const show3 = document.querySelector("#show3");
let sho3 = 0;
var stopint3;
show3.addEventListener("mouseover", function () {
  stopint3 = setInterval(() => {
    if (sho3 === 0) {
      show3.src = "/images/slideImg3/image 44.png";
      sho3 += 1;
    } else if (sho3 === 1) {
      show3.src = "/images/slideImg3/image 45.png";
      sho3 += 1;
    } else if (sho3 === 2) {
      show3.src = "images/menImgs/image 28.png";
      sho3 = 0;
    }
  }, 2000);
});
show3.addEventListener("mouseout", function () {
  clearInterval(stopint3);
  sho3 = 0;
  show3.src = "images/menImgs/image 28.png";
});

const show4 = document.querySelector("#show4");
let sho4 = 0;
var stopint4;
show4.addEventListener("mouseover", function () {
  stopint4 = setInterval(() => {
    if (sho4 === 0) {
      show4.src = "images/slideImgs4/image 47.png";
      sho4 += 1;
    } else if (sho4 === 1) {
      show4.src = "images/slideImgs4/image 46.png";
      sho4 += 1;
    } else if (sho4 === 2) {
      show4.src = "images/menImgs/image 23.png";
      sho4 = 0;
    }
  }, 2000);
});
show4.addEventListener("mouseout", function () {
  clearInterval(stopint4);
  sho4 = 0;
  show4.src = "images/menImgs/image 23.png";
});

const show5 = document.querySelector("#show5");
let sho5 = 0;
var stopint5;
show5.addEventListener("mouseover", function () {
  stopint5 = setInterval(() => {
    if (sho5 === 0) {
      show5.src = "images/slideImgs5/image 52.png";
      sho5 += 1;
    } else if (sho5 === 1) {
      show5.src = "images/slideImgs5/image 51.png";
      sho5 += 1;
    } else if (sho5 === 2) {
      show5.src = "images/menImgs/image 24.png";
      sho5 = 0;
    }
  }, 2000);
});
show5.addEventListener("mouseout", function () {
  clearInterval(stopint5);
  sho5 = 0;
  show5.src = "images/menImgs/image 24.png";
});

const show6 = document.querySelector("#show6");
let sho6 = 0;
var stopint6;
show6.addEventListener("mouseover", function () {
  stopint6 = setInterval(() => {
    if (sho6 === 0) {
      show6.src = "images/slideImg6/image 50.png";
      sho6 += 1;
    } else if (sho6 === 1) {
      show6.src = "images/slideImg6/image 49.png";
      sho6 += 1;
    } else if (sho6 === 2) {
      show6.src = "images/menImgs/image 25.png";
      sho6 = 0;
    }
  }, 2000);
});
show6.addEventListener("mouseout", function () {
  clearInterval(stopint6);
  sho6 = 0;
  show6.src = "images/menImgs/image 25.png";
});

const bars = document.querySelector("nav .bars");
const links = document.querySelector("nav .links ul");
const linkItems = document.querySelectorAll("nav .links ul li");

bars.addEventListener("click", () => {
  links.classList.toggle("showlinks");
});

linkItems.forEach((item) => {
  item.addEventListener("click", () => {
    links.classList.remove("showlinks");
  });
});
