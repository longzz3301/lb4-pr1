import {Entity, model, property} from '@loopback/repository';

@model()
export class RentalResource extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @property({
    type: 'date',
    required: true,
  })
  rental_date: string;

  @property({
    type: 'string',
    required: true,
  })
  film_title: string;

  @property({
    type: 'string',
    required: true,
  })
  customer_email: string;

  @property({
    type: 'date',
    required: true,
  })
  return_date: string;

  @property({
    type: 'string',
    required: true,
  })
  staff_id: string;

  @property({
    type: 'date',
    required: true,
  })
  last_update: string;


  constructor(data?: Partial<RentalResource>) {
    super(data);
  }
}

export interface RentalResourceRelations {
  // describe navigational properties here
}

export type RentalResourceWithRelations = RentalResource & RentalResourceRelations;
