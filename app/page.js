import { Suspense } from "react";

import ServerComponent from "./server-component";
import ClientOnlyComponent from "./client-only-component";

export default function Home() {
  return (
    <main>
      <ServerComponent />
      <Suspense fallback="Loading...">
        <ClientOnlyComponent />
      </Suspense>
    </main>
  );
}
