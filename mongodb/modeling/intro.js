/******
 * What is data modeling:
 *
 * */
db.createUser({
  user: "pradeep",
  pwd: "pradeep123",
  roles: [{
    role: "readWrite",
    db: "courses"
  }]
})

db.users.insertOne({
  name: {
    first: "Sukanya",
    middle: "",
    last: "Ghosh"
  },
  qualification: "BCA",
  university: "IGNOU",
  email: "sg.shosh@gmail.com",
  age: 29,
  salary: 24000,
  active: true,
  skills: [{ title: "HTML", slug: "html" }, { title: "CSS", slug: "css" }, { title: "Jqeury", slug: "jquery" }, { title: "Photoshop", slug: "photoshop" }],
  createdAt: new Date(),
  updatedAt: new Date(),
})






db.users.insertMany([
  { name: "Pradeep" },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
])