import { runInAction } from "mobx";
import React from "react";
import { Character } from "./Character";

export type RootStore = {
  character: Character;
};

export function createRootStore(): RootStore {
  return runInAction(() => {
    const character = new Character();

    return {
      character: character
    };
  });
}

export const Context = React.createContext<RootStore | null>(null);

export function useRootStore(store = Context): RootStore {
  return React.useContext(store as React.Context<RootStore>);
}
