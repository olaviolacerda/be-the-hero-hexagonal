import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('incidents', (t) => {
    t.bigIncrements();
    t.string('title').notNullable();
    t.string('description').notNullable();
    t.decimal('value').notNullable();
    t.string('ong_id').notNullable();

    t.foreign('ong_id').references('id').inTable('ongs');
  })
};


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('incidents');
}