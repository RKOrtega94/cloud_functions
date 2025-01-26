import express from "express";
import * as logger from "firebase-functions/logger";
import { TaskService } from "../service/task_service";
import { ResponseModel } from "../../../../core/constants/response_model";

const app = express();

const service = new TaskService();

app.get("/", async (req, res) => {
  try {
    const userId: string = req.headers["user_id"] as string;
    const tasks = await service.getAllTasks(userId);
    res.send(new ResponseModel(200, "Tasks fetched", tasks));
  } catch (error: any) {
    res.status(500).send(new ResponseModel(500, error.message, null));
  }
});

app.post("/", async (req, res) => {
  try {
    const userId: string = req.headers["user_id"] as string;
    const data = req.body;
    logger.info(data);
    const task = await service.createTask(userId, data);
    res.send(new ResponseModel(200, "Task created", task));
  } catch (error: any) {
    res.status(500).send(new ResponseModel(500, error.message, null));
  }
});

app.put("/:id", async (req, res) => {
  try {
    const userId: string = req.headers["user_id"] as string;
    const data = req.body;
    const id = req.params.id;
    const task = await service.updateTask(userId, { id, ...data });
    res.send(new ResponseModel(200, "Task updated", task));
  } catch (error: any) {
    res.status(500).send(new ResponseModel(500, error.message, null));
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const userId: string = req.headers["user_id"] as string;
    const id = req.params.id;
    await service.deleteTask(userId, id);
    res.send(new ResponseModel(200, "Task deleted", null));
  } catch (error: any) {
    res.status(500).send(new ResponseModel(500, error.message, null));
  }
});

export default app;
