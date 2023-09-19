import Credentials from "./Credentials";

export default interface User {
    name?: string;
    role?: string;
    credential?: Credentials;
    address?: string;
}
