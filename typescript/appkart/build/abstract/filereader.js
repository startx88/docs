import fs from "fs";
import path from "path";
var FileReader = /** @class */ (function () {
    function FileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    FileReader.prototype.read = function () {
        this.data = JSON.parse(fs.readFileSync(this.filename, {
            encoding: "utf-8",
        }));
    };
    FileReader.prototype.write = function (inputdata, filename, cb) {
        var updateData = [];
        var fileData = JSON.parse(fs.readFileSync(filename, {
            encoding: "utf-8",
        }));
        if (fileData.length > 0) {
            fs.writeFile(path.join(__dirname, "..", filename), JSON.stringify(inputdata), function (err) {
                if (err)
                    throw new Error("File not write!");
                cb();
            });
        }
    };
    return FileReader;
}());
export { FileReader };
