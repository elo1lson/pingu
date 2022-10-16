import { Router } from "express";
import { homeGet } from "../controllers/home.js";
const route = Router()

route.get('/commands', homeGet)
route.get('/messages', homeGet)
export { route }