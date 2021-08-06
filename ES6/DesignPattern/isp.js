/***********
 * ISP (Interface Segregation Principle):
 *
 * ISP states that no client should be forced to depend on methods it does not use.
 * */
/*
class Entity {
  constructor(name, attackDamage, health) {
    this.name = name;
    this.attackDamage = attackDamage;
    this.health = health;
  }

  takeDamage(damage) {
    this.health -= damage;
    console.log(`${this.name} has ${this.health} health remaining`);
  }

  attack(target) {
    console.log(`${this.name} attack ${target.name} for ${this.attackDamage} damage`);
    target.takeDamage(this.attackDamage);
  }

  move() {
    console.log(`${this.name} moved`);
  }
}


class Player extends Entity {
  constructor(name, attackDamage, health, movementSpeed) {
    super(name, attackDamage, health);
    this.movementSpeed = movementSpeed;
  }

  move() {
    console.log(`${this.name} moved`);
  }

  attack(target) {
    console.log(`${this.name} attack ${target.name} for ${this.attackDamage} damage`);
    target.takeDamage(this.attackDamage);
  }
}


class Monster extends Entity {
  constructor(name, attackDamage, health, movementSpeed) {
    super(name, attackDamage, health);
    this.movementSpeed = movementSpeed;
  }

  move() {
    console.log(`${this.name} moved`);
  }

  attack(target) {
    console.log(`${this.name} attack ${target.name} for ${this.attackDamage} damage`);
    target.takeDamage(this.attackDamage);
  }
}

class Wall extends Entity {
  constructor(name, health) {
    super(name, 0, health);
  }

  move() { return null }
  attack() { return null }
}
 */

// above example breaking the ISP 
// because all of them are not using all entity methods
// same problem with interface segregation

// how to solve this, split up the entity into different classes
// and make sure that each class is only using the methods it needs

class Entity {
  constructor(name) { this.name = name; }
}





