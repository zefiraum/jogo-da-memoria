import { useEffect } from "react";
import { useMemo, useState } from "react";
import "../../styles/game.css";

export function Game() {
  const [card, setCard] = useState(["", ""]); // array de dois tamanhos

  console.log(card);
  function virarCarta(id) {
    if (card[1] !== "") return;

    if (card[0] === "") {
      setCard([id, ""]);
      return;
    }

    setCard((prev) => [prev[0], id]);
  }

  useEffect(() => {
    let timeout;

    if (card[1] !== "") {
      //valida

      timeout = setTimeout(() => {
        setCard(["", ""]);
      }, 700);
    }
    () => {
      clearTimeout(timeout);
    };
  }, [card]);

  // const cards = [
  //   "beth",
  //   "jerry",
  //   "jesssica",
  //   "morty",
  //   "pessoa-passaro",
  //   "pickle-rick",
  //   "rick",
  //   "summer",
  //   "meeseeks",
  //   "scroopy",
  // ];

  const cards = [
    { character: "beth" },
    { character: "beth" },
    { character: "morty" },
    { character: "morty" },
    { character: "rick" },
    { character: "rick" },
    { character: "jessica" },
    { character: "jessica" },
    { character: "scroopy" },
    { character: "scroopy" },
  ];

  const shuffledArray = useMemo(
    () => cards.sort((a, b) => 0.5 - Math.random()),
    []
  );

  const listaCards = shuffledArray.map((array, id) => {
    return (
      <div
        key={id + array.character}
        className={`card ${array.character} ${
          card[0] === id ? "virar__carta" : ""
        } ${card[1] === id ? "virar__carta" : ""}`}
        onClick={() => virarCarta(id)}
      >
        <div className={`face front ${array.character}`}></div>
        <div className={`face back`}></div>
      </div>
    );
  });

  return <div className="grid">{listaCards}</div>;
}
