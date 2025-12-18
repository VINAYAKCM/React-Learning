export default function Joke(props) {
  return (
    <div>
      <ul className="jokes">
        <li className="setup">Setup: {props.setup}</li>
        <p className="punch">Punchline: {props.punchline}</p>
      </ul>
    </div>
  );
}