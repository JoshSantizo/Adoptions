import { PartialType } from "@nestjs/swagger";
import CreateUserDto from "./create-user.dto";
import { IsEmail, IsOptional, IsString } from "class-validator";

class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional()
    @IsString()
    name: string;
  
    @IsOptional()
    @IsString()
    lastname: string;
  
    @IsOptional()
    @IsEmail()
    email: string;
  
    @IsOptional()
    @IsString()
    address: string;
  }
  
  export default UpdateUserDto;