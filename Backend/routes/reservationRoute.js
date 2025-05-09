
import { Router } from "express";
import  { reservationController } from "../controller/reservation.js";

const router = Router();

router.post("/send", reservationController);

export default router;