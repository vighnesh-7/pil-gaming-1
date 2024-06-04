import { getCurrentUser } from "@/actions/user";
import UserDashboard from "./_components/UserDashboard";
import AuthComponent from "@/components/Authentication";

const page = async ({ params }: { params: { id: string } }) => {
  const currentUser = await getCurrentUser(params.id);
  
  if (!currentUser) {
    return (
      <div>
        <h1>
          <AuthComponent />
        </h1>
      </div>
    );
  }

  return (
    <div>
      <UserDashboard user={currentUser} />
    </div>
  );
};

export default page;
