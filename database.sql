-- Example table
CREATE TABLE "example_table" (
	"id" SERIAL primary key,
	"name" VARCHAR(25) not null,
	"number" integer
);

-- Query text to populate main database table
INSERT INTO "example_table"
	("name", "number")
VALUES
	('one', 1),
	('two', 2),
	('three', 3),
	('four', 4),
	('five', 5);