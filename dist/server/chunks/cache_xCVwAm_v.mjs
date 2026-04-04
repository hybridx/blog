const memoryCache = /* @__PURE__ */ new Map();
function clearAllCaches() {
  memoryCache.clear();
}

export { clearAllCaches as c, memoryCache as m };
