import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { BlogController } from './blog/blog.controller';
import { BlogService } from './blog/blog.service';
import { BlogModule } from './blog/blog.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb'), 
    ProductModule, UserModule, BlogModule, AuthModule],
  controllers: [AppController, BlogController],
  providers: [AppService, UserService, BlogService, AuthService],
})
export class AppModule {}
