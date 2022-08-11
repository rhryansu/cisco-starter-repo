import Card from "./card.component";
import './exhibit.styles.css'

export default function Exhibit() {
  return (
    <div className="exhibit">
      <h1>Panel</h1>
      <Card
        title="Sextant"
        description="A React application that allows you to create and share your own custom sextant."
      />
    </div>
  );
}