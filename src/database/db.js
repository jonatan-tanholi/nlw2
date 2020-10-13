const database = require('sqlite-async')
database.open(__dirname + '/database.sqlite').then(execute)




function execute (db) {
    //criar as tabelas do banco de dados.
    return db.exec(`
        create table if not exists proffys (
            id integer primary key autoincrement,
            name text,
            avatar text,
            whatsapp text,
            bio text
        );

        create table if not exists classes (
            id integer primary key autoincrement,
            subject text,
            cost text,
            proffy_id integer
        );
        
        create table if not exists class_schedule(
            id integer primary key autoincrement,
            class_id integer,
            weekday integer,
            time_from integer,
            time_to integer
        );
        `)
    
}

module.exports = database.open(__dirname + '/database.sqlite').then(execute)