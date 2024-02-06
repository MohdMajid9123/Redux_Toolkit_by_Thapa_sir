import Chance from "chance";

const Chances = () => {
  let chance = Chance();
  return chance.name({ middle: true });
};

export default Chances;
