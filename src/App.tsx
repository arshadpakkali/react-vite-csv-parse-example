import { useState } from "react";
import "./App.css";
import { parse } from "csv-parse/sync";

function App() {
  const [records, setRecords] = useState<[]>([]);
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <input
          type="file"
          onChange={async (e) => {
            const files = e.target.files;
            if (files) {
              const file = files.item(0);
              const foo = await file?.text();
              const parsed = parse(foo);
              setRecords(parsed);
            }
          }}
          accept=".csv"
        />
        <div style={{ width: "500px", height: "500px", overflow: "scroll" }}>
          {records.map((r: unknown[], i) => {
            return <div key={i}>{String(r.at(0))}</div>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
