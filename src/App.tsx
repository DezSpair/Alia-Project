import * as React from "react";
import "./styles.css";
// import { HybridGenerator, Table } from "./races";
// import Weapons from "./Weapons/Weapons";
import { Builder } from "./Character/Builder/Builder";
import { createRootStore, Context } from "./store/rootStore";
import { CharacterInfo } from "./Character/Builder/CharacterInfo";

const rootStore = createRootStore();

export default function App() {
  return (
    <Context.Provider value={rootStore}>
      <div className="App">
        {/* <Table />
        <HybridGenerator />a
        <Weapons /> */}
        <Builder />
        <CharacterInfo />
      </div>
    </Context.Provider>
  );
}
