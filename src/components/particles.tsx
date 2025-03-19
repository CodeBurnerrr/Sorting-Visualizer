import {useEffect, useMemo, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
import {loadSlim} from "@tsparticles/slim";

const Particle = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({

            background: {
                color: {
                    value: "",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 10,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.8,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                // links: {
                //     color: "white",
                //     distance: 100,
                //     enable: true,
                //     opacity: 0.5,
                //     width: 2,
                // },
                move: {
                    direction: MoveDirection.bottom,
                    enable: true,
                    outModes: {
                        default: OutMode.out,
                    },
                    random: false,
                    speed: 0.5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 35,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: {min: 1, max: 5},
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (init) {
        return (
            <>
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                />
            </>
        );
    }

    return <>
    </>;
}

export default Particle;