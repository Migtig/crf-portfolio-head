import Image from 'next/image'

export default function Accordion({ fields }) {

    return (
        <div className="accordion">
            <h2>{fields.process_heading}</h2>

            <div className='content'>
                {fields.process_content.map((stage) => (
                    <section>
                        <h3>{stage.stage_heading}</h3>
                        <p>{stage.stage_content}</p>
                        
                    </section>
                ))}
            </div>
        </div>
    )
}