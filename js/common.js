//�ڎ��̃��X�g��ݒ�
var contents_list = ['Home', '�ȉ~��͂ɂ���', '�Q����͂ɂ���', '��̘͂r��`���i�A�j���[�V�����j', '���x�g�i�A�j���[�V�����j'];
//���ꂼ���html�t�@�C����
var contents_list_file = ['index', 'ellipse', 'spiral', 'varArm', 'dwave'];
//�ڎ��̗v�f�����擾
var cont_len = contents_list.length;


/*----------��Ɩڎ��̏o��----------*/
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
