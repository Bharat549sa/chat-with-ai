import {createStripePortal} from "@/actoin/createStirpePortal";
import {useRouter} from "next/navigation";
import { useTransition} from "react";

function UpgradeButton(){

    const [hasActiveMembership, loading] = useSubscription();
    const {isPending, startTransition} = useTransition();
    const handleAccoutn-() =>{
        startTransition async() => (


        )
    }
    if(!hasAcitvemembership && !loading)
        return(
    <Button asChild valriant="defaullt" className="border-indigo-600
    >
    <link href="/dashboard/upgrade">
    Upgrade<StarIcon className="ml-3 fill-indigo-60-0">
        </Link>
        </button>
        );

        if(loading)return(
            <Button variant="default" clasName="router border-indigo">
                <loading2Icon className="animate-spin"/>
                
            </Button>
        );
        )
}