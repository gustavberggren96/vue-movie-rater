/* eslint-disable no-undef */

const assert = require("chai").assert;
const esquery = require("esquery");
const esprima = require("esprima");
const helpers = require("../helpers");

describe('MovieList.vue', () => {
  it('should contain a data function that contains searchInput property object @movie-list-contains-search-input-property', () => {
    const file = helpers.readFile("src/components/MovieList.vue");
    const nodes = helpers.parseFile(file);
    const script = helpers.getHtmlTag("script", nodes);
    
    if(script.length == 0) {
      assert(
        false,
        "We either didn't find a `script` tag, or any code in a `script` tag in the `BookList` component."
      );
    }
    const ast = esprima.parse(script[0].childNodes[0].value, {
      sourceType: "module"
    });

    const data = esquery(ast, "Property[id.name=fetchMovies]");
    assert(
      data.length > 0,
      "The `MovieList`'s `methods` method's `return` keyword is not present."
    );
    
    /*const searchInput = esquery(data[0], "Property[key.name=searchInput]");

    assert(
      searchInput.length > 0,
      "The `MovieList`'s `searchInput` property is not present inside the `data()` object."
    );

    let searchValue = esquery(
      searchInput[0],
      'Property[key.name=searchInput][value.value=""]'
    );

    assert(
      searchValue.length > 0,
      'The `searchInput` data should start with an empty string `""` as its value.'
    );*/
  });
});

