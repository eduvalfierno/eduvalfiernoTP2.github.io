function calcularpago(cantidad, categoria) {
	let Estudiante = 40;
	let Trainee = 100;
	let Junior = 170;
	let General = 200;
	let totalpago = 0;
  
	if (categoria === "Trainee") {
	  totalpago = Trainee * cantidad;
	} else if (categoria === "Estudiante") {
	  totalpago = Estudiante * cantidad;
	} else if (categoria === "Junior") {
	  totalpago = Junior * cantidad;
	} else if (categoria === "General") {
	  totalpago = General * cantidad;
	}
  
	return totalpago;
  }
  
  let formulario = document.getElementById("gastritis");
  /*let divResultado = document.getElementById("resultado");¨*/
  let cantidadInput = document.getElementById("cantidad");
  let categoriaInput = document.getElementById("categoria");
  
  formulario.addEventListener("submit", (evento) => {
	evento.preventDefault();
	divResultado.textContent = "Total a pagar: $ " + calcularpago(parseFloat(cantidadInput.value), categoriaInput.value);
	divResultado.classList.add("Resultadoabotonado");
  });
  
  formulario.addEventListener("reset", ()=> {
    divResultado.textContent = "Total a pagar: $ "
	document.getElementById('nombre').value = ' ';
	document.getElementById('apellido').value = ' ',
	document.getElementById('correo').value = ' ';
	document.getElementById('cantidad').value = ' ';
	document.getElementById('categoria').value = 'General';
  })