exports.up = async function(knex) {
    await knex.schema
        .createTable('projects', table => {
            table.increments('project_id');
            table.text('project_name', 128)
                .notNullable();
            table.text('project_description', 256);
            table.integer('project_completed')
                .unsigned();
        })
        .createTable('resources', table => {
            table.increments('resource_id');
            table.text('resource_name', 128)
                .notNullable()
                .unique();
            table.text('resource_description', 256);
        })
        .createTable('tasks', table => {
            table.increments('task_id');
            table.text('task_description', 256)
                .notNullable();
            table.text('task_notes', 256);
            table.integer('task_completed');
            table.integer('project_id')
                .notNullable()
                .references('project_id')
                .inTable('projects');
        })
        .createTable('project_resources', table => {
            table.increments('project_resource_id');
            table.integer('project_id')
                .notNullable()
                .references('project_id')
                .inTable('projects');
            table.integer('resource_id')
                .notNullable()
                .references('resource_id')
                .inTable('resources');
        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('project')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('project_resources')
};
