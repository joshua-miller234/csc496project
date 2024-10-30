const React = require("react")
const gatsby = jest.requireActual("gatsby")

module.exports = {
  ...gatsby,
  graphql: jest.fn(() => {return{"Drupal": {
      "nodeRecipe": {
        "title": "temp",
        "ingredients": "temp",
        "difficulty": "temp",
        "preparationTime": "temp",
        "numberOfServings": "temp",
        "cookingTime": "temp",
        "recipeInstruction": {
          "processed": "temp"
        },
        "mediaImage": {
          "mediaImage": {
            "url": "temp"
          }
        }
      }
    }
  }}),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement("a", {
        ...rest,
        href: to,
      })
  ),
  Slice: jest.fn().mockImplementation(
    ({ alias, ...rest }) =>
      React.createElement("div", {
        ...rest,
        "data-test-slice-alias": alias
      })
  ),
  useStaticQuery: (jest.fn()).mockReturnValueOnce({"site": {
    "siteMetadata": {
      "title": "My Gatsby Site"
    }
}}),
}