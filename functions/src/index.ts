import express from "express";
import * as bodyParser from "body-parser";
import { onRequest } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

import AUTH from "./modules/auth/adapters/rest/auth_controller";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", AUTH);

export const api = onRequest(app);
