"use strict";
import {check, validationResult} from "express-validator"

export const validacion=[
    //validar el nombre del cliente
    check("idCurso").exists().notEmpty().withMessage("El curso no debe estar vacio"),
    check("idModulo").exists().notEmpty().withMessage("El modulo no debe estar vacio"),
    check("idAlumno").exists().notEmpty(),
    check("calificacion").exists().notEmpty().isLength({min:3,max:3}).withMessage("La calificacion no debe de estar vacia"),
    (req,res,next)=>{
        const errors = validationResult(req); //Array tantas filas como campos valide
        if (!errors.isEmpty()) {
            res.status(400).json({
                errors:errors.array() //Devolver el mensaje
            })
        } else { //todo correcto
            next(); //Sigue la ejecución del siguiente middleware
        }
    }
]