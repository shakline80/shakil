import React from "react";

import FeaturesImgOne from '../assets/features/feature-1.png';
import FeaturesImgTwo from '../assets/features/feature-1.png';


import FeatureList from "../components/FeaturesList";


export default function ServicesOne(){
    return(
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">

                <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Work with tools you already use</h2>
                        <p className="mb-8 font-light lg:text-xl">
                            Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.
                        </p>

                        <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                            <FeatureList text="Continuous integration and deployment" />
                            <FeatureList text="Development workflow" />
                            <FeatureList text="Knowledge management" />
                        </ul>

                        <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
                    </div>
                    <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={FeaturesImgOne} alt="dashboard feature image" />
                </div>

                <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                    <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={FeaturesImgTwo} alt="feature image 2" />
                    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            We invest in the world’s potential
                        </h2>
                        <p className="mb-8 font-light lg:text-xl">
                            Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.
                        </p>

                        
                         <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                            <FeatureList text="Dynamic reports and dashboards" />
                            <FeatureList text="Templates for everyone" />
                            <FeatureList text="Development workflow" />
                            <FeatureList text="Limitless business automation" />
                            <FeatureList text="Knowledge management" />
                        </ul> 



                        <p className="font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}