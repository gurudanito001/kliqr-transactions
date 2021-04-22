CREATE DATABASE kliqr_transactions;

--\c into todo_database

CREATE TABLE transactions(
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    amount FLOAT,
    type TEXT,
    date_time VARCHAR,
    category TEXT,
    icon_url  VARCHAR
);

COPY users(id, user_id first_name, last_name, avatar, created_at)
FROM 'C:\Users\danielnwokocha\Desktop\Projects\kliqr_users.csv'
DELIMITER ','
CSV HEADER;