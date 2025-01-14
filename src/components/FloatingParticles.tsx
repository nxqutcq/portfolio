import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const FloatingParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const particles = Array.from(containerRef.current?.children || [])

    particles.forEach((particle) => {
      const animateParticle = () => {
        const duration = Math.random() * 4 + 2 // 2 to 6 seconds
        const delay = Math.random() * 2 // 0 to 2 seconds
        gsap.to(particle, {
          x: `+=${Math.random() * 300 - 150}`,
          y: `+=${Math.random() * 300 - 150}`,
          opacity: Math.random(),
          duration,
          delay,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }

      animateParticle()
    })
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: `rgba(255, 255, 255, ${Math.random()})`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        ></div>
      ))}
    </div>
  )
}

export default FloatingParticles
