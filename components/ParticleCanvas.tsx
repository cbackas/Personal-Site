import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { Container, Engine } from 'tsparticles-engine'

const ParticleCanvas = (): JSX.Element => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine)

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container)
  }, [])
  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          number: {
            value: 15,
            density: {
              enable: true,
              value_area: 500
            }
          },
          color: {
            value: '#1b1e34'
          },
          shape: {
            type: 'polygon',
            stroke: {
              width: 2,
              color: '#000'
            },
            polygon: {
              sides: 4
            }
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: {
              enable: true,
              speed: 0.05,
              opacity_min: 0,
              sync: false
            }
          },
          size: {
            value: 20,
            random: true,
            anim: {
              enable: true,
              speed: 3,
              size_min: 40,
              sync: false
            }
          },
          lineLinked: {
            enable: false,
            distance: 200,
            color: '#ffffff',
            opacity: 1,
            width: 2
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: 'bottom-right',
            random: false,
            straight: true,
            outMode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 0,
              rotateY: 0
            }
          }
        },
        interactivity: {
          detects_on: 'canvas',
          events: {
            onhover: {
              enable: false,
              mode: 'grab'
            },
            onclick: {
              enable: false,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles: 4
            },
            remove: {
              particles: 2
            }
          }
        },
        detectRetina: true
      }}
    />
  )
}

export default ParticleCanvas
