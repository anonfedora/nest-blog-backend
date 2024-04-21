import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./models/user.entity";
import { Repository, Like } from "typeorm";
import { User, UserRole } from "./models/user.interface";
import { Observable, from, throwError } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { AuthService } from "src/auth/auth.service";
import {
    paginate,
    Pagination,
    IPaginationOptions
} from "nestjs-typeorm-paginate";

@Injectable()
export class UserService {}
