document.querySelector('#burger').onclick = function(e) {
    document.querySelector('#menu').classList.toggle('show');
}

jQuery('#book-date').datetimepicker({
    timepicker: false,
    format:'d.m.Y',
})
jQuery('#book-time').datetimepicker({
    datepicker: false,
    format:'H:i',
    allowTimes:[
        '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', 
        '16:00', '17:00', '18:00', '19:00', '20:00'
       ]
})