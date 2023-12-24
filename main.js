class Calculadora {
  resultados = [];
  sumar = (a, b) => a + b;
  restar = (a, b) => a - b;
  multiplicar = (a, b) => a * b;
  dividir = (a, b) => (b !== 0 ? a / b : "Error: División por cero");

  realizarOperaciones = (a, b) => {
    this.resultados.push(this.sumar(a, b));
    this.resultados.push(this.restar(a, b));
    this.resultados.push(this.multiplicar(a, b));
    this.resultados.push(this.dividir(a, b));
  };

  mostrarResultados = () => {
    console.log("Resultados:");
    let msg;
    for (let i = 0; i < 4; i++) {
      switch (i) {
        case 0:
          msg = 'Suma:';
          break;
        case 1:
          msg = 'Resta:';
          break;
        case 2:
          msg = 'Multiplicacion:';
          break;
        case 3:
          msg = 'Division:';
          break;
        default:
          msg = 'Operación no reconocida';
      }
      console.log(msg, this.resultados[i]);
    }
  };
}

const calculadora = new Calculadora();

const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

calculadora.realizarOperaciones(numero1, numero2);
calculadora.mostrarResultados();
