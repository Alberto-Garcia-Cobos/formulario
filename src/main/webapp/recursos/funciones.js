function validarForma(forma) {
    
    //validamos usuario
    var usuario = forma.usuario;
    if (usuario.value == "" || usuario.value == "Escribir usuario") {
        alert("Debe proporcionar un nombre usuario");
        usuario.focus();
        usuario.select();
        return false;
    }
    
    //validamos contraseña
    var password = forma.password;
    if (password.value == "" || password.value.length < 3) {
        alert("Debe introducir una contrasela de al menos 3 caracteres");
        password.focus;
        password.select();
        return false;
    }
    
    //Validamos la tacnologia
    var tecnologias = forma.tecnologia;
    var checkSeleccionado = false;

    for (var i = 0; i < tecnologias.length; i++) {
        if (tecnologias[i].checked) {
            checkSeleccionado = true;
        }
    }
    if (!checkSeleccionado) {
        alert("Debe seleccionar una tecnologia");
        return false;
    }
    
    //Validamos el genero
    var genero = forma.genero;
    var radioSeleccionado = false;

    for (var i = 0; i < genero.length; i++) {
        if (genero[i].checked) {
            radioSeleccionado = true;
        }
    }
    if (!radioSeleccionado) {
        alert("Debe seleccionar un genero");
        return false;
    }
    
    //validacion ocupacion
    var ocupacion = forma.ocupacion;
    if(ocupacion.value == ""){
        alert("Debe seleccionar una ocupación");
        return false;
    }
    
    //Formulario es valido
    alert("Formulario valido, enviando datos al servidor");
    return true;
}

