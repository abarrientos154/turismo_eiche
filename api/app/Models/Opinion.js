'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Opinione extends Model {
  static get fillable() {
    return ['comentario', 'puntuacion']
  }
  static fieldValidationRules() {
    const rules = {
      comentario: "string",
      puntuacion: "number"
    }
    return rules
  }
}

module.exports = Opinione
