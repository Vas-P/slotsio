$(function(){
    $('.video video').get(0).addEventListener('play', function(){
        $('.video .videoOverlay').hide();
        $('.video video').attr('controls', '').get(0).play();
    })
    
    $('.video .videoOverlay').click(function(){
        $(this).hide();
        $('.video video').attr('controls', '').get(0).play();
    })
})