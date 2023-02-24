/** @format */

function BottomTest() {
  const names = ["Bruce", "clark", "robin", "tolu"];
  const nameList = names.map((name) => <li>{name}</li>);
  return <div><ul>{nameList}</ul></div>;
}
export default BottomTest;
