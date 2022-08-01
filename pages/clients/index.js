import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "max", name: "Maxi Maximilian" },
    { id: "brad", name: "Brad Travercy" },
    { id: "mastery", name: "Javascript Mastery" },
  ];
  return (
    <div>
      <h1> The Clients Page </h1>
      {clients.map((client) => (
        <li key={client.id}>
          <Link href={`/clients/${client.id}`}>{client.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default ClientsPage;
