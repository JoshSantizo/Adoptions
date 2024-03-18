import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDatabase1710732585250 implements MigrationInterface {
    name = 'InitDatabase1710732585250'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."dogs_genero_enum" AS ENUM('1', '0')`);
        await queryRunner.query(`CREATE TABLE "dogs" ("id" SERIAL NOT NULL, "raza" character varying(255) NOT NULL, "nombre" character varying(255) NOT NULL, "edad" integer NOT NULL, "peso" integer NOT NULL, "genero" "public"."dogs_genero_enum" NOT NULL, "userId" integer, CONSTRAINT "PK_c0911b1d44db6cdd303c6d6afc9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "lastname" character varying(255) NOT NULL DEFAULT '', "email" character varying NOT NULL, "address" character varying, "password" character varying NOT NULL DEFAULT '', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "dogs" ADD CONSTRAINT "FK_6cdfbacf87ca53fdfabdf92a693" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dogs" DROP CONSTRAINT "FK_6cdfbacf87ca53fdfabdf92a693"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "dogs"`);
        await queryRunner.query(`DROP TYPE "public"."dogs_genero_enum"`);
    }

}
