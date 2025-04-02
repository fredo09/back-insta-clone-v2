import express from 'express';

// Crear una instancia de la aplicación Express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta básica
app.get('/', (req, res) => {
	const dataInfo = {
		name: "pepe",
		email: "pepe@email"
	};
	res.status(201).send(dataInfo);
	console.log("🚀 ~ hemos lanzado el servicio:");
});


export default app;