// import {NextRequest} from "next/server";
// import {RunEventType, RunOpts} from "@gptscript-ai/gptscript";

// export async function POST(request: NextRequest){
//     const {story, pages, path} = await request.json();
//     const opts:RunOpts ={
//         disableCache:true,
//         input: '--story ${story}" --pages --path $(path)',
    
//     };
//     try{
//         const encoder = new TextEncoder();
//         const stream = new ReadableStream({
//             async start(controller){
//                         try{
//                                     const run = await g.run(script, opts);

//                         }catch (error)
//                         {
//                             controller.error(error);
//                         }
//             }

//         })
    
// } cache(error)
// {
//     return new Response(JSON.stringify({error: error}),{
//         status:500,
//     }
// }

import { config } from "dotenv";  
config();  
export async function POST(request, res) {  
const body = await request.json();  
let { textInput } = body;  
let voice_id = "21m00Tcm4TlvDq8ikWAM"; //Change the value to the available voice ID you prefer.

const url =  
`https://api.elevenlabs.io/v1/text-to-speech/${voice_id}`;  
const headers = {  
Accept: "audio/mpeg",  
"xi-api-key": process.env.ELEVENLABS_API_KEY,  
"Content-Type": "application/json",  
};  
const reqBody = JSON.stringify({  
text: textInput,  
model_id: "eleven_monolingual_v1",  
voice_settings: {  
stability: 0.5,  
similarity_boost: 0.5,  
},  
});

try {  
const response = await fetch(url, {  
method: "POST",  
headers: headers,  
body: reqBody,  
});

if (!response.ok) {  
throw new Error(response.statusText);  
}

const arrayBuffer = await response.arrayBuffer();  
const buffer = Buffer.from(arrayBuffer);  
return new Response(buffer);  
} catch (error) {  
return new Response(JSON.stringify({ error: error.message }));  
}  
}