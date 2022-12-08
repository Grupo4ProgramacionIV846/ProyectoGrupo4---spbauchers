import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {DetalleBaucher} from '../models';
import {DetalleBaucherRepository} from '../repositories';

export class DetalleBaucherController {
  constructor(
    @repository(DetalleBaucherRepository)
    public detalleBaucherRepository: DetalleBaucherRepository,
  ) { }

  @post('/detalle-bauchers')
  @response(200, {
    description: 'DetalleBaucher model instance',
    content: {'application/json': {schema: getModelSchemaRef(DetalleBaucher)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleBaucher, {
            title: 'NewDetalleBaucher',
            exclude: ['idBaucher'],
          }),
        },
      },
    })
    detalleBaucher: Omit<DetalleBaucher, 'id'>,
  ): Promise<DetalleBaucher> {
    return this.detalleBaucherRepository.create(detalleBaucher);
  }

  @get('/detalle-bauchers/count')
  @response(200, {
    description: 'DetalleBaucher model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DetalleBaucher) where?: Where<DetalleBaucher>,
  ): Promise<Count> {
    return this.detalleBaucherRepository.count(where);
  }

  @get('/detalle-bauchers')
  @response(200, {
    description: 'Array of DetalleBaucher model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DetalleBaucher, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DetalleBaucher) filter?: Filter<DetalleBaucher>,
  ): Promise<DetalleBaucher[]> {
    return this.detalleBaucherRepository.find(filter);
  }

  @patch('/detalle-bauchers')
  @response(200, {
    description: 'DetalleBaucher PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleBaucher, {partial: true}),
        },
      },
    })
    detalleBaucher: DetalleBaucher,
    @param.where(DetalleBaucher) where?: Where<DetalleBaucher>,
  ): Promise<Count> {
    return this.detalleBaucherRepository.updateAll(detalleBaucher, where);
  }

  @get('/detalle-bauchers/{id}')
  @response(200, {
    description: 'DetalleBaucher model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DetalleBaucher, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(DetalleBaucher, {exclude: 'where'}) filter?: FilterExcludingWhere<DetalleBaucher>
  ): Promise<DetalleBaucher> {
    return this.detalleBaucherRepository.findById(id, filter);
  }

  @patch('/detalle-bauchers/{id}')
  @response(204, {
    description: 'DetalleBaucher PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleBaucher, {partial: true}),
        },
      },
    })
    detalleBaucher: DetalleBaucher,
  ): Promise<void> {
    await this.detalleBaucherRepository.updateById(id, detalleBaucher);
  }

  @put('/detalle-bauchers/{id}')
  @response(204, {
    description: 'DetalleBaucher PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() detalleBaucher: DetalleBaucher,
  ): Promise<void> {
    await this.detalleBaucherRepository.replaceById(id, detalleBaucher);
  }

  @del('/detalle-bauchers/{id}')
  @response(204, {
    description: 'DetalleBaucher DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.detalleBaucherRepository.deleteById(id);
  }
}
