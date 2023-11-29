function carregarMensagensNaTabela() {
    let mensagensAdmin = obterMensagens();
    let tabelaPai = document.getElementById("table-mensagens");

    // Limpar tabela antes de preencher
    tabelaPai.innerHTML = "<tr><th>Nome</th><th>Email</th><th>Mensagem</th></tr>";

    mensagensAdmin.forEach(element => {
        let nome = element["nome"];
        let email = element["email"];
        let mensagem = element["mensagem"];

        let tableRow = document.createElement("tr");

        let tableData1 = document.createElement("td");
        tableData1.textContent = nome;
        tableRow.appendChild(tableData1);

        let tableData2 = document.createElement("td");
        tableData2.textContent = email;
        tableRow.appendChild(tableData2);

        let tableData3 = document.createElement("td");
        tableData3.textContent = mensagem;
        tableRow.appendChild(tableData3);

        tabelaPai.appendChild(tableRow);
    });
}

// Chame esta função para exibir mensagens quando a página carregar
window.onload = function () {
    carregarMensagensNaTabela();

    // Adiciona o event listener para o botão de login
    document.getElementById("login-button").addEventListener("click", fazerLogin);
};
