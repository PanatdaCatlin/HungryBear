import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { bear } from './../js/hungrybear.js';

$(document).ready(function(){
  $('#eat-small').click(function(){
    bear.eatSmall("blueberries");
    console.log(bear.foodLevel);
  })

  $('#eat-medium').click(function(){
    bear.eatMedium("honey");
    console.log(bear.foodLevel);
  })

  $('#eat-large').click(function(){
    bear.eatLarge("salmon");
    console.log(bear.foodLevel);
  })

  $('#eat-yuck').click(function(){
    bear.eatYuck("sticks");
    console.log(bear.foodLevel);
  })

  $('#eat-power-up').click(function(){
    bear.eatPowerUp("baby deer");
    console.log(bear.foodLevel);
  })

  $('#eat-special-bonus').click(function(){
    bear.eatSpecialBonus("everything");
    console.log(bear.foodLevel);
  })

  $('#eat-weird-things').click(function(){
    bear.eatWeirdThing("everything");
    console.log(bear.foodLevel);
  })

});
