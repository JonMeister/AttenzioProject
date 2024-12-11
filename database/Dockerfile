FROM postgres:14
COPY ./db/schema.sql /docker-entrypoint-initdb.d/01_schema.sql
COPY ./db/data.sql /docker-entrypoint-initdb.d/02_data.sql


