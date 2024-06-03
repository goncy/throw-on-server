import ServerComponent from "./server-component";
import ClientOnlyComponent from "./client-only-component";

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main>
      <ServerComponent />
      <ClientOnlyComponent />
    </main>
  );
}
