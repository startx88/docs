import fs from "fs";
import path from "path";

export abstract class FileReader<T> {
  data: T[] = [];
  constructor(public filename: string) {}
  abstract mapRow(row: T[]): void;

  read(): void {
    this.data = JSON.parse(
      fs.readFileSync(this.filename, {
        encoding: "utf-8",
      })
    );
  }

  write(inputdata: T[], filename: string, cb: Function): void {
    let updateData = [];
    const fileData = JSON.parse(
      fs.readFileSync(filename, {
        encoding: "utf-8",
      })
    );
    if (fileData.length > 0) {
      fs.writeFile(
        path.join(__dirname, "..", filename),
        JSON.stringify(inputdata),
        (err) => {
          if (err) throw new Error("File not write!");
          cb();
        }
      );
    }
  }
}
