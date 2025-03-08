document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".grid__item-img");
    let index = 0;

    function showNextImage() {
        if (index < images.length) {
            images[index].classList.add("visible"); // Hiển thị ảnh tiếp theo
            index++; // Chuyển sang ảnh kế tiếp
        }
    }

    setInterval(showNextImage, 2000); // Hiển thị từng ảnh sau mỗi 2 giây
});
