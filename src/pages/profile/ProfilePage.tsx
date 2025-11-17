import { Profile } from "../../components/profile/Profile";
import { profileService } from "../../db/profileService";
import type { Route } from "./+types/ProfilePage";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");

  profileService.setProfile(name?.toString() || "", email?.toString() || "");
  return profileService.getProfile();
}

export async function loader() {
  return profileService.getProfile();
}

function ProfilePage({ loaderData }: Route.ComponentProps) {
  return (
    <Profile name={loaderData?.name ?? ""} email={loaderData?.email ?? ""} />
  );
}

export default ProfilePage;
