import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error_container">
      <h1>{error.status}</h1>
      <h1>: {error.statusText}</h1>
    </div>
  );
};

export default Error;
