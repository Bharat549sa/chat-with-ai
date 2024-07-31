import { adminDb } from "@/FirebaseAdmin";
import {useUser} from "@clerk/nextjs";

import {useEffect, useState} from "react";

import {auth} from "@clerk/nextjs/server";

const FREE_LIMIT = 3;
const POLIMIT=100;
function useSubscription(){
  
const {user} = useUser();
const [isOverFileLimit, setIsOverFileLmit] = useState(false);
const [hasActiveSubscription, setActiveMemership] = useState(null);
const {snapshot, loading, error }= useDocument( 
    user && doc(db, "users", user.id),
    {
        snapshotListenOptions:{includeMetadataChanges:true},

    }
)}


    const[fileSnapshot, fileLoading] =useCollection( user && CollectionListFromJSON(db, "users", user?.id, "files"));
useEffect(()=> {
    if(!snapshot) return;
const data = snapshot.data();
if(!data) return;
setHasActiveMembership(data.activeMembership);
},[snapshot]);

useEffect(()=> {

    if(!fileSnapshot || hasActiveMembership ==null)return;
    const files = filesSnapshot.docs;
    const usersLimit =  ActiveMembership ? PRO_LIMIT: FREE_LIMIT;
}, [filesSnapshot, hasActiveMembership, PRO_LIMIT, FREE_LIMIT]),

}


export default useSubscription