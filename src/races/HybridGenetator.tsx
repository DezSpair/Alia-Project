import * as React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { makeHybrid } from ".";
import { dwarfRace } from "./dwarfes";
import { humanRace } from "./humans";
import { HybridInfo } from "./interfaces";
import { jolfRace } from "./jolfes";
import "./hybrids.css";

export const HybridGenerator = () => {
  const [featsCount, setFeatsCount] = React.useState<any[]>([]);
  const [hybrid, setHybrid] = React.useState<any>(undefined);
  const tryHybrid = (event: any) => {
    const options = [
      {
        race: humanRace,
        percentage: event.target.humans.value / 100
      },
      {
        race: dwarfRace,
        percentage: event.target.dwarfes.value / 100
      },
      {
        race: jolfRace,
        percentage: event.target.jolfes.value / 100
      }
    ];
    const hybrids: HybridInfo[] = [];
    const byFeats: any = {};
    for (let i = 0; i <= 1000; i++) {
      const hybrid = makeHybrid(options);
      hybrids.push(hybrid);
      if (byFeats[hybrid.total]) {
        byFeats[hybrid.total] += 1;
      } else byFeats[hybrid.total] = 1;
    }

    setHybrid(hybrids[0]);

    setFeatsCount(
      Object.keys(byFeats).map((key) => ({ key, value: byFeats[key] }))
    );
    event.preventDefault();
  };


  return (
    <>
      <form className="hybrids-form" onSubmit={tryHybrid}>
        <label className="race-percentage-label">
          <span className="label-name">Humans percentage</span>
          <input className="percentage-input" name="humans" type="number" />
        </label>
        <label className="race-percentage-label">
          <span className="label-name">Jolfes percentage</span>
          <input className="percentage-input" name="jolfes" type="number" />
        </label>
        <label className="race-percentage-label">
          <span className="label-name">Dwarfes percentage</span>
          <input className="percentage-input" name="dwarfes" type="number" />
        </label>
        <button className="hybrit-btn-submit" type="submit">
          Try
        </button>
      </form>

      {featsCount.length && (
        <BarChart
          width={500}
          height={300}
          data={featsCount}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="key" />
          <YAxis />
          <Legend content={() => "power"} />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      )}

      {hybrid && {
        hybrid
      }}
    </>
  );
};
