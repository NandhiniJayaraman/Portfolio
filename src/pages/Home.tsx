export default function Home() {
    return (
        <div className="flex items-center gap-5 flex-col justify-center min-h-screen bg-white">
            <h1 className="text-5xl font-extrabold text-black animate-bounce transition-all duration-700">
                Nandhini Jayaraman <span role="img" aria-label="waving hand">👋</span>
            </h1>
            <p className="text-3xl font-extrabold text-black animate-pulse transition-all duration-700">
                Full Stack Developer <span role="img" aria-label="laptop">💻</span>
            </p>
        </div>
    );
}
