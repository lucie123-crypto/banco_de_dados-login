// Função para realizar login
function loginUser(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    })
        .then((response) => {
            if (!response.ok) throw new Error("Login falhou");
            return response.json();
        })
        .then((data) => {
            alert(data.message); // Exibe mensagem de sucesso
            window.location.href = "dashboard.html"; // Redireciona para a dashboard
        })
        .catch((error) => {
            console.error(error);
            alert("Usuário ou senha inválidos. Tente novamente.");
        });
}

// Função para realizar login
function loginUser(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    })
        .then((response) => {
            if (!response.ok) throw new Error("Login falhou");
            return response.json();
        })
        .then((data) => {
            alert(data.message); // Exibe mensagem de sucesso
            window.location.href = "dashboard.html"; // Redireciona para a dashboard
        })
        .catch((error) => {
            console.error(error);
            alert("Usuário ou senha inválidos. Tente novamente.");
        });
}

// Função para realizar login
function loginUser(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
        .then((response) => {
            if (!response.ok) throw new Error("Login falhou");
            return response.json();
        })
        .then((data) => {
            alert(data.message); // Exibe mensagem de sucesso
            window.location.href = "dashboard.html"; // Redireciona para a dashboard
        })
        .catch((error) => {
            console.error(error);
            alert("Usuário ou senha inválidos. Tente novamente.");
        });
}

// Função para registrar um novo usuário
function registerUser(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    const username = document.getElementById("new-username").value;
    const password = document.getElementById("new-password").value;

    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
        .then((response) => {
            if (!response.ok) throw new Error("Registro falhou");
            return response.json();
        })
        .then((data) => {
            alert(data.message); // Exibe mensagem de sucesso
            window.location.href = "login.html"; // Redireciona para a página de login
        })
        .catch((error) => {
            console.error(error);
            alert("Erro ao registrar. Tente novamente.");
        });
}