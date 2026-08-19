$(document).ready(function(){


        $('.pill-bar').click(function(){
        $('.mob-menu').animate({
            left:'0%',
        }, 500)
        })

        $('.close-bar').click(function(){
        $('.mob-menu').animate({
            left:'-100%',
        }, 500)
        })

        $('.que-parent').click(function(e){
        $(this).children('.answer').slideToggle(500);
        $(this).find('.faq-icon img').toggleClass('rotated');
        });
        
        $('input').focus(function(e){
        $(this).siblings('.label').css('top', '3px');
        });
        $('input').blur(function(e){
        $(this).siblings('.label').css('top', '-58px');
        });
        $('textarea').focus(function(e){
        $(this).siblings('.label').css('top', '4px');
        });
        $('textarea').blur(function(e){
        $(this).siblings('.label').css('top', '-58px');
        });

        $('input[type="checkbox"]').on('change',function(e){
            if ($(this).is(':checked')) {
            $(this).siblings('.label-btn').css({
                'color': '#3f2fee',
                'backgroundColor': 'rgba(0,0,0,0.1)'
            });
            } else {
            // Optional: Reset styles when unchecked
            $(this).siblings('.label-btn').css({
                'color': '',
                'backgroundColor': ''
            });
            }
        });


    });