import fs from "fs/promises";
import path from "path";
const POST = () => {
  try {
    const filePath = path.resolve("./data.txt");
    const data = "eqruest.body";
    fs.writeFile(filePath, data, "utf-8");
    console.log("Data has been written to the file successfully.");
    return {
      status: 200,
      body: { message: "Data has been written to the file successfully." }
    };
  } catch (error) {
    console.error("Error writing data to file:", error);
    return {
      status: 500,
      body: { message: "Internal server error" }
    };
  }
};
export {
  POST
};
