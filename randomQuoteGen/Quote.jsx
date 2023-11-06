import React, {useState, useEffect} from 'react'

function Quote() {
    const [data, setData] = useState([]);

    const [quote, setQuote] = useState();


    useEffect(() => {
      fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((response) => setData(response))
    }, [setData]);
   

    

    let handleQuote = () => {
      let randomNumber = Math.floor(Math.random() * 15);
      let eachQuote = [data[randomNumber]];

      return setQuote(eachQuote);
    }

    console.log(quote);
  return (
    <div>
        {
          quote?.map((quote, index) => (
            <div key={index}>
              <h2>{quote?.text}</h2>
              <p>by {quote?.author}</p>
            </div>
          ))
        }

        <button onClick={handleQuote}>Generate</button>
    </div>
  )
}

export default Quote
