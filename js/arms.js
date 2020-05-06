function armss() {
    var n = 100;
    var fsize = 6;
    var dsize = 5;
    var alpha = 1.2;
    var nrot = 100;
    var time = 10000;
    var dtime = 100;
    var size = fsize
    var max_size = fsize + n * dsize;
    var name = gal;
    for (i = 1; i <= n; i++) {
        document.write("<img src='cont/img/" + name
            + ".png' id='img" + i
            + "'"
            + ">");
    }
    for (i = 1; i <= n; i++) {
        size = fsize + dsize * i;
        var img_gal = document.getElementById('img' + i);
        img_gal.height = size;
        img_gal.width = size;
        img_gal.style.position = "absolute";
        img_gal.style.top = 30 + (max_size * alpha - size) / 2 + "px";
        img_gal.style.left = (max_size - size) / 2 * alpha + "px";
        img_gal.style.opacity = 1.0 - i / n;

        anime({
            targets: '#img' + i,
            rotate: nrot * 360,
            scaleX: {value:'*=1.2' , delay: dtime * i},
            duration: time * 1000,
            loop: true
        });
    }
}



