import conf from '../conf/conf'
import {Client,ID,Databases,Storage,Query} from 'appwrite'
export class Services{
    client = new Client();
    databases
    bucket
    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwritProjectID)
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
      }
      async createPost({title,slug,content,featuredImage,status,userId}){
         try {
            return await this.databases.createDocument(conf.appwriteDatabaseID,conf.appwritCollectionID,slug,{
                title,
                slug,
                content,
                featuredImage,
                status,
                userId
            })
         } catch (error) {
            console.log("Appwrite:createpost::error");
         }
      }
      async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseID,conf.appwritCollectionID,slug,{
                title,
                content,
                featuredImage,
                status,
            })
        } catch (error) {
            console.log("Appwrite: updatePost:: error");
        }
      }
      async deletePost(slug){
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseID,conf.appwritCollectionID,slug);
            return true;
        } catch (error) {
            console.log("Apppwrite: deletepost::error");
            return false;
        }
      }
      async getPost(slug){
         try {
            return await this.databases.getDocument(conf.appwriteDatabaseID,conf.appwritCollectionID,slug)
         } catch (error) {
            console.log("Appwrite:getpost::error");
            return false;
         }
      }
      async getPosts(queries = [Query.equal("status","active")]){
          try {
            return await this.databases.listDocuments(conf.appwriteDatabaseID,conf.appwritCollectionID,queries)
          } catch (error) {
            console.log("Appwrite:getposts::error");
            return false;
          }
      }
      async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.appwriteBacketID,ID.unique(),file)
        } catch (error) {
            console.log("Appwrite:uploads::error");
            return false;
        }
      }
      async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(conf.appwriteBacketID,fileID);
            return true;
        } catch (error) {
            console.log("Appwrite: deleteFile::error");
            return false
        }
      }
      getPreviewFile(fileID){
        return this.bucket.getFilePreview(conf.appwriteBacketID,fileID);
      }
}
const service = new Services();
export default service;