/* eslint-disable no-undef */
const helpers = require("../helpers")

describe('MovieList.vue', () => {
  it('exists @movie-list-component-exists', () => {
    helpers.readFile('src/components/MovieList.vue', "MovieList.vue does not exist");
  });
});