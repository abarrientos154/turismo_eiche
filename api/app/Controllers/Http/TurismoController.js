'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Helpers = use('Helpers')
const mkdirp = use('mkdirp')
const fs = require('fs')
const { validate } = use("Validator")
var randomize = require('randomatic');
/**
 * Resourceful controller for interacting with turismos
 */
const Turismo = use("App/Models/Turismo")
const Categoria = use("App/Models/Categoria")

class TurismoController {
  /**
   * Show a list of all turismos.
   * GET turismos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let turismo = (await Turismo.query().where({}).with('categoria').fetch()).toJSON()
    for (let j of turismo) {
      j.categoria_info = await Categoria.where('id', j.categoria.categoria_id).first()
    }
    response.send(turismo)
  }

  /**
   * Render a form to be used for creating a new turismo.
   * GET turismos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new turismo.
   * POST turismos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    let recibir = request.all()
    var dat = request.only(['dat'])
    dat = JSON.parse(dat.dat)
    console.log(dat, 'datt2')
    const validation = await validate(dat, Turismo.fieldValidationRules())
    if (validation.fails()) {
      response.unprocessableEntity(validation.messages())
    } else {
      let images = []
      if (dat.cantidadArchivos && dat.cantidadArchivos > 0) {
        for (let i = 0; i < dat.cantidadArchivos; i++) {
          let codeFile = randomize('Aa0', 30)
          const profilePic = request.file('turismoFiles_' + i, {
            types: ['image']
          })
          if (Helpers.appRoot('storage/uploads/turismo')) {
            await profilePic.move(Helpers.appRoot('storage/uploads/turismo'), {
              name: codeFile,
              overwrite: true
            })
          } else {
            mkdirp.sync(`${__dirname}/storage/Excel`)
          }
          images.push(profilePic.fileName)
        }
        console.log(images, 'images')
        dat.images = images

      }
      let body = dat
      delete body.cantidadArchivos
      body.ownerId = ((await auth.getUser()).toJSON())._id
      body.puntuacion = 0
      let guardar = await Turismo.create(body)
      response.send(guardar)
    }
  }

  /**
   * Display a single turismo.
   * GET turismos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let turismo = (await Turismo.query().where({subCategoria_id: parseInt(params.id)}).fetch()).toJSON()
    response.send(turismo)
  }

  async busquedabyid ({ params, request, response, view }) {
    let detalle = await Turismo.find(params.id)
    response.send(detalle)
  }

  async listadoadmind ({ params, request, response, view }) {
    let lista = (await Turismo.where({
      $or: [{ subCategoria_id: 1 }, { subCategoria_id: 2 }, { subCategoria_id: 3 }],
    }).fetch()).toJSON()
    response.send(lista)
  }

  /**
   * Render a form to update an existing turismo.
   * GET turismos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update turismo details.
   * PUT or PATCH turismos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a turismo with id.
   * DELETE turismos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let turismo = (await Turismo.find(params.id)).delete()
    response.send(turismo)
  }
}

module.exports = TurismoController
