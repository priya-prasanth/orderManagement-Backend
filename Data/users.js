import bcrypt from "bcrypt"


const users = [
    {
        name: "Admin",
        email: "priyaprasanth168@gmail.com",
        password: bcrypt.hashSync("123456",10),
        isAdmin:true
    },
    {
        name: "User",
        email: "priyaprasanths168@gmail.com",
        password:bcrypt.hashSync("123456", 10),
}
];

export default users;
