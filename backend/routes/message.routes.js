import express from "express"
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router=express.Router();

router.get("/:id",protectRoute ,getMessages);  //here protectRoute is type of authorization
router.post("/send/:id",protectRoute ,sendMessage);  //here protectRoute is type of authorization

// router.get("/get/:conversationId",getMessages);

export default router

