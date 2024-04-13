import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const app = "";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header1 data-svelte-h="svelte-1hbyzcn"><p class="p-10">בס&quot;ד</p></header1>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-m8vbzv{display:flex;flex-direction:column;min-height:100vh}main.svelte-m8vbzv{flex:1;display:flex;flex-direction:column;width:100%;max-width:90rem;margin:0 auto;box-sizing:border-box}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-m8vbzv">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-m8vbzv">${slots.default ? slots.default({}) : ``}</main> </div>`;
});
export {
  Layout as default
};
