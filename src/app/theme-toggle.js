"use client"

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function ThemeToggle(){
    const {theme,setTheme} = useTheme()
    console.log("console.",theme)
    return(
        <Button variant="outline"size={"icon"} className={"rounded-full"} onClick={()=>setTheme(theme==="light"?"dark":"light")}>
            <p>Sun</p>
            <p>Moon</p>
        </Button>
    )
}