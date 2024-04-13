import { s as supabase } from "../../../chunks/supabaseClient.js";
async function load() {
  const { data, error } = await supabase.from("teachersFolders").select(`
    id,
    folderName,
    teachersFiles (id,fileName,fileLink)`);
  if (error) {
    console.error("supabase error on teachersfolders: ", error.message);
  }
  console.log(data);
  return { folders: data ?? [] };
}
export {
  load
};
