export default function Employee(name, address = {}, contact = {}, skills = []) {
  this.name = name;
  this.address = address;
  this.contact = contact;
  this.skills = skills;
}

