"use client";

import { usePathname } from 'next/navigation';
import { Card, CardFooter, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {

    const pathname = usePathname();
    const currentPath = pathname.split('/').slice(2).join('/');


    return (
        <div className='flex items-center justify-center w-screen h-screen bg-red-500'>
            <Card className="">
                <CardHeader className='flex justify-around flex-row'>
                    <Button variant={"link"}><ArrowLeft /> Return</Button>
                    <h1>Contact me</h1>
                    <div></div>
                </CardHeader>
                <CardContent className='flex'>
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
                <CardFooter className="flex justify-between">

                </CardFooter>
            </Card>
        </div>
    )
}