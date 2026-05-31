import { Question } from "../questions";

const mongoQuestions: Question[] = [
  // ─── MONGODB BASICS ───────────────────────────────────────────────────────
  {
    id: "mongo-1",
    question: "What is MongoDB?",
    answer:
      "MongoDB is an open-source, document-oriented NoSQL database. Instead of storing data in rows and tables like a relational database, MongoDB stores data as JSON-like documents (BSON) in collections. It is schema-flexible — documents in the same collection can have different fields. MongoDB is designed for horizontal scalability, high availability, and fast iteration on evolving data models. It is widely used for web applications, real-time analytics, content management, and APIs.",
    category: "MongoDB Basics",
    tags: ["mongodb", "basics"],
  },
  {
    id: "mongo-2",
    question: "What is a document in MongoDB?",
    answer:
      "A document is the basic unit of data in MongoDB — equivalent to a row in a relational database. It is stored as BSON (Binary JSON) and looks like a JSON object with key-value pairs. Example: { _id: ObjectId('...'), name: 'Ashish', email: 'a@b.com', age: 24 }. Documents can contain nested objects and arrays, making them very flexible for representing complex data structures without needing joins.",
    category: "MongoDB Basics",
    tags: ["mongodb", "basics"],
  },
  {
    id: "mongo-3",
    question: "What is a collection in MongoDB?",
    answer:
      "A collection is a group of MongoDB documents — equivalent to a table in a relational database. Unlike SQL tables, collections do not enforce a fixed schema — documents in the same collection can have different fields and data types. Collections are created automatically when you first insert a document. You reference them as db.collectionName. Mongoose adds schema enforcement on top of collections at the application level.",
    category: "MongoDB Basics",
    tags: ["mongodb", "basics"],
  },
  {
    id: "mongo-4",
    question: "What is BSON? How is it different from JSON?",
    answer:
      "BSON (Binary JSON) is the serialisation format MongoDB uses to store and transmit documents. It extends JSON with additional data types not available in standard JSON: Date, ObjectId, Binary, Int32, Int64, Decimal128, and Regular Expression. BSON is binary-encoded for efficient storage and traversal — it includes type and length information for each field, making it faster to parse than text-based JSON. When you interact with MongoDB via drivers or Mongoose, you work with JavaScript objects; the driver handles BSON serialisation automatically.",
    category: "MongoDB Basics",
    tags: ["mongodb", "bson"],
  },
  {
    id: "mongo-5",
    question: "What is the _id field in MongoDB?",
    answer:
      "Every MongoDB document must have an _id field that serves as its unique identifier — equivalent to a primary key. If you don't provide one on insert, MongoDB automatically generates an ObjectId. The _id can be any unique value: ObjectId, string, number, or a custom composite. It is automatically indexed. You cannot have two documents in the same collection with the same _id. In Mongoose, the _id is mapped to an id virtual getter as a string.",
    category: "MongoDB Basics",
    tags: ["mongodb", "basics"],
  },
  {
    id: "mongo-6",
    question: "What is ObjectId in MongoDB?",
    answer:
      "ObjectId is the default type for MongoDB's _id field. It is a 12-byte value consisting of: 4 bytes for the Unix timestamp (seconds since epoch), 5 bytes for a random value (per process), and 3 bytes for an incrementing counter. This makes ObjectIds sortable by creation time, unique across machines, and generated without a centralised counter. You can extract the creation timestamp from an ObjectId: objectId.getTimestamp(). In Mongoose, pass an ObjectId string to mongoose.Types.ObjectId() to use it in queries.",
    category: "MongoDB Basics",
    tags: ["mongodb", "objectid"],
  },
  {
    id: "mongo-7",
    question: "What is a schema in MongoDB? Is it enforced?",
    answer:
      "MongoDB itself is schema-less — it does not enforce any structure on documents in a collection. You can insert documents with any fields. However, MongoDB 3.6+ supports optional Schema Validation using JSON Schema, which can enforce field types and required fields at the database level. In practice, most Node.js developers enforce schemas at the application level using Mongoose, which defines schemas as JavaScript objects with types, validators, and defaults. This gives structure without giving up MongoDB's flexibility.",
    category: "MongoDB Basics",
    tags: ["mongodb", "schema"],
  },
  {
    id: "mongo-8",
    question:
      "What is the difference between embedded documents and referenced documents?",
    answer:
      "Embedded documents store related data inside the same document as a nested object or array. Referenced documents store related data in separate collections and link them via an ID (like a foreign key). Example: a user's address can be embedded directly in the user document, or stored in an addresses collection and referenced by address_id. Embedding is faster to read (one query) but makes the document larger. Referencing normalises data and avoids duplication but requires populate() or $lookup for related data.",
    category: "MongoDB Basics",
    tags: ["mongodb", "schema", "data-modeling"],
  },
  {
    id: "mongo-9",
    question: "When would you embed a document vs reference it?",
    answer:
      "Embed when: data is accessed together most of the time (user + address), the nested data belongs to only one parent (order items belong to one order), the nested array won't grow unboundedly, and you want to avoid extra queries. Reference when: data is shared across multiple documents (a category referenced by many products), the nested data can grow large (a post can have thousands of comments), you need to query the nested data independently, or you need to update it in many places at once. Rule of thumb: embed for 'has-a' relationships with bounded data, reference for shared or large data.",
    category: "MongoDB Basics",
    tags: ["mongodb", "schema", "data-modeling"],
  },
  {
    id: "mongo-10",
    question: "What is the 16MB document size limit in MongoDB?",
    answer:
      "MongoDB limits each document to 16 megabytes. This prevents documents from growing unboundedly and ensures reasonable memory usage for operations that load entire documents. If a document approaches this limit, it is a sign of poor schema design — typically an array growing without bounds (like storing every comment inside a post document). The fix is to use references and store comments in a separate collection. For very large binary files, use GridFS which splits files into 255KB chunks stored across multiple documents.",
    category: "MongoDB Basics",
    tags: ["mongodb", "limits"],
  },

  // ─── CRUD OPERATIONS ─────────────────────────────────────────────────────
  {
    id: "mongo-11",
    question: "How do you insert a document in MongoDB?",
    answer:
      "db.collection.insertOne({ name: 'Ashish', email: 'a@b.com' }) inserts a single document and returns the inserted _id. db.collection.insertMany([{...}, {...}]) inserts an array of documents. In Mongoose: const user = new User({ name: 'Ashish' }); await user.save() — or the shorthand: await User.create({ name: 'Ashish' }). Create also accepts an array. If _id is not provided, MongoDB generates an ObjectId automatically.",
    category: "CRUD Operations",
    tags: ["mongodb", "crud", "insert"],
  },
  {
    id: "mongo-12",
    question: "Difference between insertOne and insertMany?",
    answer:
      "insertOne inserts a single document and returns { acknowledged: true, insertedId: ObjectId }. insertMany inserts an array of documents and returns { acknowledged: true, insertedIds: { 0: ObjectId, 1: ObjectId, ... } }. insertMany is significantly more efficient than looping insertOne for multiple documents because it sends all documents in a single network round trip. By default insertMany is ordered — if one document fails, it stops. Set { ordered: false } to continue inserting remaining documents on failure.",
    category: "CRUD Operations",
    tags: ["mongodb", "crud", "insert"],
  },
  {
    id: "mongo-13",
    question: "How do you find documents in MongoDB? (find vs findOne)",
    answer:
      "find() returns a cursor for all matching documents — you iterate it or convert to array with .toArray(). findOne() returns the first matching document directly (or null if not found). In Mongoose: User.find({ active: true }) returns an array. User.findOne({ email: 'x@y.com' }) returns one document. User.findById(id) is shorthand for findOne({ _id: id }). Add .lean() to return plain JavaScript objects instead of Mongoose documents (faster, no Mongoose overhead).",
    category: "CRUD Operations",
    tags: ["mongodb", "crud", "read"],
  },
  {
    id: "mongo-14",
    question: "How do you filter with conditions in MongoDB's find()?",
    answer:
      "Pass a filter object as the first argument: User.find({ age: { $gt: 18 }, active: true }). You can combine multiple conditions — they are treated as AND by default. Use $or for OR logic: User.find({ $or: [{ role: 'admin' }, { verified: true }] }). Use comparison operators ($gt, $lt, $gte, $lte, $ne, $in, $nin), logical operators ($and, $or, $not, $nor), and element operators ($exists, $type). The filter syntax is the same whether you use native driver or Mongoose.",
    category: "CRUD Operations",
    tags: ["mongodb", "crud", "read", "query"],
  },
  {
    id: "mongo-15",
    question: "How do you update a document in MongoDB?",
    answer:
      "updateOne(filter, update) updates the first matching document. updateMany(filter, update) updates all matching documents. findOneAndUpdate(filter, update, { new: true }) returns the updated document. The update argument uses operators: $set updates specific fields without touching others, $unset removes fields, $inc increments a number, $push adds to an array. Example: User.updateOne({ _id: id }, { $set: { name: 'New Name', updatedAt: new Date() } }). Without $set, you would replace the entire document.",
    category: "CRUD Operations",
    tags: ["mongodb", "crud", "update"],
  },
  {
    id: "mongo-16",
    question:
      "What is the difference between $set and replacing the whole document?",
    answer:
      "Using $set only modifies the specified fields and leaves all other fields unchanged. Updating without $set (passing a plain object as the second argument) replaces the entire document with the new object — all fields not included in the update are deleted. Example: updateOne({_id: id}, { name: 'New' }) would replace the document with only { _id: id, name: 'New' } — losing all other fields. Always use $set for partial updates: updateOne({_id: id}, { $set: { name: 'New' } }) safely updates only the name.",
    category: "CRUD Operations",
    tags: ["mongodb", "crud", "update"],
  },
  {
    id: "mongo-17",
    question: "What is upsert in MongoDB?",
    answer:
      "Upsert is a combination of update and insert — if a matching document is found, it updates it; if no document matches the filter, it inserts a new document. Enable it with { upsert: true }: User.updateOne({ email: 'a@b.com' }, { $set: { name: 'Ashish' } }, { upsert: true }). This is useful for 'create if not exists, update if exists' operations without needing to check first. When an upsert creates a new document, you can use $setOnInsert to set fields only during insertion.",
    category: "CRUD Operations",
    tags: ["mongodb", "crud", "upsert"],
  },
  {
    id: "mongo-18",
    question: "How do you delete documents in MongoDB?",
    answer:
      "deleteOne(filter) deletes the first document matching the filter. deleteMany(filter) deletes all matching documents. findOneAndDelete(filter) deletes and returns the deleted document — useful when you need the data before deleting. In Mongoose: User.deleteOne({ _id: id }), User.deleteMany({ active: false }), User.findByIdAndDelete(id). To delete all documents in a collection: User.deleteMany({}) (be careful — this is irreversible). There is no recycle bin — deleted documents are gone immediately.",
    category: "CRUD Operations",
    tags: ["mongodb", "crud", "delete"],
  },
  {
    id: "mongo-19",
    question: "What is projection in MongoDB?",
    answer:
      "Projection controls which fields are returned in a query result — like SELECT column1, column2 in SQL. Pass a second argument to find(): User.find({}, { name: 1, email: 1, _id: 0 }) — 1 includes the field, 0 excludes it. You cannot mix inclusions and exclusions (except for _id). Projecting only needed fields improves performance by reducing data transferred over the network. In Mongoose you can also use .select('name email -_id') for a cleaner syntax.",
    category: "CRUD Operations",
    tags: ["mongodb", "crud", "projection"],
  },
  {
    id: "mongo-20",
    question: "How do you sort and limit results in MongoDB?",
    answer:
      "Chain .sort(), .limit(), and .skip() on a query. User.find({}).sort({ createdAt: -1 }).limit(10).skip(20) — sorts by createdAt descending, returns 10 results starting from position 20. In sort: 1 = ascending, -1 = descending. For pagination: skip = (page - 1) * pageSize. In Mongoose you can also use .sort('-createdAt') shorthand. For large collections, cursor-based pagination (WHERE _id > lastId) is more efficient than skip/limit at high page numbers.",
    category: "CRUD Operations",
    tags: ["mongodb", "crud", "sorting", "pagination"],
  },

  // ─── QUERY OPERATORS ──────────────────────────────────────────────────────
  {
    id: "mongo-21",
    question: "What are MongoDB comparison operators?",
    answer:
      "$eq: equal (default, { age: 25 } same as { age: { $eq: 25 } }). $ne: not equal. $gt: greater than. $gte: greater than or equal. $lt: less than. $lte: less than or equal. $in: matches any value in array { status: { $in: ['active','pending'] } }. $nin: not in array. Example: User.find({ age: { $gte: 18, $lte: 60 }, status: { $in: ['active','verified'] } }).",
    category: "Query Operators",
    tags: ["mongodb", "operators", "query"],
  },
  {
    id: "mongo-22",
    question: "What are MongoDB logical operators?",
    answer:
      "$and: all conditions must be true — default when listing multiple conditions in a filter object. $or: at least one condition must be true. $not: inverts the effect of a query expression. $nor: none of the conditions are true. Example: User.find({ $or: [{ role: 'admin' }, { $and: [{ age: { $gte: 18 } }, { verified: true }] }] }). Explicit $and is only needed when applying multiple operators to the same field, like { $and: [{ price: { $gt: 10 } }, { price: { $lt: 50 } }] }.",
    category: "Query Operators",
    tags: ["mongodb", "operators", "query"],
  },
  {
    id: "mongo-23",
    question: "What is $in and $nin in MongoDB?",
    answer:
      "$in matches documents where the field value equals any value in the provided array. $nin matches documents where the field value is not in the array or the field does not exist. Example: User.find({ role: { $in: ['admin', 'moderator'] } }) returns all admins and moderators. User.find({ status: { $nin: ['banned', 'deleted'] } }) returns all users who are not banned or deleted. $in is also used to query arrays — it matches if any element of an array field is in the provided list.",
    category: "Query Operators",
    tags: ["mongodb", "operators"],
  },
  {
    id: "mongo-24",
    question: "What is the $exists operator in MongoDB?",
    answer:
      "$exists checks whether a field exists in a document. { field: { $exists: true } } matches documents that have the field (even if value is null). { field: { $exists: false } } matches documents that do not have the field at all. This is different from checking for null — a field can exist with a null value. Example: User.find({ phoneNumber: { $exists: true, $ne: null } }) finds users who have a non-null phone number.",
    category: "Query Operators",
    tags: ["mongodb", "operators"],
  },
  {
    id: "mongo-25",
    question: "What is $regex in MongoDB?",
    answer:
      "$regex matches documents where a string field matches a regular expression pattern. Example: User.find({ name: { $regex: 'ashish', $options: 'i' } }) — finds users whose name contains 'ashish' case-insensitively. Shorthand: User.find({ name: /ashish/i }). For search functionality: Product.find({ name: { $regex: searchTerm, $options: 'i' } }). Warning: $regex queries without a supporting index cause full collection scans. For production search, use text indexes or a dedicated search engine.",
    category: "Query Operators",
    tags: ["mongodb", "operators", "search"],
  },
  {
    id: "mongo-26",
    question: "What is $elemMatch in MongoDB?",
    answer:
      "$elemMatch matches documents where at least one element in an array field satisfies all specified conditions. Without it, each condition in a query is checked against different array elements. Example: scores array [{subject:'Math', score:90}, {subject:'English', score:50}]. { scores: { $elemMatch: { subject: 'Math', score: { $gt: 80 } } } } correctly matches only documents where the same element has both subject='Math' AND score>80. Without $elemMatch, conditions are evaluated across all elements independently.",
    category: "Query Operators",
    tags: ["mongodb", "operators", "arrays"],
  },
  {
    id: "mongo-27",
    question: "What are $push, $pull, and $addToSet for array updates?",
    answer:
      "$push adds an element to an array field. $pull removes all elements from an array that match a condition. $addToSet adds an element only if it doesn't already exist (preventing duplicates). Examples: add a tag — { $push: { tags: 'nodejs' } }. Remove a tag — { $pull: { tags: 'php' } }. Add unique tag — { $addToSet: { tags: 'mongodb' } }. Use $push with $each to add multiple elements at once: { $push: { tags: { $each: ['a','b','c'] } } }.",
    category: "Query Operators",
    tags: ["mongodb", "operators", "arrays"],
  },
  {
    id: "mongo-28",
    question: "What is the $inc operator in MongoDB?",
    answer:
      "$inc atomically increments a numeric field by a given amount. If the field doesn't exist, $inc creates it and sets it to the increment value. Use a negative number to decrement. Example: Post.updateOne({ _id: postId }, { $inc: { views: 1 } }) — safely increments the view counter. Post.updateOne({ _id: postId }, { $inc: { stock: -1 } }) — decrements stock. $inc is atomic at the document level, making it safe for concurrent updates without race conditions.",
    category: "Query Operators",
    tags: ["mongodb", "operators"],
  },
  {
    id: "mongo-29",
    question: "What is the $unset operator in MongoDB?",
    answer:
      "$unset removes a field from a document entirely. The field and its value are completely deleted. Example: User.updateOne({ _id: id }, { $unset: { temporaryToken: '' } }) — removes the temporaryToken field. The value you provide ('' or 1) doesn't matter — only the field key matters. This is different from $set: { field: null } which sets the field to null but keeps it. Use $unset when you want to completely remove a field from the document schema.",
    category: "Query Operators",
    tags: ["mongodb", "operators"],
  },
  {
    id: "mongo-30",
    question: "Difference between find({a:1, b:2}) and $and:[{a:1},{b:2}]?",
    answer:
      "Both produce the same result — they find documents where a equals 1 AND b equals 2. The implicit AND in { a:1, b:2 } is the shorthand. Explicit $and is only necessary when you need to apply multiple conditions on the same field that would conflict in a single object — for example, $and: [{ price: { $gt: 10 } }, { price: { $lt: 50 } }]. Writing { price: { $gt: 10, $lt: 50 } } achieves the same result in this case, but $and is required when using the same operator twice on the same field.",
    category: "Query Operators",
    tags: ["mongodb", "operators", "query"],
  },

  // ─── AGGREGATION PIPELINE ─────────────────────────────────────────────────
  {
    id: "mongo-31",
    question: "What is the aggregation pipeline in MongoDB?",
    answer:
      "The aggregation pipeline is a framework for data transformation and analysis. Data flows through a sequence of stages, each transforming the documents and passing results to the next stage — like Unix pipes. Each stage is a document with an operator key. Example: [{ $match: { active: true } }, { $group: { _id: '$role', count: { $sum: 1 } } }]. The pipeline is more powerful and flexible than simple find() queries and can perform grouping, reshaping, joining, counting, and statistical analysis.",
    category: "Aggregation Pipeline",
    tags: ["mongodb", "aggregation"],
  },
  {
    id: "mongo-32",
    question: "What is the $match stage in aggregation?",
    answer:
      "$match filters documents — exactly like find() but inside a pipeline. Place $match as early as possible to reduce the number of documents flowing through subsequent stages, improving performance. $match can use the same operators as find(). Example: { $match: { status: 'active', age: { $gte: 18 } } }. If $match is the first stage and the filter fields are indexed, MongoDB uses those indexes — it's the most important stage for pipeline performance.",
    category: "Aggregation Pipeline",
    tags: ["mongodb", "aggregation"],
  },
  {
    id: "mongo-33",
    question: "What is the $group stage? Write an example.",
    answer:
      "$group groups documents by a specified expression and computes aggregate values for each group. The _id field defines the grouping key. Example grouping orders by customer: { $group: { _id: '$customerId', totalOrders: { $sum: 1 }, totalSpent: { $sum: '$amount' }, avgOrder: { $avg: '$amount' } } }. Set _id to null to aggregate all documents into one: { $group: { _id: null, grandTotal: { $sum: '$amount' } } }. Accumulators: $sum, $avg, $min, $max, $push, $addToSet, $first, $last.",
    category: "Aggregation Pipeline",
    tags: ["mongodb", "aggregation"],
  },
  {
    id: "mongo-34",
    question: "What is the $project stage in aggregation?",
    answer:
      "$project reshapes documents — include/exclude fields (like projection in find), rename fields, and compute new fields using expressions. { $project: { fullName: { $concat: ['$firstName', ' ', '$lastName'] }, email: 1, _id: 0 } } creates a fullName field and includes email while excluding _id. You can use arithmetic ($add, $subtract, $multiply), string ($toUpper, $substr), date ($year, $month), and conditional ($cond, $ifNull) expressions. Unlike find projection, $project in aggregation can create new computed fields.",
    category: "Aggregation Pipeline",
    tags: ["mongodb", "aggregation"],
  },
  {
    id: "mongo-35",
    question: "What is $sort in aggregation?",
    answer:
      "$sort sorts documents in the pipeline. { $sort: { createdAt: -1, name: 1 } } sorts by createdAt descending, then name ascending. 1 = ascending, -1 = descending. Place $sort after $match and $group for best performance — sorting after filtering reduces the number of documents being sorted. If sorting on a field that has an index and $sort is early in the pipeline, MongoDB may use the index for sorting. Sorting large result sets in memory has a 100MB limit — add $limit before $sort to reduce memory usage when possible.",
    category: "Aggregation Pipeline",
    tags: ["mongodb", "aggregation"],
  },
  {
    id: "mongo-36",
    question: "What is $limit and $skip in aggregation?",
    answer:
      "$limit restricts the number of documents passing through: { $limit: 10 }. $skip skips a number of documents: { $skip: 20 }. Used together for pagination: [...matchStages, { $skip: (page-1)*pageSize }, { $limit: pageSize }]. Best practice: place $match first to reduce the document count, then $skip and $limit. For large collections, $skip is inefficient at high page numbers because MongoDB must traverse all skipped documents. Consider cursor-based pagination using $match: { _id: { $gt: lastId } } for better performance.",
    category: "Aggregation Pipeline",
    tags: ["mongodb", "aggregation", "pagination"],
  },
  {
    id: "mongo-37",
    question: "What is $lookup? How is it like a JOIN?",
    answer:
      "$lookup performs a left outer join with another collection. It fetches documents from a foreign collection and embeds them as an array field. Example: join orders with users — { $lookup: { from: 'users', localField: 'userId', foreignField: '_id', as: 'userInfo' } }. This adds a userInfo array to each order document containing the matching user(s). Unlike SQL JOINs, $lookup always returns an array (empty if no match). $lookup works best when an index exists on the foreign collection's join field. Use { $unwind: '$userInfo' } to flatten the array if you expect a single match.",
    category: "Aggregation Pipeline",
    tags: ["mongodb", "aggregation", "lookup"],
  },
  {
    id: "mongo-38",
    question: "What is $unwind in MongoDB?",
    answer:
      "$unwind deconstructs an array field, outputting one document per array element. Example: a post with tags: ['nodejs', 'mongodb', 'backend'] becomes three separate documents, each with one tag value. This is useful before $group to aggregate on array values — to count how many posts have each tag. If the array is empty or the field doesn't exist, $unwind by default removes the document. Set { preserveNullAndEmptyArrays: true } to keep documents with empty/missing arrays.",
    category: "Aggregation Pipeline",
    tags: ["mongodb", "aggregation"],
  },
  {
    id: "mongo-39",
    question: "What is $addFields in aggregation?",
    answer:
      "$addFields adds new fields to documents without removing existing ones — unlike $project which requires you to explicitly include fields you want to keep. Example: { $addFields: { fullName: { $concat: ['$firstName', ' ', '$lastName'] }, isAdult: { $gte: ['$age', 18] } } } adds fullName and isAdult to each document while preserving all existing fields. Think of $addFields as 'enrich these documents with computed fields', and $project as 'reshape these documents, keeping only what I specify'.",
    category: "Aggregation Pipeline",
    tags: ["mongodb", "aggregation"],
  },
  {
    id: "mongo-40",
    question:
      "What is the difference between $lookup and populate() in Mongoose?",
    answer:
      "$lookup is a native MongoDB aggregation stage that runs entirely in the database — one network round trip, highly efficient. populate() in Mongoose runs at the application level — it makes a second query to MongoDB and merges the results in JavaScript. For simple cases populate() is more developer-friendly. For complex aggregations involving multiple stages or when performance matters, use $lookup inside an aggregate pipeline. populate() with large datasets can cause significant overhead because it runs separate queries.",
    category: "Aggregation Pipeline",
    tags: ["mongodb", "aggregation", "mongoose"],
  },
  {
    id: "mongo-41",
    question: "How do you implement pagination using aggregation?",
    answer:
      "Use $facet to get both data and count in one pipeline: [{ $match: filter }, { $facet: { data: [{ $sort: { createdAt: -1 } }, { $skip: (page-1)*limit }, { $limit: limit }], total: [{ $count: 'count' }] } }]. This returns { data: [...], total: [{ count: 50 }] } in a single query. Alternatively use two separate queries — one for data and one for countDocuments(). Always include $sort before $skip for consistent pagination. Add $project last to return only needed fields.",
    category: "Aggregation Pipeline",
    tags: ["mongodb", "aggregation", "pagination"],
  },
  {
    id: "mongo-42",
    question: "How do you count documents in MongoDB aggregation?",
    answer:
      "$count adds a new stage that returns a single document with the count of documents that reached that stage. Example: [{ $match: { active: true } }, { $count: 'activeUsers' }] returns { activeUsers: 42 }. Alternative using $group: [{ $match: filter }, { $group: { _id: null, total: { $sum: 1 } } }]. For simple counts without aggregation, countDocuments(filter) is easier and faster. estimatedDocumentCount() uses collection metadata for a very fast approximate count of all documents.",
    category: "Aggregation Pipeline",
    tags: ["mongodb", "aggregation", "count"],
  },

  // ─── INDEXES IN MONGODB ───────────────────────────────────────────────────
  {
    id: "mongo-43",
    question: "What is an index in MongoDB?",
    answer:
      "An index is a data structure that improves query performance by allowing MongoDB to locate documents without scanning the entire collection. Without an index, MongoDB does a collection scan — examining every document. With an index, MongoDB traverses a B-tree to find matching documents in O(log n). Indexes are created with: db.users.createIndex({ email: 1 }) or in Mongoose: userSchema.index({ email: 1 }). MongoDB automatically creates an index on _id. All other indexes must be created explicitly.",
    category: "Indexes in MongoDB",
    tags: ["mongodb", "indexes", "performance"],
  },
  {
    id: "mongo-44",
    question: "What is a single field index in MongoDB?",
    answer:
      "A single field index covers one field. { email: 1 } creates an ascending index, { createdAt: -1 } creates a descending index. For single field indexes, direction (1 or -1) doesn't matter for individual equality queries but does matter for sort operations. Single field indexes support equality queries, range queries, sorting, and covered queries (when all queried fields are in the index). Create in Mongoose: userSchema.index({ email: 1 }, { unique: true }). Adding sparse: true makes the index ignore documents where the field doesn't exist.",
    category: "Indexes in MongoDB",
    tags: ["mongodb", "indexes"],
  },
  {
    id: "mongo-45",
    question: "What is a compound index in MongoDB?",
    answer:
      "A compound index covers multiple fields — { lastName: 1, firstName: 1, age: -1 }. Like MySQL's composite index, it follows the Equality, Sort, Range (ESR) rule for optimal field ordering: equality fields first, sort fields second, range fields last. The index supports queries on the prefix of the fields in order — { lastName } or { lastName, firstName } can use this index, but { firstName } alone cannot. Compound indexes can also satisfy sort operations if the sort matches the index order.",
    category: "Indexes in MongoDB",
    tags: ["mongodb", "indexes"],
  },
  {
    id: "mongo-46",
    question: "What is a text index in MongoDB? How do you search with it?",
    answer:
      "A text index tokenises string fields for full-text search. Create one: db.posts.createIndex({ title: 'text', content: 'text' }). One collection can have only one text index, but it can cover multiple fields. Search with $text: { $search: 'nodejs express' }. This matches documents containing either word. Use quotes for exact phrases: { $search: '\"nodejs backend\"' }. Prefix a minus for exclusion: { $search: 'nodejs -php' }. Sort by relevance score: { $meta: 'textScore' }. For production-grade search, Elasticsearch provides more features.",
    category: "Indexes in MongoDB",
    tags: ["mongodb", "indexes", "search"],
  },
  {
    id: "mongo-47",
    question: "What is a TTL index in MongoDB?",
    answer:
      "A TTL (Time To Live) index automatically deletes documents after a specified time period. Created on a Date field: db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 }) — documents are deleted approximately 1 hour after the createdAt date. MongoDB runs a background task every 60 seconds to delete expired documents (so deletion is approximate, not exact to the second). Perfect use cases: session management, OTP/verification tokens, temporary data, or any time-expiring content. No application code needed for cleanup.",
    category: "Indexes in MongoDB",
    tags: ["mongodb", "indexes", "ttl"],
  },
  {
    id: "mongo-48",
    question: "What is a sparse index in MongoDB?",
    answer:
      "A sparse index only includes documents that have the indexed field — documents missing the field are not indexed at all. This is useful for optional fields that only exist on some documents. Example: userSchema.index({ githubId: 1 }, { unique: true, sparse: true }) — only users who have a githubId are indexed, avoiding unique constraint violations for users without it. Without sparse, a unique index would reject multiple documents missing the field because they'd all have 'undefined' as the value, violating uniqueness.",
    category: "Indexes in MongoDB",
    tags: ["mongodb", "indexes"],
  },
  {
    id: "mongo-49",
    question: "What is explain() in MongoDB? What do you look for?",
    answer:
      "explain() shows the execution plan for a query. db.users.find({ email: 'x@y.com' }).explain('executionStats'). Key things to check: 'winningPlan.stage' — COLLSCAN means full collection scan (bad), IXSCAN means index scan (good). 'totalDocsExamined' — should be close to the number of results returned. 'nReturned' — documents returned. 'executionTimeMillis' — query execution time. If totalDocsExamined >> nReturned, the query is inefficient and likely needs an index. In Mongoose: await User.find({ email: 'x' }).explain('executionStats').",
    category: "Indexes in MongoDB",
    tags: ["mongodb", "indexes", "performance"],
  },
  {
    id: "mongo-50",
    question: "What is a covered query in MongoDB?",
    answer:
      "A covered query is one where all fields in the query (filter, sort, and projection) are part of an index — MongoDB can satisfy the query entirely from the index without reading the actual documents. This is the fastest type of query. Example: with index { email: 1, name: 1 }, the query db.users.find({ email: 'x@y.com' }, { email: 1, name: 1, _id: 0 }) is covered — every needed field is in the index. Check with explain() — look for 'PROJECTION_COVERED' in the winning plan stage.",
    category: "Indexes in MongoDB",
    tags: ["mongodb", "indexes", "performance"],
  },

  // ─── MONGOOSE ────────────────────────────────────────────────────────────
  {
    id: "mongo-51",
    question: "What is Mongoose?",
    answer:
      "Mongoose is an Object Document Mapper (ODM) for MongoDB in Node.js. It provides a schema layer on top of MongoDB's flexible document model, adding validation, type casting, middleware (pre/post hooks), relationship handling via populate(), and a rich query API. While the native MongoDB driver gives direct access to the database, Mongoose improves developer experience with structured models, automatic validation, and cleaner query syntax. It is the most widely used MongoDB library in Node.js applications.",
    category: "Mongoose",
    tags: ["mongoose", "mongodb"],
  },
  {
    id: "mongo-52",
    question: "What is a Mongoose Schema?",
    answer:
      "A Mongoose Schema defines the structure of documents in a collection — field names, types, validations, defaults, and indexes. It does not interact with the database directly; it is a blueprint. Example: const userSchema = new mongoose.Schema({ name: { type: String, required: true }, email: { type: String, required: true, unique: true }, age: { type: Number, min: 0 }, createdAt: { type: Date, default: Date.now } }). You then create a Model from the schema to perform database operations.",
    category: "Mongoose",
    tags: ["mongoose", "schema"],
  },
  {
    id: "mongo-53",
    question: "What is a Mongoose Model?",
    answer:
      "A Mongoose Model is a class created from a Schema that provides an interface to interact with a MongoDB collection. const User = mongoose.model('User', userSchema) creates a User model mapped to the 'users' collection (Mongoose pluralises and lowercases the model name). The model provides all CRUD methods: User.create(), User.find(), User.findById(), User.updateOne(), User.deleteOne(), and more. Models are the primary way you interact with MongoDB data in a Mongoose application.",
    category: "Mongoose",
    tags: ["mongoose", "model"],
  },
  {
    id: "mongo-54",
    question: "What are SchemaTypes in Mongoose?",
    answer:
      "SchemaTypes define the type and behaviour of individual fields. Core SchemaTypes: String, Number, Date, Boolean, Buffer, ObjectId (mongoose.Schema.Types.ObjectId), Array, Map, Mixed (any type). Example: { name: String, age: Number, verified: { type: Boolean, default: false }, userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } }. Each SchemaType has specific options — String has minlength, maxlength, match (regex), enum. Number has min, max. All types support required, default, index, unique, and sparse.",
    category: "Mongoose",
    tags: ["mongoose", "schema"],
  },
  {
    id: "mongo-55",
    question: "What are validators in Mongoose?",
    answer:
      "Validators enforce rules on field values before saving. Built-in validators: required (field must exist), min/max (for numbers), minlength/maxlength (for strings), enum (value must be one of a list), match (string must match regex). Custom validator: { type: String, validate: { validator: v => v.includes('@'), message: 'Invalid email' } }. Validators run on save() and create() by default. For updates, you must pass { runValidators: true } option: User.updateOne(filter, update, { runValidators: true }). Validation errors throw a ValidationError with details on which fields failed.",
    category: "Mongoose",
    tags: ["mongoose", "validation"],
  },
  {
    id: "mongo-56",
    question: "What are Mongoose middleware (pre/post hooks)?",
    answer:
      "Mongoose middleware (hooks) are functions that run automatically before or after specific model operations. Types: document middleware (save, validate, remove, init) and query middleware (find, findOne, update, delete). Pre hook: userSchema.pre('save', async function() { if (this.isModified('password')) this.password = await bcrypt.hash(this.password, 10); }) — automatically hashes password before saving. Post hook: userSchema.post('save', function(doc) { console.log('Saved:', doc._id) }). In pre hooks, 'this' refers to the document (document middleware) or the query (query middleware).",
    category: "Mongoose",
    tags: ["mongoose", "middleware", "hooks"],
  },
  {
    id: "mongo-57",
    question: "What is populate() in Mongoose?",
    answer:
      "populate() replaces ObjectId references in a document with the actual documents from the referenced collection. If a Post schema has author: { type: ObjectId, ref: 'User' }, calling Post.findById(id).populate('author') automatically fetches and embeds the User document where author was just an ID. You can chain multiple populates, select specific fields: .populate('author', 'name email -_id'), and deeply populate nested references: .populate({ path: 'author', populate: { path: 'company' } }). Under the hood, populate() makes a second query — use $lookup in aggregation for a single-query alternative.",
    category: "Mongoose",
    tags: ["mongoose", "populate", "relationships"],
  },
  {
    id: "mongo-58",
    question:
      "What is the difference between .lean() and a normal Mongoose query?",
    answer:
      "A normal Mongoose query returns Mongoose Document instances — full objects with all Mongoose features: virtuals, methods, getters/setters, tracking for dirty changes, and the ability to call .save(). .lean() returns plain JavaScript objects — just the raw data from MongoDB with no Mongoose overhead. .lean() queries are 3-4x faster and use much less memory because they skip Mongoose document instantiation. Use .lean() for read-only queries where you only need the data: User.find({}).lean(). Don't use .lean() when you need to call .save(), access virtuals, or use Mongoose instance methods.",
    category: "Mongoose",
    tags: ["mongoose", "performance", "lean"],
  },
  {
    id: "mongo-59",
    question: "What are virtual fields in Mongoose?",
    answer:
      "Virtuals are document properties that are computed but not stored in MongoDB. They exist only in application memory. Example: userSchema.virtual('fullName').get(function() { return this.firstName + ' ' + this.lastName; }). Now user.fullName works but is not stored in the database. Virtuals are not included in toJSON() or toObject() by default — enable with { virtuals: true }. A common virtual is the id string alias for _id. Virtuals can also have setters: .set(function(name) { [this.firstName, this.lastName] = name.split(' '); }).",
    category: "Mongoose",
    tags: ["mongoose", "virtuals"],
  },
  {
    id: "mongo-60",
    question: "What is the difference between save() and findByIdAndUpdate()?",
    answer:
      "save() works on a Mongoose document instance — it runs all validators and pre/post hooks. You first fetch the document, modify it, then save: const user = await User.findById(id); user.name = 'New'; await user.save(). findByIdAndUpdate() sends the update directly to the database without running validators (unless { runValidators: true } is passed) and skips pre/post save hooks. It returns the old document by default — use { new: true } to return the updated document. Use save() when you need validation and hooks. Use findByIdAndUpdate() for quick partial updates in APIs.",
    category: "Mongoose",
    tags: ["mongoose", "update"],
  },
  {
    id: "mongo-61",
    question: "What is a Mongoose plugin?",
    answer:
      "A Mongoose plugin adds reusable schema-level functionality that you can apply to multiple schemas. Example: a timestamps plugin that adds createdAt and updatedAt to every schema. mongoose.plugin(timestampPlugin) applies it globally. Or per-schema: userSchema.plugin(softDeletePlugin). Popular plugins: mongoose-paginate-v2 (adds pagination methods), mongoose-autopopulate (auto-populates references), mongoose-delete (soft delete functionality). Mongoose's built-in timestamps option — new Schema({...}, { timestamps: true }) — automatically adds createdAt and updatedAt fields.",
    category: "Mongoose",
    tags: ["mongoose", "plugins"],
  },
  {
    id: "mongo-62",
    question: "How do you handle validation errors in Mongoose?",
    answer:
      "When validation fails, Mongoose throws a ValidationError containing an errors object with details for each failed field. Catch it with try/catch: try { await user.save() } catch (err) { if (err.name === 'ValidationError') { const messages = Object.values(err.errors).map(e => e.message); res.status(400).json({ errors: messages }); } }. For duplicate key errors (unique constraint), catch error code 11000: if (err.code === 11000) res.status(409).json({ message: 'Email already exists' }). Always distinguish between validation errors (400) and duplicate key errors (409).",
    category: "Mongoose",
    tags: ["mongoose", "validation", "error-handling"],
  },

  // ─── ADVANCED MONGODB ─────────────────────────────────────────────────────
  {
    id: "mongo-63",
    question: "What are MongoDB transactions? When do you need them?",
    answer:
      "MongoDB transactions allow multiple operations across multiple documents or collections to be executed atomically — all succeed or all fail together (ACID properties). Available since MongoDB 4.0 with replica sets and 4.2 with sharded clusters. In Mongoose: const session = await mongoose.startSession(); session.startTransaction(); try { await Op1({ session }); await Op2({ session }); await session.commitTransaction(); } catch { await session.abortTransaction(); }. Use transactions when multiple documents must be updated consistently — like transferring credits between accounts or creating an order and updating inventory simultaneously.",
    category: "Advanced MongoDB",
    tags: ["mongodb", "transactions"],
  },
  {
    id: "mongo-64",
    question: "What is a replica set in MongoDB?",
    answer:
      "A replica set is a group of MongoDB servers that maintain the same dataset. It consists of one primary node (accepts all writes) and one or more secondary nodes (replicate data from primary). If the primary fails, an automatic election promotes a secondary to primary (failover takes 10-30 seconds). Benefits: high availability through automatic failover, read scaling by directing reads to secondaries, and data redundancy. MongoDB Atlas manages replica sets automatically. Minimum recommended replica set: 3 nodes (1 primary, 2 secondaries). Multi-document transactions require a replica set.",
    category: "Advanced MongoDB",
    tags: ["mongodb", "replication", "high-availability"],
  },
  {
    id: "mongo-65",
    question: "What is sharding in MongoDB?",
    answer:
      "Sharding horizontally distributes data across multiple servers (shards) to handle datasets and throughput that exceed a single server's capacity. A shard key determines how data is distributed — documents with similar shard key values go to the same shard. Shard key choice is critical: a poor choice (like status with few values) creates hotspots. A good choice (like user_id) distributes evenly. Sharded clusters have shards (data storage), mongos routers (query routing), and config servers (cluster metadata). Sharding adds operational complexity — most apps don't need it.",
    category: "Advanced MongoDB",
    tags: ["mongodb", "sharding", "scaling"],
  },
  {
    id: "mongo-66",
    question: "What is the difference between horizontal and vertical scaling?",
    answer:
      "Vertical scaling means upgrading the existing server — more CPU, more RAM, faster SSD. It is simple but has limits and is expensive at high tiers. Horizontal scaling means adding more servers and distributing the load. MongoDB is designed for horizontal scaling through sharding (write scaling) and replica sets with read preferences (read scaling). SQL databases traditionally scale vertically, while NoSQL databases like MongoDB are built to scale horizontally. In practice, most applications scale vertically first and only move to horizontal scaling when needed.",
    category: "Advanced MongoDB",
    tags: ["mongodb", "scaling"],
  },
  {
    id: "mongo-67",
    question: "What is MongoDB Atlas?",
    answer:
      "MongoDB Atlas is MongoDB's fully managed cloud database service. It handles deployment, scaling, backups, monitoring, and security automatically across AWS, Google Cloud, and Azure. Features: automated backups with point-in-time recovery, performance advisor (suggests indexes), real-time performance monitoring, Atlas Search (Lucene-powered full-text search), Atlas Data API (HTTP access without driver), and serverless instances. Atlas eliminates the need to manage MongoDB infrastructure — ideal for most production applications. The free tier (M0) is available for development.",
    category: "Advanced MongoDB",
    tags: ["mongodb", "atlas", "cloud"],
  },
  {
    id: "mongo-68",
    question: "What is the CAP theorem? Where does MongoDB sit?",
    answer:
      "The CAP theorem states that a distributed database can guarantee only 2 of 3 properties: Consistency (all nodes return the same data), Availability (every request gets a response), and Partition tolerance (system continues despite network failures). Partition tolerance is unavoidable in distributed systems, so the real choice is between Consistency and Availability. MongoDB is CP by default — during a partition, it prioritises consistency over availability (the system may reject reads/writes rather than return stale data). You can tune it toward AP by changing read/write concerns to allow stale reads.",
    category: "Advanced MongoDB",
    tags: ["mongodb", "cap-theorem", "distributed"],
  },
  {
    id: "mongo-69",
    question: "What is eventual consistency?",
    answer:
      "Eventual consistency means that if no new updates are made, all replicas will eventually converge to the same value — but at any given moment, different nodes may return different data. MongoDB's secondary nodes are eventually consistent by default — they lag slightly behind the primary. If you read from a secondary immediately after a write to the primary, you might get stale data. To get strongly consistent reads in MongoDB, direct reads to the primary using readPreference: 'primary'. This is a trade-off: eventual consistency allows lower latency reads from nearby replicas.",
    category: "Advanced MongoDB",
    tags: ["mongodb", "consistency", "replication"],
  },
  {
    id: "mongo-70",
    question: "How do you implement full-text search in MongoDB?",
    answer:
      "Option 1 — Text indexes: create a text index on fields to search, then use $text: { $search: 'keyword' }. Simple and built-in but limited — no fuzzy matching, no relevance tuning, no facets. Option 2 — $regex: { name: { $regex: /keyword/i } } — flexible but causes collection scans without a supporting index. Option 3 — Atlas Search (MongoDB Atlas only): Lucene-powered search with fuzzy matching, autocomplete, facets, and relevance scoring. Option 4 — Elasticsearch: sync MongoDB data to Elasticsearch for advanced search needs. For simple keyword matching, text indexes work well. For production search features, Atlas Search or Elasticsearch are more powerful.",
    category: "Advanced MongoDB",
    tags: ["mongodb", "search", "full-text"],
  },
];

export default mongoQuestions;
