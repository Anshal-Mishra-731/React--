import config from "../../config.js"
import { Client, Account, ID, Query } from "appwrite";

export class Service{
    client = new Client(); 
    databases; 
    storage; 
    constructor(){
        this.client.setProject(config.appwriteProjectId); 
        this.databases = new Databases(this.client); 
        this.storage = new Storage(this.client); 
    }
    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug, //ID.unique() bhi use kar sakte hain par seekhne keliye slug sahi rahga
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }
        catch(error){
            console.log("Error :: createPost ::", error);
        }
    }

    async updatePost({title, slug, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug, 
                {
                    title, 
                    content,
                    featuredImage,
                    status
                }
            )
        }
        catch(error){
            console.log("Error :: updatePost ::", error);
        }
    }

    async deletePost({slug}){
        try{
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true; 
        }
        catch(error){
            console.log("Error :: deletePost ::", error);
            return false; 
        }
    }

    async getPost({slug}){
        try{
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        }
        catch(error){
            console.log("Error :: getPost ::", error);
            return false;
        }
    }
    //Lo queries ke baare mein seekh rahe hain 
    async getPostsActive(queries = [Query.equal("status", "active")]){
        try{
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
        }
        catch(error){
            console.log("Error :: getPostsActive ::", error);
            return false; 
        }
    }

    async uploadFile(file){
        try{
            return await this.storage.createFile(
                config.appwriteBucketnId,
                ID.unique(),
                file
            )
        }
        catch(error){
            console.log("Error :: uploadFile ::", error);
            return false; 
        }
    }
//fileID uploadFile ki safalta ke uprant hi milegi
    async deleteFile(fileId){
        try{
            await this.storage.deleteFile(
                config.appwriteBucketnId,
                fileId
            )
            return true; 
        }
        catch(error){
            console.log("Error :: deleteFile ::", error);
            return false; 
        }
    }

    async getFilePreview(fileId){
        return this.storage.getFilePreview(
                config.appwriteBucketnId,
                fileId
        )
    }
}

const service = new Service(); 
export default service; 