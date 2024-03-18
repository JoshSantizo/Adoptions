import { ApiProperty } from "@nestjs/swagger";
import Dog from "src/dogs/entities/dog.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty({
    description: 'The name of the User',
    example: 'John',
  })
  name: string;

  @Column({ type: 'varchar', length: 255, default: '' })
  @ApiProperty()
  lastname: string;

  @Column({ type: 'varchar' })
  @ApiProperty()
  email: string;

  @Column({ type: 'varchar', nullable: true })
  address?: string;

  @OneToMany(() => Dog, (dog) => dog.user)
  dogs: Dog[];

  @Column({ type: 'varchar', default: '' })
  password: string;

}

export default User;