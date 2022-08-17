import { FC, useEffect, useRef } from 'react'


const VideoHero: FC = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play()
    }, 100)
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute z-0 object-cover w-screen h-screen opacity-50"

      loop
      muted>
      <source src='/video.webm' type='video/webm' />
    </video>
  )
}

export default VideoHero