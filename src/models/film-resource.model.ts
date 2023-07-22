import {Entity, model, property} from '@loopback/repository';

@model()
export class FilmResource extends Entity {
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
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'number',
    required: true,
  })
  release_year: number;

  @property({
    type: 'string',
    required: true,
  })
  language_id: string;

  @property({
    type: 'number',
    required: true,
  })
  rental_duration: number;

  @property({
    type: 'number',
    required: true,
  })
  rental_rate: number;

  @property({
    type: 'number',
    required: true,
  })
  length: number;

  @property({
    type: 'number',
    required: true,
  })
  replacement_cost: number;

  @property({
    type: 'string',
    required: true,
  })
  rating: string;

  @property({
    type: 'date',
    required: true,
  })
  last_update: string;

  @property({
    type: 'string',
    required: true,
  })
  special_features: string;

  @property({
    type: 'string',
    required: true,
  })
  fulltext: string;


  constructor(data?: Partial<FilmResource>) {
    super(data);
  }
}

export interface FilmResourceRelations {
  // describe navigational properties here
}

export type FilmResourceWithRelations = FilmResource & FilmResourceRelations;
