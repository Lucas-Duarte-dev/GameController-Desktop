import express from "express";
import path from "path";
import route from "./routes";
import os from "os";

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(route);

app.listen(3333);
