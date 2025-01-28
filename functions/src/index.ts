import express from "express";
import * as bodyParser from "body-parser";
import { onRequest } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";

const cors = require("cors")({ origin: true });

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

import USER from "./modules/users/adapters/rest/auth_controller";
import TASK from "./modules/tasks/adapters/rest/task_controller";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors);

app.use("/users", USER);
app.use("/tasks", TASK);

export const api = onRequest({ cors: ["*"] }, app);
