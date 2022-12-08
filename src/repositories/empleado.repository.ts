import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoAtlasDataSource} from '../datasources';
import {Empleado, EmpleadoRelations} from '../models';

export class EmpleadoRepository extends DefaultCrudRepository<
  Empleado,
  typeof Empleado.prototype.codigoEmpleado,
  EmpleadoRelations
> {
  constructor(
    @inject('datasources.MongoAtlas') dataSource: MongoAtlasDataSource,
  ) {
    super(Empleado, dataSource);
  }
}
