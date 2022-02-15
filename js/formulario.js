const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	ciudad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	celular: /^\d{10}$/,
	direccion: /^[a-zA-Z0-9\_\-]{4,16}$/, 
}

const campos = {
	apellido: false,
	nombre: false,
	correo: false,
	celular: false,
	direccion: false
}


const validarFormulario = (e) => {
    let input_name = e.target.name;
    validarCampo(expresiones[input_name], e.target, input_name);
};


const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

document.getElementById('boton').onclick = () => {
	document.getElementById('boton').classList.add('formulario__btns-i');
	setTimeout(() => {
		document.getElementById('boton').classList.remove('formulario__btns-i');
	}, 1000);
  }

  document.getElementById('botones').onclick = () => {
	document.getElementById('botones').classList.add('formulario__btns-i');
	setTimeout(() => {
		document.getElementById('botones').classList.remove('formulario__btns-i');
	}, 1000);
  }



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.apellido && campos.nombre && campos.ciudad && campos.correo && campos.celular && campos.direccion){
		formulario.reset();
		

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

	} else {	
  	document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		
	}
});