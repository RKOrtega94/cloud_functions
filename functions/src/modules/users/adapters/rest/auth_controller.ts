import express from "express";
import { AuthService } from "../service/auth_service";
import { ResponseModel } from "../../../../core/constants/response_model";

const service = new AuthService();

const app = express();

app.get("/:email", async (req, res) => {
  const { email } = req.params;
  const user = await service.getUserByEmail(email);
  if (!user) {
    res.status(404).send(new ResponseModel(404, "User not found", null));
  }
  res.send(new ResponseModel(200, "User logged in", user));
});

app.post("/", async (req, res) => {
  const { email } = req.body;
  if (await service.getUserByEmail(email)) {
    res.status(400).send(new ResponseModel(400, "User already exists", null));
  }
  const user = await service.registerUser(email);
  res.send(new ResponseModel(200, "User registered", user));
});

export default app;
