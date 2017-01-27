'use strict';

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

module.exports = {
  success,
  failure,
};
