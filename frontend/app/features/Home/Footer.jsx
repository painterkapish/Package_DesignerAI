
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <svg width="20" height="20" fill="currentColor" className={styles.icon}>
            <path d="M5 15c6 0 9-5 9-9v-.4A6.5 6.5 0 0 0 16 3a6.5 6.5 0 0 1-1.9.5A3.3 3.3 0 0 0 15.5 2a6.6 6.6 0 0 1-2.1.8A3.3 3.3 0 0 0 7 6.3a9.3 9.3 0 0 1-6.7-3.4A3.3 3.3 0 0 0 2 8.3a3.3 3.3 0 0 1-1.5-.4v.1a3.3 3.3 0 0 0 2.6 3.2A3.3 3.3 0 0 1 1 11.2a3.3 3.3 0 0 0 3.1 2.3A6.6 6.6 0 0 1 1 15.2a9.3 9.3 0 0 0 5 1.5" />
          </svg>
        </a>
      </div>
      &copy; {new Date().getFullYear()} Package Designer AI. All rights reserved.
    </footer>
  );
}
const styles = {
  footer: "py-6 text-center text-gray-500 text-sm",
  socials: "flex justify-center gap-4 mb-2",
  icon: "inline text-gray-400 hover:text-indigo-400"
};