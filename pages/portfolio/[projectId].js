import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();
  console.log(router.asPath);
  console.log(router.query.projectId);
  return (
    <div>
      <h1>The PortfolioProject Page </h1>
    </div>
  );
};

export default PortfolioProjectPage;
