import { X, Square, Terminal, Minus } from 'lucide-react';

export function TitleBar(){
    return (
      <div className="bg-background-alt w-full pt-3 px-3 flex justify-between items-center absolute top-0 left-0">
        <h2 className="bg-background w-min pl-4 pr-4 pt-3 pb- rounded-t-2xl flex gap-2">
            <Terminal/>
            <div>mr.cooo&apos;s</div>
            <div>Portfolio</div>
        </h2>
        <div className='flex gap-5 mb-3'>
            <Minus size={18} strokeWidth={1.5} />
            <Square size={15} strokeWidth={1.5} />
            <X size={18} strokeWidth={1.5} />
        </div>
      </div>
    )
}