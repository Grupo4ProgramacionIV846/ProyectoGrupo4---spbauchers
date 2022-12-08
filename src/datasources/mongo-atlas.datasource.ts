import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'MongoAtlas',
  connector: 'mongodb',
  url: 'mongodb+srv://Grupo4Dev:n6rNUNcIyFcUejKT@cluster0.iwno8ru.mongodb.net/spbauchers',
  host: 'cluster0.iwno8ru.mongodb.net',
  port: 27017,
  user: 'Grupo4Dev',
  password: 'n6rNUNcIyFcUejKT',
  database: 'spbauchers',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoAtlasDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'MongoAtlas';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.MongoAtlas', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
