const { Client } = require('pg');
const Task = require('../models/task');


class TaskPgDAO{

    constructor(){

        this._client = new Client({
        connectionString : 'postgres://postgres:Password1@192.168.1.50:5432/todo'
        //connectionString : process.ENV.DATABASE_URL
        });

        this._client.connect(function (err){
            if (err) return done(err);
        });
    }

    getAllTasks(displaycb){

        const query = {
            name: 'fetch-all-task',
            text: 'SELECT * FROM task',
        };

        this._client.query(query, function(err, result){
            let lesTasks = [];
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function(row) {
                    let uneTask;

                    uneTask = new Task(lesTasks.length, row['libelle']);
                    lesTasks.push(uneTask);
                });

                displaycb(lesTasks);

            }

        });


    };

}


module.exports = TaskPgDAO;
