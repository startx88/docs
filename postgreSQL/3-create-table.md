# Create table

PostgreSQL provide followin way to create table .

1. [CREATE TABLE](#create-table)
2. [SELECT INTO](#select-into)
3. [CREATE TABLE AS](#create-table-as)

<br>

### **`CREATE TABLE COMMAND:`**

A relational database consists of multiple tables.

`Create a new table:`

```PostgreSQL
  CREATE TABLE [IF NOT EXISTS] user (
    user_id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50),
    password VARCHAR(16),
    email VARCHAR(50)
  );
```

`Constraints:`

- `NOT NULL:` <br>
  Ensure value in a column cannot be null.
  `Example:`
  ```PostgreSQL
    CREATE TABLE [IF NOT EXISTS] user (
      user_id SERIAL NOT NULL PRIMARY KEY,
      name VARCHAR(50) NOT NULL, <-- NAME CAN NOT BE NULL -->
      password VARCHAR(16) NOT NULL,
      email VARCHAR(50) NOT NULL <-- EMAIL CAN NOT BE NULL -->
    );
  ```
- `PRIMARY KEY:` <br>
  A primary key `uniquely` identifie a row in a table. A table can have one and only one primary key.

  `Example:`

  ```PostgreSQL
    CREATE TABLE [IF NOT EXISTS] user (
      user_id SERIAL NOT NULL PRIMARY KEY, <-- USER ID IS PRIMARY KEY WITH AUTO_INCREMENT -->
      name VARCHAR(50) NOT NULL,
      password VARCHAR(16) NOT NULL,
      email VARCHAR(50) NOT NULL
    );
  ```

- `FOREIGN KEY:`<br>
  It is ensures values in a column or a group of columns from a table exists in a column or group of column in another table. a table can have many foreign key.

  ```PostgreSQL
  CREATE TABLE [IF NOT EXISTS] user (
    user_id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    password VARCHAR(16) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    role INT NOT NULL,
    FOREIGN KEY (role)
      REFERENCES roles(role_id)  <-- ROLE HAS FOREIGN KEY THAT CONNECTED TO A ROLE TABLE -->
  );
  ```

- `UNIQUE:`<br>
  Ensure the values in a column unique accross the rows within the same table.

  `Example:`

  ```PostgreSQL
    CREATE TABLE [IF NOT EXISTS] user (
      user_id SERIAL NOT NULL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      password VARCHAR(16) NOT NULL,
      email VARCHAR(50) NOT NULL UNIQUE <-- EMAIL HAS UNIQUE Constraints -->
    );
  ```

- `CHECK:`<br>
  A CHECK constraints ensures the data must satisfy a boolean expression.

  `Example:`

  ```PostgreSQL
    CREATE TABLE [IF NOT EXISTS] user (
      user_id SERIAL NOT NULL PRIMARY KEY,
      name VARCHAR(50) NOT NULL ,
      password VARCHAR(16) NOT NULL CHECK (LENGTH(password) > 8), <-- PASSWORD MUST BE GREATER THEN 8 -->
      email VARCHAR(50) NOT NULL UNIQUE
    );
  ```

<br>
<br>

### **`SELECT INTO:`**

This command used to create new table based on query into another table.

`Syntax:`

```PostgreSQL

  SELECT selected_list
  INTO [TEMPORARY | TEMP | UNLOGGED] [TABLE] new_table_name
  FROM table_name
  WHERE
    search_condition;
```

`Example:`

```PostgreSQL

  SELECT first_name,last_name, email
  INTO TEMP TABLE user_new
  FROM users;

  <-- OR -->

  SELECT first_name,last_name, email
  INTO TEMP TABLE user_new
  FROM users
  WHERE age BETWEEN [30, 50];
```

- `TEMP or TEMPORARY:` It allow you to create temporary table.
- `UNLOGGED:` It make new table as an unlogged table.
