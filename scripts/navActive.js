$(document).on('click', 'a', function() {
    console.log('click');
    $(this).addClass('active').siblings().removeClass('active');
    
})


