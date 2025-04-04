const express = require('express');
const app = express();
const PORT = 3000;

// Arreglo de estudiantes
const estudiantes = [
  { matricula: "001", nombre: "Juan", calificacion: 92, califFinal: 93, adeudos: false },
  { matricula: "002", nombre: "Ana", calificacion: 95, califFinal: 91, adeudos: true },
  { matricula: "003", nombre: "Luis", calificacion: 85, califFinal: 88, adeudos: false },
  { matricula: "004", nombre: "María", calificacion: 70, califFinal: 75, adeudos: true },
  { matricula: "005", nombre: "Pedro", calificacion: 60, califFinal: 65, adeudos: false },
  { matricula: "006", nombre: "Laura", calificacion: 55, califFinal: 58, adeudos: true },
  { matricula: "007", nombre: "Carlos", calificacion: 78, califFinal: 80, adeudos: false },
  { matricula: "008", nombre: "Lucía", calificacion: 99, califFinal: 98, adeudos: false },
  { matricula: "009", nombre: "Diego", calificacion: 89, califFinal: 87, adeudos: true },
  { matricula: "010", nombre: "Sofía", calificacion: 40, califFinal: 45, adeudos: false },
  { matricula: "011", nombre: "Mateo", calificacion: 91, califFinal: 92, adeudos: false }
];

// Lógica para generar mensaje
function generarMensaje(estudiante) {
  const final = estudiante.califFinal;
  const tieneAdeudo = estudiante.adeudos;

  if (final > 90 && !tieneAdeudo) {
    return "Te graduaste con honores";
  } else if (final > 90 && tieneAdeudo) {
    return "Tenías honores, pero tienes un adeudo";
  } else if (final >= 70 && final <= 90) {
    return "Pasaste muy apenas";
  } else if (final < 70 && !tieneAdeudo) {
    return "Como no tienes adeudo, tienes derecho a un examen de recuperación";
  } else if (final < 70 && tieneAdeudo) {
    return "Expulsado";
  }
}

// Endpoint
app.get('/estudiantes', (req, res) => {
  const respuesta = estudiantes.map(est => ({
    matricula: est.matricula,
    mensaje: generarMensaje(est)
  }));

  res.json(respuesta);
});

// Servidor corriendo
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});