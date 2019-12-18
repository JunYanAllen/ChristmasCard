$(document).ready(function(){
    for(var $i=0;$i<200;$i++){
        $('body').prepend('<div class="snow"></div>');
    }

    var $countDate = new Date('Dec 25,2019 00:00:00').getTime();

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

    Christmas();
    setInterval(function(){
        Christmas();
    },1000);
});



