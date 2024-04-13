import { c as create_ssr_component, d as each, v as validate_component } from "../../../chunks/ssr.js";
import { C as CardSubject } from "../../../chunks/cardSubject.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let classes = data.classes;
  console.log(classes);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${`${each(classes ?? [], (studentClass) => {
    return `${validate_component(CardSubject, "CardSubject").$$render($$result, { name: studentClass.className }, {}, {})}`;
  })}`} ${``}`;
});
export {
  Page as default
};
