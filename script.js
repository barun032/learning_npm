import axios from "axios"
import Quote from 'inspirational-quotes'

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => console.log(response.data))

  console.log(Quote.getQuote());