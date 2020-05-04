function dwaves(num_of_sq, sq_size, sq_margin, sound_speed) {
    var default_delay = 100;
    var arr = [...Array(num_of_sq).keys()]
    document.write("<div id='pars' style='width:" + (sq_margin*2+sq_size)*(num_of_sq+1)
        + "px;height:" + (sq_margin * 2 + sq_size) + "px;margin:" + sq_margin+"px;'>");
    for (i = 0; i < num_of_sq; i++) {
        document.write("<div id='par" + arr[i]
            + "' style='width:" + sq_size + "px;height:" + sq_size + "px;background:black;float:left;margin:" + sq_margin+"px;'></div>");
        anime({
            targets: "#par" + arr[i],
            translateX: sq_margin*2,
            duration: 1000,
            delay: 1000 / sound_speed * i + default_delay,
            endDelay: 1000/sound_speed * (num_of_sq - i),
            loop:true
        })
    }
    document.write("</div>");
    anime({
        targets: "#pars",
        translateX: (sq_margin*2 + sq_size) * num_of_sq/2,
        duration: 1000 / sound_speed * num_of_sq + 1000 + default_delay,
        easing: "linear",
        loop:true
    })
}



