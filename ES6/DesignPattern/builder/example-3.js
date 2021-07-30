// create tag class
class Tag {
  static get indentSize() { return 2 };
  constructor(name = '', text = '') {
    this.name = name;
    this.text = text;
    this.children = [];
  }

  toStringTemplate(indent) {
    let html = [];
    let i = ' '.repeat(indent * Tag.indentSize); // ' '
    html.push(`${i}<${this.name}>\n`); // html=[' <ul>\n']

    if (this.text.length > 0) {
      html.push(' '.repeat(Tag.indentSize * (indent + 1))); //html= [' <ul>\n', '  ']
      html.push(this.text); // html=[' <ul>\n', '  ', 'text']
      html.push('\n'); // html=[' <ul>\n', '  ', 'text', '\n']  
    }

    for (let child of this.children) {
      html.push(child.toStringTemplate(indent + 1)); // html=[' <ul>\n', '  ', 'text', '\n', ' <li>\n', '  ', 'text', '\n', ' <li>\n', '  ', 'text', '\n']   
    }
    html.push(`${i}</${this.name}>\n`); // html=[' <ul>\n', '  ', 'text', '\n', ' <li>\n', '  ', 'text', '\n', ' <li>\n', '  ', 'text', '\n', ' </ul>\n']
    return html.join(''); //

  }


  toString() {
    return this.toStringTemplate(0);
  }

  static create(name) {
    return new TagBuilder(name);
  }
}


class TagBuilder {
  constructor(rootName) {
    this.root = new Tag(rootName);
    this.rootName = rootName;
  }

  addChildren(childName, childText) {
    let child = new Tag(childName, childText);
    this.root.children.push(child);
  }

  toString() {
    return this.root.toString();
  }

  build() {
    return this.root;
  }
}

const tags = new TagBuilder("ul");
tags.addChildren("li", "hello");
tags.addChildren("li", "World");

const x = Tag.create('div');
x.addChildren('span', 'hello world');
console.log(x.toString());