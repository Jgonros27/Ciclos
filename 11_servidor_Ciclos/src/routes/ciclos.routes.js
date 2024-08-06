"use strict"

import { Router } from "express"
import { getCiclos, getModulos, getAlumnos, addCalificacion} from "../controllers/ciclos.controllers.js";
import { validacion } from "../validators/ciclos.validator.js";

const router = Router();

router.get("/ciclos",getCiclos);

router.get("/modulos/:id",getModulos);

router.get("/alumnos/:id",getAlumnos);

router.post("/calificacion",validacion, addCalificacion);

export default router; //exportamos