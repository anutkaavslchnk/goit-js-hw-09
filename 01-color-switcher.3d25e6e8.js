!function(){var t,e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]"),n=document.querySelector("body");e.addEventListener("click",(function(){clearInterval(t),t=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),e.disabled=!0,a.disabled=!1}),1e3)}));a.addEventListener("click",(function(){clearInterval(t),a.disabled=!0,e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.3d25e6e8.js.map
