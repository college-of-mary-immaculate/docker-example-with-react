import Helmet from "react-helmet"

function App() {
  return (
    <>
      <Helmet>
        <title>Docker Hosted ReactApp</title>
      </Helmet>
      <div className="h-full w-full flex flex-column justify-center items-center">
        <h1 className="center text-7xl font-bold text-yellow-200">
          Docker Hosted <span className="text-cyan-200 animate-pulse">ReactApp</span>
        </h1>
      </div>
    </>
  );
}

export default App;
