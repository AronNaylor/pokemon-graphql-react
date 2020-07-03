import React from "react";

export default function Pokemon(props) {
  const firstTwoSpecialAttacks = [
    props.attacksSpecial[0],
    props.attacksSpecial[1],
  ];

  return (
    <div className="pokemon" key={props.id}>
      <div className="metaBox">
        <span id="maxCP">MaxCP: {props.maxCP}</span>{" "}
        <span id="name">{props.name.toUpperCase()}</span>{" "}
        <span id="maxHP">MaxHP: {props.maxHP}</span>
      </div>
      <div className="imgBox">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="detailsBox">
        {props.attacksFast.map((_attack) => (
          <span>{_attack.name.toUpperCase()}</span>
        ))}
      </div>
      <div className="detailsBox">
        {firstTwoSpecialAttacks.map((_attack) => (
          <span>{_attack.name.toUpperCase()}</span>
        ))}
      </div>
      <style jsx>{`
        .pokemon {
          padding: 5px 5px 5px 5px;
        }
        .imgBox {
          display: flex;
          justify-content: center;
          align-content: center;
        }
        img {
          max-width: 80%;
          max-height: auto;
          padding: 5px 5px 5px 5px;
        }

        .metaBox {
          display: flex;
          justify-content: space-evenly;
          font-weight: bold;
        }

        .detailsBox {
          display: flex;
          justify-content: space-evenly;
          font-weight: bold;
          text-align: center;
        }
        #name {
          font-size: 24px;
          margin-left: 2px;
          margin-right: 2px;
          text-decoration: underline;
        }
        #maxCP {
          color: blue;
        }
        #maxHP {
          color: green;
        }
      `}</style>
    </div>
  );
}
