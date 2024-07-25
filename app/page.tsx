import Image from "next/image";

import {
  BrainCogIcon, EyeIcon,GlobeIcon, MonitorSmartphoneIcon,ServerCogIcon,ZapIcon
}from "lucide-react";

import {Button} from "@/components/ui/button";



import Link from "next/link";

const features =[
{
  name:"store your pdf docuemnts",
  description: "keep all your document",
  icon:GlobeIcon
}
]
export default function Home() {
  return (
    <main className="bg-gradient-to-bl from-white overflow-scroll p-2 lg:p-5 to-indigo-600 flex-1 min-h-screen flex-col items-center justify-between p-24">
    <h1>build saas ai app</h1>
    <div>
    <div className="bg-white py-24 sm:py-32 rounded-md ">
<p>
everyone, <span className="text-indigo-600">
  Chat with PDF</span>{ " " }

  turns static docuemnts into {" "}
    <span className="font-bold "> dynamic conversiations</span>,enchancing productivity 10x fold efortliessly,
    </p>
    
  
    </div>

    <Button asChild className="mt-10">

      <Link href="/dashboard">Get Started</Link>
    </Button>
    </div>
<div className=" relative overflow-hidden pt-16"> 
  <div className="mx-auto max-w-7xl px-6 lg-px-8">
    <Image alt="App Screnshot"
    src="https;//i..imgur.com/VCiRSTI.jpeg"
    width={2432}
    height={1442}
    className="md-[0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"/>
<div aria-hidden="true" className="relative">
  <div className="absolute bottom-0 bg-gradient-to-t form-white/95 pt-4">
  
  </div>
    </div>

    <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
      <dl className="mx-auto grid max-w-2xl grid-ciolks-1 gap-x-6 gap-y-10">
        {features.map((feature)=> (
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900">

              <feature.icon aria-hidden="true" className="absoute left-1 top-1 h-5 w-5 text-indigo-600"/>
             < dd>{feature.description}</dd>
            </dt>
          </div>
        ))}
      </dl>
      
      </div></div>
  </div>
    </main>
  );
}
