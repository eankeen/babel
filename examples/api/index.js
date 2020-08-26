const babel = require("../../packages/babel-core/lib");
const babelOriginal = require("../../../carnival/client/node_modules/@babel/core/lib");
const plugin = require("../plugin");

babel
  .transformAsync(
    `yuto variable1 = 3
yuto variable2 = 8
`,
    { ast: true, retainLines: true, plugins: [plugin] }
  )
  .then(result => {
    console.info(result);
  })
  .catch(err => {
    console.error(err);
  });
