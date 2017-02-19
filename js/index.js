$(function() {
    $('.home-brand-con').click(function() {
        $('.home-brand-con').removeClass('cur');
        $(this).addClass('cur')
    });
    $('.combo-list').click(function() {
        $(this).toggleClass('open');
        var txt = $(this).hasClass('open') ? '收起' : '查看更多';
        $(this).find('.show-txt span').text(txt);
    });
    $('.custom-demand li').click(function(){
        $(this).toggleClass('active')
    })
});