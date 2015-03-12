var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');
var $btnMove = $('.btn-move');
var $diamond = $('.diamond');
var $btnCollapseExpand = $('.btn-collapse-expand');
var $panel = $('.panel');
var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');
var $btnAppend = $('.btn-append');
var $list = $('.list');

$btnShowHide.on('click', function (){
    $box.toggleClass('js-btn-show');
//console.log ('btnShowHide');
});

$btnMove.on('click', function () {
    $diamond.toggleClass('js-move');
});

$btnCollapseExpand.on('click',function () {
    $panel.toggleClass('js-panel-collapse');
});

$btnBounce.on('click', function (){
    $circle.addClass('js-ball-bounce');
});

$circle.on('webkitAnimationEnd animationed', function () {
    $circle.removeClass('js-ball-bounce');
});

$btnAppend.on('click', function (){

    var $li = $('<li>').html('New List Item');

    $list.prepend($li);
    $li.toggleClass('js-list-append');
});
