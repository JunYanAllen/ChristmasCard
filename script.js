$(document).ready(function(){
    for(var $i=0;$i<200;$i++){
        $('body').prepend('<div class="snow"></div>');
    }

    var $countDate = new Date('Dec 24,2019 00:00:00').getTime();

    var $now = new Date().getTime();

    function Christmas(){
        var $now = new Date().getTime();
            $gap = $countDate - $now;
    
            var $second = 1000;
            var $minute = $second * 60;
            var $hour = $minute * 60;
            var $day = $hour * 24;
    
            var $d = Math.floor($gap / ($day));
            var $h = Math.floor(($gap%($day))/($hour));
            var $m = Math.floor(($gap % ($hour))/($minute));
            var $s = Math.floor(($gap % ($minute)) / $second);
    
            $('#day').text($d);
            $('#hour').text($h);
            $('#minute').text($m);
            $('#second').text($s);
    }

    if(($countDate - $now) < 0){
        $('#day').text('0');
        $('#hour').text('0');
        $('#minute').text('0');
        $('#second').text('0');

        $('.content_div').animate({
            left: "0px"
        },2000);
        $('.button_div').animate({
            right: "45%"
        },2000);
    }else{
        Christmas();
        setInterval(function(){
            Christmas();
        },1000);
    }

    setTimeout(function(){
        $('text').each(function () {
            const el = $(this);
            const text = el.html().split('');
            el.html(`<tspan>${text.join('</tspan><tspan>')}</tspan>`);
        });
    },1000);
    
    $('.next-btn').click(function () {
        var $TopPos = $('.content_div').scrollTop();
        console.log($TopPos);    
        $(".content_div").animate({
            scrollTop: $TopPos + $(document).height()
        }, 800);
    });

    $(".Merry").attr({
        "y":($(document).height()/3),
        "x":($(document).width()/2)
    });
    $(".Christmas").attr({
        "y":($(document).height()/2),
        "x":($(document).width()/2)
    });
    $(".for_you").attr({
        "y":(($(document).height()/3)*2),
        "x":($(document).width()/2)
    });

    $('.tag-container').css('height',$(document).heigt()-100);
    $('.tag-3-side').css('height',$(document).height()-150);
});



