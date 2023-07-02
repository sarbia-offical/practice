function drag(element) {
    return () => {
        let x, y;
        let stepX,
            stepY,
            lastStepX = 0,
            lastStepY = 0;
        let flag = false;
        element.addEventListener('mousedown', (e) => {
            flag = true;
            let positionArr = getPagePos(e);
            let left = parseInt(getStyles(element, 'left')),
                top = parseInt(getStyles(element, 'top'));
            //left和top是元素距离外层元素的位置
            //x和y是鼠标按下的距离最外层body的偏移值
            x = positionArr[0] - left; //获取鼠标在盒子内的x坐标
            y = positionArr[1] - top; //获取鼠标在盒子内的y坐标
        })
        element.addEventListener('mousemove', moveHandle)
        element.addEventListener('mouseup', upHnadle)
        element.addEventListener('mouseleave', leaveHandle)
    
        function moveHandle(e2) {
            if (flag) {
                const move = e2 || window.event;
                let positionArr2 = getPagePos(e2);
                let newLeft = positionArr2[0] - x;
                let newTop = positionArr2[1] - y;
                stepX = newLeft - lastStepX;
                stepY = newTop - lastStepY;
                lastStepX = newLeft;
                lastStepY = newTop;
                element.style.left = newLeft + 'px';
                element.style.top = newTop + 'px';
            }
        }
    
        function upHnadle(event) {
            flag = false;
            document.removeEventListener('mousemove', moveHandle, false)
            document.removeEventListener('mouseup', upHnadle, false);
            event.stopPropagation();
        }

        function leaveHandle(event){
            flag = false;
            document.removeEventListener('mousemove', moveHandle, false)
            document.removeEventListener('mouseup', upHnadle, false);
            event.stopPropagation();
        }
    }

}

function getPagePos(e) {
    const [
        sLeft,
        sTop
    ] = getScrolllOffset();

    // 文档偏移值
    const cLeft = document.documentElement.clientLeft || 0;
    const cTop = document.documentElement.clientTop || 0;
    return [
        e.clientX + sLeft - cLeft,
        e.clientY + sTop - cTop
    ]
}

// 获取页面x轴和y轴滚动的像素
function getScrolllOffset() {
    if (window.pageXOffset) {
        return [
            window.pageXOffset,
            window.pageYOffset
        ]
    } else {
        return [
            document.body.scrollLeft + document.documentElement.offsetLeft,
            document.body.scrollTop + document.documentElement.offsetTop
        ]
    }
}

function getStyles(dom, prop) {
    if (window.getComputedStyle) {
        if (prop) {
            return window.getComputedStyle(dom, null)[prop];
        } else {
            return window.getComputedStyle(dom, null);
        }
    } else {
        if (prop) {
            return dom.currentStyle[prop];
        } else {
            return dom.currentStyle;
        }
    }
}