const request = require('request-promise')
const cheerio = require('cheerio')
const Pool = require('pg').pool

const { database } = require('pg/lib/defaults')
const { append } = require('express/lib/response')
const { post } = require('request')

const db = require('./db');
const Dados = require('./dados.js');
// await db.sync();

const url = {

    'method': 'post',
    'url': ('https://acheumarquiteto.caubr.gov.br/pesquisarProfissional')

}

async function acesso() {
    const response = await request(url)
    let acessando = cheerio.load(response)
    let count = 0;
    let obj = {};
    acessando('tr[class="bg_barra_arquiteto"] > td').each( (index, element) => {
        if (count == 7) {
                // const db = require('./db');
                // const Dados = require('./dados.js');
               //await db.sync();

                const novoCadastro = Dados.create(obj)
            
                count = 0;
        } 
        
        if (count <= 6) {
            if (count == 0) {
                obj.Nome = acessando(element).text()
                //console.log(Nome);
            }
            if (count == 1) {
                obj.Registro_CAU = acessando(element).text()
                //console.log(registro);
            }
            if (count == 2) {
                obj.Data_inicio_registro = acessando(element).text()
                //console.log(Data_início_registro);
            }
            if (count == 3) {
                obj.Data_fim_registro = acessando(element).text()
                ///console.log(Data_fim_registro);
            }
            if (count == 4) {
                obj.Situacao_registro = acessando(element).text()
                //console.log(Situacao_registro);
            }
            if (count == 5) {
                obj.Municipio = acessando(element).text()
                //console.log(Municipio);
            }
            if (count == 6) {
                obj.Uf = acessando(element).text()
                //console.log(uf);
            }
            count++
        }       
        
        if (count == 7) {        

            const novoCadastro = Dados.create(obj)
        
            count = 0;

    } 
    }
    
    );
}
acesso()

