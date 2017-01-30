'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const auth = require('./auth/events.js');
const game = require('./game');

$(() => {
  setAPIOrigin(location, config);
  auth.addHandlers();
  game.addHandlers();
});


$('#change-password').hide();
$('#sign-out').hide();
$('.gameboard').hide();
$('#create-game').hide();
$('#game-history').hide();
$('h2').hide();

$('#btn-sign-in').on('click', ()=>{
  $('#sign-in').hide();
  $('#modal-sign-up').hide();
  $('#create-game').show();
  $('#game-history').show();
  $('#change-password').show();
  $('#sign-out').show();
  $('h2').show();
});

$('#btn-sign-out').on('click', ()=>{
  $('#change-password').hide();
  $('#sign-out').hide();
  $('.gameboard').hide();
  $('#create-game').hide();
  $('#game-history').hide();
  $('#sign-in').show();
  $('#modal-sign-up').show();
  $('h3').text("");
  $('h2').text("");
});

$('#create-game').on('click', ()=>{
  $('.gameboard').show();
});



// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled



require('./example');
