const url="https://raw.githubusercontent.com/sandrogeneroso/pesquisa/refs/heads/main/pesquisa-viloes.json"

async function vizualizainfo(){
    const res = await fetch(url)
    const dados = await res.json()


    const viloes=Object.keys(dados)
    const votos=Object.values(dados)
    const viloesMaisVotados=viloes[0]
    const quantidadedeVotos=Object.values(dados)[0]

    const data =[
        {
            x:viloes,
            y:votos,
            type: 'bar'
        }
    ]


    let paragrafo = document.createElement('p')

    paragrafo.classList.add('caixa-grafico__texto')
    
    paragrafo.innerHTML = ` Nessa pesquisa, buscou-se compreender qual o vilão mais votados pelos jovens. O ${viloesMaisVotados} foi o vilão mais votado entre todos, com um total de ${quantidadedeVotos} votos, em uma pesquisa que teve um total de um milhão de participantes.`

    let caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)

    const grafico=document.createElement('div')
    grafico.className= 'grafico'
    document.getElementById("caixa-grafico").appendChild(grafico)
    Plotly.newPlot(grafico, data)

}

vizualizainfo()