import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

const getPath = (_path) => path.resolve(__dirname, _path);

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    resolve(),
    typescript({ tsconfig: getPath("./tsconfig.json") }),
    terser({ format: { comments: false } }),
  ],
};
