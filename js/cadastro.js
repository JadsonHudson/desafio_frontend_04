let estados = [];

function carregarEstados() {
    fetch('https://trilhas-desafio-iv-api.vercel.app/estados')
        .then(response => response.json())
        .then(data => {
            estados = data;
        })
        .catch(error => {
            console.error('Erro ao carregar estados:', error);
        });
}

document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const nome_usuario = document.getElementById('nome-usuario').value;
    const data_nascimento = document.getElementById('data_nascimento').value;
    const genero = document.getElementById('genero').value;
    const cidade = document.getElementById('cidade').value;
    
    const estado_uf = document.getElementById('estado').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;
    const concordarTermos = document.getElementById('concordar-termos').checked;

    if (senha !== confirmarSenha) {
        alert('As senhas não conferem!');
        return;
    }
    if (!concordarTermos) {
        alert('Você deve concordar com os termos de uso.');
        return;
    }
    
    carregarEstados();
    
    const estado_id = estados.find(estado => estado.uf === estado_uf).id;

    const dadosCadastro = {
        nome: nome,
        email: email,
        username: nome_usuario,
        data_nascimento: data_nascimento,
        genero: genero,
        estado_id: estado_id,
        cidade_id: Number.parseInt(cidade),
        senha: senha
    };
    console.log(dadosCadastro);
    fetch('https://trilhas-desafio-iv-api.vercel.app/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosCadastro)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao cadastrar');
            }
            return response.json();
        })
        .then(data => {
            alert('Cadastro realizado com sucesso!');
            // Redirecionar ou limpar formulário, conforme necessário
            document.getElementById('cadastroForm').reset();
        })
        .catch(error => {
            alert('Erro ao cadastrar: ' + error.message);
            console.error('Erro:', error);
        });
});