$(function () {
  //initialize swiper when document ready
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    setWrapperSize: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  window.addEventListener("scroll", function () {
    var scrollHeight = document.documentElement.scrollTop;
    var ele = document.querySelector(".backToTop");
    if (scrollHeight > 100) {
      ele.style.display = 'inline'; // Show
    } else {
      ele.style.display = 'none'; // Hide
    }
  });

  var backToTopButton = document.querySelector(".backToTop");
  backToTopButton.addEventListener("click", function () {
    window.scrollTo(0, 0);
  }, false);


  var modal = document.getElementById('myModal'); // Get the modal
  var bestSellItems = document.querySelectorAll(".bestSellItem"); // Get the button that opens the modal
  var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
  var closeButton = document.querySelector(".footer-close-button"); // Get the <span> element that closes the modal

  // When the user clicks on the button, open the modal
  for (let i = 0; i < bestSellItems.length; i++) {
    const bestSellItem = bestSellItems[i];
    bestSellItem.addEventListener('click', (e) => {
      console.log(e.eventPhase);
      let bsetSellList = [{
          name: "茄(牛/雞)燴麵",
          img: "Menu_SpicyKoreanBeef.png",
          info: "<p>叫我第一名</p>"
        },
        {
          name: "咖哩(牛/雞)燴麵",
          img: "Menu_SpicyKoreanBeef.png",
          info: "<p>叫我第二名</p>"
        },
        {
          name: "紅趜(牛/雞)燴麵",
          img: "Menu_SpicyKoreanBeef.png",
          info: "<p>叫我第三名</p>"
        },
        {
          name: "黯然銷魂(牛/雞)飯",
          img: "Menu_SpicyKoreanBeef.png",
          info: "<p>叫我第四名</p>"
        },
        {
          name: "誠實豆沙(牛/雞)包",
          img: "Menu_SpicyKoreanBeef.png",
          info: "<p>叫我第五名</p><第二段話>"
        }
      ];
      var index = Number(e.currentTarget.getAttribute("index"));
      var food = bsetSellList[index];
      var title = document.querySelector(".modal-header h1");
      var img = document.querySelector(".modal-body img");
      var info = document.querySelector(".modal-body p");
      title.textContent = food.name;
      img.src = "./image/" + food.img;
      info.outerHTML = food.info;

      modal.style.display = "block";
    }, false)
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
  closeButton.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});