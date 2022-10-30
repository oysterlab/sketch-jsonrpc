const { removeModuleScopePlugin, override, babelInclude, addWebpackAlias, addWebpackExternals } = require("customize-cra");
const path = require("path")

module.exports = override(
    removeModuleScopePlugin(), 
    babelInclude([
        path.resolve("src"), 
        path.resolve("../sketch-jsonrpc/src"),
        path.resolve("../plugin/src/rpc.ts"), 
    ]),
    addWebpackExternals({
        "sketch": {},
        "sketch/settings": {}
    }),
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
        '@sketch-jsonrpc': path.resolve("../sketch-jsonrpc/src"),
        'rpc': path.resolve("../plugin/src/rpc.ts")
    })
)