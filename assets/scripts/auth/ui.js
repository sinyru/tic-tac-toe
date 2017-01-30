'use strict';

// const store = require('../store');

const success = (data) => {
  // handles success
  if (data) {
    console.log(data);
  }
};

const failure = (error) => {
  // handles error
  console.error(error);
};

const showSuccess = (data) => {
  $('h3').text("You have played " + data.games.length + " games!");
};


module.exports = {
  success,
  failure,
  showSuccess,

};
