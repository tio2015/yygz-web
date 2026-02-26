import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    root: "./client",
    include: ["src/__tests__/**/*.test.{ts,tsx}"],
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
});
