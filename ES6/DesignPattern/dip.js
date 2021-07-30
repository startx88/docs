/***********
 * DIP (Dependency Inversion Principle):
 * High level modules should not depend on low level modules. Both should depend on abstractions (e.g., Interface).
 *
 *
 * By dictating that both hight and low level modules must depend on the same abstraction.
 *
 *
 * */

let Relationship = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2
})

class Person {
  constructor(name) {
    this.name = name;
  }
}

let parent = new Person('Pradeep');
let son = new Person('Ryansh');
let doughter = new Person('Elisha');


// LOW level modules
// class Relationships {
//   constructor() {
//     this.relations = [];
//   }

//   addRelation(parent, child) {
//     this.relations.push({
//       from: parent,
//       type: Relationship.parent,
//       to: child
//     });
//   }

//   getRelations() {
//     return this.relations;
//   }
// }


// HIGH level modules
// class Research {
//   constructor(relations) {
//     let data = relations.getRelations();
//     for (let rel of data.filter(r => r.from.name == 'Pradeep' && r.type == Relationship.parent)) {
//       console.log(`${rel.from.name} has a child named ${rel.to.name}`);
//     }
//   }
// }

// const rels = new Relationships();
// rels.addRelation(parent, son);
// rels.addRelation(parent, doughter);
// new Research(rels); // but hight level is depend on low level modules , this is breaking the rule


// what the problem in this implementation.
// 1. High level module is depend on low level module.
// 2. If we change the Relationships relations to map,set or anything, then we also need to change the Research class.


// new implementation for DIP


// LOW level modules
class RelationshipBrowser {
  constructor() {
    if (this.constructor.name === "RelationshipBrowser") {
      throw new Error("Cannot instantiate abstract class RelationshipBrowser");
    }
  }

  findAllChildrenOf(name) { }
}

// LOW level modules
class Relationships extends RelationshipBrowser {
  constructor() {
    super();
    this.relations = [];
  }

  addRelation(parent, child) {
    this.relations.push({
      from: parent,
      type: Relationship.parent,
      to: child
    });
  }


  findAllChildrenOf(name) {
    return this.relations.filter(r => r.from.name == name && r.type == Relationship.parent).map(r => r.to);
  }
}

class Research {
  constructor(browser) {
    let relations = browser.findAllChildrenOf('Pradeep');
    for (let rel of relations) {
      console.log(`${rel.name} has a child named ${rel.name}`);
    }
  }
}

const rels = new Relationships();
rels.addRelation(parent, son);
rels.addRelation(parent, doughter);
new Research(rels);
