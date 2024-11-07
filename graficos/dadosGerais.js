const url="https://raw.githubusercontent.com/sandrogeneroso/2024-API-VIL-ES/refs/heads/main/api-VIL%C3%95ES-.JSON"

async function vizualizainfo(){
    const res = await fetch(url)
    const dados = await res.json()


    const viloes=Object.keys(dados)
    const viloesMaisVotados=viloes[0]
    const quantidadedeVotos=Object.values(dados)[0]

    let paragrafo = document.createElement('p')

    paragrafo.classList.add('caixa-grafico__texto')
    
    paragrafo.innerHTML = ` Nessa pesquisa, buscou-se compreender qual o vilão mais votados pelos jovens. O ${viloesMaisVotados} foi o vilão mais votado entre todos, com um total de ${quantidadedeVotos} votos, em uma pesquisa que teve um total de um milhão de participantes.`

    let caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)

}

vizualizainfo()