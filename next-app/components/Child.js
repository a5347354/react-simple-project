export default function Child(props) {
  const handleClick = () => {
    props.sendValue('Good Morning');
  };
  return (
    <div className="container">
        <button onClick={handleClick}>Send Value</button>
    </div>
  )
};
