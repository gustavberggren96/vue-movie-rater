/* eslint-disable no-undef */
const assert = require("chai").assert;
const esquery = require("esquery");
const esprima = require("esprima");
const helpers = require("../helpers");


describe("MovieList.vue", () => {
  it("should contain a method that changes a movies favourite status @change-fav-changes-movies-favourite-status", () => {
    const file = helpers.readFile("src/components/MovieList.vue");
    const nodes = helpers.parseFile(file);
    const script = helpers.getHtmlTag("script", nodes);
    let methods;
    if (script.length == 0) {
      assert(
        false,
        "Either `script tag` does not exist or there is no code in `script tag` in the MovieList component"
      );
    }

    const ast = esprima.parse(script[0].childNodes[0].value, {
      sourceType: "module"
    });

    try {
      methods = esquery(ast, "Property[key.name=methods]");
    } catch (e) {
      assert(false, "Something went wrong and we weren't able to check your code");
    }

    assert(methods.length > 0, "The `MovieLists` methods declaration is not present.");

    let results = esquery(methods[0], 'Identifier[name="changeFav"]');
    assert(results.length > 0, "The `MovieLists` methods object is not defining an `changeFav()` method");

    //const data = esquery(ast, 'Property[key.name=data]');
    //assert(data.length > 0, 'The BookList\'s `data()` method\'s return is not present');

    const data = esquery(ast, 'ExportDefaultDeclaration Property[key.name=data] Property[key.name="movies"] Property[key.name="favourite"]');
    assert(data.length > 0, 'The MovieList\'s `data()` method\'s return is not present');
    const temp = data[0].value.value;

    

    //assert(data[0].favourite, 'Test Failed');
  });
});