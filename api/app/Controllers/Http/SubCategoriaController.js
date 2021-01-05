'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with subcategorias
 */
const Sub = use("App/Models/SubCategoria")

class SubCategoriaController {
  /**
   * Show a list of all subcategorias.
   * GET subcategorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let todo = (await Sub.all()).toJSON()
    console.log(todo , 'pendiente perro caliente x2')
    response.send(todo)
  }

  /**
   * Render a form to be used for creating a new subcategoria.
   * GET subcategorias/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new subcategoria.
   * POST subcategorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single subcategoria.
   * GET subcategorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let subcategoria = (await Sub.query().where({categoria_id: parseInt(params.id)}).fetch()).toJSON()
    console.log(params.id, 'mrk')
    response.send(subcategoria)
  }

  /**
   * Render a form to update an existing subcategoria.
   * GET subcategorias/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update subcategoria details.
   * PUT or PATCH subcategorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a subcategoria with id.
   * DELETE subcategorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = SubCategoriaController
