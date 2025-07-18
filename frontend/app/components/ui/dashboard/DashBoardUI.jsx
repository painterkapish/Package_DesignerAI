export default function DashboardUI({ user, designs }) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}!</h1>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded mb-8">
          Start New Design
        </button>
        <h2 className="text-xl font-semibold mb-2">Your Designs</h2>
        <ul>
          {designs.map(d => (
            <li key={d.id} className="mb-2">
              <span className="font-medium">{d.title}</span> <span className="text-gray-400">({d.date})</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }