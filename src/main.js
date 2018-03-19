import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { bear } from './../js/hungrybear.js';

let foodLevelBar = bear.setHunger() ;
$(function(){
foodLevelBar = parseFloat($(".progress-bar").css("width")) + 1;

setInterval(function() {
$(".progress-bar").text(bear.foodLevel);
 $(".progress-bar").css("width", bear.foodLevel);
  if (bear.foodLevel == 0)
  {
    $("#death").show();
  }
},1000);
})

$(document).ready(function(){
  $('#eat-small').click(function(){
    bear.eatSmall("blueberries");
    $(".progress-bar").text(bear.foodLevel);

  })

  $('#eat-medium').click(function(){
    bear.eatMedium("honey");
    $(".progress-bar").text(bear.foodLevel);
  })

  $('#eat-large').click(function(){
    bear.eatLarge("salmon");
    $(".progress-bar").text(bear.foodLevel);
  })

  $('#eat-yuck').click(function(){
    bear.eatYuck("sticks");
    $(".progress-bar").text(bear.foodLevel);
  })

  $('#eat-power-up').click(function(){
    bear.eatPowerUp("baby deer");
    $(".progress-bar").text(bear.foodLevel);
  })

  $('#eat-special-bonus').click(function(){
    bear.eatSpecialBonus("everything");
    $(".progress-bar").text(bear.foodLevel);
  })

  $('#eat-weird-things').click(function(){
    bear.eatWeirdThing("everything");
    $(".progress-bar").text(bear.foodLevel);
  })
});
