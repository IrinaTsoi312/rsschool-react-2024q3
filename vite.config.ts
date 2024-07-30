/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    coverage: {
      include: ["src/components/Collection/Collection.tsx", "src/components/CardCollection.constants.ts", "src/features/providers/SearchContextProvider/SearchContextProvider.tsx","src/features/ErrorBoundary", "src/components/Pagination/Pagination.helpers.tsx", "src/components/Modal/Modal.tsx", "src/components/Card/Card.tsx", "src/features/providers/DataContextProvider/DataContextProvider.tsx"]
    }
  },
});
