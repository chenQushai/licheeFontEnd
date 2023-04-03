const drag = (el) => {
    let oDiv = el; //当前元素
    oDiv.onmousedown = function (e) {
        //鼠标按下，计算当前元素距离可视区的距离
        let disX = e.clientX - oDiv.offsetLeft;
        let disY = e.clientY - oDiv.offsetTop;
        document.onmousemove = function (e) {
            //通过事件委托，计算移动的距离
            let l = e.clientX - disX;
            let t = e.clientY - disY;
            //移动当前元素
            oDiv.style.left = l + "px";
            oDiv.style.top = t + "px";
        }
        document.onmouseup = function (e) {
            document.onmousemove = null;
            document.onmouseup = null;
        };
        //return false不加的话可能导致黏连，就是拖到一个地方时div粘在鼠标上不下来，相当于onmouseup失效
        return false;
    };
};

const pop = (el) => {
    el.addEventListener('click', () => {
        let parent = el.parentElement || el.parentNode;
        const node = document.createElement('div');
        node.style.padding = '10px';
        node.style.height = '20px';
        node.style.backgroundColor = '#303133';
        node.style.color = '#fff';
        node.style.position = 'absolute';
        node.style.borderRadius = '4px';
        node.innerText = '您输入的信息有误';
        node.style.fontSize = '12px';
        node.style.lineHeight = '1.2px';
        node.style.top = `${Math.ceil(el.getBoundingClientRect().y) + document.documentElement.scrollTop}px`;
        node.style.left = `${Math.ceil(el.getBoundingClientRect().x)}px`;
        node.style.marginTop = `${el.getBoundingClientRect().height + 5}px`;
        node.style.zIndex = "2020";

        parent.appendChild(node);

        let scrollTop = 0;
        let parentNode = '';
        //滚动事件
        const scrollFun =  () =>{
            node.style.top = `${Math.ceil(el.getBoundingClientRect().y)}px`;
        };

        //查找出现滚动的父级
        const getParentScrollTop = (element) => {
            let parent = element.parentElement || element.parentNode;
            if (parent.scrollTop === 0) {
                getParentScrollTop(parent)
            }
            else {
                scrollTop = parent.scrollTop;
                parentNode = parent;
                parentNode.addEventListener('scroll',scrollFun)
            }
        };
        getParentScrollTop(el);
        setTimeout(() => {
            if (parentNode) {
                parentNode.removeEventListener('scroll',scrollFun)
            }
            parent.removeChild(node)
        },1500)
    });
};

export default {
    drag,
    pop,
}