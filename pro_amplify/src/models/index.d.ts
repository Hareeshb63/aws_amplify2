import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MetroStMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class MetroSt {
  readonly id: string;
  readonly stations: string;
  readonly Vijaynagar: string;
  readonly Attiguppe: string;
  readonly Jalahalli: string;
  readonly Jayanagar: string;
  readonly Banashankari: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MetroSt, MetroStMetaData>);
  static copyOf(source: MetroSt, mutator: (draft: MutableModel<MetroSt, MetroStMetaData>) => MutableModel<MetroSt, MetroStMetaData> | void): MetroSt;
}