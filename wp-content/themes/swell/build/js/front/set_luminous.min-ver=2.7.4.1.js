!function(){const t=t=>{if("off"===t.getAttribute("data-luminous"))return!1;if("A"===t.parentNode.tagName)return t.setAttribute("data-luminous","off"),!1;if(-1!==t.className.indexOf("luminous"))return!1;let o=t.getAttribute("data-src");if(o||(o=t.getAttribute("src")),!o)return!1;const u=o.replace(/-[0-9]*x[0-9]*\./,".");return t.setAttribute("data-luminous",u),t.classList.add("luminous"),!0};function o(){window.LuminousGallery&&window.LuminousGallery&&(function(){const t=document.querySelectorAll(".u-lb-off img, img.u-lb-off, img.-no-lb");1>t.length||t.forEach((t=>{t.setAttribute("data-luminous","off")}))}(),(()=>{const o=document.querySelectorAll(".post_content .wp-block-gallery:not(.u-lb-off)");1>o.length||o.forEach((o=>{const u=[...o.querySelectorAll("img")],e=[];u.forEach((o=>{t(o)&&e.push(o)})),0<e.length&&new LuminousGallery(e,{arrowNavigation:!0},{sourceAttribute:"data-luminous"})}))})(),function(){var o;let u=".u-lb-on img, img.u-lb-on ";"1"===(null===(o=window.swlLuminousVars)||void 0===o?void 0:o.postImg)&&(u+=", .post_content .wp-block-image:not(.u-lb-off) img");const e=document.querySelectorAll(u);1>e.length||e.forEach((o=>{t(o)&&new Luminous(o,{sourceAttribute:"data-luminous"})}))}())}o(),window.SWELLHOOK&&window.SWELLHOOK.barbaAfter.add(o)}();