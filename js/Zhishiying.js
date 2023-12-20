//���ƽ�վ��www.400301.com���ṩ����֧��

//���ò�Ʒͼ�������ȥ������ɻ�ɫ
$(function ()
{
    $(".img_list_301 ul li").hover(function () { $(this).css({ "background": "#f4f4f4" }) }, function () { $(this).css({ "background": "none" }) })
})

//����ͼƬ��ʾ
$(window).load(function ()
{
    var PCount = 3; //ͼƬÿ����ʾ����

    var NewListwidth = $(".NewList").width();
    $(".NewList").css({ width: NewListwidth + 15 });
    var jianbian = (PCount - 1) * 15 + PCount * 2; //����ȥ���ı߿�
    var neikuan = NewListwidth - jianbian;
    $(".img_list_301 ul li").css({ width: neikuan / PCount });
    $(".img_list_301 ul li").css({ height: neikuan / PCount + 30 });

    var kuangzi = neikuan / PCount;
    $(".show_img").css({ "height": kuangzi });
    var alishow_img = $('.show_img img');
    alishow_img.each(function (index)
    {
        var iwidth = $(this).width();
        var iheight = $(this).height();
        if (iwidth > iheight)
        {
            $(this).css({ "width": kuangzi * 0.92 });
        }
        else
        {
            $(this).css({ "height": kuangzi * 0.92 });
        }
    });

    //���Ʊ��ⳬ��������ʾʡ�Ժ�
    $(".show_img_title a").css({ "display": "block", "width": kuangzi - 10, "overflow": "hidden", "white-space": "nowrap", "text-overflow": "ellipsis" });
})