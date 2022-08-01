import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();
  const loadProjectHandler = () => {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "brad", clientprojectid: "projectb" },
    });
  };
  return (
    <div>
      <h1> The Project of Given Client. </h1>
      <button onClick={loadProjectHandler}> Load Project </button>
    </div>
  );
};

export default ClientProjectPage;
