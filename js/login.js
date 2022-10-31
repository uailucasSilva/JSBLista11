function validar() {
    user = document.getElementById("user");
    senha = document.getElementById("senha");

    if (user.value == "") {
        // alert("Usuário não foi preenchido!");
        alertWifi("Usuário em branco! Favor preenchê-lo", false, 0, "../img/toupeira.gif", 30);
        user.focus();
    }
    else if (senha.value == "") {
        //  alert("Senha não foi preenchida!")
        alertWifi("Senha em branco!  Favor preenchê-la", false, 0, "../img/toupeira.gif", 30);
        senha.focus();
    }
    else {
        // alertWifi("Login válido. Uhuuuuuul!", false, 0, "../img/toupeira.gif", 30);
        readJSON(user.value, senha.value);
    }

}

function readJSON(usuario, senha) {
    var file = "../json/users.json";
    // var file = "https://wilton-filho.github.io/JS-GitHub/aulas/jogo/login/json/users2.json";
    fetch(file)
        .then(response => response.json())
        .then(content => checkUser(content, usuario, senha))
        .catch(err => console.log("erro na leitura do JSON"));
}

function checkUser(content, usuario, senha) {
    var achou = false;
    for (i = 0; i < content.usuarios.length; i++) {
        if ((content.usuarios[i].user == usuario) && (content.usuarios[i].pwd == senha)) {
            achou = true;
            break;
        }
    }
    if (achou)
        alertWifi("Usuário válido!", false, 0, 'img/toupeira.gif', 30);
    else
        alertWifi("Usuário inválido!", false, 0, 'img/toupeira.gif', 30);

}
