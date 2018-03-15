DELETE FROM items 
WHERE id = $1;

UPDATE bins 
SET has_items = null
WHERE id = $1, $2, $3, $4, $5;