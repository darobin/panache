
export default function builder () {
  return new Panache();
}

class Panache {
  // just sugar for template('css')
  css (selector, mode) {
    return this.template('css', selector, mode);
  }

  template (lang, selector, mode) {
    // XXX
    //  - create a template
    return this;
  }

  run () {
    // XXX
  }
}

class Context {
  // XXX
}
