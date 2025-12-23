(() => {
  // Защита от повторной загрузки
  if ((window as any).__myCdnScriptLoaded__) {
    return;
  }
  (window as any).__myCdnScriptLoaded__ = true;

  const script = document.createElement("script");
  script.src = "https://sample.vschetinin.ru/assets/main-cdn.js";
  script.async = true;
  script.id = "my-cdn-script";

  document.head.appendChild(script);
})();
