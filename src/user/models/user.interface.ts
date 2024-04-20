export interface User {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    password?: string;
    role?: UserRole;
    profile?: string;
    blogEntries?: string;
}

export enum UserRole {
    ADMIN = "admin",
    CHIEFEDITOR = "chiefeditor",
    EDITOR = "editor",
    USER = "user"
}
