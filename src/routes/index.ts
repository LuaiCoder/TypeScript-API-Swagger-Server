import express from "express";
import PingController from "../controllers/ping";

const router = express.Router();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.get("/mess", async (_req, res) => {
    const controller = new PingController();
    const response = await controller.getMess();
    return res.send(response);
  });
  
  router.post("/", async (_req, res) => {
    const controller = new PingController();
    const response = await controller.createComment(_req.body);
    return res.send(response);
  });

export default router;