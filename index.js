import { createRoot } from 'react-dom/client';

function NavigationBar() {
  return <nav id="navigation"></nav>;
}

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);