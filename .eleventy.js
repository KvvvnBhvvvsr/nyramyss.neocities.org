module.exports = function(eleventyConfig) {
     // Copy static assets directly to output
     eleventyConfig.addPassthroughCopy("src/**/*.css");
     eleventyConfig.addPassthroughCopy("src/**/*.js");
     eleventyConfig.addPassthroughCopy("src/**/*.png");
     eleventyConfig.addPassthroughCopy("src/**/*.jpg");
     eleventyConfig.addPassthroughCopy("src/**/*.gif");
     eleventyConfig.addPassthroughCopy("src/**/*.svg");
     
     return {
       dir: {
         input: "src",
         output: "public"
       }
     };
   };