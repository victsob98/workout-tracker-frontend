module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@": "./",
            "@atoms": "./components/atoms/",
            "@molecules": "./components/molecules/",
            "@templates": "./components/templates/",
            "@organisms": "./components/organisms/",
            "@pages": "./components/pages/",
          },
        },
      ],
    ],
  };
};
