import { Button } from "@/components/ui/button";
import { Element } from "react-scroll"

export default function HeroSection() {
    return (
        <Element name="home">
            <section className="w-full py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Hi, I am <span className="text-blue-600">Vamshi Vallala</span>
                    </h2>
                    <p className="text-gray-700 text-lg mb-6">
                        Full Stack Developer. Cloud explorer. Machine Learning enthusiast.
                        I develop sleek apps with React, Python and a touch of magic.  
                    </p>
                    <div className="space-x-4">
                        <Button>View Projects</Button>
                        <Button>Contact Me</Button>
                    </div>
                </div>
            </section>
        </Element>
        
    )
}