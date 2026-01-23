import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      // rollupTypes: true,
      insertTypesEntry: true,
      entryRoot: "src/lib/",
      outDir: "./dist/types/",
    }),
  ],
  build: {
    lib: {
      entry: [
        resolve(__dirname, "src/lib/jssip.ts"),
        resolve(__dirname, "src/lib/player.ts"),
      ],
      name: "custom_jssip",
      fileName: (format, jsFileName) => {
        if (format === "es") {
          return `${jsFileName}.js`;
        }
        return `${jsFileName}.js.${format}`;
      },
    },
    rollUpOptions: {
      // external: ["collect.js"]
    },
  },
});
