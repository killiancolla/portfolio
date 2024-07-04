import { Button } from "./ui/button"

export default function HomePage() {
    return(
        <div id='home' className='part min-h-screen w-4/5 flex items-center justify-center'>
          <div className='w-1/2 flex flex-col items-end'>
            <h1 className="text-5xl font-bold">Killian Colla</h1>
            <h2 className="font-bold">Web Developer</h2>
            <p className='text-end my-14'>
              Je suis Killian, un développeur web passionné par la création d&apos;expériences en ligne innovantes. Explorez mon portfolio pour voir comment je fusionne la technologie et la créativité.
            </p>
            <Button>Contact me</Button>
          </div>
          <div className="w-1/2">
            <p className="text-center">Image</p>
          </div>
      </div>
    )
}