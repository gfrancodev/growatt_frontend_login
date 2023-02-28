import { Profile_Template } from "@templates/profile";
import { LayoutDashboardDefault } from "src/layout/default";

export default function Profile() {
  return <Profile_Template />;
}

Profile.layout = LayoutDashboardDefault;
