const request = require('request-promise')
const cheerio = require('cheerio')
const Pool = require('pg').pool

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'testes',
    password: 'root',
    port: 5432,
});

const url ={

    'method':'post',
    'url': ('https://acheumarquiteto.caubr.gov.br/pesquisarProfissional')

}
async function inserindo(){
    
}


async function acesso(){
    const response = await request(url)
    let acessando = cheerio.load(response)
    //let nome = 
    let count = 0

    acessando('tr[class="bg_barra_arquiteto"] > td').each((index, element) => {
        if (count ==7){

            

            count = 0
        }

         if(count <= 6){
             if (count == 0){
                 let nome = acessando(element).text()
                 console.log(nome);
                
             }
             if (count == 1){
                let registro = acessando(element).text()
                console.log(registro);
                
            }
            if (count == 2){
                let Data_início_registro = acessando(element).text()
                console.log(Data_início_registro );
                
            }
            if (count == 3){
                let Data_fim_registro = acessando(element).text()
                console.log(Data_fim_registro);
                
            }
            if (count == 4){
                let Situacao_registro = acessando(element).text()
                console.log(Situacao_registro);
                
            }
            if (count == 5){
                let Municipio = acessando(element).text()
                console.log(Municipio);
                
            }
            if (count == 6){
                let uf = acessando(element).text()
                console.log(uf);
                
            }
            count++
         }
      });
     

}

acesso()