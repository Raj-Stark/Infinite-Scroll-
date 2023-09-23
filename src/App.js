import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(50);

  const list = [];

  for (let i = 0; i < count; i++) {
    list.push(<div key={i}>{i + 1}</div>);
  }

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (
        window.scrollY + window.innerHeight >=
        document.body.offsetHeight - 100
      ) {
        setCount(count + 50);
      }
    });
  }, [count]);

  return (
    <div>
      {list.map((item) => {
        return item;
      })}
    </div>
  );
}
