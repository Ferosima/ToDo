import AsyncStorage from "@react-native-async-storage/async-storage";
import { hydrateStore, makePersistable } from "mobx-persist-store";

export class HydrateStore {
  protected afterHydration: (() => Promise<void> | void)[] = [];

  public constructor(name: string, properties: any[]) {
    makePersistable(this, {
      expireIn: 15552000000,
      name,
      properties,
      storage: AsyncStorage,
      stringify: true
    }).then(() => {
      // this.afterHydration.map(func => func());
    });
  }

  public hydrateStore = async (): Promise<void> => {
    await hydrateStore(this);
    this.afterHydration.map((func) => func());
  };
}
