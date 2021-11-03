import * as React from "react";
import { useState } from "react";
import { FateNames } from "../../store/Fate";
import { Characteristics } from "./Characteristics";
import { FateSelector } from "./FateSelector";

export const Builder = () => {
  const fate = useState(FateNames["No Fate"]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Characteristics />
      <FateSelector />
    </div>
  );
};
