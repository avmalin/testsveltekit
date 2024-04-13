import { c as create_ssr_component, f as add_attribute, e as escape } from "./ssr.js";
const CardSubject = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "None" } = $$props;
  let { link = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return `<a class="bg-white shadow-lg rounded-xl p-14 m-10 items-center hover:bg-gray-200 "${add_attribute("href", link, 0)}><h class="text-2xl">${escape(name)}</h></a>`;
});
export {
  CardSubject as C
};
