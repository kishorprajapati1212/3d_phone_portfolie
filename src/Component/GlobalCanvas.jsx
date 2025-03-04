import { Canvas } from "@react-three/fiber";


const GlobalCanvas = ({ children }) => {
    return (
        <>
            <Canvas
                style={{ position: 'fixed', width: '100%', height: '100%', zIndex:10 }}
                camera={{ position: [0, 0, 5], fov: 50 }}
            >
                {children}
            </Canvas>
        </>
    )
}

export default GlobalCanvas;