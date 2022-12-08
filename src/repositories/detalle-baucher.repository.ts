import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoAtlasDataSource} from '../datasources';
import {DetalleBaucher, DetalleBaucherRelations} from '../models';

export class DetalleBaucherRepository extends DefaultCrudRepository<
  DetalleBaucher,
  typeof DetalleBaucher.prototype.idBaucher,
  DetalleBaucherRelations
> {
  constructor(
    @inject('datasources.MongoAtlas') dataSource: MongoAtlasDataSource,
  ) {
    super(DetalleBaucher, dataSource);
  }
}
