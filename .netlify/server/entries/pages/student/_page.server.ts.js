import fs from "fs/promises";
import path from "path";
import { s as supabase } from "../../../chunks/supabaseClient.js";
async function load() {
  const { data, error } = await supabase.from("studentsClass").select(`*`);
  if (error) {
    console.error("supabase error on teachersfolders: ", error.message);
  }
  console.log(data);
  return { classes: data ?? [] };
}
const actions = {
  addClass: async (event) => {
    const cacheFilePath = path.resolve("./src/lib/classData.json");
    const data = await event.request.formData();
    let header = data.get("header");
    let subHeader = data.get("subHeader");
    let message = data.get("message");
    let formData;
    let classData = {};
    classData = { "header": header, "subHeader": subHeader, "message": message };
    formData["כיתה"] = classData;
    fs.writeFile(cacheFilePath, JSON.stringify(formData), "utf-8");
    console.log(classData, "test", formData);
  }
};
export {
  actions,
  load
};
