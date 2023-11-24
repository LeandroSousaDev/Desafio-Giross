create database desafio_giross;

create table usuarios (
  id serial primary key,
  nome text not null,
  email text not null,
  senha text not null
  );
  