module.exports = function(eleventyConfig) {
    // Copy the contents of the `src/css` directory to the `public` directory during the build process
    eleventyConfig.addPassthroughCopy("./src/css/");
    // Watch the `src/css` directory for changes during development
    eleventyConfig.addWatchTarget("./src/css/");
    
    // Create a collection of pages with the `meta1` project tag
    eleventyConfig.addCollection("meta1", function(collection) {
        return collection.getFilteredByTag("meta1");
    });
    
    // Create a collection of pages with the `meta2` project tag
    eleventyConfig.addCollection("meta2", function(collection) {
        return collection.getFilteredByTag("meta2");
    });

    // Set the input and output directories for the Eleventy build
    return {
        dir: {
            input: "src",
            output: "public",

        },
    };
};
