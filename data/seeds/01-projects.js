exports.seed = function(knex) {
    return knex('projects').insert([
        { 
            "project_id":1,
            "project_name":"bar",
            "project_description":null,
            "project_completed":false
        },
        { 
            "project_id":2,
            "project_name":"rab",
            "project_description":"ITS A DESCRIPTION",
            "project_completed":true
        },
    
    ]);
  };


