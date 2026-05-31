import { Question } from "../questions";
const mysqlQuestions: Question[] = [
  // ─── MYSQL BASICS ─────────────────────────────────────────────────────────
  {
    id: "mysql-1",
    question: "What is MySQL? How is it different from SQL?",
    answer:
      "MySQL is an open-source relational database management system (RDBMS) that uses SQL to store and manage data. SQL (Structured Query Language) is just the language — the set of commands used to interact with databases. MySQL is the actual software system that implements that language. Other RDBMS like PostgreSQL, SQLite, and Microsoft SQL Server also use SQL, but MySQL is a specific product.",
    category: "MySQL Basics",
    tags: ["mysql", "basics"],
  },
  {
    id: "mysql-2",
    question: "What is a relational database?",
    answer:
      "A relational database stores data in structured tables made up of rows and columns. Tables can be related to each other using keys. For example, an 'orders' table can reference a 'users' table using a foreign key. This structure enforces data integrity, reduces duplication, and allows powerful querying through JOINs. MySQL, PostgreSQL, and SQLite are all relational databases.",
    category: "MySQL Basics",
    tags: ["mysql", "basics"],
  },
  {
    id: "mysql-3",
    question: "What is a table, row, and column in MySQL?",
    answer:
      "A table is a structured collection of related data, similar to a spreadsheet. A column (also called a field) defines a specific attribute — like 'name' or 'email' — and has a data type. A row (also called a record) is one entry in the table representing a single entity. For example, in a 'users' table, each column defines a user property and each row is one user.",
    category: "MySQL Basics",
    tags: ["mysql", "basics"],
  },
  {
    id: "mysql-4",
    question: "What are the main data types in MySQL?",
    answer:
      "Key MySQL data types: INT (whole numbers), BIGINT (large integers), FLOAT/DECIMAL (decimals — use DECIMAL for money), VARCHAR(n) (variable-length string up to n chars), CHAR(n) (fixed-length string), TEXT (long text), DATE (YYYY-MM-DD), DATETIME (date + time), TIMESTAMP (auto-tracks time, timezone-aware), BOOLEAN (stored as TINYINT 0/1), ENUM (predefined list of values), JSON (structured JSON data). Choosing the right type improves storage efficiency and query performance.",
    category: "MySQL Basics",
    tags: ["mysql", "datatypes"],
  },
  {
    id: "mysql-5",
    question: "What is the difference between CHAR and VARCHAR?",
    answer:
      "CHAR is fixed-length — it always uses the exact amount of space you define, padding with spaces if needed. VARCHAR is variable-length — it only uses as much space as the actual string requires plus 1-2 bytes to store the length. Use CHAR for fixed-size values like country codes ('IN', 'US') or MD5 hashes. Use VARCHAR for names, emails, and other strings that vary in length. VARCHAR is more storage-efficient for variable content; CHAR can be slightly faster for fixed-size lookups.",
    category: "MySQL Basics",
    tags: ["mysql", "datatypes"],
  },
  {
    id: "mysql-6",
    question: "What is the difference between TEXT and VARCHAR?",
    answer:
      "VARCHAR stores up to 65,535 characters in the row itself and supports default values and indexing directly. TEXT stores large content (up to 65,535 for TEXT, up to ~4GB for LONGTEXT) outside the row in a separate storage area. TEXT cannot have default values and can only be partially indexed (e.g., first 100 characters). Use VARCHAR for short, searchable strings like names or emails. Use TEXT for blog content, descriptions, or any large unstructured text.",
    category: "MySQL Basics",
    tags: ["mysql", "datatypes"],
  },
  {
    id: "mysql-7",
    question:
      "What is NULL in MySQL? How is it different from an empty string?",
    answer:
      "NULL represents the absence of a value — it means 'unknown' or 'not applicable'. An empty string '' is an actual value that exists but contains no characters. NULL is not equal to anything, including itself — you must use IS NULL or IS NOT NULL to check for it. An empty string can be compared with = ''. For example, a user who hasn't provided a phone number would have NULL, not an empty string. NULL can affect JOINs, aggregations, and comparisons in unexpected ways.",
    category: "MySQL Basics",
    tags: ["mysql", "null"],
  },
  {
    id: "mysql-8",
    question: "What is AUTO_INCREMENT in MySQL?",
    answer:
      "AUTO_INCREMENT automatically generates a unique, incrementing integer value for a column every time a new row is inserted — without needing to specify the value manually. It is almost always used on the primary key column. For example: id INT AUTO_INCREMENT PRIMARY KEY. The counter starts at 1 by default and increments by 1. If a row is deleted, its ID is not reused. You can set a custom starting value with AUTO_INCREMENT = 100.",
    category: "MySQL Basics",
    tags: ["mysql", "basics"],
  },
  {
    id: "mysql-9",
    question: "What is the difference between DELETE, TRUNCATE, and DROP?",
    answer:
      "DELETE removes specific rows based on a WHERE condition and can be rolled back in a transaction. It is a DML operation and fires triggers. TRUNCATE removes all rows from a table instantly by deallocating data pages — it is faster than DELETE but cannot be filtered and cannot be rolled back in most MySQL setups. It resets AUTO_INCREMENT. DROP removes the entire table including its structure, indexes, and data permanently — it is a DDL operation. Think of it as: DELETE removes some records, TRUNCATE clears the table, DROP destroys the table entirely.",
    category: "MySQL Basics",
    tags: ["mysql", "basics"],
  },
  {
    id: "mysql-10",
    question: "What is the difference between WHERE and HAVING?",
    answer:
      "WHERE filters rows before any grouping or aggregation happens — it works on individual rows. HAVING filters after GROUP BY — it works on aggregated results. You cannot use aggregate functions like COUNT() or SUM() in a WHERE clause. For example: SELECT department, COUNT(*) FROM employees WHERE salary > 50000 GROUP BY department HAVING COUNT(*) > 5. Here WHERE filters individual rows first, then HAVING filters the grouped results.",
    category: "MySQL Basics",
    tags: ["mysql", "queries"],
  },

  // ─── KEYS & CONSTRAINTS ────────────────────────────────────────────────────
  {
    id: "mysql-11",
    question: "What is a Primary Key?",
    answer:
      "A Primary Key is a column (or combination of columns) that uniquely identifies each row in a table. It must be unique and cannot be NULL. Every table should have a primary key. MySQL automatically creates a clustered index on the primary key, making lookups by ID very fast. You define it as: id INT AUTO_INCREMENT PRIMARY KEY. A table can only have one primary key.",
    category: "Keys & Constraints",
    tags: ["mysql", "keys"],
  },
  {
    id: "mysql-12",
    question: "What is a Foreign Key?",
    answer:
      "A Foreign Key is a column in one table that references the Primary Key of another table. It enforces referential integrity — you cannot insert a value that doesn't exist in the referenced table, and you cannot delete a referenced row without handling dependent rows first. Example: orders.user_id is a foreign key referencing users.id. This prevents orphaned records. You can configure behaviour on delete: RESTRICT, CASCADE, SET NULL, or NO ACTION.",
    category: "Keys & Constraints",
    tags: ["mysql", "keys"],
  },
  {
    id: "mysql-13",
    question: "What is a Unique Key? How is it different from a Primary Key?",
    answer:
      "A Unique Key ensures all values in a column are distinct — no duplicates allowed. The key difference from a Primary Key is that a Unique Key can contain NULL values (multiple NULLs are allowed in MySQL), while a Primary Key cannot. A table can have only one Primary Key but multiple Unique Keys. Use Unique Key for fields like email or phone number that must be unique but are not the primary identifier.",
    category: "Keys & Constraints",
    tags: ["mysql", "keys"],
  },
  {
    id: "mysql-14",
    question: "What is a Composite Key?",
    answer:
      "A Composite Key is a primary or unique key made up of two or more columns that together uniquely identify a row. Neither column alone is unique — only the combination is. For example, in an enrollment table, student_id and course_id together form a composite primary key because a student can enroll in many courses and a course can have many students, but a student can only enroll in a specific course once.",
    category: "Keys & Constraints",
    tags: ["mysql", "keys"],
  },
  {
    id: "mysql-15",
    question: "What is a Candidate Key?",
    answer:
      "A Candidate Key is any column or set of columns that could serve as the Primary Key — it uniquely identifies each row and has no NULL values. A table can have multiple candidate keys. For example, in a users table, both id and email could be candidate keys. One of them is chosen as the Primary Key; the rest become alternate keys (often enforced with UNIQUE constraints).",
    category: "Keys & Constraints",
    tags: ["mysql", "keys"],
  },
  {
    id: "mysql-16",
    question: "What is a constraint in MySQL? Name 5 constraints.",
    answer:
      "Constraints are rules enforced on columns to ensure data integrity. The 5 main constraints are: PRIMARY KEY (unique, not null, one per table), FOREIGN KEY (references another table's primary key), UNIQUE (no duplicate values, NULLs allowed), NOT NULL (column cannot be empty), CHECK (value must meet a condition, e.g. age >= 18), and DEFAULT (sets a fallback value if none is provided). Constraints are enforced at the database level, not just in application code.",
    category: "Keys & Constraints",
    tags: ["mysql", "constraints"],
  },
  {
    id: "mysql-17",
    question: "What is ON DELETE CASCADE?",
    answer:
      "ON DELETE CASCADE is a foreign key action that automatically deletes all child rows when the parent row is deleted. For example, if user with id=5 is deleted and orders.user_id has ON DELETE CASCADE, all orders belonging to that user are automatically deleted too. This prevents orphaned records without requiring manual cleanup. Use with caution — it can cause large cascading deletes that are difficult to reverse.",
    category: "Keys & Constraints",
    tags: ["mysql", "constraints", "foreign-key"],
  },
  {
    id: "mysql-18",
    question: "What is ON DELETE SET NULL?",
    answer:
      "ON DELETE SET NULL is a foreign key action that sets the foreign key column to NULL in child rows when the referenced parent row is deleted. For example, if a manager (user) is deleted, their employees' manager_id is set to NULL rather than deleting the employees. The foreign key column must be nullable for this to work. It preserves child records while removing the reference to the deleted parent.",
    category: "Keys & Constraints",
    tags: ["mysql", "constraints", "foreign-key"],
  },
  {
    id: "mysql-19",
    question: "What is a CHECK constraint?",
    answer:
      "A CHECK constraint enforces that values in a column satisfy a condition. For example: age INT CHECK (age >= 18), or status ENUM('active','inactive'). MySQL 8.0+ fully enforces CHECK constraints. In older versions, CHECK was parsed but not enforced — ENUM or application-level validation was used instead. CHECK is useful for data quality rules that should be enforced at the database level regardless of which application writes the data.",
    category: "Keys & Constraints",
    tags: ["mysql", "constraints"],
  },
  {
    id: "mysql-20",
    question: "What is a DEFAULT constraint?",
    answer:
      "A DEFAULT constraint provides an automatic value for a column if no value is supplied during INSERT. For example: status VARCHAR(20) DEFAULT 'active', or created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP. This avoids NULL values in columns that should always have a value and reduces boilerplate in INSERT statements. DEFAULT values are applied at the database level, so they work regardless of the client.",
    category: "Keys & Constraints",
    tags: ["mysql", "constraints"],
  },

  // ─── JOINS ────────────────────────────────────────────────────────────────
  {
    id: "mysql-21",
    question: "What is a JOIN in MySQL?",
    answer:
      "A JOIN combines rows from two or more tables based on a related column. Instead of making multiple queries and combining results in application code, you fetch related data in a single query. For example, joining users and orders tables on users.id = orders.user_id retrieves users alongside their order data. JOINs are fundamental to relational databases and are how you query across related tables.",
    category: "Joins",
    tags: ["mysql", "joins"],
  },
  {
    id: "mysql-22",
    question: "What is INNER JOIN? When does it return rows?",
    answer:
      "INNER JOIN returns only rows where there is a match in both tables. If a user has no orders, they won't appear. If an order has no matching user, it won't appear either. It is the most common join type and the default when you write just JOIN. Example: SELECT users.name, orders.total FROM users INNER JOIN orders ON users.id = orders.user_id — only users who have placed at least one order are returned.",
    category: "Joins",
    tags: ["mysql", "joins"],
  },
  {
    id: "mysql-23",
    question: "What is LEFT JOIN vs RIGHT JOIN?",
    answer:
      "LEFT JOIN returns all rows from the left table and matching rows from the right table. If there is no match, the right table columns are NULL. RIGHT JOIN is the mirror — all rows from the right table, with NULLs for unmatched left table rows. In practice, LEFT JOIN is used almost exclusively because you can always rewrite a RIGHT JOIN by swapping the table order. Example: SELECT users.name, orders.id FROM users LEFT JOIN orders ON users.id = orders.user_id — returns all users, including those with no orders (orders columns will be NULL).",
    category: "Joins",
    tags: ["mysql", "joins"],
  },
  {
    id: "mysql-24",
    question: "What is FULL OUTER JOIN? Does MySQL support it natively?",
    answer:
      "FULL OUTER JOIN returns all rows from both tables — matched rows combined, and unmatched rows from each table with NULLs for the missing side. MySQL does NOT support FULL OUTER JOIN natively. You simulate it by combining LEFT JOIN and RIGHT JOIN with UNION: SELECT * FROM a LEFT JOIN b ON a.id = b.id UNION SELECT * FROM a RIGHT JOIN b ON a.id = b.id. PostgreSQL supports it natively.",
    category: "Joins",
    tags: ["mysql", "joins"],
  },
  {
    id: "mysql-25",
    question: "What is a SELF JOIN?",
    answer:
      "A SELF JOIN joins a table to itself. It is useful when rows within the same table have a relationship with each other. A classic example is an employees table where each employee has a manager_id that references another employee's id. SELECT e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id. You must use aliases to distinguish the two instances of the same table.",
    category: "Joins",
    tags: ["mysql", "joins"],
  },
  {
    id: "mysql-26",
    question: "What is a CROSS JOIN?",
    answer:
      "A CROSS JOIN returns the Cartesian product of two tables — every row from the first table combined with every row from the second. If table A has 10 rows and table B has 5 rows, CROSS JOIN returns 50 rows. It has no ON condition. Practical uses include generating combinations, test data, or pairing every product with every store. Use carefully on large tables — the result set grows multiplicatively.",
    category: "Joins",
    tags: ["mysql", "joins"],
  },
  {
    id: "mysql-27",
    question: "Difference between JOIN and subquery? When to use which?",
    answer:
      "A JOIN combines tables horizontally to retrieve related columns in one result set. A subquery is a nested SELECT that returns a value or set of values used in an outer query. JOINs are generally faster and more readable for combining related data. Subqueries are more readable when you need to filter based on an aggregated condition (e.g. users who placed more orders than average). For EXISTS checks, subqueries are often optimised well. In practice, most subqueries can be rewritten as JOINs — the query optimiser often treats them similarly.",
    category: "Joins",
    tags: ["mysql", "joins", "queries"],
  },
  {
    id: "mysql-28",
    question:
      "Write a query to get all users and their orders including users with no orders.",
    answer:
      "Use LEFT JOIN: SELECT users.id, users.name, orders.id AS order_id, orders.total FROM users LEFT JOIN orders ON users.id = orders.user_id ORDER BY users.id. The LEFT JOIN ensures all users appear — those without orders will have NULL in the order_id and total columns. If you used INNER JOIN instead, users with no orders would be excluded from the result.",
    category: "Joins",
    tags: ["mysql", "joins", "queries"],
  },
  {
    id: "mysql-29",
    question:
      "What happens to performance with multiple JOINs on large tables?",
    answer:
      "Performance degrades if indexes are missing on the JOIN columns. Each JOIN without an index causes a full table scan. Best practices: always index foreign key columns used in JOINs, use EXPLAIN to check the execution plan, avoid joining more tables than necessary, consider denormalising for read-heavy queries, and use pagination to limit result size. In very complex reporting queries, materialised views or caching the results may be more appropriate than running heavy JOINs on every request.",
    category: "Joins",
    tags: ["mysql", "joins", "performance"],
  },

  // ─── INDEXES ──────────────────────────────────────────────────────────────
  {
    id: "mysql-30",
    question: "What is an index in MySQL?",
    answer:
      "An index is a data structure (typically a B-tree) that MySQL maintains alongside a table to speed up data retrieval. Without an index, MySQL scans every row (full table scan) to find matching rows. With an index, it navigates the B-tree to find matches in O(log n) time. Indexes are created automatically on PRIMARY KEY and UNIQUE columns. You create them manually with: CREATE INDEX idx_email ON users(email). Think of it like a book's index — instead of reading every page, you jump directly to the right page.",
    category: "Indexes",
    tags: ["mysql", "indexes", "performance"],
  },
  {
    id: "mysql-31",
    question: "How does an index speed up queries?",
    answer:
      "MySQL's default index type is a B-tree (balanced tree). Instead of scanning every row, the database traverses the tree to find matching keys in O(log n) time. The leaf nodes of the B-tree point to the actual row data. For a table with 1 million rows, a full scan might check all 1M rows, while a B-tree index finds the result in about 20 comparisons. Indexes also help with ORDER BY and GROUP BY operations when the sort matches the index order.",
    category: "Indexes",
    tags: ["mysql", "indexes", "performance"],
  },
  {
    id: "mysql-32",
    question: "What is the downside of adding too many indexes?",
    answer:
      "Every index slows down write operations — INSERT, UPDATE, and DELETE must update all relevant indexes in addition to the table data. More indexes means more storage space. Indexes can also cause MySQL's query optimiser to make poor choices when too many are available. The rule of thumb: index columns you frequently use in WHERE, JOIN, ORDER BY, and GROUP BY clauses. Avoid indexing low-cardinality columns like boolean flags. Audit unused indexes regularly with performance_schema.",
    category: "Indexes",
    tags: ["mysql", "indexes", "performance"],
  },
  {
    id: "mysql-33",
    question: "What is a clustered index vs non-clustered index?",
    answer:
      "A clustered index determines the physical order of data in the table — the rows are stored sorted by the clustered index key. In MySQL InnoDB, the primary key is always the clustered index. There can only be one clustered index per table. A non-clustered index (secondary index) is a separate structure that stores the index key and a pointer to the actual row (which is the primary key value in InnoDB). Secondary index lookups require two lookups — first the secondary index, then the primary key lookup to fetch the full row.",
    category: "Indexes",
    tags: ["mysql", "indexes"],
  },
  {
    id: "mysql-34",
    question: "What is a composite index? What is the left-prefix rule?",
    answer:
      "A composite index covers multiple columns — CREATE INDEX idx_name_email ON users(last_name, first_name, email). The left-prefix rule states that MySQL can use a composite index only if the query includes the leftmost column(s) in sequence. For index (a, b, c): queries on (a), (a, b), or (a, b, c) can use the index. A query on just (b) or (c) alone cannot. A query on (a, c) can use the index for column a only. Always put the most selective and most frequently queried column first.",
    category: "Indexes",
    tags: ["mysql", "indexes"],
  },
  {
    id: "mysql-35",
    question: "What is a FULLTEXT index? When do you use it?",
    answer:
      "A FULLTEXT index is designed for efficient text searching — it tokenises text into words and indexes them for fast keyword matching using MATCH() AGAINST() syntax. Unlike LIKE '%keyword%' which cannot use a normal index, FULLTEXT handles natural language searches, relevance ranking, and boolean mode queries. Use it for search boxes on articles, product descriptions, or any free-text content. It works on CHAR, VARCHAR, and TEXT columns. For advanced search at scale, Elasticsearch is a more powerful alternative.",
    category: "Indexes",
    tags: ["mysql", "indexes", "search"],
  },
  {
    id: "mysql-36",
    question: "How do you check if a query is using an index? (EXPLAIN)",
    answer:
      "Prefix your query with EXPLAIN: EXPLAIN SELECT * FROM users WHERE email = 'test@test.com'. The output shows each table in the query with key columns: 'type' (ALL = full scan, ref/range/const = index used), 'key' (which index was used), 'rows' (estimated rows examined), and 'Extra' (useful info like 'Using index', 'Using filesort'). 'type: ALL' is the red flag — it means no index is used. 'rows' being very high relative to the result count is also a problem.",
    category: "Indexes",
    tags: ["mysql", "indexes", "performance"],
  },
  {
    id: "mysql-37",
    question: "What is index cardinality?",
    answer:
      "Cardinality is the number of unique values in an indexed column. High cardinality means many unique values (like user IDs or emails) — these make excellent indexes because they narrow down results significantly. Low cardinality means few unique values (like a boolean or status column with 2-3 values) — indexes on these are usually not useful because they don't reduce the result set enough. MySQL's query optimiser uses cardinality statistics to decide whether to use an index.",
    category: "Indexes",
    tags: ["mysql", "indexes"],
  },
  {
    id: "mysql-38",
    question: "When should you NOT add an index?",
    answer:
      "Avoid indexes on: low-cardinality columns (boolean, status with few values), small tables where full scans are already fast, columns that are never used in WHERE/JOIN/ORDER BY, columns that are updated very frequently (write overhead dominates), and tables with very high write-to-read ratios like logging or event tables. Also avoid redundant indexes — if you have a composite index on (a, b), a separate index on (a) is redundant because the composite covers it.",
    category: "Indexes",
    tags: ["mysql", "indexes", "performance"],
  },
  {
    id: "mysql-39",
    question: "What is a UNIQUE index?",
    answer:
      "A UNIQUE index enforces that all values in a column are distinct, and also creates an index for fast lookups. It is automatically created when you add a UNIQUE constraint. Unlike a PRIMARY KEY, a UNIQUE index allows NULL values (and multiple NULLs are treated as distinct in MySQL). Use it on columns like email or username that must be unique across the table. It prevents duplicate entries at the database level, which is more reliable than checking for duplicates in application code.",
    category: "Indexes",
    tags: ["mysql", "indexes", "constraints"],
  },

  // ─── TRANSACTIONS & ACID ──────────────────────────────────────────────────
  {
    id: "mysql-40",
    question: "What is a transaction in MySQL?",
    answer:
      "A transaction is a group of SQL operations that execute as a single unit. Either all operations succeed and are committed, or all fail and are rolled back — there is no partial success. Transactions are started with START TRANSACTION (or BEGIN), committed with COMMIT, and undone with ROLLBACK. InnoDB is the MySQL storage engine that supports transactions. MyISAM does not. Transactions are critical for operations involving multiple related changes, like transferring money between accounts.",
    category: "Transactions & ACID",
    tags: ["mysql", "transactions"],
  },
  {
    id: "mysql-41",
    question: "What are ACID properties?",
    answer:
      "ACID is the set of properties that guarantee reliable database transactions. Atomicity: all operations in a transaction succeed or all fail — no partial updates. Consistency: a transaction brings the database from one valid state to another, enforcing all constraints. Isolation: concurrent transactions do not interfere with each other — each sees a consistent snapshot. Durability: once a transaction is committed, it persists even if the system crashes — data is written to disk. InnoDB in MySQL is fully ACID compliant.",
    category: "Transactions & ACID",
    tags: ["mysql", "transactions", "acid"],
  },
  {
    id: "mysql-42",
    question: "What is Atomicity in a transaction?",
    answer:
      "Atomicity means a transaction is treated as a single indivisible unit — all operations either complete successfully together, or none of them are applied. If any step fails, the entire transaction is rolled back automatically. Classic example: transferring money between bank accounts involves deducting from account A and adding to account B. If the deduction succeeds but the addition fails, atomicity ensures the deduction is rolled back, leaving both accounts unchanged.",
    category: "Transactions & ACID",
    tags: ["mysql", "transactions", "acid"],
  },
  {
    id: "mysql-43",
    question: "What is Consistency in a transaction?",
    answer:
      "Consistency ensures that a transaction brings the database from one valid state to another valid state. All data integrity rules — constraints, foreign keys, triggers, and rules — must be satisfied before and after the transaction. If a transaction would violate a constraint (like inserting a duplicate primary key), it is rejected. Consistency is partly enforced by the database through constraints and partly by the application through correct transaction logic.",
    category: "Transactions & ACID",
    tags: ["mysql", "transactions", "acid"],
  },
  {
    id: "mysql-44",
    question: "What is Isolation in a transaction?",
    answer:
      "Isolation ensures that concurrent transactions execute as if they were running sequentially — one transaction's intermediate state is not visible to others. Without isolation, you get dirty reads, non-repeatable reads, or phantom reads. MySQL InnoDB defaults to REPEATABLE READ isolation level. Higher isolation levels (like SERIALIZABLE) offer stronger guarantees but reduce concurrency. Lower levels (READ UNCOMMITTED) allow more concurrency but risk seeing inconsistent data.",
    category: "Transactions & ACID",
    tags: ["mysql", "transactions", "acid"],
  },
  {
    id: "mysql-45",
    question: "What is Durability in a transaction?",
    answer:
      "Durability guarantees that once a transaction is committed, the changes are permanently saved even if the system crashes immediately after. InnoDB achieves this through write-ahead logging (WAL) — changes are written to a redo log on disk before being acknowledged. On restart after a crash, MySQL replays the redo log to recover committed transactions. This is why databases write to disk, not just memory.",
    category: "Transactions & ACID",
    tags: ["mysql", "transactions", "acid"],
  },
  {
    id: "mysql-46",
    question: "What is COMMIT and ROLLBACK?",
    answer:
      "COMMIT permanently saves all changes made during the current transaction to the database. After COMMIT, the changes are visible to other transactions and are durable. ROLLBACK undoes all changes made during the current transaction, restoring the database to the state it was in before the transaction started. Example flow: START TRANSACTION → UPDATE accounts SET balance = balance - 100 WHERE id = 1 → UPDATE accounts SET balance = balance + 100 WHERE id = 2 → COMMIT (or ROLLBACK if an error occurred).",
    category: "Transactions & ACID",
    tags: ["mysql", "transactions"],
  },
  {
    id: "mysql-47",
    question: "What is a SAVEPOINT in MySQL?",
    answer:
      "A SAVEPOINT marks a point within a transaction that you can roll back to without rolling back the entire transaction. Useful for long transactions where you want to undo only a portion of the work. Syntax: SAVEPOINT sp1 → (do some work) → ROLLBACK TO SAVEPOINT sp1 (undoes work since sp1) → RELEASE SAVEPOINT sp1 (removes the savepoint). You can create multiple savepoints in one transaction. The outer COMMIT still commits everything that wasn't rolled back.",
    category: "Transactions & ACID",
    tags: ["mysql", "transactions"],
  },
  {
    id: "mysql-48",
    question: "What are transaction isolation levels in MySQL?",
    answer:
      "MySQL supports 4 isolation levels (lowest to highest): READ UNCOMMITTED — can read uncommitted changes from other transactions (dirty reads possible). READ COMMITTED — only reads committed data, but same row can return different values in same transaction (non-repeatable reads possible). REPEATABLE READ — default in InnoDB; same row returns same value throughout transaction, but new rows from other transactions can appear (phantom reads possible). SERIALIZABLE — strictest; transactions execute one at a time, no concurrency issues but slowest. Set with: SET TRANSACTION ISOLATION LEVEL REPEATABLE READ.",
    category: "Transactions & ACID",
    tags: ["mysql", "transactions", "isolation"],
  },
  {
    id: "mysql-49",
    question: "What is a dirty read, phantom read, and non-repeatable read?",
    answer:
      "Dirty read: reading data that another transaction has modified but not yet committed — if that transaction rolls back, you read data that never officially existed. Non-repeatable read: reading the same row twice in one transaction and getting different values because another transaction modified and committed it in between. Phantom read: re-running a range query in one transaction and getting different rows because another transaction inserted or deleted rows matching that range in between. Higher isolation levels prevent these issues but reduce concurrency.",
    category: "Transactions & ACID",
    tags: ["mysql", "transactions", "isolation"],
  },
  {
    id: "mysql-50",
    question: "What is a deadlock in MySQL? How do you prevent it?",
    answer:
      "A deadlock occurs when two transactions each hold a lock that the other needs, causing both to wait forever. Example: Transaction A locks row 1 and wants row 2; Transaction B locks row 2 and wants row 1. MySQL detects deadlocks automatically and kills one transaction (the one with fewer changes), returning error 1213. Prevention strategies: always acquire locks in the same order across transactions, keep transactions short, use lower isolation levels where appropriate, and add indexes to reduce the number of rows locked.",
    category: "Transactions & ACID",
    tags: ["mysql", "transactions", "deadlock"],
  },

  // ─── NORMALIZATION ────────────────────────────────────────────────────────
  {
    id: "mysql-51",
    question: "What is normalization? Why is it important?",
    answer:
      "Normalization is the process of structuring a relational database to reduce data redundancy and improve data integrity. It involves dividing large tables into smaller, related tables and defining relationships between them. Without normalization, the same data appears in multiple places — updating it in one place but not others leads to inconsistencies. Normalization makes data easier to maintain, reduces storage, and prevents update/insert/delete anomalies. The trade-off is that normalized databases require more JOINs, which can be slower for read-heavy queries.",
    category: "Normalization",
    tags: ["mysql", "normalization"],
  },
  {
    id: "mysql-52",
    question: "What is First Normal Form (1NF)?",
    answer:
      "A table is in 1NF when: each column contains atomic (indivisible) values — no arrays or comma-separated lists in a single cell, each column contains values of a single type, each column has a unique name, and the order of rows doesn't matter. Violation example: storing multiple phone numbers as '9876,8765' in one column. Fix: create a separate phone_numbers table with one phone number per row referencing the user. 1NF eliminates repeating groups.",
    category: "Normalization",
    tags: ["mysql", "normalization"],
  },
  {
    id: "mysql-53",
    question: "What is Second Normal Form (2NF)?",
    answer:
      "A table is in 2NF when it is in 1NF and every non-key column is fully dependent on the entire primary key — not just part of it. This applies only when the primary key is composite. Example violation: an order_items table with composite key (order_id, product_id) that also stores product_name. product_name depends only on product_id, not on the full composite key. Fix: move product_name to a separate products table. 2NF eliminates partial dependencies.",
    category: "Normalization",
    tags: ["mysql", "normalization"],
  },
  {
    id: "mysql-54",
    question: "What is Third Normal Form (3NF)?",
    answer:
      "A table is in 3NF when it is in 2NF and no non-key column depends on another non-key column (no transitive dependencies). Example violation: a students table with columns student_id, zip_code, city, state — city and state depend on zip_code, not directly on student_id. Fix: create a zip_codes table mapping zip_code to city and state. 3NF is the standard target for most production databases. It eliminates transitive dependencies.",
    category: "Normalization",
    tags: ["mysql", "normalization"],
  },
  {
    id: "mysql-55",
    question:
      "What is denormalization? When would you deliberately denormalize?",
    answer:
      "Denormalization is intentionally introducing redundancy into a normalized database to improve read performance. You store calculated or repeated values to avoid expensive JOINs at query time. Reasons to denormalize: read performance is critical and JOINs are too slow, reporting tables or analytics dashboards that query the same aggregations repeatedly, data warehouses where write performance is less important, and caching frequently accessed combinations. The trade-off is more complex writes and risk of data inconsistency. Always normalize first, then denormalize specific bottlenecks based on profiling.",
    category: "Normalization",
    tags: ["mysql", "normalization", "performance"],
  },
  {
    id: "mysql-56",
    question: "What is a functional dependency?",
    answer:
      "A functional dependency exists when the value of one column (or set of columns) uniquely determines the value of another column. Written as A → B (A determines B). Example: student_id → student_name means knowing the student_id uniquely determines the student_name. Understanding functional dependencies is the basis for normalization — 2NF removes partial functional dependencies and 3NF removes transitive functional dependencies.",
    category: "Normalization",
    tags: ["mysql", "normalization"],
  },

  // ─── QUERIES & FUNCTIONS ──────────────────────────────────────────────────
  {
    id: "mysql-57",
    question:
      "What is the difference between COUNT(*), COUNT(col), and COUNT(DISTINCT col)?",
    answer:
      "COUNT(*) counts all rows in the result set including rows with NULL values. COUNT(col) counts rows where that specific column is NOT NULL — NULLs are ignored. COUNT(DISTINCT col) counts unique non-NULL values in that column. Example: if 10 users exist but 3 have no email (NULL), COUNT(*) = 10, COUNT(email) = 7, COUNT(DISTINCT email) = 7 (assuming no duplicate emails). Use COUNT(*) to count total rows, COUNT(col) to count populated fields.",
    category: "Queries & Functions",
    tags: ["mysql", "queries", "functions"],
  },
  {
    id: "mysql-58",
    question: "What is GROUP BY in MySQL? Write an example.",
    answer:
      "GROUP BY groups rows with the same values in specified columns into summary rows. It is used with aggregate functions. Example: SELECT department, COUNT(*) AS employee_count, AVG(salary) AS avg_salary FROM employees GROUP BY department. This returns one row per department showing how many employees are in each and their average salary. Every column in SELECT must either be in GROUP BY or wrapped in an aggregate function.",
    category: "Queries & Functions",
    tags: ["mysql", "queries"],
  },
  {
    id: "mysql-59",
    question: "What is LIMIT and OFFSET? How do you use them for pagination?",
    answer:
      "LIMIT restricts the number of rows returned. OFFSET skips a specified number of rows before starting to return results. For pagination: page 1 = LIMIT 10 OFFSET 0, page 2 = LIMIT 10 OFFSET 10, page N = LIMIT 10 OFFSET (N-1)*10. Example: SELECT * FROM products ORDER BY id LIMIT 10 OFFSET 20 — returns products 21 to 30. Always use ORDER BY with pagination for consistent results. For large tables, OFFSET performance degrades — cursor-based pagination (WHERE id > last_seen_id LIMIT 10) is faster.",
    category: "Queries & Functions",
    tags: ["mysql", "queries", "pagination"],
  },
  {
    id: "mysql-60",
    question: "What is a subquery? What is a correlated subquery?",
    answer:
      "A subquery is a SELECT statement nested inside another query. A regular subquery runs once independently and its result is used by the outer query. Example: SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE total > 1000). A correlated subquery references columns from the outer query and re-executes for every row the outer query processes. Example: SELECT * FROM employees e WHERE salary > (SELECT AVG(salary) FROM employees WHERE department = e.department). Correlated subqueries are powerful but can be slow on large tables.",
    category: "Queries & Functions",
    tags: ["mysql", "queries", "subquery"],
  },
  {
    id: "mysql-61",
    question: "What is the difference between IN, EXISTS, and ANY?",
    answer:
      "IN checks if a value matches any value in a list or subquery result set. EXISTS checks whether a subquery returns any rows at all — it only cares about existence, not the actual values, so it stops as soon as it finds one match (faster for large datasets). ANY compares a value against each value returned by a subquery and returns true if any comparison is true. EXISTS is generally more efficient than IN for large subquery results because it short-circuits. Use IN for small lists, EXISTS for existence checks.",
    category: "Queries & Functions",
    tags: ["mysql", "queries"],
  },
  {
    id: "mysql-62",
    question: "What are aggregate functions in MySQL? Name 5.",
    answer:
      "Aggregate functions perform calculations on a set of rows and return a single value. The main ones: COUNT() — counts rows, SUM() — adds up numeric values, AVG() — calculates average, MIN() — finds the smallest value, MAX() — finds the largest value. Others include GROUP_CONCAT() (concatenates strings from multiple rows) and STD() (standard deviation). Aggregate functions ignore NULL values (except COUNT(*)). They are used with GROUP BY to compute per-group statistics.",
    category: "Queries & Functions",
    tags: ["mysql", "queries", "functions"],
  },
  {
    id: "mysql-63",
    question: "What is COALESCE in MySQL?",
    answer:
      "COALESCE returns the first non-NULL value from a list of expressions. Syntax: COALESCE(value1, value2, ..., fallback). Example: SELECT COALESCE(nickname, first_name, 'Unknown') AS display_name FROM users — returns nickname if it exists, otherwise first_name, otherwise 'Unknown'. Very useful for providing fallback values and avoiding NULL in output. Often used to handle optional columns or default display values without CASE WHEN.",
    category: "Queries & Functions",
    tags: ["mysql", "queries", "functions"],
  },
  {
    id: "mysql-64",
    question: "What is CASE WHEN in MySQL?",
    answer:
      "CASE WHEN is SQL's conditional expression — like an if/else inside a query. Two forms: Searched CASE: CASE WHEN salary > 100000 THEN 'Senior' WHEN salary > 50000 THEN 'Mid' ELSE 'Junior' END AS grade. Simple CASE: CASE status WHEN 'A' THEN 'Active' WHEN 'I' THEN 'Inactive' ELSE 'Unknown' END. Used in SELECT, WHERE, ORDER BY, and GROUP BY. Useful for categorising, labelling, or pivoting data without application-level processing.",
    category: "Queries & Functions",
    tags: ["mysql", "queries", "functions"],
  },
  {
    id: "mysql-65",
    question: "What is the difference between UNION and UNION ALL?",
    answer:
      "UNION combines results from two SELECT statements and removes duplicate rows from the final result. UNION ALL combines results and keeps all rows including duplicates. UNION ALL is faster because it skips the deduplication step. Use UNION when you need distinct results across multiple queries. Use UNION ALL when you know results won't have duplicates or when you intentionally want all rows. Both require matching column counts and compatible data types in each SELECT.",
    category: "Queries & Functions",
    tags: ["mysql", "queries"],
  },
  {
    id: "mysql-66",
    question: "What is a VIEW in MySQL? Advantages and disadvantages?",
    answer:
      "A VIEW is a saved SQL query that acts like a virtual table. You query it like a real table but the underlying query runs each time. Advantages: simplifies complex queries, provides an abstraction layer, improves security by exposing only specific columns, and makes code reusable. Disadvantages: no performance benefit on its own (the query still runs), cannot always be updated (non-updatable views), and can mask underlying complexity making debugging harder. MySQL does not support materialised views natively — the query re-executes on every access.",
    category: "Queries & Functions",
    tags: ["mysql", "views"],
  },
  {
    id: "mysql-67",
    question:
      "What is a stored procedure? How is it different from a function?",
    answer:
      "A stored procedure is a reusable block of SQL code stored in the database that can contain logic, loops, conditionals, and multiple statements. It is called with CALL procedure_name(). A function returns a single value and can be used inside a SELECT. Key differences: procedures can modify data and return multiple result sets; functions must return a value and cannot have side effects on tables in MySQL. Use procedures for complex business logic, batch operations, or multi-step processes. Use functions for reusable calculations within queries.",
    category: "Queries & Functions",
    tags: ["mysql", "stored-procedures"],
  },
  {
    id: "mysql-68",
    question: "What is a trigger in MySQL? Name the types.",
    answer:
      "A trigger is stored code that automatically executes in response to a specific event on a table. Types by timing: BEFORE (runs before the event) and AFTER (runs after the event). Types by event: INSERT, UPDATE, DELETE. Combined: BEFORE INSERT, AFTER INSERT, BEFORE UPDATE, AFTER UPDATE, BEFORE DELETE, AFTER DELETE — 6 possible triggers per table. Common uses: audit logging, automatic timestamp updates, enforcing complex business rules, maintaining derived data. In triggers, NEW refers to the new row and OLD refers to the previous row.",
    category: "Queries & Functions",
    tags: ["mysql", "triggers"],
  },
  {
    id: "mysql-69",
    question: "What is the LIKE operator? What do % and _ mean?",
    answer:
      "LIKE is used for pattern matching in string comparisons. % matches zero or more characters. _ matches exactly one character. Examples: LIKE 'A%' matches strings starting with A. LIKE '%gmail.com' matches any email ending in gmail.com. LIKE '%john%' matches any string containing 'john'. LIKE 'A_' matches two-character strings starting with A. LIKE is case-insensitive for non-binary columns in MySQL. Avoid LIKE '%keyword%' on large tables without a FULLTEXT index — it causes a full table scan.",
    category: "Queries & Functions",
    tags: ["mysql", "queries"],
  },
  {
    id: "mysql-70",
    question: "What is the ORDER BY clause?",
    answer:
      "ORDER BY sorts the result set by one or more columns. ASC (ascending, default) sorts lowest to highest. DESC sorts highest to lowest. Example: SELECT * FROM products ORDER BY price DESC, name ASC — sorts by price descending, then by name alphabetically for products with the same price. ORDER BY can reference column names, aliases, or column positions. Without ORDER BY, the order of results is not guaranteed. Always use ORDER BY with pagination to ensure consistent page results.",
    category: "Queries & Functions",
    tags: ["mysql", "queries"],
  },

  // ─── PERFORMANCE & OPTIMIZATION ───────────────────────────────────────────
  {
    id: "mysql-71",
    question: "How do you find slow queries in MySQL?",
    answer:
      "Enable the slow query log: SET GLOBAL slow_query_log = 'ON'; SET GLOBAL long_query_time = 1 (logs queries taking over 1 second). Then analyse the slow query log file. MySQL also has the performance_schema database with detailed query metrics. Tools like mysqldumpslow and pt-query-digest help parse and summarise slow query logs. In application code, log query execution times and alert on anything above your threshold. Always start with EXPLAIN on the slow query to understand its execution plan.",
    category: "Performance & Optimization",
    tags: ["mysql", "performance", "optimization"],
  },
  {
    id: "mysql-72",
    question:
      "What is the EXPLAIN statement? What do you look for in its output?",
    answer:
      "EXPLAIN shows how MySQL executes a query. Key columns to check: 'type' — ALL means full table scan (bad), range/ref/eq_ref/const means index is used (good). 'key' — which index MySQL chose (NULL means no index). 'rows' — estimated number of rows examined (lower is better). 'Extra' — look for 'Using filesort' (no index for sorting), 'Using temporary' (temp table used), 'Using index' (index covers all needed columns — very fast). EXPLAIN SELECT * FROM users WHERE email = 'x@y.com' — if type is ALL and rows is large, you need an index on email.",
    category: "Performance & Optimization",
    tags: ["mysql", "performance", "explain"],
  },
  {
    id: "mysql-73",
    question: "What is connection pooling in MySQL?",
    answer:
      "Connection pooling maintains a pool of open database connections that can be reused across requests instead of opening and closing a connection for every query. Opening a database connection is expensive — it involves TCP handshaking, authentication, and memory allocation. With pooling, connections are borrowed from the pool, used, and returned. In Node.js with mysql2: const pool = mysql.createPool({ connectionLimit: 10, ... }). This dramatically improves performance under high load and prevents the database from being overwhelmed by too many simultaneous connection attempts.",
    category: "Performance & Optimization",
    tags: ["mysql", "performance", "connection-pooling"],
  },
  {
    id: "mysql-74",
    question: "What is the N+1 query problem?",
    answer:
      "The N+1 problem occurs when you fetch N records and then run a separate query for each one — resulting in N+1 total queries. Example: fetching 100 users (1 query), then for each user fetching their orders (100 queries) = 101 queries total. This is extremely inefficient. Fix with JOIN: SELECT users.*, orders.* FROM users LEFT JOIN orders ON users.id = orders.user_id — one query fetches everything. In ORMs, use eager loading: User.findAll({ include: [Order] }) instead of lazy loading inside a loop.",
    category: "Performance & Optimization",
    tags: ["mysql", "performance", "n+1"],
  },
  {
    id: "mysql-75",
    question: "What is database sharding?",
    answer:
      "Sharding is horizontally partitioning data across multiple database servers (shards) where each shard holds a subset of the data. For example, users with IDs 1-1M on shard 1, 1M-2M on shard 2. This distributes both storage and query load. Sharding is needed when a single server can no longer handle the data volume or query throughput. Challenges: cross-shard queries are complex, joins across shards are hard, resharding when adding servers is difficult. Most applications don't need sharding — vertical scaling and read replicas solve problems for most scales.",
    category: "Performance & Optimization",
    tags: ["mysql", "performance", "sharding", "scaling"],
  },
  {
    id: "mysql-76",
    question: "What is replication in MySQL?",
    answer:
      "Replication copies data from one MySQL server (master/primary) to one or more other servers (slaves/replicas) asynchronously or semi-synchronously. The master logs all changes to a binary log; replicas read and replay those changes. Use cases: read scaling (direct read queries to replicas), high availability (failover if master goes down), backups (take backups from replica without affecting master performance). Master-slave: one master handles writes, replicas handle reads. Master-master: both servers can accept writes, useful for multi-region setups but adds conflict resolution complexity.",
    category: "Performance & Optimization",
    tags: ["mysql", "performance", "replication", "scaling"],
  },
  {
    id: "mysql-77",
    question: "When would you use a raw SQL query instead of an ORM?",
    answer:
      "Use raw SQL when: the query is too complex for the ORM to generate efficiently (complex multi-table JOINs, nested aggregations, window functions), performance profiling shows the ORM is generating a slow query, you need database-specific features the ORM doesn't support, or for bulk operations where the ORM overhead is significant. In Sequelize: sequelize.query('SELECT ...'); in Mongoose: use the aggregation pipeline directly or Model.collection.aggregate(). Always parameterise raw queries to prevent SQL injection — never concatenate user input into SQL strings.",
    category: "Performance & Optimization",
    tags: ["mysql", "performance", "orm"],
  },
  {
    id: "mysql-78",
    question: "What is query caching in MySQL?",
    answer:
      "MySQL had a built-in query cache that stored the result of SELECT queries and returned cached results for identical queries. However, it was removed in MySQL 8.0 because it caused performance problems — it held a global lock on writes, invalidated on any table change, and created contention under high write loads. The modern approach is application-level caching with Redis: store query results with a TTL and invalidate when underlying data changes. This gives you more control over what is cached and for how long.",
    category: "Performance & Optimization",
    tags: ["mysql", "performance", "caching"],
  },
];

export default mysqlQuestions;
