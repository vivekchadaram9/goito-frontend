import { Button } from '@/components/ui/button'
import React from 'react'
import { ThemeToggle } from './theme-toggle'
import SplitText from '@/components/ui/SplitText'

function Home() {
  return (
    <div className="h-1vh flex items-center justify-center  text-black dark:text-white transition-all duration-300 flex-col">
      <div className="max-w-3xl text-center space-y-10  flex items-center justify-center flex-col min-h-screen">
      <SplitText
        text="Goito"
        className="text-6xl font-semibold text-center"
        delay={150}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
      />
      <div>
        <p>Wear your Scenes</p>
        <p>Created By the CinePhiles,for the CinePhiles</p>
      </div>
      <div className="space-x-2">
        <Button>
          Button 1
        </Button>
        <Button variant={"secondary"}>Button 2</Button>
      </div>
      </div>
      
      <div className="space-x-2 min-h-screen">
        <p>Magic</p>
      </div>
      </div>
  )
}

export default Home