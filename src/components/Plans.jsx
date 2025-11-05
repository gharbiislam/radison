import { list } from 'postcss'
import React from 'react'
import SolideBtn from './SolideBtn'
import { HiCheck } from 'react-icons/hi2'
import { PiStackSimple, PiStackPlus, PiStack } from "react-icons/pi";
import { useState } from 'react';
import 'aos/dist/aos.css';
const Plans = () => {
    const [type, setType] = useState("annual");
    const plan = [
        {
            icon: PiStackSimple,
            titre: "basic",
            priceYear: '480',
            priceMounth: '600',
            text: 'Essential tools and features for starting your journey with ease.',
            list: [
                'Baisc workflow automation', 'Basic chatbot development', '60 content request', 'E-mail support', '1 consultation a month'
            ],
            delay: '0'
        },
        {
            icon: PiStack,
            titre: "Professional",
            priceYear: '960',
            priceMounth: '1200',
            text: 'Advanced capabilities designed to meet growing business needs.',
            list: [
                'Advance workflow automation', 'Advance chatbot development', '150 content request', 'E-mail support', '2 consultation a month'
            ],
            delay: '200'
        },
        {
            icon: PiStackPlus,
            titre: "Enterprises",
            priceYear: '',
            priceMounth: '',
            text: 'Comprehensive solutions tailored for large-scale business success.',
            list: [
                'Custom workflow automation', 'Custom chatbot development', 'Unlimited content request', '24hr priority support', 'Unlimited consultation a month'
            ],
            delay: '400'
        }
    ]
    return (
        <div className='flex flex-col items-center justify-center min-h-screen' id='plans'>
            <div data-aos='fade-up'>
                <span className='badge'>Plans</span>

                <div className='my-6'>
                    <h2 className='text-h2 lg:text-h2-lg'>Flexible plans for growth</h2>
                    <p className='subtitle'>Transparent pricing designed to fit your requirements.</p>
                </div>
            </div>

            <div class="inline-flex bg-cardBg border my-4 p-1 rounded-lg text-cardContent text-primaryText border-border space-x-3" role="group" data-aos="fade-in">
                <button type="button"
                        className={`px-3 py-1 rounded-lg transition ${type === "annual" ? "bg-blue border border-none" : "bg-none"}`} onClick={() => setType("annual")}>
                        Annually
                </button>

                <button type="button"
                        className={`px-3 py-2 rounded-lg transition ${type === "monthly" ? "bg-blue" : "bg-none"}`} onClick={() => setType("monthly")} >
                        Monthly
                </button>
            </div>

            <section className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8 lg:w-5/6 text-primaryText text-bodyS '>
                {plan.map((plans) => {
                    const price = type === "annual" ? plans.priceYear : plans.priceMounth;
                    const Icon = plans.icon
                    return (
                        <div className="mt-3 plan_card relative  " data-aos="fade-up" data-aos-delay={plans.delay}>
                            <span class="absolute top-0 left-0 w-20 h-20 bg-blue rounded-full opacity-30 blur-2xl"></span>

                            <span class="absolute bottom-0 right-0 w-20 h-20 bg-blue rounded-full opacity-30 blur-2xl"></span>

                            <div className='space-y-4'>
                                <span className='flex items-center '>
                                    <Icon className=' icon text-3xl mr-2' /> {plans.titre}
                                </span>

                                {plans.titre == 'Enterprises' ? <div className='text-4xl font-medium '>
                                    Custom </div> : <div className='text-4xl font-medium '>
                                    ${price}<span className='text-bodyS'>/month</span> </div>}
                                <p className='text-secondaryText '>{plans.text}</p>
                            </div>

                            <SolideBtn className="w-full"> Get in touch</SolideBtn>

                            <ul className="text-left space-y-2 mb-6">
                                {plans.list.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 ">
                                        <span className='flex justify-items-center items-center  '>
                                            <HiCheck className='icon text-2xl mr-2' />{item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                        </div>


                    )
                })}
            </section>
        </div>
    )
}

export default Plans