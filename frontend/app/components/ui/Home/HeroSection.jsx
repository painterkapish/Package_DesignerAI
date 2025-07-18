"use client";
import { useRouter } from "next/navigation";

const styles = {
  container: "flex flex-col items-center mt-16 mb-2 relative w-full",
  logo: "w-20 h-20 mb-4 animate-pulse drop-shadow-lg",
  title: "text-4xl font-extrabold mb-2 text-white drop-shadow-lg",
  tagline: "text-lg text-gray-300 mb-4 text-center",
  topRight: "absolute top-4 right-8 flex gap-4"
};

export default function HeroSection() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.topRight}>
        <button 
          className="text-indigi-400 hover:underline font-semibold text-base"
          onClick={() => router.push('/auth/signin')}
        >
          Sign In
        </button>
        <button 
          className="text-indigi-400 hover:underline font-semibold text-base"
          onClick={() => router.push('/auth/signup')}
        >
          Sign Up
        </button>
      </div>
      <img
        src="/logo.png"
        alt="Logo"
        className={styles.logo}
        style={{ filter: "drop-shadow(0 0 8px #6366f1)" }}
      />
      <h1 className={styles.title}>Package Designer AI</h1>
      <p className={styles.tagline}>From idea to print-ready packaging in seconds.</p>
    </div>
  );
}
