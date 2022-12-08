import {Entity, model, property} from '@loopback/repository';

@model()
export class DetalleBaucher extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idBaucher?: string;

  @property({
    type: 'string',
    required: true,
  })
  idCuenta: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;


  constructor(data?: Partial<DetalleBaucher>) {
    super(data);
  }
}

export interface DetalleBaucherRelations {
  // describe navigational properties here
}

export type DetalleBaucherWithRelations = DetalleBaucher & DetalleBaucherRelations;
