import {
    Controller,
    Post,
    Body,
    Request,
    UseGuards,
    Get,
    Query,
    Param,
    Delete,
    Put,
    UseInterceptors,
    UploadedFile,
    Res
} from "@nestjs/common";
import { BlogService } from "../service/blog.service";
import { Observable, of } from "rxjs";
import { BlogEntry } from "../model/blog-entry.interface";
import { JwtAuthGuard } from "src/auth/guards/jwt-guard";
import { BlogEntryEntity } from "../model/blog-entry.entity";
import { UserIsAuthorGuard } from "../guards/user-is-author.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { v4 as uuidv4 } from "uuid";
import path = require("path");
import { Image } from "../model/Image.interface";
import { join } from "path";
export const BLOG_ENTRIES_URL = "http://localhost:3000/api/blog-entries";

export const storage = {
    storage: diskStorage({
        destination: "./uploads/blog-entry-images",
        filename: (req, file, cb) => {
            const filename: string =
                path.parse(file.originalname).name.replace(/\s/g, "") +
                uuidv4();
            const extension: string = path.parse(file.originalname).ext;

            cb(null, `${filename}${extension}`);
        }
    })
};

@Controller("blog-entries")
export class BlogController {
    constructor(private blogService: BlogService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(
        @Body() blogEntry: BlogEntry,
        @Request() req
    ): Observable<BlogEntry> {
        const user = req.user;
        return this.blogService.create(user, blogEntry);
    }

    @Query("")
    index(@Query("page") page: number = 1, @Query("limit") limit: number = 10) {
        limit = limit > 100 ? 100 : limit;

        return this.blogService.paginateAll({
            limit: Number(limit),
            page: Number(page),
            route: BLOG_ENTRIES_URL
        });
    }
}
