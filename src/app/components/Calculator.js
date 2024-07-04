"use client"
import styles from "../page.module.scss";
import { useState } from 'react';

const Calculator = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    setResult(Number(input1) + Number(input2));
  };

  return (
    <div className={styles.addform}>
      <h1>Adding Two Numbers</h1>
      <input
        type="number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="First number"
      />
      <input
        type="number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Second number"
      />
      <button onClick={handleAddition} className={styles.addbutton}>Add Two Numbers</button>
      <h2>Total: {result}</h2>
    </div>
  );
};

export default Calculator;
