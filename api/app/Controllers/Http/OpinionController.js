'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with opiniones
 */
const Opiniones = use("App/Models/Opinion")
const moment = require("moment")
class OpinioneController {
  /**
   * Show a list of all opiniones.
   * GET opiniones
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, params }) {
    console.log(params.id_turismo, 'paramssss')
    let opiniones = (await Opiniones.query().where('turismo_id', params.id_turismo).with('user_info').fetch()).toJSON()
    let formatearFecha = opiniones.map(v => {
      return {
        ...v,
        created_at: moment(v.created_at).locale('es').calendar()
      }
    })
    response.send(formatearFecha)
  }

  /**
   * Render a form to be used for creating a new opinione.
   * GET opiniones/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new opinione.
   * POST opiniones
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, params, auth }) {
    const user = (await auth.getUser()).toJSON() // esto es para obtener la info del usuario logueado
    if (user) { // pregunto si el usuario esta logueado ya que no se puede comentar o dar opiniones a menos que este logueado
      let body = request.only(Opiniones.fillable)
      body.turismo_id = params.id_turismo
      body.user_id = user._id
      const opi = await Opiniones.create(body)
      response.send(opi)
    }
  }

  /**
   * Display a single opinione.
   * GET opiniones/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing opinione.
   * GET opiniones/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update opinione details.
   * PUT or PATCH opiniones/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a opinione with id.
   * DELETE opiniones/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = OpinioneController
