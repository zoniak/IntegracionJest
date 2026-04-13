// tests/payasosService.integration.test.js
const { registerPayaso } = require("../src/service/payasosService");
const db = require("../src/repository/payasosRepository");

describe("Pruebas de Integración: PayasosService + SQLite", () => {
  // ANTES DE TODAS LAS PRUEBAS: Abrimos la BD y creamos la tabla
  beforeAll(async () => {
    await db.init();
  });

  /*
  // ANTES DE CADA PRUEBA: Limpiamos los datos para que sean independientes
  beforeEach(async () => {
    await db.clear();
  });
  */

  // DESPUÉS DE TODAS LAS PRUEBAS: Cerramos la conexión
  afterAll(async () => {
    await db.close();
  });

  // --- LAS PRUEBAS SON EXACTAMENTE IGUALES QUE ANTES ---

  test("Debe registrar un payaso nuevo y guardarlo en la base de datos", async () => {
    const result = await registerPayaso(
      "Pennywise",
      "Pennywise@ejemplo.com",
      "magia",
    );

    expect(result).toHaveProperty("id");
    expect(result.name).toBe("Pennywise");

    const userInDb = await db.findPayasoByEmail("Pennywise@ejemplo.com");
    expect(userInDb).not.toBeNull();
    expect(userInDb.name).toBe("Pennywise");
  });

  test("Debe lanzar un error si intentamos registrar un email duplicado", async () => {
    await registerPayaso(
      "Juan Carlos Monedero",
      "venenzuela@ejemplo.com",
      "Mentiroso",
    );

    await expect(
      registerPayaso(
        "Juan Carlos Monedero",
        "venenzuela@ejemplo.com",
        "Mentiroso",
      ),
    ).rejects.toThrow("El payaso ya está registrado con ese email");
  });

  test("Debe lanzar un error si faltan datos y no tocar la base de datos", async () => {
    await expect(registerPayaso("Solo Nombre", null, null)).rejects.toThrow(
      "El nombre y el email son obligatorios",
    );

    const userInDb = await db.findPayasoByEmail(null);
    expect(userInDb).toBeNull();
  });
});

/*
  test("Debe lanzar un error si intentamos registrar un nombre duplicado", async () => {
    // 1. Preparamos el entorno insertando un payaso primero
    await registerPayaso("Bibi Netanyahu", "sionista@autoritario.com");

    // 2. Intentamos registrar a otra persona con el mismo nombre
    // Usamos rejects.toThrow para capturar errores asíncronos en Jest
    await expect(
      registerPayaso("Bibi Netanyahu", "EpsteinMossad@autoritario.com"),
    ).rejects.toThrow("El payaso ya está registrado con ese nombre");
  }); // fin test 4
    */
