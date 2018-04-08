$(function () {
    initBackTopButton();

    function initBackTopButton() {
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
    }
});