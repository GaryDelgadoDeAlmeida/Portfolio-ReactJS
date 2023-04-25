/**
 * renvoie un port valide, qu'il soit fourni sous la forme d'un numéro ou d'une chaîne
 * 
 * @param {*} val 
 * @returns 
 */
const normalizePort = (val) => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
        return val;
    }
    
    if (port >= 0) {
        return port;
    }
    
    return false;
};

/**
 * recherche les différentes erreurs et les gère de manière appropriée. Elle est ensuite enregistrée dans le serveur
 * 
 * @param {*} error 
 */
const errorHandler = (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;

        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;

        default:
            throw error;
    }
};

module.exports = {
    normalizePort,
    errorHandler
}