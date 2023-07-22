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
import {RentalResource} from '../models';
import {RentalResourceRepository} from '../repositories';

export class RentalController {
  constructor(
    @repository(RentalResourceRepository)
    public rentalResourceRepository : RentalResourceRepository,
  ) {}

  @post('/rental-resources')
  @response(200, {
    description: 'RentalResource model instance',
    content: {'application/json': {schema: getModelSchemaRef(RentalResource)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RentalResource, {
            title: 'NewRentalResource',
            exclude: ['id'],
          }),
        },
      },
    })
    rentalResource: Omit<RentalResource, 'id'>,
  ): Promise<RentalResource> {
    return this.rentalResourceRepository.create(rentalResource);
  }

  @get('/rental-resources/count')
  @response(200, {
    description: 'RentalResource model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RentalResource) where?: Where<RentalResource>,
  ): Promise<Count> {
    return this.rentalResourceRepository.count(where);
  }

  @get('/rental-resources')
  @response(200, {
    description: 'Array of RentalResource model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RentalResource, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RentalResource) filter?: Filter<RentalResource>,
  ): Promise<RentalResource[]> {
    return this.rentalResourceRepository.find(filter);
  }

  @patch('/rental-resources')
  @response(200, {
    description: 'RentalResource PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RentalResource, {partial: true}),
        },
      },
    })
    rentalResource: RentalResource,
    @param.where(RentalResource) where?: Where<RentalResource>,
  ): Promise<Count> {
    return this.rentalResourceRepository.updateAll(rentalResource, where);
  }

  @get('/rental-resources/{id}')
  @response(200, {
    description: 'RentalResource model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RentalResource, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(RentalResource, {exclude: 'where'}) filter?: FilterExcludingWhere<RentalResource>
  ): Promise<RentalResource> {
    return this.rentalResourceRepository.findById(id, filter);
  }

  @patch('/rental-resources/{id}')
  @response(204, {
    description: 'RentalResource PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RentalResource, {partial: true}),
        },
      },
    })
    rentalResource: RentalResource,
  ): Promise<void> {
    await this.rentalResourceRepository.updateById(id, rentalResource);
  }

  @put('/rental-resources/{id}')
  @response(204, {
    description: 'RentalResource PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() rentalResource: RentalResource,
  ): Promise<void> {
    await this.rentalResourceRepository.replaceById(id, rentalResource);
  }

  @del('/rental-resources/{id}')
  @response(204, {
    description: 'RentalResource DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.rentalResourceRepository.deleteById(id);
  }
}
