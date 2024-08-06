import {config} from 'dotenv';

config(); //leer las variables de entorno

// para ller las variables de entono se utiliza el objeto process de node.js
//Utiluzar la propiedad env, donde se almacena todas las variables del dispositivo

// console.log(process.env.PORT);
// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASSWORD);
// console.log(process.env.DB_HOST);
// console.log(process.env.DB_PORT);
// console.log(process.env.DB_DATABASE);

//Lo correcto sería

export const PORT = process.env.PORT || 3000
export const DB_PORT = process.env.DB_PORT || 3306
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_USER = process.env.DB_USER || 'root'
export const DB_DATABASE = process.env.DB_DATABASE || 'ciclostrassierra'
export const DB_PASSWORD = process.env.DB_PASSWORD || ''