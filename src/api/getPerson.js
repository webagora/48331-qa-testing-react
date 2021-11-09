import axios from 'axios'

const getPerson = () => {

    return axios.get("https://randomuser.me/api/");
    
  }

  export default getPerson;