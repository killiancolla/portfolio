import { Label } from "./ui/label";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function About() {
    return (
        <div id='skills' className="part flex flex-col items-center text-center pt-20 w-4/5 mb-20">
            <div className='mb-10'>
                <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">Contact me</p>
            </div>
            <Card className="">
                <CardContent className='flex p-4'>
                    <div className='w-1/2 flex flex-wrap gap-4'>
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
                    </div>
                    <div className='w-1/2'>
                        oui
                    </div>
                </CardContent>
            </Card>
        </div>

    )
}