function getscrollbarWidth() {
    const outer = document.createElement('div');

    outer.style.position = 'adsolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';
    document.body.appendChild(outer);
    const scrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollbarWidth;
};

export default function compensateScrollbarWidth() {
    if(document.body.offsetHeight > document.documentElement.clientHeight) {
        document.querySelector('.container').style.marginRight = '';
        document.querySelector('.container').style.paddingRight = '';
    } else {
        document.documentElement.clientWidth > 1440
        ? document.querySelector('.container').style.marginRight = `${getscrollbarWidth()}px`
        : document.querySelector('.container').style.paddingRight = `${getscrollbarWidth()}px`;
    }
};

