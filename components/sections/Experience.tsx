import dummy from '../../public/dummy.png'
import { ImageFrame } from '../Frames/ImageFrame'
import { SmallCard } from '../cards/SmallCard'
import { Button } from '../buttons/Button'
import { SiGithub } from 'react-icons/si';

export function Experience(){
    const Title =
`88888888888                                                    88                                                   
88                                                             ""                                                   
88                                                                                                                  
88aaaaa      8b,     ,d8  8b,dPPYba,    ,adPPYba,  8b,dPPYba,  88   ,adPPYba,  8b,dPPYba,    ,adPPYba,   ,adPPYba,  
88"""""       \`Y8, ,8P'   88P'    "8a  a8P_____88  88P'   "Y8  88  a8P_____88  88P'   \`"8a  a8"     ""  a8P_____88  
88              )888(     88       d8  8PP"""""""  88          88  8PP"""""""  88       88  8b          8PP"""""""  
88            ,d8" "8b,   88b,   ,a8"  "8b,   ,aa  88          88  "8b,   ,aa  88       88  "8a,   ,aa  "8b,   ,aa  
88888888888  8P'     \`Y8  88\`YbbdP"'    \`"Ybbd8"'  88          88   \`"Ybbd8"'  88       88   \`"Ybbd8"'   \`"Ybbd8"'  
                          88                                                                                        
                          88 `

    return (
        <div className="flex w-full h-screen items-center justify-center overflow-x-hidden">
            <div className="w-4/5 h-full flex justify-start items-start gap-3 flex-col py-10">
                <pre className="font-mono text-cmdlet whitespace-pre text-[10px]">{Title}</pre>
                <div className="w-full border-t-2 border-dashed mb-10"></div>
                <div className="py-4 flex justify-between items-start w-full gap-10">
                    <div className='w-[40%]'>
                        <h1 className="text-3xl font-bold border-b-2 p-2 text-cmdlet">Experience 1</h1>
                        <h3 className="text-lg py-5 text-param">Short Description</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae vel doloribus dolores quibusdam, non expedita libero dolor quis consequatur illum inventore eos aliquid dolorum, velit nesciunt fugiat, officia modi!</p>
                        <div className='py-5 flex flex-wrap gap-x-5 justify-start items-center'>
                            <SmallCard text='Nest.js'/>
                            <SmallCard text='React'/>
                            <SmallCard text='Docker'/>
                            <SmallCard text='gRPC'/>
                            <SmallCard text='Postgres SQL'/>
                        </div>
                        <div className='flex justify-end'>
                            <Button text='Github' logo={<SiGithub size={18}/>}></Button>
                        </div>
                    </div>
                    <ImageFrame src={dummy} alt="Maklo" classname="w-[55%] h-full" />
                </div>
            </div>
        </div>
    )
}