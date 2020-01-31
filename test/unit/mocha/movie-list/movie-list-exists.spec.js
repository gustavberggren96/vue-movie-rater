const fs = require('fs');
const path = require('path');
const assert = require('chai').assert;
const helpers = require("../helpers")

describe('MovieList.vue', () => {
  it('exists @movie-list-component-exists', () => {
    const file = helpers.readFile('src/components/MovieList.vue', "MovieList.vue does not exist");
  });
});