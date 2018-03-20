import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './../.env'
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
    $("#game").hide();
  }
},1000);
})

  $(document).ready(function() {
      $.get(`https://api.giphy.com/v1/gifs/search?api_key=` + process.env.API_KEY + `&q=bear&limit=25&offset=0&rating=G&lang=en`).then(function(response) {
        console.log(response);
        let rand = Math.floor(Math.random()*24);
        console.log(rand);
        $('#showBear').append("<img src='"+response.data[rand].images.fixed_height_downsampled.url+"' />");

      }).fail(function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
      });

      $.get(`https://api.giphy.com/v1/gifs/search?api_key=` + process.env.API_KEY + `&q=death&limit=25&offset=0&rating=G&lang=en`).then(function(response) {
        console.log(response);
        let rand = Math.floor(Math.random()*24);
        console.log(rand);
        $('#death').append("<img src='"+response.data[rand].images.fixed_height_downsampled.url+"' />");

      }).fail(function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
      });

      $.get(`https://api.giphy.com/v1/gifs/search?api_key=` + process.env.API_KEY + `&q=cartoon people&limit=25&offset=0&rating=G&lang=en`).then(function(response) {
        console.log(response);
        let rand = Math.floor(Math.random()*24);
        console.log(rand);
        $('#showPerson').append("<img src='"+response.data[rand].images.fixed_height_downsampled.url+"' />");

      }).fail(function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
      });


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
