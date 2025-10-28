import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
    test: {
        globals: true,
        environment: "node",
        pool: "forks",
        poolOptions: {
            forks: {
                singleFork: true,
            },
        },
    },
    resolve: {
        alias: {
            "@mmakve/shared": resolve(__dirname, "../../packages/shared/src"),
        },
    },
});
