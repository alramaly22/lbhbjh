let stars = document.getElementById('stars');
let moon2 = document.getElementById('moon2');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let nou = document.querySelector('.nou');
let home = document.getElementById('home')
onscroll = function() {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon2.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river5.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';
    nou.style.fontSize = value + 'px';
    if (scrollY >= 67) {
        nou.style.fontSize = 67 + 'px';
        nou.style.position = 'fixed';

        if (scrollY >= 478) {
            nou.style.display = 'none'
        } else {
            nou.style.display = 'block'
        }

        if (scrollY >= 134) {
            document.querySelector('.main').style.background = 'linear-gradient(#04447, #10001f)'
        } else {
            document.querySelector('.main').style.background = 'linear-gradient(#000000, #10001f)'
        }

        if (scrollY >= 708) {
            document.querySelector('.header').style.backgroundColor = '#57228534'
            document.querySelector('.header').style.borderRadius = '20px'
            document.querySelector('.header').style.padding = '20px'
        } else {
            document.querySelector('.header').style.backgroundColor = 'transparent'
        }
    }



}

function up() {
    scroll({ top: 0 })

    document.querySelector('.main').style.background = 'linear-gradient(#000000, #10001f)'

    document.querySelector('.header').style.backgroundColor = 'transparent'


}