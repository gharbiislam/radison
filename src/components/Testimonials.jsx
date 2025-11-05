import React from 'react'
import dean from '../assets/profiles/dean.png'
import emily from '../assets/profiles/emily.png'
import james from '../assets/profiles/james.png'
import liam from '../assets/profiles/liam.png'
import miguel from '../assets/profiles/miguel.png'
import priya from '../assets/profiles/priya.png'
const Testimonials = () => {
    const testimonials = [
        {
            text: '"Radison transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!"',
            name: 'Dean Watson',
            post: 'Managing director : Farmland',
            profile:  dean ,
        },
        {
            text: '"Radison provided game-changing insights that helped us optimize processes and scale operations fast."',
            name: 'Emily Zhang',
            post: 'CEO : Futuresyn',
            profile:  emily ,
        },
        {
            text: '"Radison’s AI tools revolutionized how we work, saving time and driving our productivity forward"',
            name: 'James Carter',
            post: 'Marketing director : Innolystic',
            profile:james ,
        },
        {
            text: '"Working with Radison has been seamless. Their solutions are both innovative and highly effective."',
            name: 'Liam Walker',
            post: 'Product manager : Brightpath',
            profile: liam ,
        },
        {
            text: '"Thanks to Radison, we’ve achieved incredible growth by automating tasks and improving accuracy."',
            name: 'Miguel Torres',
            post: 'IT consultant : Alphaedge',
            profile:  miguel ,
        },
        {
            text: '"The team at Radison delivered outstanding results, improving our efficiency beyond what we imagined!"',
            name: 'Priya Sharma',
            post: 'Founder : NexGen',
            profile: priya ,
        },
    ]
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <span className='badge'>Testimonials</span>
            <div className="py-8">
                <h2 className="text-h2 lg:text-h2-lg">Trusted by satisfied clients</h2>
                <p className='subtitle'>Discover how we’ve driven growth and innovation.</p></div>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-5 lg:w-4/5'>
                {testimonials.map((test) => (
                    <div className='benefit_card'>
                        <span className='card_shade'></span>
                        <p className='card_content pb-4 '>{test.text}</p>
                        <div className='flex items-center '>
                            <img src={test.profile} alt="" className=' icon w-11 h-11  boder border-border rounded-lg mr-2'/>
                            <div>
                                <span className='text-bodyM text-primaryText'>{test.name}</span>
                                <p className='card_content '>{test.post}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials