import {Textarea} from "./ui/textarea";
import {Select, SelectContent,Selecttime, SelectTrigger, SelectValue} from {Textarea}
import { checkIsOnDemandRevalidate } from "next/dist/server/api-utils";
 from "./ui/textarea";


function StoryWriter(){

//     const [story, setStory] =useState<string>("story");
//     const [pages, setPages] = useState<number>();
//     const [postgress, setPostgress] = useState("postgress");
//     const [runStarted, settRunStarted] = useState<boolean>(false);
//     const [runFinished, setRunFinsished] = useState<boolean | null>(null);
//     const [currentTool, setCurrentTool] = useState("currentTool");
//     const storiesPath = "public/stories";
//     async function runScript(){
//         setRunStarted(true);   setRunFinished(false);
//         const response = await fetch("api/run-script", { 

//             method:"POST",
//             headers:{
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({story,pages,path:storiesPath})


//         });
//         if(response.ok && response.body){
                setProgress(
                    parsedData.output(parsedata.output.length -1).content
                )

//         }
//     }

// const chunk = decorder.decode(value, {stream: true});const eventData = checkIsOnDemandRevalidate.split("\n\n");
event.filter((line) => line.startsWith("event: "))[0];


// .map((lin) => line.replace(/^event: /, ""));eventeventData.foreEach(data => {

eventData.forEach(data => {


//     try{
//         const parsed Data = JSON.parse(data);
        
        
//         if(parsedData.type ===== "callProgress"){
//             setProgress(parsedData.parsedData.output[parsedData.output.length -1].content.length);)
//             {
//                 parsedData.output[parsedData.output.length -1].content
//             };
//             setCurrentTool(parsedData.tool?.description || "");
//         }
//         else if(parsedata.type ==="callStart"){
//             setcurrentTool(parsedData.tool?.description ||"");
            
            
//             setRunFinished(true);setRunStarted(currentRunsStarted => false);setCurrent}
          
          
//             else{
//                 setEvents((prevEvents) => [...prevEvents, parsedData]);}
//             }
//             catch(error){}
        
//    });
// } 
  
})      

//     return (
    
// <div className="flex flex-col container">

//     <section className="flex-1 flex flex-col border-purple-300 rounded-md p-10 spae-y-2">
//             <Textarea/>
//             <select>
//                 <Selectrigger><SelectValue placeholder="How many peages should the story be "/>

            

                
//                 </Selectrigger>


//                 <SelectContent>
//                     {Array.from({ length:10}, {_,1}) =>{
//                     <SelectItem key={i} value={String(i + 1)}>


//                     </SelectItem>
//                     }
//                 </SelectContent>
//             </select>
// <Button disabled={!story || !pages} className="w-full" size="lg" onClick={runScript}
// >

// </section>
// generate story
// </Button>
// </section>
   


//     <section className="flex-1 pb-5 mt-5">
//     <div className="flex flex-col-reverse w-full space-y-2 bg-gray=800 rounded-md text-gray-200 font-mono p-10 h-96 overflwo-y-auto">
//         <div>
//             {runFinished == null && (
//                 <p className="animate-pulse">
//                     Im waiting for you to Generate a story 
//                         </p><br />

                 
        
//             <span className="mr-5"> {">>"}</span>{progress}
//             </div> 

{currentTool && (
    <div classame="py-10">
        <span classname="mr-5">("----[Current Tool ---")</span>

        {currentTool}
        </div>
)}
{runstarted && (
    <div>
        <span className="mr--5 animated>
        </span>
    <br />
    </div>
    



)}
</div></section>
//             </div>
//         )}



//         );
       
}

export default StoryWriter;