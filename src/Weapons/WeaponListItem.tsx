import * as React from "react";
import "./styles.css";

const WeaponListItem: React.FC<any> = ({ weapon }) => {
  return (
    <div className="weapon-list-item">
      <p>
        <strong>{weapon.name}</strong>
      </p>
      <p>Базовый урон: {weapon.damage}</p>
      <p>{weapon.tags.map((tag: any) => tag.value).join(", ")}</p>
      <p>{weapon.details}</p>
    </div>
  );
};

export default WeaponListItem;
