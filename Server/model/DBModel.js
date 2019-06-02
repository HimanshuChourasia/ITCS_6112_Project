/**
 * @module /model
 * @desc Contains utility for connecting to database.
 */


const mongoose = require('mongoose');
const schema = mongoose.Schema ;
const password = 'test' ;

//const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
//const database = 'Recipes';      // REPLACE WITH YOUR DB NAME
const url = "mongodb+srv://DB_User1:"+`${password}`+"@clusterssdi-vv7zy.mongodb.net/test?retryWrites=true&w=majority" ;
/**
 * Database.
 */
class Database {
    /**
     * _connect()
     */
    constructor() {
        this._connect()

    }
    /**
     *  @return {object} - the  database connection object
     */
    _connect() {
        mongoose.connect(url,{useNewUrlParser:true})
            .then(() => {
                console.log('Database connection successful');
            })
            .catch(err => {
                console.error('Database connection error');
                console.log(err)     ;
            })
    }
}

let dbconn = new Database();
