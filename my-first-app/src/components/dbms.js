9423077963
+-----------+-------------+-----------+----------+-------+------------+
| productID | productCode | name      | quantity | price | supplierID |
+-----------+-------------+-----------+----------+-------+------------+
|      2001 | PEC         | Pencil 3B |      500 |  0.52 |        501 |
|      2002 | PEC         | Pencil 4B |      200 |  0.62 |        501 |
|      2003 | PEC         | Pencil 5B |      100 |  0.73 |        501 |
|      2004 | PEC         | Pencil 6B |      500 |  0.47 |        502 |
+-----------+-------------+-----------+----------+-------+------------+
SELECT with JOIN
SELECT command can be used to query and join data from two related tables. For example, to list the product's name (in products table) and supplier's name (in suppliers table), we could join the two table via the two common supplierID columns: