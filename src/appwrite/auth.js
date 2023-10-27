import conf from '../conf/conf'
import {Client,Account,ID} from 'appwrite'
export class AuthService{
  client = new Client();
  account;
  constructor(){
    this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwritProjectID)
        this.account = new Account(this.client);
  }
  async createUser({email,password,name}){
       try {
        const userAccount = await this.account.create(ID.unique(),email,password,name);
       } catch (error) {
           throw error;
       }
       if(userAccount){
        //call another method
        return this.login({email,password})
       }
       else{
        return userAccount;
       }
  }
  async login({email,password}){
    try {
       await this.account.createEmailSession(email,password)
    } catch (error) {
        throw error
    }
  }
  async getUser(){
    try {
        return await this.account.get(); 
    } catch (error) {
        console.log("errore in getUSer");
    }
    return null;
  }
  async logout(){
    try {
       return await this.account.deleteSessions();
    } catch (error) {
        console.log("Error in logout");
    }
    
  }

}
export const authService = new AuthService();
export default authService;