import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogEntryEntity } from "./model/blog-entry.entity";
import { AuthModule } from "src/auth/auth.module";
import { UserModule } from "src/user/user.module";
import { BlogController } from "./blog.controller";
import { BlogService } from "./blog.service";

@Module({
    imports: [
        AuthModule,
        UserModule,
        TypeOrmModule.forFeature([BlogEntryEntity])
    ],
    controllers: [BlogController],
    providers: [BlogService]
})
export class BlogModule {}
