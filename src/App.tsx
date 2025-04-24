
import DefaultLayout from "./layouts/default";
import AppRouter from "./config/router/router";

function App() {
  return (
    <DefaultLayout>
      <AppRouter />
    </DefaultLayout>
  );
}

export default App;
