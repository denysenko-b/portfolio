import { defineConfig } from "vite";
import { minifyHtml, injectHtml } from "vite-plugin-html";
import path from "path";
import siteconfig from "./src/siteconfig";


export default defineConfig({
    plugins: [
        injectHtml({
            injectData: {
                ...siteconfig,
            },
            injectOptions: {
                root: path.join(__dirname, "partials"),
            },
        }),
        minifyHtml(),
    ],
    // build: {
    //     rollupOptions: {
    //         input: {
    //             main: path.resolve(__dirname, 'index.html')
    //         }
    //     }
    // }
});
