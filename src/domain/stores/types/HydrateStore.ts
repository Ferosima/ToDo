import AsyncStorage from '@react-native-async-storage/async-storage';
import {hydrateStore, makePersistable} from 'mobx-persist-store';

export class HydrateStore {
  afterHydration: (() => Promise<void> | void)[] = [];
  private name: string;

  constructor(name: string, properties: any[]) {
    this.name = name;
    makePersistable(this, {
      storage: AsyncStorage,
      stringify: true,
      name,
      properties,
      expireIn: 15552000000,
    }).then(() => {
      this.afterHydration.map(func => func());
    });
  }

  hydrateStore = async () => {
    await hydrateStore(this);
    this.afterHydration.map(func => func());
  };
}
