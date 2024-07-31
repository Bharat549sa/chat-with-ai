"use client";
import React from 'react';
import {useCallback, useEffect} from "react";
import {useDropzone} from "react-dropzone";
import { CheckCircleIcon, CircleArrowDown, HammerIcon, Rocketicon, SaveIcon,} from "lucide-react";
import {useRouter} from "next/navigation"
import useUpload from "@/hooks/useUpload";
function fileUploader() {

  const {progress, status, fileId, handleUpload} = useFileUpload();
const router = useRouter();
useEffect(()=>{
  
  if(fileId) {
  router.push(`/dashboard/files/${fileId}`);
}



},[fileId, router])



    const onDrop= useCallback(async(acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if(file){
//await handleupload(file)
await handleUpload(file)
      }else{
//toast
      }


 }, []);
    const {getRootProps, getInputProps, isDragActive, isFocused, isDragAccept} 
    = useDropzone({
      onDrop,
      maxFiles:1,
      accept:{
        "application/pdf": [".pdf"]
      }
    
    
    });

const uploadInProgress = progress !=null && progress >=0 && progress <=100

    
  return (
<div className="flex flex-col gap-4 items-cetner max-w-7xl mx-auto">
{uploadInProgress && (
  <div>
    {/*npm i -D daisyui@latest*/}
    <div className={'radial-progress bg-indigo-300 text-white border-indigo-600 border-4 ${ progress ===100 && "hidden"}'}
     role="progressbar" style={{"--value":progress}}> {progress}</div>
   
    <p> {status}</p> 
    </div>
)}
{/* tomm */}
<div {...getRootProps()} className={`p-10 border-2 border-dashed mt-10 kw-[90%] 
    border-indigo-600 text-indigo-600 rounded-lg
     h-96 flex item-center text-center ${ isFocused || isDragAccept ? "bg-indeigo-300": "bg-indigo-100"

     `}`> 
   //  h-96 flex item-center text-center ${ isFocused || isDragAccept ? "bg-indeigo-300": "bg-indigo-100"

    
     // '}`> 
      
    <input {...getInputProps()} />
    <div className="flex flex-col items-center justify-center">
    {
      isDragActive ? (
        <>
        <RocketIcon className="h-20 w-20 animate-ping"/>
        <p>Drop the files here ...</p> 
        </>
        ):(
        <>
        <p>Drag 'n' drop some files here, or click to select files</p>
        </>
  )}
  </div>
  </div>
  </div>
  );
}



export default fileUploader