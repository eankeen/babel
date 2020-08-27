/**
 * @param {import("@babel/core").ConfigAPI} api
 * @param {import("@babel/core").PluginOptions} options
 */
module.exports = function (api, options) {
  api.assertVersion(7);

  return {
    name: "babel-plugin-hacklang",
    visitor: {
      /**
       * @param {import("@babel/core").NodePath} path
       */
      VariableDeclaration(path) {
        if (path.node.kind === "yuto") {
          path.node.kind = "const";
        } else if (path.node.kind === "rice") {
          path.node.kind = "var";
        }
      },
    },
  };
};
