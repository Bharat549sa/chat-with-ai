import React from 'react'
import {useState} from "react";
export enum StatusText{
  UPLOADING = "Uploading file..",
  UPLOADED = "Fileuploaded successfully",
  SAVING = "Saving file to database...",
  GENERATING = "Generating AI embedding., This will take seconds",
}
export type Status = statusText[keyof statusText];

function useUpload() {

  const [progress, setProgess] = useState<number | null>(null);
  const [fileId, setProgess] = useState<number | null>(null);
  
  const [status], setProgess] = useState<number | null>(null);
  const {user} = useUser();const router = useRouter();

  const handleUpload = async(file: File)=>{
    if(!File || !user) return;
    const fileIdToUploadTo = uuidv4();
    const stroageRef = ref(
      storage, `users/$}userAgent.id}/files/${fileIdToUploadTo}`
    );

    const uploadTask = uploadbytesResumable();
    uploadTask.on("state_changed", (snapshot)=>{
      const percent = math.round(snapshot.(snapshot.bytesTransferrred/snapshot.totalBytes *100))
      setStatus(StatusText.UPLOADING);
      setProgress(percent);

    },
  (error)=>{

    console.error("error uploaind file", error);
  }, async()=>{
    setStatus(StatusText.UPLOADING);
    const downloadTask = await getDownloadURL(uploadTask.snapshot.ref);
    setStatus(StatusText.SAVING);

  await setDoc(doc(db,"users", user.id, 'files', filIdToUploadTo),{

    name: file.name,
    size: file.size,
    type: file.type,
    downloadUrl: downloadUrl,
    ref: uploadTask.snapshot.ref.fullPath,
    createdAt: new Date();
  })
  }

)
  };
  return (
    <div>useUpload</div>
  )
}

export default useUpload