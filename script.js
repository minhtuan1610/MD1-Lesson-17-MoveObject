/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;' + ' position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += 1;
        console.log('ok: ' + this.left);
    }
    this.moveDown = function () {
        this.top += 1;
        console.log('ok: ' + this.top);
    }
    this.moveLeft = function () {
        this.left -= 1;
        console.log('ok: ' + this.left);
    }
    this.moveUp = function () {
        this.top -= 1;
        console.log('ok: ' + this.top);
    }

}

let hero = new Hero('pikachu.png', 20, 30, 200);

function start() {
    if (hero.left < window.innerWidth - 220) {
        hero.moveRight();
    } else {
        start2();
        return true;
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 50)
}

function start2() {
    if (hero.top < window.innerHeight - 220) {
        hero.moveDown();
    } else {
        start3();
        return true;
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start2, 50)
}

function start3() {
    if (hero.left > 0) {
        hero.moveLeft();
    } else {
        start4();
        return true;
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start3, 50)
}

function start4() {
    if (hero.top > 0) {
        hero.moveUp();
    } else {
        start();
        return true;
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start4, 50)
}

start();