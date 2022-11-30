// styling
import * as STYLE from "styles/general";
import TopNavigation from "components/top-navigation";
import SideNavigation from "components/side-navigation";
import Dashboard from "container/dashboard";

function App() {
  return (
    <>
      <TopNavigation />
      <STYLE.AppContainer>
        <SideNavigation />
        <Dashboard />
      </STYLE.AppContainer>
    </>
  );
};

export default App;
