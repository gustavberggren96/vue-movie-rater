/* eslint-disable no-undef */
const assert = require("chai").assert;
const parse5 = require("parse5");
const cheerio = require("cheerio");
const helpers = require("../helpers");

describe("MovieItem.vue", () => {
  it("should have image of movie @movie-item-should-have-image", () => {

    const file = helpers.readFile("src/components/MovieItem.vue");
    const nodes = helpers.parseFile(file);
    const tagName = helpers.getHtmlTag("template", nodes);
    const content = parse5.serialize(tagName[0].content);
    const $ = cheerio.load(content);

    const image = $("img");
    assert(
      $(image).length > 0,
      "It doesn't look like we are adding the `<img></img>` HTML element to the `MovieItem`'s template."
    );
  });
});