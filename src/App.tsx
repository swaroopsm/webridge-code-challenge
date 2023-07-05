import { useState } from 'react';

import { Sidebar } from 'components/Sidebar';
import { SidebarProvider } from 'components/SidebarProvider';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SidebarProvider>
        <Sidebar />
      </SidebarProvider>
    </>
  );
}

export default App;
