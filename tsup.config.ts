import { defineConfig } from "tsup";

const tsupConfig = defineConfig((options) => ({
  entry: ["src/index.ts", "src/global.css", "src/**/*.ts", "src/**/*.tsx"],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: !options.watch,
  treeshake: true,
  external: ["react", "react/jsx-runtime"],
}));

export default tsupConfig;
