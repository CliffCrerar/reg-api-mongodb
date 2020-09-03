const util = require('util');

module.exports = (req,res,next)=> {
    try{
        console.log(res.status(), req.path, ' | QUERY:', req.query, ' | PARAMS:',req.params);
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