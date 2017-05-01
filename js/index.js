$(function () {
    $('.home-brand-con').click(function () {
        $('.home-brand-con').removeClass('cur');
        $(this).addClass('cur')
    });
    $('.combo-list').click(function () {
        $(this).toggleClass('open');
        var txt = $(this).hasClass('open') ? '收起' : '查看更多';
        $(this).find('.show-txt span').text(txt);
    });
    $('.custom-demand li').click(function () {
        $(this).toggleClass('active')
    });

    $('.detail .more').click(function () {
        var $detail = $(this).parents('.join-list-con').next('.join-detail');
        $detail.toggleClass('show');
        var txt = $detail.hasClass('show') ? '收起' : '查看详情';
        $(this).text(txt);
        return false;
    });
    $('.function-tips').hover(function () {
        $(this).next('.function-tips-txt').show();
    }, function () {
        $(this).next('.function-tips-txt').hide();
    });
    $('.home-info-ad-action').click(function () {
        $(this).next('.home-info-ad-more').slideDown();
        $(this).hide();
    });
    $('.selectpicker').selectpicker({
        dropupAuto: false
    });
});