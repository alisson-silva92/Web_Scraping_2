const request = require('request-promise')
const cheerio = require('cheerio')

const url ={

    'method':'post',
    'url': ('https://acheumarquiteto.caubr.gov.br/pesquisarProfissional')

}
async function acesso(){
    const response = await request(url)
    let $ = cheerio.load(response)
    let nome = $('td').text()
    //let registro = $('td[class="hidden-xs"]').text()
    console.log(nome);
    //console.log(registro);
}

acesso()