$(function () {

  initModal();

  function initModal() {
    var modal = document.getElementById('myModal'); // Get the modal
    var foodItems = document.querySelectorAll("[openFoodModal]"); // Get the button that opens the modal
    var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
    var closeButton = document.querySelector(".footer-close-button"); // Get the <span> element that closes the modal

    // When the user clicks on the button, open the modal
    for (let i = 0; i < foodItems.length; i++) {
      const foodItem = foodItems[i];
      foodItem.addEventListener('click', (e) => {
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
        var index = Number(e.currentTarget.getAttribute("openFoodModal"));
        var food = bsetSellList[index];
        var title = document.querySelector(".modal-header h1");
        var img = document.querySelector(".modal-body img");
        var info = document.querySelector(".modal-body .infoParent");
        title.textContent = food.name;
        img.src = "./image/" + food.img;
        info.innerHTML = food.info;

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
  }
});