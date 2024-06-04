import AuthComponent from "@/components/Authentication";

export default async function Home() {
  return (
    <div>
      <h1>
        <AuthComponent />
      </h1>
    </div>
  );
}
