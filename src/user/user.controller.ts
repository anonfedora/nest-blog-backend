import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Delete,
    Put,
    UseGuards,
    Query,
    UseInterceptors,
    UploadedFile,
    Request,
    Res
} from "@nestjs/common";
import { UserService } from "../user.service";
import { User, UserRole } from "../models/user.interface";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { hasRoles } from "src/auth/decorators/roles.decorator";
import { JwtAuthGuard } from "src/auth/guards/jwt-guard";
import { RolesGuard } from "src/auth/guards/roles.guard";
import { Pagination } from "nestjs-typeorm-paginate";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { v4 as uuidv4 } from "uuid";
import path = require("path");
import { join } from "path";
import { UserIsUserGuard } from "src/auth/guards/UserIsUser.guard";

export const storage = {
    storage: diskStorage({
        destination: './uploads/profileimages',
        filename: (req, file, cb) => {
            const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
            const extension: string = path.parse(file.originalname).ext;

            cb(null, `${filename}${extension}`)
        }
    })
}

@Controller("user")
export class UserController {
  constructor(private userService: UserService){}
  
  @Post()
  
}
