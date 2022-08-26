import Card from "./card.component";
import './exhibit.styles.css'

export default function Exhibit(props) {
  return (
    <div className="exhibit">
      <h1>Welcome!</h1>
      <Card
        title="Sextant"
        description="A React application that allows you to create and share your own custom sextant."
        ip={props.ip}
      />
    </div>
  );
}