import { useState } from "react";
import "./App.css";

function App() {
  const [image, setimage] = useState<string | null>();
  return (
    <div className="App">
      <input
        type="file"
        onChange={(e) => {
          let file = e.target.files?.item(0);
          if (file) {
            let url = URL.createObjectURL(file);
            setimage(url);
          }
        }}
      />
      {image && <img src={image} alt="" />}
    </div>
  );
}

export default App;
