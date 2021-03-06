/* eslint-disable no-undef */
const assert = require("chai").assert;
const esquery = require("esquery");
const esprima = require("esprima");
const helpers = require("../helpers");


describe("MovieList.vue", () => {
  it("should contain a data function that returns a movieData object @movie-list-contain-filters-property", () => {
    const file = helpers.readFile("src/components/movieList.vue");
    const nodes = helpers.parseFile(file);
    const script = helpers.getHtmlTag("script", nodes);
    if (script.length == 0) {
      assert(
        false,
        "We either didn't find a `script` tag, or any code in a `script` tag in the `MovieList` component."
      );
    }

    const ast = esprima.parse(script[0].childNodes[0].value, {
      sourceType: "module"
    });

    const data = esquery(ast, "Property[key.name=data]");
    assert(
      data.length > 0,
      "The `MovieList`'s `data()` method's `return` is not present."
    );

    const filters = esquery(data[0], "Property[key.name=filters]");

    assert(
      filters.length > 0,
      "The `MovieList`'s `filters` property is not present inside the `data()` object."
    );

    assert.isArray(
      filters,
      'It doesn\'t look like that we are assigning `filters` to an array with `"favourite"` and `"non-favourite"` as values.'
    );

    const favourites = esquery(
      filters[0],
      "Property[key.name=filters] > ArrayExpression .elements[value=favourite]"
    );

    assert(
      favourites.length > 0,
      "The `filters` array should have a value of `favourite`."
    );

    const nonFavourites = esquery(
      filters[0],
      "Property[key.name=filters] > ArrayExpression .elements[value=non-favourite]"
    );

    assert(
      nonFavourites.length > 0,
      "The `filters` array should have a value of `non-favourite`."
    );
  });
});