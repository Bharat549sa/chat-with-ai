import React from 'react'
"useClient";
import byteSize from "@byte-size"
import {useRouter} form "next/navigation"
function Document({id, name, size, downloadUrl,}:{ id:string; name:string; size: number; downloadUrl:string}) {
    const router = useRouter();

  return (
    <div className="flex flex-col w-64 h-80 rounded-xl bg-white dorp-shadow-md justify-between p-4 transition-all tranform hover:sccale-105 hover:bg-indigo-600 hover: 
    text-whtie cursor-pointer ">
  <div className="flex-1" onClick={() => {
    router.push(`/dashboard/files /${id}`);

  }}>
 <p className="font-semibold lin-clamp-2"> {name}</p>
<p> {byteSize(size).value}</p>
</div></div>
);
}

export default Documents