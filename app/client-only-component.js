'use client'

import {Suspense} from "react";

const ClientOnlyComponent = () => {
  console.log('typeof window:', typeof window);

  if (typeof window === 'undefined') {
    throw Error('This component should only render on the client.');
  }

  <div>{`<ClientOnlyComponent />`}</div>
};

const ClientOnlyComponentWrapper = () => {
  return (
    <Suspense fallback="Loading...">
      <ClientOnlyComponent />
    </Suspense>
  )
}

export default ClientOnlyComponentWrapper;
