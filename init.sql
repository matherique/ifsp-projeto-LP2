\connect todoapp

create table if not exists usuarios (
  id serial not null primary key,
  nome varchar(100) not null,
  email varchar(50) not null, 
  senha varchar(64) not null,
  UNIQUE(email),
);

create table if not exists tarefa (
  id serial not null primary key,
  nome varchar(50) not null,
  data timestamp not null,
  status boolean not null default false,
  usuario_id integer not null references usuario (id),
  createdAt timestamp not null default CURRENT_TIMESTAMP,
  udaptedAt timestamp not null default CURRENT_TIMESTAMP,
);

create table if not exists projeto (
  id serial not null primary key,
  nome varchar(100) not null,
  cor varchar(7) not null,
  usuario_id integer not null references usuario (id),
  createdAt timestamp not null default CURRENT_TIMESTAMP,
  udaptedAt timestamp not null default CURRENT_TIMESTAMP,
);

create table if not exists etiqueta (
  id serial not null primary key ,
  nome varchar(50) not null,
  cor varchar(7) not null,
  usuario_id integer not null references usuario (id),
  createdAt timestamp not null default CURRENT_TIMESTAMP,
  udaptedAt timestamp not null default CURRENT_TIMESTAMP,
);

create table if not exists tarefa_projeto (
  id serial not null primary key,
  tarefa_id integer not null references tarefa (id),
  projeto_id integer not null references projeto (id),
  createdAt timestamp not null default CURRENT_TIMESTAMP,
  udaptedAt timestamp not null default CURRENT_TIMESTAMP,
);

create table if not exists etiqueta_tarefa (
  id serial not null primary key,
  tarefa_id integer not null references tarefa (id),
  etiqueta_id integer not null references etiqueta (id),
  createdAt timestamp not null default CURRENT_TIMESTAMP,
  udaptedAt timestamp not null default CURRENT_TIMESTAMP,
);


-- script database
