function exibirMensagens() {
    let mensagens = obterMensagens();
    let tabela = document.getElementById("table-mensagens");

    // Limpar tabela antes de preencher
    tabela.innerHTML = "<tr><th>Nome</th><th>Email</th><th>Mensagem</th></tr>";

    if (mensagens.length === 0) {
        // Se não houver mensagens, exibir uma mensagem na tabela
        let semMensagensRow = document.createElement("tr");
        let semMensagensData = document.createElement("td");
        semMensagensData.colSpan = 3;
        semMensagensData.textContent = "Nenhuma mensagem encontrada.";
        semMensagensRow.appendChild(semMensagensData);
        tabela.appendChild(semMensagensRow);
    } else {
        // Preencher a tabela com as mensagens
        mensagens.forEach(element => {
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

            tabela.appendChild(tableRow);
        });
    }
}

// Chamar a função para exibir mensagens quando a página carregar
window.onload = exibirMensagens;