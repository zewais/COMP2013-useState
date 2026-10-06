//Description: Counter buttons to increment and decrement a count to limits.
import { useState } from "react";

export default function CounterWithLimits() {
  const [countWithLimits, setCountWithLimits] = useState(0);
  const limit = 10;

  return (
    <div style={{ border: "1px yellow solid", margin: "10px" }}>
      <p>
        Counter with limits to {limit} and {-limit}
      </p>
      <button
        onClick={() =>
          countWithLimits < limit && setCountWithLimits(countWithLimits + 1)
        }
      >
        +
      </button>
      <p>{countWithLimits}</p>
      <button
        onClick={() =>
          countWithLimits > -limit && setCountWithLimits(countWithLimits - 1)
        }
      >
        -
      </button>
    </div>
  );
}
