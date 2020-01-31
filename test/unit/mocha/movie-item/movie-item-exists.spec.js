const fs = require('fs');
const path = require('path');
const assert = require('chai').assert;
const helpers = require("../helpers")

describe('MovieItem.vue', () => {
  it('exists @movie-item-component-exists', () => {
    const file = helpers.readFile('src/components/MovieItem.vue', "MovieItem.vue does not exist");
  });
});