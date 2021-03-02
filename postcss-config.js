module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport0": {
      viewprotWidth: 375,
      viewprotHeight: 667,
      unitPrecision: 5,
      viewportUnit: "vw",
      selectorBlackList: ["ignore", "tab-bar", "tab-bar-item"],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: ["/TabBar/"]
    }
  }
};
