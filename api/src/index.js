/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-console */
import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import apiRoutes from "./routes/index";
import errorHandler from "./middlewares/errorHandler";
import swaggerDoc from "./swaggerDocs";

// eslint-disable-next-line import/no-extraneous-dependencies
import "babel-polyfill";

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

swaggerDoc(app);

app.use("/api", apiRoutes);
app.use("*", (req, res) => res.status(404).json({
        status: 404,
        error: "Page Not Found"
    }));

app.use(errorHandler.sendError);
app.listen(port, () => console.log(`listening on port ${port}!`));

export default app;
