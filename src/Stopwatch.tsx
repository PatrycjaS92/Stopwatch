import { Button } from "./Button";
import { LapTable } from "./LapTable";
import { LapTime } from "./LapTime";
import { Summary } from "./Summary";
import { TotalTime } from "./TotalTime";

export const Stopwatch = () => {
  return (
    <>
      <h1>STOPWATCH</h1>
      <div>
        <TotalTime></TotalTime>
        <LapTime></LapTime>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <LapTable></LapTable>
        <hr></hr>
        <Summary></Summary>
      </div>
    </>
  );
};
