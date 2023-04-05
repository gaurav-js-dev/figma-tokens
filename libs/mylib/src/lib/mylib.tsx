import '../utils/styles/main.scss';

export interface MylibProps {
  header: string;
}

export function Mylib(props: MylibProps) {
  return (
    <div className="container">
      <h1>{props.header}</h1>
      <button onClick={() => console.log('Clicked')}>Click me</button>
      <div className="content">This content is coming from library</div>
    </div>
  );
}

export default Mylib;
