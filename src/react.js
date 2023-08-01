const ReactCodeString = `
  import React, { useState, useEffect } from 'react';

  function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = \`Clicked \${count} times\`;
    }, [count]);

    const handleIncrement = () => {
      setCount(count + 1);
    };

    return (
      <div>
        <h1>React Counter</h1>
        <p>Clicked: {count} times</p>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    );
  }

  export default App;
`;

export default ReactCodeString