import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query.projectId);

  // Send a request to some backend serverto fetchthe piece of data with an id of router.query.projectId.
  return (
    <div>
      <h1>The PortfolioProject Page </h1>
    </div>
  );
};

export default PortfolioProjectPage;
