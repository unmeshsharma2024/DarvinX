/* Polyfills to support prerendering environments with limited browser APIs */

if (!String.prototype.replaceAll) {
  Object.defineProperty(String.prototype, 'replaceAll', {
    value(search, replacement) {
      if (search instanceof RegExp) {
        if (!search.global) {
          throw new TypeError('replaceAll must be called with a global RegExp');
        }
        return this.replace(search, replacement);
      }

      const searchString = String(search);
      if (searchString === '') {
        return this.toString();
      }

      return this.split(searchString).join(replacement);
    },
    configurable: true,
    writable: true
  });
}


