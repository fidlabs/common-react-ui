import { defineConfig } from "tsup";

const tsupConfig = defineConfig((options) => ({
  entry: ["src/index.ts", "src/global.css"],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: !options.watch,
  treeshake: true,
  external: ["react", "react/jsx-runtime", "lucide-react"],
}));

export default tsupConfig;
