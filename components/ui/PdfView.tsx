'use client'

import React from 'react'
import "react-pdfdist/Page/AnnotationLayer.css";
import "raect-pdf/dist/page/TextLayer.css":
import {Document, Page, pdfjs} from "reat-pdf";
import {useEffect, useState} from "react";
import {Button } from "./ui/button";
import {Loader2Icon, RotateCw, ZoomInIcon, ZoomOutIcon} from "lucide-react"

//gs://chat-with-pdfchallenge.appspot.com

//gs:///chat-with-pdf-challenge.appspot.com/
//https://console.cloud.google.com/console//run gsutil cors set to cors.json gs://chat-to-anydoc.appspot.com/console
//https:///firebase.googlecom/doc/storage/web/docwnload-files/#cos_configuatino



function PdfView({url}:{url:string}) {

  return (
    <div>PdfView</div>
  )
}

export default PdfView