let cl=console.log;

type user={
    fname:string,
    lname:string,
    userInfo:(boolean|string)
}

let user1={
    fname:"jhon",
    lname:"doe",
    userInfo:[true,false,"hello"]
}

user1.userInfo[0]="hello"
user1.userInfo[1]="admin"// we can change the value of index no 1 i.e admin from boolean
cl(user1)