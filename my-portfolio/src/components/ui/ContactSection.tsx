import { Textarea } from "./textarea"
import { Input } from "./input"
import { Label } from "./label"
import { Button } from "./button"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactSection() {

    const formRef = useRef<HTMLFormElement>(null)
    const [status, setStatus] = useState("")

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;  

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault()


        if (!formRef.current) return

        setStatus("Sending...")

        emailjs.sendForm(
            serviceId, //service ID
            templateId, //TemplateID
            formRef.current,
            publicKey //PublicKey
        ).then(
            () => {
                setStatus("Message Sent Successfully! 🎉")
                formRef.current?.reset()
            },
            (error) => {
                console.log(error)
                setStatus("Uh oh! Something went wrong. Please Try Again!")
            }
        )
    }



    return (
      <section id="contact" className="w-full py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
          <form ref={formRef} onSubmit={sendEmail}className="space-y-6">
            <div>
                <Label htmlFor="user_name">Name</Label>
                <Input id="user_name" name="user_name" type="text" placeholder="Your name" required />
            </div>
            <div>
                <Label htmlFor="user_email">Email</Label>
                <Input id="user_email" name="user_email" type="email" placeholder="you@example.com" required />
            </div>
            <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Write your message..." required />
            </div>
            <Button type="submit" className="w-full">
                Send Message
            </Button>
            {status && <p className="text-center text-sm text-gray-600 mt-2">{status}</p>}
          </form>
        </div>
      </section>
    )
  }