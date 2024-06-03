import React from "react";

const ClientOnlyComponent = () => {
  if (typeof window === 'undefined') {
    throw Error('This component should only render on the client.');
  }

  <div>{`<ClientOnlyComponent />`}</div>
};

export default ClientOnlyComponent;
