class User{
    constructor(id,username,name,bio,dateCreated,lasUpdate){
        this.id= id;
        this.username= username;
        this.name= name
        this.bio= bio;
        this.dateCreated= dateCreated;
        this.lasUpdate= lasUpdate;
    }
}

module.exports= User;