import { Label } from "./ui/label";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import WordRotate from "./ui/word-rotate";
import { useState } from "react";

export default function About() {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [back, setBack] = useState("")

    async function sendEmail() {
        const response = await fetch('/api/send-mail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                to: 'contact@killian-colla.com',
                subject: "[Contact] : " + subject,
                html: `
                <!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nouvelle Réponse du Formulaire de Contact</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #333333;
      font-size: 24px;
      margin-bottom: 20px;
    }
    .info {
      font-size: 16px;
      color: #555555;
      margin-bottom: 10px;
    }
    .message {
      font-size: 16px;
      color: #333333;
      margin-top: 20px;
      padding: 15px;
      background-color: #f1f1f1;
      border-radius: 5px;
    }
    .footer {
      font-size: 12px;
      color: #888888;
      text-align: center;
      margin-top: 30px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Nouvelle Réponse au Formulaire de Contact</h1>

    <div class="info">
      <strong>Sujet :</strong> ${subject} <br>
      <strong>Date et Heure :</strong> ${new Date().toLocaleString()} <br>
      <strong>Email du Demandeur :</strong> ${email} <br>
    </div>

    <div class="message">
      <strong>Message :</strong> <br>
      ${message}
    </div>

    <div class="footer">
      <p>Ce message a été généré automatiquement. Merci de ne pas répondre à cet email.</p>
    </div>
  </div>
</body>
</html>`
            }),
        });

        if (response.ok) {
            setBack("Merci pour votre message ! Nous vous ferons un retour d'ici 48 heures.")
        } else {
            setBack("Une erreur s'est produite lors de l'envoi, merci de réessayer plus tard.")
        }
    }

    return (
        <div id='contact' className="part flex flex-col items-center text-center pt-20 w-full mb-20">
            <div className='mb-4'>
                <p className="before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">Contactez-moi</p>
            </div>
            <div className="flex justify-center items-center max-sm:flex-col mb-4">
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
            <Card className="w-4/5 max-sm:w-11/12">
                <CardContent className='flex p-4'>
                    <div className='w-full flex flex-wrap gap-4'>
                        <div className='flex gap-2 w-full'>
                            <div className='w-1/2'>
                                <Label htmlFor="email">Email</Label>
                                <Input id='email' type="email" placeholder="Email" className='w-full' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='w-1/2'>
                                <Label htmlFor="name">Name</Label>
                                <Input id='name' type="text" placeholder="Name" className='w-full' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                        <div className='w-full'>
                            <Label htmlFor="subject">Subject</Label>
                            <Input id='subject' type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        </div>
                        <div className='w-full'>
                            <Label htmlFor='message'>Message</Label>
                            <Textarea id='message' placeholder='Your message here...' value={message} onChange={(e) => setMessage(e.target.value)} />
                        </div>
                        <div className='w-full'>
                            <Button onClick={sendEmail}>Envoyer</Button>
                        </div>
                        <p className={`text-center w-full ${back.includes("erreur") ? "text-red-500" : "text-green-500"}`}>{back}</p>
                    </div>
                </CardContent>
            </Card>
        </div>

    )
}