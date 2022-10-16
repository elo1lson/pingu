import { Router } from "express";
import { homeGet } from "../controllers/home.js";
const route = Router()

route.get('/', homeGet)
export { route }