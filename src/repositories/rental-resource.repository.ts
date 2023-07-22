import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {RentalResource, RentalResourceRelations} from '../models';

export class RentalResourceRepository extends DefaultCrudRepository<
  RentalResource,
  typeof RentalResource.prototype.id,
  RentalResourceRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(RentalResource, dataSource);
  }
}
