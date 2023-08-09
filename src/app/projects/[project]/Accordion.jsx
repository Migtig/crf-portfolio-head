'use client'

import { useState } from 'react'
import Image from 'next/image'


export default function Accordion({ fields, images }) {

    const [selected, setSelected] = useState(null)

    let i

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        else {
            setSelected(i)
        }
    }

    // fields.process_content.map((stage) => (

    // ))

    return (
        <div className="accordion">
            <div className='title' onClick={() => toggle(i)}>
                <h2>{fields.process_heading}</h2>
                <span className={selected === i ? 'arrow rotated' : 'arrow'}><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill='currentColor' d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg></span>
            </div>

            <div className={selected === i ? 'content show' : 'content'}>
                {fields.process_content.map((stage) => {
                    let stageImg = images.find((anImg) => anImg.id === stage.stage_image)
                    if ( stageImg ) {
                        return (
                            <div className='stage-section'>
                                <h3>{stage.stage_heading}</h3>
                                <p>{stage.stage_content}</p>
                                <Image 
                                    src={stageImg.media_details.sizes.full.source_url}
                                    width={stageImg.media_details.sizes.full.width}
                                    height={stageImg.media_details.sizes.full.height}
                                    alt={stageImg.alt_text}
                                    className='process-screenshot'
                                ></Image>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className='stage-section'>
                                <h3>{stage.stage_heading}</h3>
                                <p>{stage.stage_content}</p>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}