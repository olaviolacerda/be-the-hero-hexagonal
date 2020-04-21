import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('ongs', (t) =>{
    t.string('id').primary();
    t.string('name').notNullable();
    t.string('email').notNullable();
    t.string('whatsapp').notNullable();
    t.string('city').notNullable();
    t.string('uf', 2).notNullable();
  })
};

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('ongs');
}