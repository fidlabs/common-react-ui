import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const storybookViteConfig = defineConfig({
  plugins: [tsconfigPaths()],
});

export default storybookViteConfig;
