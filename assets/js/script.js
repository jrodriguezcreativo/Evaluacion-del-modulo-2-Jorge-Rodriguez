//JavaScript
document.addEventListener("DOMContentLoaded", function () {
document.getElementById('telefono').addEventListener('input', function (e) {
  let valor = e.target.value.replace(/\D/g, '');
  

  if (valor.length > 0) {
    valor = valor.substring(0, 9); 
    valor = valor.replace(/^(\d{1})(\d{4})(\d{4})$/, '$1-$2-$3');
  }
  
  e.target.value = valor;
});

const form = document.querySelector("form")
form.addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("mensajeEnviado").style.display = "block"
  this.reset()
});

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')



document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const respuestasCorrectas = {
      q1: 'c',
      q2: 'c',
      q3: 'c'
    };

    let score = 0;

    for (let pregunta in respuestasCorrectas) {
      const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
      if (seleccionada && seleccionada.value === respuestasCorrectas[pregunta]) {
        score++;
      }
    }

    const resultado = document.getElementById('quizResult');
    resultado.classList.remove("text-danger", "text-warning", "text-success");

    if (score === 3) {
      resultado.textContent = "¡Excelente! Eres un usuario consciente de los riesgos. Sigue aplicando estos conocimientos.";
      resultado.classList.add("text-success");
    } else if (score >= 1) {
      resultado.textContent = "¡Vas por buen camino! Revisa nuestros consejos para fortalecer tu seguridad.";
      resultado.classList.add("text-warning");
    } else {
      resultado.textContent = "¡Alerta! Tu seguridad está en riesgo. Explora la sección 'Consejos' para protegerte.";
      resultado.classList.add("text-danger");
    }
  });

})
