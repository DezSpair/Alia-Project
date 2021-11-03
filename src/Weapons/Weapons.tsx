import * as React from "react";
import CreatableSelect from "react-select/creatable";
import WeaponListItem from "./WeaponListItem";
import "./styles.css";

const tags = [
  "с боезапасом",
  "Ближнего боя",
  "Штурмовое",
  "Дальней дистанции",
  "Одноразовое",
  "Многоразовые",
  "Не расходуемое",
  "Миниатюрное",
  "Малое",
  "Большое",
  "Огромное",
  "Легкое",
  "Тяжелое",
  "Прицельное",
  "Многоцелевое (N)",
  "Массовое",
  "Быстрое",
  "Медленное",
  "Проникающее",
  "Разрывающее",
  "Оглушающее (%)",
  "Отталкивающее",
  "Обездвиживающее (%)",
  "Двуручное",
  "Стационарное",
  "Фехтовальное",
  "Зверское"
];

const options = tags.map((tag) => ({ label: tag, value: tag }));

export default function Weapons() {
  const [weapons, setWeapons] = React.useState<any>([]);
  const [newWeapon, setNewWeapon] = React.useState({});

  const onNameChange = (e: any) =>
    setNewWeapon({ ...newWeapon, name: e.target.value });
  const onDamageChange = (e: any) =>
    setNewWeapon({ ...newWeapon, damage: e.target.value });
  const onTagsChange = (tags: any) => setNewWeapon({ ...newWeapon, tags });
  const onDetailsChange = (e: any) =>
    setNewWeapon({ ...newWeapon, details: e.target.value });

  const createWeapon = () => {
    setWeapons([...weapons, newWeapon]);
  };

  return (
    <div>
      <h2>Create Weapon</h2>
      <label className="weapon-creation-label">
        <span className="label-name">Name</span>
        <input className="weapon-input-field" onChange={onNameChange} />
      </label>
      <label className="weapon-creation-label">
        <span className="label-name">Base damage</span>
        <input className="weapon-input-field" onChange={onDamageChange} />
      </label>
      <label className="weapon-creation-label">
        <span className="label-name">Tags</span>
        <CreatableSelect
          className="weapon-input-field"
          isMulti
          isClearable
          onChange={onTagsChange}
          options={options}
        />
      </label>
      <label className="weapon-creation-label">
        <span className="label-name">Details</span>
        <textarea className="weapon-input-field" onChange={onDetailsChange} />
      </label>
      <button onClick={createWeapon}>Create</button>
      {weapons.map((weapon: any) => (
        <WeaponListItem weapon={weapon} key={weapon.name} />
      ))}
    </div>
  );
}
