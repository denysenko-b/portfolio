import { defineConfig } from "vite";
import { minifyHtml, injectHtml } from "vite-plugin-html";
import path from "path";

export default defineConfig({
    plugins: [
        injectHtml({
            injectData: {
                email: 'denisenko.des@gmail.com',
                characteristics: {
                    skills: ['User Experience', 'User Interface', 'Visual Design', 'Prototyping', 'Design System creator', 'Wireframing', 'Interaction Design', 'Apple Human Guidelines & Google Material Des.'],
                    tools: ['Figma', 'Photoshop', 'Marvel App, Invision', 'Zeplin, Avocode', 'Trello, Jira, Asana', 'Hubstaff, Toptracker']
                }
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
