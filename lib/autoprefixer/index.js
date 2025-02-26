/**
 * Simple autoprefixer placeholder for development
 */
module.exports = () => {
  return {
    postcssPlugin: 'autoprefixer',
    
    // Simple pass-through function
    Once(root) {
      // Do nothing in development
      return root;
    }
  };
};

module.exports.postcss = true;