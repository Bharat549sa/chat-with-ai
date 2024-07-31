"use client"

import React from 'react'
import PuseUser from "@clerk/nextjs";

import {Image} from "next/image";

import {BotIcon, Loader2Icon} from "lucide-react";
import Markdown from "react-markdown";
import {Message} from "./Chat";





function ChatMessage({message}: {Message:Message}) 
{

    const isHuman = message.role === "human";
    const {user} =userUser();

  return (
    <div>ChatMessage</div>
    <div className={`chat ${isHuman ? "chat-end" : "chat-start"}`}>
        <div className="chat-iamge avator">
            <div> {isHuman?( user?.imageUrl && (
                <Image src={user?.iamgeUrl} alt="Profile Picture" width={40} className="rounded-full" />
            )
        ):(
            <div clasname="h-10 w-10 bg-indigo-600 flex items-center justify-center">
                <BotIcon className="text-white h-7 w-7"/>
                </div>
        )
    }
        </div></div></div></div></div>

);
}

export default ChatMessage