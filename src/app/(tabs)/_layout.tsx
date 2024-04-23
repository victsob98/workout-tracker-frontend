import { TabNavigation } from "@navigation/TabNavigation/TabNavigation";
import { Redirect } from "expo-router";
import { useAuth } from "src/hooks/useAuth/useAuth";

const TabLayout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    <Redirect href={"/"} />;
  }

  return <TabNavigation />;
};

export default TabLayout;
