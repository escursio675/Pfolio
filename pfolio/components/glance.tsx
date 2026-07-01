import MagicBento from "./ui/MagicBento"

export default function Glance() {

    return(
        <div className="mt-20">
            <MagicBento 
            textAutoHide={true}
            enableStars
            enableSpotlight
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect
            spotlightRadius={400}
            particleCount={12}
            glowColor="132, 0, 255"
            disableAnimations
            />
        </div>
    )
}