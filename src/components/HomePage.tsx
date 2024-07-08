import { Button } from "./ui/button"
import { Avatar } from '@readyplayerme/visage';
import { useTranslations } from 'next-intl';

export default function HomePage() {

  const t = useTranslations('HomePage')

  return (
    <div id='home' className='part min-h-screen w-full flex items-center justify-center'>
      <div className='pl-24 w-1/2 flex flex-col items-end'>
        <h1 className="text-5xl font-bold">Killian Colla</h1>
        <h2 className="font-bold">{t('title')}</h2>
        <p className='text-end my-14'>
          {t('intro')}
        </p>
        <Button>{t('contact')}</Button>
      </div>
      <div className="relative w-1/2 h-screen overflow-hidden flex justify-center items-center">
        <Avatar
          animationSrc="/male-idle-3.fbx"
          backLightColor="#FFB878"
          backLightIntensity={6}
          bloom={{
            intensity: 0.1,
            kernelSize: 1,
            luminanceSmoothing: 1,
            luminanceThreshold: 1,
            materialIntensity: 3.3,
            mipmapBlur: true
          }}
          cameraInitialDistance={3.2}
          cameraTarget={1.65}
          environment="soft"
          fillLightColor="#6794FF"
          fillLightIntensity={3}
          fov={50}
          headMovement
          keyLightColor="#FFFFFF"
          keyLightIntensity={0.8}
          modelSrc="https://models.readyplayer.me/668b3ecbe83ef649fd370324.glb"
          onLoaded={function noRefCheck() { }}
          onLoadedAnimation={{
            "src": "/male-spawn-animation.fbx",
            "loop": 1
          }}
          onLoading={function noRefCheck() { }}
          scale={1}
          shadows
          style={{}}
        />
      </div>
    </div>
  )
}