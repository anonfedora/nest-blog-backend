import { Injectable } from "@nestjs/common";
import { Observable, of, from } from "rxjs";
import { BlogEntry } from "../model/blog-entry.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { BlogEntryEntity } from "../model/blog-entry.entity";
import { Repository } from "typeorm";
import { UserService } from "src/user/user.service";
import { User } from "src/user/models/user.interface";
import { switchMap, map, tap } from "rxjs/operators";
import {
    Pagination,
    IPaginationOptions,
    paginate
} from "nestjs-typeorm-paginate";
const slugify = require("slugify");

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(BlogEntryEntity)
        private readonly blogRepository: Repository<BlogEntryEntity>,
        private userService: UserService
    ) {}
}
