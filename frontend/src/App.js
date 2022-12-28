import {RouterProvider} from "react-router-dom";
import router from "./router/router";
import {useAuth} from "./hooks/useAuth";

function App() {
  const {loading} = useAuth();

  if (loading){
    return <div className='text-center'>loading...</div>
  }

  return (
      <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
