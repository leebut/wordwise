import PageNav from "../components/PageNav";

function NoRoute() {
  return (
    <div>
      <PageNav />
      <h1>404: Requested route not found.</h1>
    </div>
  );
}

export default NoRoute;
