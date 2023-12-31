import { useState } from 'react'
import verbs from '../data/verbs.json'

const PhraseCard = () => {

    const [verb, setVerb] = useState(verbs[0])    

    const onChange = () => {
        const randomIndex = Math.floor(Math.random() * verbs.length)
        setVerb(verbs[randomIndex])
    }

  return (
    <div
        className="
            flex
            flex-col
            justify-center
            items-center
            h-screen
            gap-20
        "
    >
        <div className="text-[96px] font-semibold flex flex-row gap-5"><div className='text-red-600'>{verb}</div> a chair</div>
        <button
            onClick={onChange}
            className="
                bg-blue-500
                hover:bg-blue-700
                text-white
                font-bold
                py-2
                px-4
                rounded-lg
            "
        >
            Từ khác
        </button>
    </div>
    
  )
}
export default PhraseCard