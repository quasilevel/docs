module.exports = function(eleventyConfig) {
    // Copy the contents of the `src/css` directory to the `public` directory during the build process
    eleventyConfig.addPassthroughCopy("./src/css/");
    // Watch the `src/css` directory for changes during development
    eleventyConfig.addWatchTarget("./src/css/");
  
    // Create a collection of pages based on the `project` tag
    eleventyConfig.addCollection("projects", function(collection) {
      // Get all pages with the `project` tag
      let projects = collection.getFilteredByTag("project");
      // Group projects by their project tag
      let groupedProjects = {};
      projects.forEach(function(project) {
        let projectTag = project.data.project;
        if (!groupedProjects[projectTag]) {
          groupedProjects[projectTag] = [];
        }
        groupedProjects[projectTag].push(project);
      });
      // Return the grouped projects
      return groupedProjects;
    });
  
    // Set the input and output directories for the Eleventy build
    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  };
  