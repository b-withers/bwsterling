
$(document).ready(function() {
    
    var s = Snap('svg');
    var text = 'BW Sterling Development & Design'
    var len = text.length;
    var array = [];
    for (var x = 0; x < len; x++) {
      var t = text[x]
      array.push(t);
    }
    var txt = s.text(50, 50, array)
    $('tspan').css({
      'font-size': 65,
      fill: 'gray',
      stroke: "black",
      'stroke-dasharray': 600,
      'stroke-dashoffset': 700
    })
    
    $('tspan').each(function(index) {
      $(this).stop(true, true).delay(170 * index).animate({
        'stroke-dashoffset': 0,
      }, 1000, function() {
        $(this).css('fill', '#000000')
      })
    })
    
    
    });