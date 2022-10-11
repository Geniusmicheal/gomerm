import initializeFirebaseApp from "@utils/Firebase";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage(initializeFirebaseApp);

export const gomermSingleStorage = (fileElement: HTMLInputElement, require=true) => {
   const {title, files, accept } =  fileElement;

   if(!files?.[0] && !require) return false;
   if (!files?.[0] && require) return `Invalid file upload for ${title}`;
   const fileObj:any = files?.[0] ;
   const {name,type } = fileObj

   const fileType = accept?.split('/')[0];
   if(fileType && !(type.includes(fileType))) return `Invalid file ${fileType} type for ${title}!`;

   const storageRef = ref(storage, `${type.split('/')[0]}/${name}`);
   return uploadBytes(storageRef, fileObj , { contentType:type })
}

export const gomermMultiStorage = (filesElement:NodeListOf<Element>) => {
   const filesArray:any = [...filesElement];
   return Promise.all(filesArray.map((file:any)=> gomermSingleStorage(file)))
}

// https://firebase.google.com/docs/storage/web/upload-files

// how to use gomermSingleStorage
// const dataType = ['boolean','string'];
// const uploadTask = await gomermSingleStorage(backCover); 

// if(dataType.includes(typeof(uploadTask))) return console.log(uploadTask,"danger");

// getDownloadURL(uploadTask.ref).then((downloadURL:any) =>{ 
//    console.log(downloadURL) 
// })