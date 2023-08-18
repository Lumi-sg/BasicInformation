import express, { Request, Response } from "express";
import { readFile } from "fs/promises";

const app = express();

app.use(express.static("public"));

app.get("/", async (request: Request, response: Response) => {
	response.send(await readFile("./src/pages/index.html", "utf8"));
});

app.get("/about", async (request: Request, response: Response) => {
	response.send(await readFile("./src/pages/about.html", "utf8"));
});

app.get("/contact-me", async (request: Request, response: Response) => {
	response.send(await readFile("./src/pages/contact-me.html", "utf8"));
});

app.get("/LOGIN", async (request: Request, response: Response) => {
	response.send(await readFile("./src/pages/LOGIN.html", "utf8"));
	console.log("Page Served: LOGIN");
});

app.use(async (request: Request, response: Response) => {
	response.status(404).send(await readFile("./src/pages/404.html", "utf8"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`App available on http://localhost:${port}`);
});
