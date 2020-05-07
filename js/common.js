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
    var nav_height = 70;
    /*要素の生成*/
    document.write("<nav><ul>");
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
            translateY: { value: 15, duration: dura, delay: anime.stagger(100) },
            rotateX: { value: 360, duration: dura, delay: anime.stagger(100) }
        });
    document.write("</ul></nav>");
    document.getElementById('navani_player').onclick = navani.play;
}

/*----------「前」「次」の出力----------*/
function out_prevnext(n) {
    if (n == 0) {
        document.write("<div id='prevnext'>");
        document.write("<div id='prevlink'>");
        document.write("</div>");
        document.write("<div id='homelink'>");
        document.write("</div>");
        document.write("<div id='nextlink'>");
        document.write("<a href='" + contents_list_file[n + 1] + ".html'>→" + contents_list[n + 1] + "</a></div></div>");
    } else if (n == 1) {
        document.write("<div id='prevnext'>");
        document.write("<div id='prevlink'>");
        document.write("<a href='" + contents_list_file[n - 1] + ".html'>←" + contents_list[n - 1] + "</a></div>");
        document.write("<div id='homelink'>");
        document.write("</div>");
        document.write("<div id='nextlink'>");
        document.write("<a href='" + contents_list_file[n + 1] + ".html'>→" + contents_list[n + 1] + "</a></div></div>");
    } else if (n == contents_list.length - 1) {
        document.write("<div id='prevnext'>");
        document.write("<div id='prevlink'>");
        document.write("<a href='" + contents_list_file[n - 1] + ".html'>←" + contents_list[n - 1] + "</a></div>");
        document.write("<div id='homelink'>");
        document.write("<a href='" + contents_list_file[0] + ".html'>" + contents_list[0] + "</a></div>");
        document.write("<div id='nextlink'>");
        document.write("</div></div>");
    } else {
        document.write("<div id='prevnext'>");
        document.write("<div id='prevlink'>");
        document.write("<a href='" + contents_list_file[n - 1] + ".html'>←" + contents_list[n - 1] + "</a></div>");
        document.write("<div id='homelink'>");
        document.write("<a href='" + contents_list_file[0] + ".html'>" + contents_list[0] + "</a></div>");
        document.write("<div id='nextlink'>");
        document.write("<a href='" + contents_list_file[n + 1] + ".html'>→" + contents_list[n + 1] + "</a></div></div>");
    }
}


/*----------フッターの出力----------*/
function out_footer() {
    document.write("<footer><small>&copy; 2020 Yu Mikase.</small ></footer >");
}