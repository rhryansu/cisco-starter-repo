import { useState } from "react";
export default function LatencyTester() {
  const webSocket = new WebSocket('ws://localhost:55455/');

  const [latency, setLatency] = useState(0);

  webSocket.onmessage = (event) => {
    setLatency(new Date().getTime() - event.data);
  }

  return(
    <div className="latency-tester">
      <p>The latency between server and client is: {latency}ms</p>
    </div>
  )
}