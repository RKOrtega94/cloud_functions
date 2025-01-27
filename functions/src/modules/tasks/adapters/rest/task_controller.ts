import express from "express";
import { TaskService } from "../service/task_service";
import { ResponseModel } from "../../../../core/constants/response_model";
import * as logger from "firebase-functions/logger";

const app = express();

const service = new TaskService();

app.get("/", async (req, res) => {
  try {
    const userId: string = req.headers["user_id"] as string;
    if (!userId) {
      res.status(403).send(new ResponseModel(403, "Unauthorized access", null));
    }
    const tasks = await service.getAllTasks(userId);
    res.send(new ResponseModel(200, "Tasks fetched", tasks));
  } catch (error: any) {
    res.status(500).send(new ResponseModel(500, error.message, null));
  }
});

app.get("/:id", async (req, res) => {
  try {
    const userId: string = req.headers["user_id"] as string;
    const id = req.params.id;
    const task = await service.getTaskById(userId, id);
    if (!task) {
      res.status(404).send(new ResponseModel(404, "Task not found", null));
    }
    res.send(new ResponseModel(200, "Task fetched", task));
  } catch (error: any) {
    res.status(500).send(new ResponseModel(500, error.message, null));
  }
});

app.post("/", async (req, res) => {
  try {
    const userId: string = req.headers["user_id"] as string;
    const data = req.body;
    const task = await service.createTask(userId, data);
    res.status(201).send(new ResponseModel(201, "Task created", task));
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
    if (!task) {
      res.status(404).send(new ResponseModel(404, "Task not found", null));
    }
    res.send(new ResponseModel(200, "Task updated", task));
  } catch (error: any) {
    res.status(500).send(new ResponseModel(500, error.message, null));
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const userId: string = req.headers["user_id"] as string;
    if (!userId) {
      res.status(403).send(new ResponseModel(403, "Unauthorized access", null));
    }
    const id = req.params.id;
    logger.info(`Deleting task with id: ${id} for user: ${userId}`);
    await service.deleteTask(userId, id);
    res.status(204).send(new ResponseModel(204, "Task deleted", null));
  } catch (error: any) {
    res.status(500).send(new ResponseModel(500, error.message, null));
  }
});

export default app;
