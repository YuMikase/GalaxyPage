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
/*----------フッターの出力----------*/
function out_footer() {
    document.write("<footer><small>&copy; 2020 Yu Mikase.</small ></footer >");
}
