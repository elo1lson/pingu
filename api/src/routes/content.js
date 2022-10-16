import { Router } from "express";
import { contentGet } from "../controllers/content.js";
const route = Router()

route.get('/', contentGet)

export { route as contentRoute }