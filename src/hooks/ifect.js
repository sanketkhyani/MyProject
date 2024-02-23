import { useEffect, useState } from "react";
function Use() {
    const [data, setData] = useState([]);

    useEffect(() => {    
        function fetchData() {    
            fetch("https://jsonplaceholder.typicode.com/users")
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                setData(data);
              })
        }

        fetchData();
    }, []);
  return (
    <div>
      <button onClick={() => console.log(data)}>Click </button>
      <div className="main">
        <h1
          style={{
            backgroundImage:
              "https://forms.visme.co/formsPlayer/8r6zk44e-untitled-project",
          }}
        >
         
          
        </h1>
       
      </div>
    </div>
  );
}
export default Use;
