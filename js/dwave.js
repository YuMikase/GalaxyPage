function dwave() {
    var keyval = location.search.split(/[?=&]/);
    var n_sq = Number(keyval[2]);
    var sqsize = Number(keyval[4]);
    var sq_margin = Number(keyval[6]);
    var sound_speed = Number(keyval[8]);
    var system_speed = Number(keyval[10]);
    var sq_rows = Number(keyval[12]);
    document.write("<div id='dwave_area' style='height:" + ((sqsize + sq_margin * 2) * sq_rows)+"px;width: 800px;margin:10px;overflow:hidden;'>");
    for (n = 0; n < sq_rows; n++) {
        document.write("<div id='dwave_sqs' style='height:" + (sqsize + sq_margin*2) +"px;width: 800px;'>");
        for (i = 0; i < n_sq; i++) {
            document.write("<div id='dwave_sq"+n+"' style='float:left;background-color:black; margin:" + sq_margin
                + "px;height:" + sqsize + "px;width:" + sqsize + "px;'></div>");
        }
        anime({
            targets: "#dwave_sq" + n,
            translateX: 20,
            delay: anime.stagger(1000 / sound_speed),
            loop: true
        })
        document.write("</div>");
    }
    anime({
        targets: "#dwave_sqs",
        translateX: 100,
        duration: (1000 / sound_speed) * (n_sq-1) + 1000 ,
        easing: "linear",
        loop: true
    })
    document.write("</div>");
    
    
}



function dwaves(num_of_sq, sq_size, sq_margin, sound_speed, system_speed) {
    var default_delay = 500;
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
            endDelay: 1000 / sound_speed * (num_of_sq - i),
            loop:true
        })
    }
    document.write("</div>");
    anime({
        targets: "#pars",
        translateX: system_speed,
        duration: 1000 / sound_speed * num_of_sq + 1000 + default_delay,
        easing: "linear",
        loop:true
    })
}

function minusdwaves(num_of_sq, sq_size, sq_margin, sound_speed, system_speed) {
    var default_delay = 500;
    var arr = [...Array(num_of_sq).keys()]
    document.write("<div id='pars' style='width:" + (sq_margin * 2 + sq_size) * (num_of_sq + 1)
        + "px;height:" + (sq_margin * 2 + sq_size) + "px;margin:" + sq_margin + "px;'>");
    for (i = 0; i < num_of_sq; i++) {
        document.write("<div id='par" + arr[i]
            + "' style='width:" + sq_size + "px;height:" + sq_size + "px;background:black;float:left;margin:" + sq_margin + "px;'></div>");
        anime({
            targets: "#par" + arr[i],
            translateX: -sq_margin * 2,
            duration: 1000,
            delay: 1000 / sound_speed * (num_of_sq - i) + default_delay,
            endDelay: 1000 / sound_speed * i,
            loop: true
        })
    }
    document.write("</div>");
    anime({
        targets: "#pars",
        translateX: system_speed,
        duration: 1000 / sound_speed * num_of_sq + 1000 + default_delay,
        easing: "linear",
        loop: true
    })
}




