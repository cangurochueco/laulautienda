import "./Card.css";
export const Card = (props) => {
  console.log(props);
  return (
    <div className="container-card">
      <h2>titulo:{props.title}</h2>
      <h3>precio:{props.price}</h3>
      <h3>stock:{props.stock}</h3>
    </div>
  );
};
