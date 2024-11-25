import { Label } from "./ui/label";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import WordRotate from "./ui/word-rotate";

export default function About() {
    return (
        <div id='contact' className="part flex flex-col items-center text-center pt-20 w-full mb-20">
            <div className='mb-4'>
                <p className="before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">Contactez-moi</p>
            </div>
            <div className="flex justify-center items-center">
                <p className="mr-2 text-xl">Vous cherchez à créer un</p>
                <WordRotate
                    className="text-xl font-bold text-primary dark:text-primary"
                    words={[
                        "site web moderne",
                        "SaaS",
                        "site vitrine en ligne pour attirer des clients",
                        "système de réservation en ligne",
                        "menu interactif pour votre restaurant",
                        "site e-commerce en ligne pour vendre vos produits",
                        "outil de gestion de stock efficace"
                    ]}
                />
            </div>
            <Card className="">
                <CardContent className='flex p-4'>
                    <div className='w-full flex flex-wrap gap-4'>
                        <div className='flex gap-2 w-full'>
                            <div className='w-1/2'>
                                <Label htmlFor="email">Email</Label>
                                <Input id='email' type="email" placeholder="Email" className='w-full' />
                            </div>
                            <div className='w-1/2'>
                                <Label htmlFor="name">Name</Label>
                                <Input id='name' type="text" placeholder="Name" className='w-full' />
                            </div>
                        </div>
                        <div className='w-full'>
                            <Label htmlFor="subject">Subject</Label>
                            <Input id='subject' type="text" placeholder="Subject" />
                        </div>
                        <div className='w-full'>
                            <Label htmlFor='message'>Message</Label>
                            <Textarea id='message' placeholder='Your message here...' />
                        </div>
                        <div className='w-full'>
                            <Button>Envoyer</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

    )
}