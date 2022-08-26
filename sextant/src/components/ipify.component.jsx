import { useEffect, useState } from "react";

export default function Ipify(props) {
  
  const [ip, setIp] = useState('');

  useEffect(() => {
    fetch('https://api64.ipify.org?format=json')
      .then(res => res.json())
      .then(data => {
        setIp(data.ip)});
      }, []);

  var ipv4 = 'Not available';
  var ipv6 = 'Not available';

  if (ip.includes('.')) {
    ipv4 = ip;
  } else if (ip.includes(':')) {
    ipv6 = ip;
  }

  if (props.type === 'ipv4') {
    return(
      <div className="ip">
        <p>{ipv4}</p>
      </div>
    );
  } else {
    return(
      <div className="ip">
        <p>{ipv6}</p>
      </div>
    );
  }
}