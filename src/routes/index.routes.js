import { Router } from "express";
import {
  renderAbout,
  renderAddTask,
  renderDeleteTask,
  renderEditingTask,
  renderEditTask,
  renderTask,
  renderTogleDone,
} from "../controllers/task.controller";

const router = Router();
router.get("/", renderTask);

router.get("/about", renderAbout);

router.get("/editTask/:id", renderEditTask);

router.post("/editingTask/:id", renderEditingTask);

router.get("/deleteTask/:id", renderDeleteTask);

router.get("/TogleDone/:id", renderTogleDone);

router.post("/tasks/add", renderAddTask);

export default router;
