import { c as create_ssr_component, d as each, v as validate_component } from "../../../chunks/ssr.js";
import { C as CardSubject } from "../../../chunks/cardSubject.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let folders = data.folders;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-1k5bc5m">מורה ברוך הבא לאתר</h1> <p class="text-lg" data-svelte-h="svelte-1szgarn">כותרת משנה, לשנות למה שרוצים</p> <div class="flex flex-row w-full flex-wrap "><p data-svelte-h="svelte-a5azn2">h2</p> ${`${each(folders, (folder) => {
    return `${validate_component(CardSubject, "CardSubject").$$render($$result, { name: folder.folderName }, {}, {})}`;
  })}`} <p data-svelte-h="svelte-92jf79">hi</p></div>`;
});
export {
  Page as default
};
