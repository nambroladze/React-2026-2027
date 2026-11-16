import { useState } from "react";

const faces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

export default function Dice() {
  function rollDice() {
    const random = Math.floor(Math.random() * 6);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "120px" }}>
        {"გამოიტანეთ სწორი კამათლის ემოჯი"}
      </div>
      <p>You rolled: გაგორებული მნიშვნელობა ციფრებში</p>
      <button>Roll 🎲</button>
    </div>
  );
}
