import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable, from, of } from "rxjs";
import { User } from "src/user/models/user.interface";
import bcrypt from "bcryptjs";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    generateJWT(user: User): Observable<string> {
        return from(this.jwtService.signAsync({ user }));
    }

    hashPassword(password: string): Observable<string> {
        return from<string>(bcrypt.hash(password, 12));
    }

    comparePasswords(
        newPassword: string,
        passwordHash: string
    ): Observable<any> {
        return from(bcrypt.compare(newPassword, passwordHash));
    }
}
