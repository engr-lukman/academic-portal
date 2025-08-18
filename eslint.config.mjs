// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/html-self-closing": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
  // Add ignores for files/directories that were previously ignored via .gitignore
  ignores: [
    // Nuxt dev/build outputs
    ".output/**",
    ".data/**",
    ".nuxt/**",
    ".nitro/**",
    ".cache/**",
    "dist/**",
    // Node dependencies
    "node_modules/**",
    // Logs
    "logs/**",
    "*.log",
    // Local env files
    ".env",
    ".env.*",
  ],
});
