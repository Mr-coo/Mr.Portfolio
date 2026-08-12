import { Button } from "../buttons/Button"
import { Download } from 'lucide-react';


export function Hero(){
    const heroTitle = 
`88b           d88                                                      88           88                                                88  88  
888b         d888                                                      88           ""                                                88  ""  
88\`8b       d8'88                                                      88                                                             88      
88 \`8b     d8' 88  ,adPPYYba,  8b,dPPYba,   ,adPPYba,   ,adPPYba,      88           88  8b,dPPYba,   ,adPPYYba,  8b,dPPYba,   ,adPPYb,88  88  
88  \`8b   d8'  88  ""     \`Y8  88P'   "Y8  a8"     ""  a8"     "8a     88           88  88P'   \`"8a  ""     \`Y8  88P'   "Y8  a8"    \`Y88  88  
88   \`8b d8'   88  ,adPPPPP88  88          8b          8b       d8     88           88  88       88  ,adPPPPP88  88          8b       88  88  
88    \`888'    88  88,    ,88  88          "8a,   ,aa  "8a,   ,a8"     88           88  88       88  88,    ,88  88          "8a,   ,d88  88  
88     \`8'     88  \`"8bbdP"Y8  88           \`"Ybbd8"'   \`"YbbdP"'      88888888888  88  88       88  \`"8bbdP"Y8  88           \`"8bbdP"Y8  88`

    return (
        <div id="hero" className="flex w-full h-screen items-center justify-center scroll-mt-10">
            <div className="w-3/5 flex justify-center items-start gap-3 flex-col">
                <h2 className="text-2xl">Hello, I am</h2>
                <pre className="font-mono text-cmdlet whitespace-pre text-xs">{heroTitle}</pre>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi pariatur voluptatem ab, illum minus deserunt veritatis. Dolore consequatur adipisci voluptate deserunt impedit voluptatem animi. Odio deleniti vitae dolore atque soluta?</p>
                <div className="flex justify-end w-full">
                    <Button text="Download Resume" logo={<Download size={18}/>}></Button>
                </div>
            </div>
        </div>
    )
}