import DashboardUI from '../ui/DashboardUI';

export default function DashboardLogic() {
  // Mock data for now
  const user = { name: "Jane Doe" };
  const designs = [
    { id: 1, title: "Tea Box", date: "2024-06-01" },
    { id: 2, title: "Soap Packaging", date: "2024-05-28" }
  ];

  return <DashboardUI user={user} designs={designs} />;
}