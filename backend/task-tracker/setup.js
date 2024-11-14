import { existsSync, writeFileSync } from "fs";
const path = "./db.json";

if (!existsSync(path)) {
  const initialData = {
    tasks: [],
  };
  writeFileSync(path, JSON.stringify(initialData, null, 2));
}