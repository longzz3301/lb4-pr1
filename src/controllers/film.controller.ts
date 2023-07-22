import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {FilmResource} from '../models';
import {FilmResourceRepository} from '../repositories';

export class FilmController {
  constructor(
    @repository(FilmResourceRepository)
    public filmResourceRepository : FilmResourceRepository,
  ) {}

  @post('/film-resources')
  @response(200, {
    description: 'FilmResource model instance',
    content: {'application/json': {schema: getModelSchemaRef(FilmResource)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FilmResource, {
            title: 'NewFilmResource',
            exclude: ['id'],
          }),
        },
      },
    })
    filmResource: Omit<FilmResource, 'id'>,
  ): Promise<FilmResource> {
    return this.filmResourceRepository.create(filmResource);
  }

  @get('/film-resources/count')
  @response(200, {
    description: 'FilmResource model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(FilmResource) where?: Where<FilmResource>,
  ): Promise<Count> {
    return this.filmResourceRepository.count(where);
  }

  @get('/film-resources')
  @response(200, {
    description: 'Array of FilmResource model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(FilmResource, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(FilmResource) filter?: Filter<FilmResource>,
  ): Promise<FilmResource[]> {
    return this.filmResourceRepository.find(filter);
  }

  @patch('/film-resources')
  @response(200, {
    description: 'FilmResource PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FilmResource, {partial: true}),
        },
      },
    })
    filmResource: FilmResource,
    @param.where(FilmResource) where?: Where<FilmResource>,
  ): Promise<Count> {
    return this.filmResourceRepository.updateAll(filmResource, where);
  }

  @get('/film-resources/{id}')
  @response(200, {
    description: 'FilmResource model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(FilmResource, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(FilmResource, {exclude: 'where'}) filter?: FilterExcludingWhere<FilmResource>
  ): Promise<FilmResource> {
    return this.filmResourceRepository.findById(id, filter);
  }

  @patch('/film-resources/{id}')
  @response(204, {
    description: 'FilmResource PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FilmResource, {partial: true}),
        },
      },
    })
    filmResource: FilmResource,
  ): Promise<void> {
    await this.filmResourceRepository.updateById(id, filmResource);
  }

  @put('/film-resources/{id}')
  @response(204, {
    description: 'FilmResource PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() filmResource: FilmResource,
  ): Promise<void> {
    await this.filmResourceRepository.replaceById(id, filmResource);
  }

  @del('/film-resources/{id}')
  @response(204, {
    description: 'FilmResource DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.filmResourceRepository.deleteById(id);
  }
}
