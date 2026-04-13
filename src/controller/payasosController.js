const express = require("express");
const db = require("../repository/payasosRepository"); // Tu archivo del repositorio
const payasosService = require("../service/payasosService"); // Tu archivo del servicio

const app = express();
const PORT = 3000;

// Middleware para entender JSON (por si más adelante añades un POST)
app.use(express.json());

// --- AQUÍ DEFINIMOS EL ENDPOINT DIRECTAMENTE ---
app.get("/getpayasos", async (req, res) => {
  try {
    // Usamos el servicio que ya tienes creado
    const payasos = await payasosService.getAllPayasos();
    res.status(200).json(payasos);
  } catch (error) {
    res.status(500).json({ error: "Error interno", details: error.message });
  }
});
// -----------------------------------------------

// Función para inicializar la base de datos y levantar el servidor
async function startServer() {
  try {
    // 1. Inicializamos la base de datos
    await db.init();
    console.log(" Base de datos de payasos inicializada correctamente.");

    // 2. Levantamos el servidor
    app.listen(PORT, () => {
      console.log(` Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(" Error al iniciar la aplicación:", error);
  }
}

// Ejecutamos la función
startServer();
