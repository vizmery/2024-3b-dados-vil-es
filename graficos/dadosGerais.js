const url = 'https://raw.githubusercontent.com/vizmery/pesquisa/refs/heads/main/json-1'

async function vizualizainfo(){
    const res = await fetch(url)
    const dados = await res.json()


    const viloes = Object.keys(dados)
    const vilõesmaisVotados=viloes[0]
    const QuantidadeDeVotoss=Object.values(dados)[0]

    console.log(viloesmaisVotados)
    console.log(QuantidadeDeVotos)
}

vizualizainfo()