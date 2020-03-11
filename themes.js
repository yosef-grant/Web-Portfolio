        $('#red').on({
        click: function(){
            clearForRed();
            $('header').css('background-color', 'rgba(189,9,9,0.5)');
            $('#red').css({'background-color': 'rgb(189,9,9)', 'color': '#fff', 'font-weight': 'bold'});
            $('.box').css('background-color', 'rgba(189,9,9,0.35)');
            $('.box h3, .box p').css('color', '#fff');
            $('.main-nav a').css({'background-color': 'rgb(189,9,9)', 'color': '#fff'});  
            $('.main-nav a').hover(function(){
                $(this).css({'background-color': '#ddd', 'color': 'rgb(189,9,9)'});
                }, 
            function() {
                    $(this).css({'background-color': 'rgb(189,9,9)','color': '#fff'}); 
                })
            $('.info-btn').css('background-color', 'rgb(189,9,9)');
            $('footer').css('background-color', 'rgb(189,9,9)');         
    }}); 
    


    $('#green').on({
        click: function() {
            clearForGreen();
            $('header').css('background-color', 'rgba(0,128,0,0.5)');
            $('#green').css({'background-color': 'rgb(0,128,0)', 'color': '#fff', 'font-weight': 'bold'});
            $('.box').css('background-color', 'rgba(0,128,0,0.35)');
            $('.box h3, .box p').css('color', '#fff');
            $('.main-nav a').css({'background-color': 'rgb(0,128,0)', 'color': '#fff'});     
            $('.main-nav a').hover(function(){
                $(this).css({'background-color': '#ddd', 'color': 'rgb(0,128,0)'});
                }, 
            function() {
                    $(this).css({'background-color': 'rgb(0,128,0)', 'color': '#fff'}); 
                })    
            $('.info-btn').css('background-color', 'rgb(0,128,0)');
            $('footer').css('background-color', 'rgb(0,128,0)');


            
        },
    });   
    $('#blue').on({
        click: function() {
            clearForBlue();
            $('header').css('background-color', 'rgba(30,144,255,0.5');
            $('#blue').css({'background-color': 'rgb(30,144,255)', 'color': '#fff', 'font-weight': 'bold'});
            $('.box').css('background-color', 'rgba(30,144,255,0.35)');
            $('.box h3, .box p').css('color', '#fff');
            $('.main-nav a').css({'background-color': 'rgb(30,144,255)', 'color': '#fff'});
            $('.main-nav a').hover(function(){
                $(this).css({'background-color': '#ddd', 'color': 'rgb(30,144,255)'});
                }, 
            function() {
                    $(this).css({'background-color': 'rgb(30,144,255)', 'color': '#fff'}); 
                })  
            $('.info-btn').css('background-color', 'rgb(30,144,255)');
            $('footer').css('background-color', 'rgb(30,144,255)');
        },
    });   
    $('#purple').on({
        click: function() {
            clearForPurple();
            $('header').css('background-color', 'rgba(147, 112, 216,0.5)');
            $('#purple').css({'background-color': 'rgb(147,112,216)', 'color': '#fff', 'font-weight': 'bold'});
            $('.box').css('background-color', 'rgba(147,112,216,0.35)');
            $('.box h3, .box p').css('color', '#fff');
            $('.main-nav a').css({'background-color': 'rgb(147,112,216)', 'color': '#fff'});
            $('.main-nav a').hover(function(){
                $(this).css({'background-color': '#ddd', 'color': 'rgb(147,112,216)'});
                }, 
            function() {
                    $(this).css({'background-color': 'rgb(147,112,216)', 'color': '#fff'}); 
                }) 
            $('.info-btn').css('background-color', 'rgb(147,112,216)');
            $('footer').css('background-color', 'rgb(147,112,216)');
        },
    });   
    $('#default').on({
        click: function() {
            clearForDefault();
            $('header').css('background-color', 'rgba(0,0,0,0.5)');
            $('#default').css({'background-color': 'rgb(221,221,221)', 'color': 'rgb(51,51,51)', 'font-weight': 'bold'});
            $('.box').css('background-color', 'rgba(221,221,221,0.5)');
            $('.box h3, .box p').css('color', 'rgb(51,51,51');
            $('.main-nav a').css({'background-color': 'rgb(221,221,221)', 'color': 'rgb(51,51,51)'});
            $('.main-nav a').hover(function(){
                $(this).css({'background-color': 'rgb(51,51,51)', 'color': 'rgb(221,221,221)'});
                }, 
            function() {
                    $(this).css({'background-color': 'rgb(221,221,221)', 'color': 'rgb(51,51,51)'}); 
                }) 
            $('.info-btn').css('background-color', 'rgb(51,51,51)');
            $('footer').css('background-color', 'rgb(51,51,51)');
        },
    });   



    /* The following functions remove the highlight behaviour from non-active buttons 
    to prevent all buttons becoming highlighted at once */

    function clearForRed() {
        $('#green').removeAttr('style');
        $('#blue').removeAttr('style');
        $('#purple').removeAttr('style');
        $('#default').removeAttr('style');    
    }

    function clearForGreen() {
        $('#red').removeAttr('style');
        $('#blue').removeAttr('style');
        $('#purple').removeAttr('style');
        $('#default').removeAttr('style'); 
    }

    function clearForBlue() {
        $('#green').removeAttr('style');
        $('#red').removeAttr('style');
        $('#purple').removeAttr('style');
        $('#default').removeAttr('style');    
    }

    function clearForPurple() {
        $('#green').removeAttr('style');
        $('#blue').removeAttr('style');
        $('#red').removeAttr('style');
        $('#default').removeAttr('style');  
    }

    function clearForDefault() {
        $('#green').removeAttr('style');
        $('#blue').removeAttr('style');
        $('#purple').removeAttr('style');
        $('#red').removeAttr('style');  
    }

