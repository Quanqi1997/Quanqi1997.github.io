/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-14 08:17:04
 * @version $Id$
 */

$(init)

function init(){

    // first
    $('.box-picture').click(function(){
		$('.box-lastpicture')[0].src=$(this).attr('src');
        $('.box-lastpicture').show();
    });
    $('.box-lastpicture').click(function(){
        $('.box-lastpicture').hide();
	});



    // second
    $('.can-top-button1').click(function(){
        $('.can-top-button1').css('background','rgb(192,192,192)');
        $('.can-bottom').text('1');
        $('.can-top-button2').css('background','white');
        $('.can-top-button3').css('background','white');
    });
    $('.can-top-button2').click(function(){
        $('.can-top-button2').css('background','rgb(192,192,192)');
        $('.can-bottom').text('2');
        $('.can-top-button1').css('background','white');
        $('.can-top-button3').css('background','white');
    });
    $('.can-top-button3').click(function(){
        $('.can-top-button3').css('background','rgb(192,192,192)');
        $('.can-bottom').text('3');
        $('.can-top-button1').css('background','white');
        $('.can-top-button2').css('background','white');
    });



    // third
    $(document).ready(function() {
    function inorder(index)
    {
        $(this).find('.list-li-table-order').text(index+1);
    }
    function del() 
    {
        $(this).parents(".list-li").remove();
        $("li").each(inorder);
    }
    $("li").each(inorder);
    $('.list-li-table-del').bind('click',del);
    $(".add").click(function() {
        $("ul").append("<li class='list-li'></li>");
        $("li:last").append("<table class='list-li-table'></table>");
        $("li:last").children('.list-li-table').append("<tr class='ui-tr'></tr>");
        $("li:last").find('.ui-tr').append("<td class='list-li-table-order'></td>");
        $("li:last").find('.ui-tr').append("<td class='list-li-table-content'></td>");
        $("li:last").find('.ui-tr').append("<td class='list-li-table-del'>Delete</td>");
        $("li").each(inorder);
        $('.list-li-table-del').bind('click',del);
        });
    $("li").each(inorder);
    $('.list-li-table-del').bind('click',del);
});
}
