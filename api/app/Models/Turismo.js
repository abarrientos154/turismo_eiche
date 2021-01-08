'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Turismo extends Model {
  static fieldValidationRules() {
    const rules = {
      ubicacion: "object",
      subCategoria_id: "required|number",
      descripcion: "string",
      nombre: "string"
    }
    return rules
  }
}

module.exports = Turismo
