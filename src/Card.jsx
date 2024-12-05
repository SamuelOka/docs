export function Card({ name, price, image }) {
    return (
      <div
        style={{
          background: "grey",
          padding: "25px",
          borderRadius: "10px",
        }}
      >
        <img
          style={{
            height: "50%",
          }}
          src={image}
          alt=""
        />
        <h2>{name}</h2>
        <h3>{price}</h3>
      </div>
    );
  }
  