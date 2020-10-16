String.prototype.format = function (...args: string[]): string {
  return this.replace(/{(\d+)}/g, function (match: string, number: number) {
    return typeof args[number] != 'undefined' ? args[number] : match;
  });
};

String.isNullOrEmpty = function (value: string): boolean {
  return !(typeof value === 'string' && value.length > 0);
};

//去除字符串头尾空格或指定字符
String.prototype.Trim = function (c?: string): string {
  if (typeof c == 'undefined' || c == null || c == '') {
    const str = this.replace(/(^\s*)|(\s*$)/g, '');
    return str;
  } else {
    let rg = new RegExp('^' + c + '*');
    const str = this.replace(rg, '');
    rg = new RegExp(c);
    let i = str.length;
    while (rg.test(str.charAt(--i)));
    return str.slice(0, i + 1);
  }
};
//去除字符串头部空格或指定字符
String.prototype.TrimStart = function (c: string): string {
  if (c == null || c == '') {
    const str = this.replace(/(^\s*)/g, '');
    return str;
  } else {
    const rg = new RegExp('^' + c + '*');
    const str = this.replace(rg, '');
    return str;
  }
};

//去除字符串尾部空格或指定字符
String.prototype.TrimEnd = function (c: string): string {
  if (c == null || c == '') {
    const str = this.replace(/(\s*$)/g, '');
    return str;
  } else {
    const rg = new RegExp(c);
    let i = this.length;
    while (rg.test(this.charAt(--i)));
    return this.slice(0, i + 1);
  }
};

String.urlJoin = function (...strArray: string[]): string {
  var resultArray = [];
  if (strArray.length === 0) {
    return '';
  }

  if (typeof strArray[0] !== 'string') {
    throw new TypeError('Url must be a string. Received ' + strArray[0]);
  }

  // If the first part is a plain protocol, we combine it with the next part.
  if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
    var first = strArray.shift();
    strArray[0] = first + strArray[0];
  }

  // There must be two or three slashes in the file protocol, two slashes in anything else.
  if (strArray[0].match(/^file:\/\/\//)) {
    strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1:///');
  } else {
    strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1://');
  }

  for (var i = 0; i < strArray.length; i++) {
    var component = strArray[i];

    if (typeof component !== 'string') {
      throw new TypeError('Url must be a string. Received ' + component);
    }

    if (component === '') {
      continue;
    }

    if (i > 0) {
      // Removing the starting slashes for each component but the first.
      component = component.replace(/^[\/]+/, '');
    }
    if (i < strArray.length - 1) {
      // Removing the ending slashes for each component but the last.
      component = component.replace(/[\/]+$/, '');
    } else {
      // For the last component we will combine multiple slashes to a single one.
      component = component.replace(/[\/]+$/, '/');
    }

    resultArray.push(component);
  }

  var str = resultArray.join('/');
  // Each input component is now separated by a single slash except the possible first plain protocol part.

  // remove trailing slash before parameters or hash
  str = str.replace(/\/(\?|&|#[^!])/g, '$1');

  // replace ? in parameters with &
  var parts = str.split('?');
  str = parts.shift() + (parts.length > 0 ? '?' : '') + parts.join('&');

  return str;
};
Object.isNull = function (value: object | number | string): boolean {
  return typeof value === 'undefined' || value == null;
};

Array.prototype.pushArray = function () {
  var toPush = this.concat.apply([], arguments);
  for (var i = 0, len = toPush.length; i < len; ++i) {
    this.push(toPush[i]);
  }
};

// Element.matches() polyfill
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
}

HTMLElement.prototype.getParents = function (this: HTMLElement, selector: string) {
  // Set up a parent array
  var parents: HTMLElement[] = [];
  let elem = this;
  // Push each parent element to the array
  for (; elem && !document.isSameNode(elem); elem = elem.parentNode as HTMLElement) {
    if (selector) {
      if (elem.matches(selector)) {
        parents.push(elem);
      }
      continue;
    }
    parents.push(elem);
  }

  // Return our parent array
  return parents;
};

if (!HTMLElement.prototype.closest)
  HTMLElement.prototype.closest = function (this: HTMLElement, s) {
    var el = this;
    if (!document.documentElement.contains(el)) return null;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement;
    } while (el !== null);
    return null;
  };
