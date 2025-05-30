CREATE LOGIN auth_user WITH PASSWORD = 'Andi4frc3@';
CREATE DATABASE auth_db;
GO
USE auth_db;
CREATE USER auth_user FOR LOGIN auth_user;
ALTER ROLE db_owner ADD MEMBER auth_user;
