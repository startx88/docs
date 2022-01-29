db.createUser({
  user: "jobber",
  pwd: "jobber",
  roles: [
    { role: "readWrite", db: "jobber" }
  ]
});


db.createRole({
  role: "backupAndRestore",
  privileges: [{ resource: { db: "jobber", collection: "" }, actions: ["backup", "restore"] }],
  roles: [{ role: "dbAdmin", db: "admin" }]
});

db.departments.insertMany([
  {
    title: 'It',
    insertAt: new Date(),
    active: true,
  },
  {
    title: 'Account',
    insertAt: new Date(),
    active: true,
  },
  {
    title: 'Manager',
    insertAt: new Date(),
    active: true,
  },
  {
    title: 'HR',
    insertAt: new Date(),
    active: true,
  },
  {
    title: 'Network',
    insertAt: new Date(),
    active: true,
  }
])


