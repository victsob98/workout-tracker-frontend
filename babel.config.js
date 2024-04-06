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
            "@atoms": "./src/components/atoms/",
            "@molecules": "./src/components/molecules/",
            "@templates": "./src/components/templates/",
            "@organisms": "./src/components/organisms/",
            "@pages": "./src/components/pages/",
            "@hooks": "./src/components/hooks/",
            "@navigation": "./src/components/navigation/",
            "@api": "./src/api/",
            "@context": "./src/context/",
            "@theme": "./src/theme/",
            "@providers": "./src/providers/",
            "@i18n": "./src/i18n/",
          },
        },
      ],
    ],
  };
};
