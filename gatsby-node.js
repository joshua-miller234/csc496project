//const { graphql } = require("gatsby");




exports.createPages = async ({ actions, graphql }) => {
    const {createPage} = actions;

    const recipes = await graphql(`
        query {
            Drupal {
                nodeRecipes(first: 10) {
                    edges {
                        node {
                            path
                            id
                        }
                    }
                }
            }
        }
    `);

    const articles = await graphql(`
        query {
            Drupal {
                nodeArticles(first: 10) {
                    edges {
                        node {
                            title
                            path
                            id
                        }
                    }
                }
            }
        }
        `)

    recipes.data.Drupal.nodeRecipes.edges.forEach(({node}) => {
        createPage({
            path: node.path,
            component: require.resolve("./src/templates/recipenode.js"),
            context: {
                id: node.id
            },
        });
    });

    articles.data.Drupal.nodeArticles.edges.forEach(({node}) => {
        createPage({
            path: node.path,
            component: require.resolve("./src/templates/articlenode.js"),
            context: {
                id: node.id
            },
        });
    });

}