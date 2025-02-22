import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    
      fetch("https://dog.ceo/api/breeds/image/random/3")
    .then((r) => r.json())
    .then((data) => {
      setImages(data.message);
    });
    
  }, []);
 
  
  useEffect(()=>{
    setTimeout(() => {
      console.log('set');
      setCount(0)
    },5000);
  },[])

  if(!images){
    return <h2>Loading.....</h2>
  }

  console.log("Component rendering");
  

  return(
  <div>
    <button onClick={() => setCount((count) => count + 1)}>
      I've been clicked {count} times
    </button>
    <input
      type="text"
      placeholder="Type away..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <p>{images? null:"Loading.."}</p>
   {images.map((image) => (
        <img src={image} key={image} alt="{image}" />
      ))}
  </div>
  )
}

export default App;