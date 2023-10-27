const conf = {
  appwriteURL:String(import.meta.env.VITE_APPWRITE_URL), 
  appwriteDatabaseID:String(import.meta.env.VITE_APPWRITE_DATABASE_ID), 
  appwritCollectionID:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID), 
  appwritProjectID:String(import.meta.env.VITE_APPWRITE_PROJECT_ID), 
  appwriteBacketID:String(import.meta.env.VITE_APPWRITE_BUCKET_ID), 
}
export default conf;