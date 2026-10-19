"use client";
import {useState} from "react";
import {Menu,X} from "lucide-react";
import {navigationConfig} from "@/config/navigation.config";
export function MobileMenu(){const[open,setOpen]=useState(false);return <><button type="button" className="mobile-toggle" aria-label={open?"סגירת תפריט":"פתיחת תפריט"} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open?<X size={20}/>:<Menu size={20}/>}</button>{open&&<div className="mobile-panel" id="mobile-navigation">{navigationConfig.map(item=><a key={item.href} href={item.href} onClick={()=>setOpen(false)}>{item.label}</a>)}</div>}</>}
