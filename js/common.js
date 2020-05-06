//目次のリストを設定
var contents_list = ['Home', '楕円銀河について', '渦巻銀河について', '密度波（アニメーション）'];
//それぞれのhtmlファイル名
var contents_list_file = ['index', 'ellipse', 'spiral', 'dwave'];
//目次の要素数を取得
var cont_len = contents_list.length;


/*----------題と目次の出力----------*/
function out_contents(n) {
    document.write("<h1>" + contents_list[n] + "</h1><div id='contents'>");
    for (var i = 0; i < cont_len; i++) {
        if (i == n) {
            var m = 'bor';
        }else{ var m = 'nbor'}
        document.write(
            "<a  href='" + contents_list_file[i] + ".html'><p id='" + m + "'>"
            + contents_list[i]
            + "</p></a>");
    }
    document.write("</div>");
}

/*----------題と目次の出力（アニメーション版）----------*/
function out_contents_ani(n) {
    /*アニメーションの秒数*/
    var dura = 1000;
    /*nav部分の高さ*/
    var nav_height = 250;
    /*要素の生成*/
    document.write("<nav><p id='nav_title'>目次</p><ul>");
    for (i = 0; i < contents_list.length; i++) {
        if (i == n) {
            var m = 'bor';
        } else { var m = 'nbor' }
        document.write("<li id='" + m + "'><a href='" + contents_list_file[i] + ".html'>" + contents_list[i]
            + "</a></li> ");
    }
    /*アニメーションの設定*/
    var navani = anime.timeline({
        autoplay: false
    });
    navani
        .add({
            targets: "nav",
            opacity: [0.0, 1.0],
            height: [0, nav_height],
            duration: dura*0.7,
        })
        .add({
            targets: "nav > ul > li",
            opacity: { value: [0.0, 1.0], duration: dura, delay: anime.stagger(100) },
            translateY: { value: 30, duration: dura, delay: anime.stagger(100) },
            rotateX: { value: 360, duration: dura, delay: anime.stagger(100) }
        });
    document.write("</ul></nav>");
    document.querySelector('#navani_player').onclick = navani.play;
}


/*----------フッターの出力----------*/
function out_footer() {
    document.write("<footer><small>&copy; 2020 Yu Mikase.</small ></footer >");
}