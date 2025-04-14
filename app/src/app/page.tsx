'use client'

import { useEffect, useRef, useState } from 'react';

export default function Home() {

  const [counter, setCounter] = useState(0);
  const counterBefore = useRef()

  useEffect(() => {
    if (counterBefore.current === undefined) {
      counterBefore.current = counter;
    } else {
      console.log(`Counter changed from ${counterBefore.current} to ${counter}`);
      counterBefore.current = counter;
    }
  }, [counter])


  return (
    <>
      {/* <button onClick={() => setCounter(counter + 1)}>Click me</button> */}
      <h1>Counter: {counter}</h1>
    </>
    // <div>
    //   This is home page
    // </div>
  );
}
