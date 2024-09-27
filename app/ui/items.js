import Item from "./item";
export default function Items({ data }) {
  return (
    <div class="flex flex-wrap justify-center gap-4 p-4">
      {Object.keys(data).map((item, ind) => (
        <Item
          key={ind}
          title={item.charAt(0).toUpperCase() + item.slice(1)}
          data={data[item]}
        />
      ))}
    </div>
  );
}
