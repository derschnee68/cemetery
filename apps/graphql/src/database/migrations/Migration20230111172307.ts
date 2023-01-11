import { Migration } from '@mikro-orm/migrations';

export class Migration20230111172307 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table `cemetery` (`id` varchar(36) not null, `name` varchar(255) not null, `address` varchar(255) not null, `archived` boolean not null default false, primary key (`id`)) default character set utf8mb4 engine = InnoDB;',
    );

    this.addSql(
      'create table `grave` (`id` varchar(36) not null, `cemetery_id` varchar(36) not null, `archived` boolean not null default false, `created_at` datetime not null, `updated_at` datetime not null, primary key (`id`)) default character set utf8mb4 engine = InnoDB;',
    );
    this.addSql(
      'alter table `grave` add index `grave_cemetery_id_index`(`cemetery_id`);',
    );

    this.addSql(
      'create table `deceased` (`id` varchar(36) not null, `first_name` varchar(255) not null, `last_name` varchar(255) not null, `grave_id` varchar(36) null, `archived` boolean not null default false, `created_at` datetime not null, `updated_at` datetime not null, primary key (`id`)) default character set utf8mb4 engine = InnoDB;',
    );
    this.addSql(
      'alter table `deceased` add index `deceased_grave_id_index`(`grave_id`);',
    );

    this.addSql(
      'create table `plot` (`id` varchar(36) not null, `start` datetime null, `end` datetime null, `price` json null, `grave_id` varchar(36) not null, `deceased_id` varchar(36) not null, `archived` boolean not null default false, `created_at` datetime not null, `updated_at` datetime not null, primary key (`id`)) default character set utf8mb4 engine = InnoDB;',
    );
    this.addSql(
      'alter table `plot` add index `plot_grave_id_index`(`grave_id`);',
    );
    this.addSql(
      'alter table `plot` add index `plot_deceased_id_index`(`deceased_id`);',
    );

    this.addSql(
      'create table `user` (`id` varchar(36) not null, `email` varchar(255) not null, `password` varchar(255) not null, `created_at` datetime not null, `updated_at` datetime not null, `verified_at` datetime null, primary key (`id`)) default character set utf8mb4 engine = InnoDB;',
    );
    this.addSql('alter table `user` add unique `user_email_unique`(`email`);');

    this.addSql(
      'alter table `grave` add constraint `grave_cemetery_id_foreign` foreign key (`cemetery_id`) references `cemetery` (`id`) on update cascade;',
    );

    this.addSql(
      'alter table `deceased` add constraint `deceased_grave_id_foreign` foreign key (`grave_id`) references `grave` (`id`) on update cascade on delete set null;',
    );

    this.addSql(
      'alter table `plot` add constraint `plot_grave_id_foreign` foreign key (`grave_id`) references `grave` (`id`) on update cascade;',
    );
    this.addSql(
      'alter table `plot` add constraint `plot_deceased_id_foreign` foreign key (`deceased_id`) references `deceased` (`id`) on update cascade;',
    );
  }

  async down(): Promise<void> {
    this.addSql(
      'alter table `grave` drop foreign key `grave_cemetery_id_foreign`;',
    );

    this.addSql(
      'alter table `deceased` drop foreign key `deceased_grave_id_foreign`;',
    );

    this.addSql('alter table `plot` drop foreign key `plot_grave_id_foreign`;');

    this.addSql(
      'alter table `plot` drop foreign key `plot_deceased_id_foreign`;',
    );

    this.addSql('drop table if exists `cemetery`;');

    this.addSql('drop table if exists `grave`;');

    this.addSql('drop table if exists `deceased`;');

    this.addSql('drop table if exists `plot`;');

    this.addSql('drop table if exists `user`;');
  }
}
