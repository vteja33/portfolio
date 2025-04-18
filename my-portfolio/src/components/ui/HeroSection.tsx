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
                    <div className="flex justify-center items-center gap-4 flex-wrap mb-6">
                        <a href="#contact"><Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 py-2">View Projects</Button></a>
                        <a href="#contact"><Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 py-2">Contact Me</Button></a>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <a href="https://github.com/vteja33"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-full hover:shadow transition"
                        >
                            <img src="/github-mark.svg" alt="GitHub" className="w-5 h-5" />
                            <span className="text-sm font-medium text-gray-800">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/vamshi-teja-vallala"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-full hover:shadow transition"
                        >
                            <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                            <span className="text-sm font-medium text-gray-800">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </section>
        </Element>
        
    )
}