// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MetroSt } = initSchema(schema);

export {
  MetroSt
};