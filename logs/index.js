const util = require('util');

module.exports = (req,res,next)=> {
    try{
        util.log('Received Request');
        if(req.method==='GET'){
            logGet(req);
        } else if(req.method==='POST'){
            logPost(req);
        }
        next();
    }catch(err){
        console.error('ERROR in Log',err);
    }
    
}

function logPost(req){
    console.log(req);
    console.log(`
        ORIGIN: ${req.hostname}\n
        HEADERS: ${JSON.stringify(req.headers)}\n
        QUERY: ${JSON.stringify(req.query)}\n
        BODY: ${req.data}
    `);
}

function logGet(req){
console.log(
    `
    ORIGIN: ${req.origin}\n
    HEADERS: ${JSON.stringify(req.headers)}\n
    QUERY: ${JSON.stringify(req.query)}\n
    `
);
}