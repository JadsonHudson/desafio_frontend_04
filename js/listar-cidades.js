document.getElementById('estado').addEventListener('change', function () {
    const uf = this.value;
    const cidadeSelect = document.getElementById('cidade');
    cidadeSelect.innerHTML = '<option value="">Carregando...</option>';

    fetch(`https://trilhas-desafio-iv-api.vercel.app/estados/${uf}/cidades`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar cidades');
            }
            return response.json();
        })
        .then(data => {
            cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>';
            data.forEach(cidade => {
                const option = document.createElement('option');
                option.value = cidade.id;  // Supondo que cada cidade tem um id
                option.textContent = cidade.titulo;  // Supondo que cada cidade tem um nome
                cidadeSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar cidades:', error);
            cidadeSelect.innerHTML = '<option value="">Erro ao carregar cidades</option>';
        });
});

