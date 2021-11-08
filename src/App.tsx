import * as React from "react";
import "./styles.css";
// import { HybridGenerator, Table } from "./races";
// import Weapons from "./Weapons/Weapons";
import { Builder } from "./Character/Builder/Builder";
import { createRootStore, Context } from "./store/rootStore";
import { CharacterInfo } from "./Character/Builder/CharacterInfo";
import { Container } from "@mui/material";

const rootStore = createRootStore();

export default function App() {
  return (
    <Context.Provider value={rootStore}>
      <Container>
        {/* <Table />
        <HybridGenerator />
        <Weapons /> */}
        <Builder />
        <CharacterInfo />
      </Container>
    </Context.Provider>
  );
}
