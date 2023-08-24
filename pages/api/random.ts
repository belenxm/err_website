import { NextApiRequest, NextApiResponse } from "next"; // representa la solicitud http entrante y la rta http saliente para la ruta de la api.
import prismadb from '@/lib/prismadb'; // libreria de base de datos
import serverAuth from "@/lib/serverAuth"; // maneja autenticacion del lado del servidor. 

// Declaracion de la funcion : 
export default async function handler(req: NextApiRequest, res: NextApiResponse) { // El codigo exporta una funcion asincrona llamada handler. Que recibe dos parametros req, q representa la solicid entrante y res para la rta. saliente.
     if(req.method != 'GET') { // Verifica si el metodo http utilizado no es igual a 'GET'.
        return res.status(405).end(); //Si no es una solicitud get la funcion responde con un codigo de estado 405(Metodo no permitido) y con .end( finaliza ).
     }

     try {
        await serverAuth(req);
        const movieCount = await prismadb.movie.count(); //El codigo obtiene el conteo total de peliculas . 
        const randomIndex = Math.floor(Math.random() * movieCount); // genera un indice aleatorio dentro del rango del conteo total de peliculas.
        const randomMovies = await prismadb.movie.findMany({ //obtiene una pelcula aleatorioa de la base de datos.
            take:1,
            skip: randomIndex
        });

        return res.status(200).json(randomMovies[0]); // si es exitoso la FUNCION responde con un codigo de estado 200 y una representaciOn json de la pelicula. 

     } catch (error) { // Si ocurre algun error ya sea en la autenticaion o en las consultas a la ba se datos, se captura en este proceso, el error se registra en la consola y se envia una rta 400(Solicitud incorrecta)
        console.log(error);
        return res.status(400).end();
     }

}