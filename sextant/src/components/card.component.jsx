import './card.styles.css'
import Ipify from './ipify.component';
import LatencyTester from './latencyTester.component';

export default function Card(props) {
  
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p className='ipv4'>Your ipv4 address is: {<Ipify type="ipv4"/>}</p>
      <p className='ipv6'>Your ipv6 address is: {<Ipify type="ipv6"/>}</p>
      <LatencyTester/>
    </div>
  );
}
