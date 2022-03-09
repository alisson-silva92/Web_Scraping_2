(async ()=> {
    const db = require('./db');
    const Dados = require('./dados.js');
    await db.sync();


    const  novocadastro = await Dados.create({
        
        Nome:'nome10',
        Registro_CAU: "12345789"
    })
    
})();