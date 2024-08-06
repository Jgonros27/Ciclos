import conexion from "../mysql_conector.js"



export const getCiclos= async (req,res)=>{
   try {
      //throw new Error();
      const [result] = await conexion.query("SELECT * FROM cursos");
   console.log(result);
   res.status(200).json(result);
   } catch (error) {
      res.status(500).json({
         message:"Error en el servidor"
      });
   }
   
}

export const getModulos= async (req,res)=>{
   try {
   const {id}=req.params;
   const [result] = await conexion.query("SELECT * FROM modulos WHERE idCurso=?",[id]);

   res.status(200).json(result); //La respuesta que devuelve el servidor
   } catch (error) {
      res.status(500).json({
         message:"Error en el servidor"
      });
   }
   
}

export const getAlumnos= async (req,res)=>{
   try {
   const {id}=req.params;
   const [result] = await conexion.query("SELECT * FROM alumnos WHERE idCurso=?",[id]);

   res.status(200).json(result); //La respuesta que devuelve el servidor
   } catch (error) {
      res.status(500).json({
         message:"Error en el servidor"
      });
   }
   
}


export const addCalificacion= async (req,res)=>{
   try {
      console.log("pasa");
   const {idCurso, idModulo, idAlumno,calificacion}=req.body;
   const [result] = await conexion.query("INSERT INTO calificaciones (idCurso, idModulo, idAlumno,calificacion) VALUES (?,?,?,?)",[idCurso, idModulo, idAlumno,calificacion]);
    console.log("pasa1");
   res.status(201).json({id:result.insertId}); //La respuesta que devuelve el servidor
   } catch (error) {
      res.status(500).json({
         message:"Error en el servidor"
      });
   }
   
}

