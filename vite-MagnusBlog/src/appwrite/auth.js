import config from "../../config.js"
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client(); 
    account; 
    constructor() {
        this.client
            .setProject(config.appwriteProjectId); 
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try{
            const useraccount = await this.account.create(ID.unique(), email, password, name); 
            if(useraccount){
               return this.login({email, password});  
            }
            else{
                return useraccount;
            }
        }
        catch(error){
            throw error; 
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailPasswordSession(email, password); 
        }
        catch(error){
            throw error; 
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get(); 
        }
        catch(error){
            console.log("Appwrite service :: error :: ", error);
        }
    }

    async logout(){
        try{
            await this.account.deleteSessions(); 
        }
        catch(error){
            console.log("Appwrite service :: error :: ", error);
        }
    }
}

const authService = new AuthService(); 
export default authService; 