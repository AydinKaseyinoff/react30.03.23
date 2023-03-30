import "./styles.css";
import Counter from "./components/counter/Counter";
import Name from "./components/name/Name";

export default function App() {
  function onSayHelloClick() {
    alert("Hello");
  }

  const names = [
    { name: "Aijan", score: 10, age: 40, gender: "Female" },
    { name: "Aydin", score: 22, age: 33, gender: "Male" }
  ];

  const output = names.map((person) => (
    <li>
      <td>{person.name}</td>
      <td>{person.score}</td>
      <td>{person.age}</td>
      <td>{person.gender}</td>
    </li>
  ));
  const table3 = [
    { td1: "Item", td2: "QTY", td3: "PRICE" },
    {
      td1: "Don't make Me Think By Steve Krug",
      td2: "In Stock",
      td3: "1",
      td4: "$30.02"
    },
    {
      td1: "A Project Guide to UX desing by Russ Unger & caroyn Chandler",
      td2: "In Stock",
      td3: "2",
      td4: "$26.47 * 2"
    },
    {
      td1: "Introducing HTML5 by Bruce Lawson & remy Sharp",
      td2: "Out of Stock",
      td3: "1",
      td4: "$22.23"
    },
    { td1: "Subtotal", td2: "$135.36" },
    { td1: "Tax", td2: "$13.54" },
    { td1: "Total", td2: "$148.90" }
  ];
  const table2 = [
    {
      td1: "Name",
      td2: "Position",
      td3: "Office",
      td4: "Age",
      td5: "Start date",
      td6: "Salary",
    },
    {
      td1: "Airi Satou",
      td2: "Accountant",
      td3: "Tokyo",
      td4: "33",
      td5: "2008/11/28",
      td6: "$162.700",
    },
    {
      td1: "Angelica Ramos",
      td2: "Chief Executive Officer (CEO)",
      td3: "London",
      td4: "47",
      td5: "2009/10/09",
      td6: "$1,200,000",
    },
    {
      td1: "Ashton Cox",
      td2: "Junior Technical Author",
      td3: "San Francisco",
      td4: "66",
      td5: "2009/01/12",
      td6: "$86,000",
    },
    {
      td1: "Bradley Greer",
      td2: "Software Engineer",
      td3: "London",
      td4: "41",
      td5: "2012/10/13",
      td6: "$132,0000",
    },
    {
      td1: "Brenden Wagner",
      td2: "Software Engineer",
      td3: "San Francisco",
      td4: "28",
      td5: "2011/06/07",
      td6: "$206,850",
    },
    {
      td1: "Brielle Williamson",
      td2: "Integration Specialist",
      td3: "New York",
      td4: "61",
      td5: "2012/12/02",
      td6: "$372,000",
    },
    {
      td1: "Bruno Nash",
      td2: "Software Engineer",
      td3: "London",
      td4: "38",
      td5: "2011/12/12",
      td6: "$106,450",
    },
    {
      td1: "Caesar Vance",
      td2: "Pre-Sales Support",
      td3: "New York",
      td4: "21",
      td5: "2008/11/28",
      td6: "$145,600",
    },
    {
      td1: "Cara Stevens",
      td2: "Sales Assistant",
      td3: "New York",
      td4: "46",
      td5: "2011/12/06",
      td6: "$145.600",
    },
    {
      td1: "Cedric Kelly",
      td2: "Senior Javascript Developer",
      td3: "Edinburgh",
      td4: "22",
      td5: "2012/03/29",
      td6: "$433,060",
    },
    {
      td1: "Name",
      td2: "Position",
      td3: "Office",
      td4: "Age",
      td5: "Start date",
      td6: "Salary",
    },
  ];

  return (
    <div className="App">
      <Name />
      <hr />
      <Counter />
      <hr />
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {output}
        <button onMouseMove={onSayHelloClick}>Say Hello</button>
      </table>
      <table>
        {/* создание заголовка таблицы */}
        <thead>
          <tr>
            <th>{table3[0].td1}</th>
            <th>{table3[0].td2}</th>
            <th>{table3[0].td3}</th>
            <th>{table3[0].td4}</th>
          </tr>
        </thead>
        {/* создание тела таблицы */}
        <tbody>
          {table3.slice(1).map((item, index) => (
            <tr key={index}>
              <td>{item.td1}</td>
              <td>{item.td2}</td>
              <td>{item.td3}</td>
              <td>{item.td4}</td>
            </tr>
          ))}
          {/* добавление итоговых строк */}
          <tr>
            <td>{table3[4].td1}</td>
            <td colSpan="3">{table3[4].td2}</td>
          </tr>
          <tr>
            <td>{table3[5].td1}</td>
            <td colSpan="3">{table3[5].td2}</td>
          </tr>
          <tr>
            <td>{table3[6].td1}</td>
            <td colSpan="3">{table3[6].td2}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>{table2[0].td1}</th>
            <th>{table2[0].td2}</th>
            <th>{table2[0].td3}</th>
            <th>{table2[0].td4}</th>
            <th>{table2[0].td5}</th>
            <th>{table2[0].td6}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{table2[1].td1}</td>
            <td>{table2[1].td2}</td>
            <td>{table2[1].td3}</td>
            <td>{table2[1].td4}</td>
            <td>{table2[1].td5}</td>
            <td>{table2[1].td6}</td>
          </tr>
          <tr>
            <td>{table2[2].td1}</td>
            <td>{table2[2].td2}</td>
            <td>{table2[2].td3}</td>
            <td>{table2[2].td4}</td>
            <td>{table2[2].td5}</td>
            <td>{table2[2].td6}</td>
          </tr>
          <tr>
            <td>{table2[3].td1}</td>
            <td>{table2[3].td2}</td>
            <td>{table2[3].td3}</td>
            <td>{table2[3].td4}</td>
            <td>{table2[3].td5}</td>
            <td>{table2[3].td6}</td>
          </tr>
          <tr>
            <td>{table2[4].td1}</td>
            <td>{table2[4].td2}</td>
            <td>{table2[4].td3}</td>
            <td>{table2[4].td4}</td>
            <td>{table2[4].td5}</td>
            <td>{table2[4].td6}</td>
          </tr>
          <tr>
            <td>{table2[5].td1}</td>
            <td>{table2[5].td2}</td>
            <td>{table2[5].td3}</td>
            <td>{table2[5].td4}</td>
            <td>{table2[5].td5}</td>
            <td>{table2[5].td6}</td>
          </tr>
          <tr>
            <td>{table2[6].td1}</td>
            <td>{table2[6].td2}</td>
            <td>{table2[6].td3}</td>
            <td>{table2[6].td4}</td>
            <td>{table2[6].td5}</td>
            <td>{table2[6].td6}</td>
          </tr>
          <tr>
            <td>{table2[7].td1}</td>
            <td>{table2[7].td2}</td>
            <td>{table2[7].td3}</td>
            <td>{table2[7].td4}</td>
            <td>{table2[7].td5}</td>
            <td>{table2[7].td6}</td>
          </tr>
          <tr>
            <td>{table2[8].td1}</td>
            <td>{table2[8].td2}</td>
            <td>{table2[8].td3}</td>
            <td>{table2[8].td4}</td>
            <td>{table2[8].td5}</td>
            <td>{table2[8].td6}</td>
          </tr>
          <tr>
            <td>{table2[9].td1}</td>
            <td>{table2[9].td2}</td>
            <td>{table2[9].td3}</td>
            <td>{table2[9].td4}</td>
            <td>{table2[9].td5}</td>
            <td>{table2[9].td6}</td>
          </tr>
          <tr>
            <td>{table2[10].td1}</td>
            <td>{table2[10].td2}</td>
            <td>{table2[10].td3}</td>
            <td>{table2[10].td4}</td>
            <td>{table2[10].td5}</td>
            <td>{table2[10].td6}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>{table2[0].td1}</th>
            <th>{table2[0].td2}</th>
            <th>{table2[0].td3}</th>
            <th>{table2[0].td4}</th>
            <th>{table2[0].td5}</th>
            <th>{table2[0].td6}</th>
          </tr>
        </thead>
      </table>

    </div>
  );
}
