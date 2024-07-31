import React from 'react'

import {loader2Icon} from "lucide-react";
import {useCollection} from "react-firebase-hooks/;firestore";

import {useUser} from "@clerk/nextjs";
import {colleciton, orderBy, query} from "firebase/firestore";

import {db} from "@/firebase";


export type Message ={
    id?:string;
    role: "human"| "ai"|"placeholder";
    message:string;createdAt:Date;updatedAt:Date;
}
function Chat({id} :{id:string}) {
const{user} = useUser();

const{messages, setMesssages] = useState<Message[]>{[]};

const [isPending, startTransition] = useTransition();

const [snapshot, loading, error] = useCollection(
    
    user && query(
    collection(db, "users", user?.id, "files", id, "chat"),
    orderBy("createdAt", "asc")
)

}
    const handleSubmit = async (e:FormEvent)=>{
        e.preventDefault();
        const q = input;
        setInput("");
    };

    useEffect(()=> {

        if(!snapshot) return;
        console.log("UPdated snapshot", snapshot.docs);
const lastMessage = messages.pop();

if(lastMessage?.role ==="ai" && lastMessage.meessage=="Thinking...")
    {
        return;
    }
    },[snapshot]);

const newMessages = snapshot.docs.map((dc => {
    const {role, message, createdAt} = doc.data();
    return{
        id:doc.id,
        role,
        message,
        createdAt: createdAt.toDate();
    }
}
);
setMessages((prev) => [
    ...Prev,
    {role:"human", message: q, createdAt: new Date()},
    {role: "ai", message: "Thinking...", createdAt: new Date()},


]);
startTransition(async()=>{
    const {success, message} = await askquestion(id, q);
    
    if(!success){
        return
        setMessages((prev)=>
             prev.slice(0, prev.length -1).concat([message{
            role: "ai", messagemessage: `Whoops...$(message}`,
            createAt: new Date(),
        
        },
    ])
);
    }
});
    };
  return (

  
 <div className="flex flex-col h-full overflow-scroll">
 <div classname="flex-1 w-full">{}</div>
 
 <form onSubmit={handleSubmit} classclassName="flex sticky bottom-0 space-x-2 p-5 bg-indigo-600/75"
 >
<Input 
placeholder="Ask a Question"
value={input} onChange={(e)=> setInput(e.traget.value) }
/>

<Button type="submit" diabled={input || isPending}>
Ask
</Button>
 </form>
 
 
 </div>

);
}

export default Chat