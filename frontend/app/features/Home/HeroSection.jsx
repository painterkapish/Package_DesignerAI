export default function HeroSection() {
  return (
    <div className={styles.container}>
      <img
        src="/logo.png"
        alt="Logo"
        className={styles.logo}
        style={{ filter: "drop-shadow(0 0 8px #6366f1)" }}
      />
      <h1 className={styles.title}>Package Designer AI</h1>
      <p className={styles.tagline}>From idea to print-ready packaging in seconds.</p>
      {/*<button className={styles.cta}>
        Start Designing
      </button>
      <button className={styles.secondaryCta}>
        <span>See how it works</span>
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 4v10M9 14l-4-4m4 4l4-4" />
        </svg>
      </button>*/}
    </div>
  );
}

const styles = {
  container: "flex flex-col items-center mt-16 mb-2",
  logo: "w-20 h-20 mb-4 animate-pulse drop-shadow-lg",
  title: "text-4xl font-extrabold mb-2 text-white drop-shadow-lg",
  tagline: "text-lg text-gray-300 mb-4 text-center",
  cta: "px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white font-semibold text-lg shadow-lg hover:scale-105 transition",
  secondaryCta: "mt-4 text-indigo-400 hover:underline flex items-center gap-1"
};
