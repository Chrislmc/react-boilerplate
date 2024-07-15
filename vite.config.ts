import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// @ts-expect-error No @types/url module
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
    build: { target: "esnext" },
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: fileURLToPath(new URL("./src", import.meta.url)),
            },
        ],
    },
});
