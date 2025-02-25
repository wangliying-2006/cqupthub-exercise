document.addEventListener("DOMContentLoaded", function () {
    const box = document.querySelector(".box");
    const boxImgs = document.querySelectorAll(".box-img");
    const boxLeft = document.querySelector(".box-left");
    const boxRight = document.querySelector(".box-right");
    const boxZhiding = document.querySelector(".box-zhiding ul");
    const buttons = document.querySelectorAll(".botton");
    let currentIndex = 0;
    let intervalId;

    // 显示指定索引的图片
    function showImage(index) {
        if (index >= boxImgs.length) index = 0;
        if (index < 0) index = boxImgs.length - 1;

        boxImgs.forEach((img, i) => {
            img.style.transition = "transform 0.5s ease";
            img.style.transform = `translateX(${(i - index) * 100}%)`;
        });

        buttons.forEach((btn, i) => {
            btn.classList.toggle("active", i === index);
        });

        currentIndex = index;
    }

    // 显示下一张图片
    function nextImage() {
        showImage(currentIndex + 1);
    }

    // 显示上一张图片
    function prevImage() {
        showImage(currentIndex - 1);
    }

    // 点击指示器按钮切换到指定图片
    boxZhiding.addEventListener("click", function (e) {
        if (e.target.classList.contains("botton")) {
            const newIndex = Array.from(buttons).indexOf(e.target);
            showImage(newIndex);
        }
    });

    // 绑定左右箭头的点击事件
    boxLeft.addEventListener("click", prevImage);
    boxRight.addEventListener("click", nextImage);

    // 鼠标拖动切换图片
    let startX, moveX, isDragging = false;

    box.addEventListener("mousedown", function (e) {
        startX = e.clientX; // 记录鼠标按下时的初始位置
        isDragging = true; // 标记正在拖动
        box.style.cursor = "grabbing"; // 改变鼠标光标样式
    });

    box.addEventListener("mousemove", function (e) {
        if (!isDragging) return;

        moveX = e.clientX - startX; // 计算鼠标移动的距离
        boxImgs.forEach((img, i) => {
            img.style.transition = "none"; // 禁用过渡效果，实现实时拖动
            img.style.transform = `translateX(${(i - currentIndex) * 100 + moveX / box.offsetWidth * 100}%)`;
        });
    });

    box.addEventListener("mouseup", function (e) {
        if (!isDragging) return;

        isDragging = false; // 结束拖动
        box.style.cursor = "default"; // 恢复鼠标光标样式

        if (Math.abs(moveX) > 40) { // 判断移动距离是否超过40px
            if (moveX > 0) {
                prevImage(); // 向右拖动，显示上一张
            } else {
                nextImage(); // 向左拖动，显示下一张
            }
        } else {
            // 如果移动距离不足40px，恢复到原始位置
            showImage(currentIndex);
        }
    });

    // 开始自动播放
    function startAutoPlay() {
        intervalId = setInterval(nextImage, 3000);
    }

    // 停止自动播放
    function stopAutoPlay() {
        clearInterval(intervalId);
    }

    // 鼠标移入时停止自动播放
    box.addEventListener("mouseenter", stopAutoPlay);
    // 鼠标移出时恢复自动播放
    box.addEventListener("mouseleave", startAutoPlay);

    // 初始化自动播放
    startAutoPlay();
});