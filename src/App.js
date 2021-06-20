import data from "./data/bujoux.json";
import "./App.css";

function App() {
  console.log(data);
  const filtered = data.filter(
    (item) => item.product_url !== "paused" && item.category !== ""
  );
  return (
    <ul className="App">
      <li>{`<SHOP>`}</li>
      {filtered.map((item, index) => (
        <ul key={index}>
          <li>{`<SHOPITEM>`}</li>
          <li>{`<ITEM_ID>${item.handleId}</ITEM_ID>`}</li>
          <li>{`<PRODUCTNAME>${item.name}</PRODUCTNAME>`}</li>
          <li>{`<URL>${item.product_url}</URL>`}</li>
          <li>{`<IMGURL>${item.productImageUrl.split(";")[0]}</IMGURL>`}</li>
          <li>{`<PRICE_VAT>${item.price}</PRICE_VAT>`}</li>
          <li>{`<MANUFACTURER>Bujoux</MANUFACTURER>`}</li>
          <li>{`<CATEGORYTEXT>Glami.cz | Šperky a hodinky | ${item.category}</CATEGORYTEXT>`}</li>
          <li>{`<SIZE></SIZE>`}</li>
          <li>{`<DELIVERY_DATE>0</DELIVERY_DATE>`}</li>
          <li>{`</SHOPITEM>`}</li>
        </ul>
      ))}
      <li>{`</SHOP>`}</li>
    </ul>
  );
}

export default App;
