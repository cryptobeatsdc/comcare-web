import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

/** @type {import("eslint").Linter.Config[]} */
const config = [...nextCoreWebVitals, ...nextTypeScript];

export default config;
