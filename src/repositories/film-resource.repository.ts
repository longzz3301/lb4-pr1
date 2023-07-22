import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {FilmResource, FilmResourceRelations} from '../models';

export class FilmResourceRepository extends DefaultCrudRepository<
  FilmResource,
  typeof FilmResource.prototype.id,
  FilmResourceRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(FilmResource, dataSource);
  }
}
