export default function FeaturesSection() {
  return (
    <div className={styles.container}>
      {features.map((f, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.icon}>{f.icon}</div>
          <h2 className={styles.title}>{f.title}</h2>
          <p className={styles.desc}>{f.desc}</p>
        </div>
      ))}
    </div>
  );
}
const styles = {
  container: "flex flex-col md:flex-row justify-center gap-6 mb-12",
  card: "bg-[#232323] rounded-xl p-6 w-72 flex flex-col items-center shadow-lg hover:scale-105 hover:shadow-xl transition",
  icon: "mb-3 text-indigo-400",
  title: "text-xl font-semibold mb-2 text-white",
  desc: "text-gray-400 text-center"
};

const features = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 4v24M4 16h24" />
      </svg>
    ),
    title: "AI Concept Generation",
    desc: "Get instant packaging ideas tailored to your product."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="16" cy="16" r="10" />
        <path d="M8 16h16M16 8v16" />
      </svg>
    ),
    title: "Collaboration",
    desc: "Share and refine designs with your team in real time."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="6" width="20" height="20" rx="4" />
        <path d="M10 16h12" />
      </svg>
    ),
    title: "Export & Print",
    desc: "Download print-ready files for production."
  }
];