import express from "express";
import { readFile } from "fs/promises";
const app = express();
app.use(express.static("public"));
app.get("/", async (request, response) => {
    response.send(await readFile("./src/pages/index.html", "utf8"));
});
app.get("/about", async (request, response) => {
    response.send(await readFile("./src/pages/about.html", "utf8"));
});
app.get("/contact-me", async (request, response) => {
    response.send(await readFile("./src/pages/contact-me.html", "utf8"));
});
app.get("/LOGIN", async (request, response) => {
    response.send(await readFile("./src/pages/LOGIN.html", "utf8"));
    console.log("Page Served: LOGIN");
});
app.use(async (request, response) => {
    response.status(404).send(await readFile("./src/pages/404.html", "utf8"));
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App available on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map