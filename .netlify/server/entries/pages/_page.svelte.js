import { c as create_ssr_component, d as each, v as validate_component } from "../../chunks/ssr.js";
import { C as CardSubject } from "../../chunks/cardSubject.js";
const rule = [
  {
    name: "מורה",
    link: "/teacher"
  },
  {
    name: "תלמיד",
    link: "/student"
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-7iw767">ברוך הבא לאתר</h1> <p class="text-lg" data-svelte-h="svelte-1szgarn">כותרת משנה, לשנות למה שרוצים</p> <div class="flex flex-row justify-center mt-20 w-full flex-wrap">${each(rule, (r) => {
    return `${validate_component(CardSubject, "Card").$$render($$result, Object.assign({}, r), {}, {})}`;
  })}</div>`;
});
export {
  Page as default
};
