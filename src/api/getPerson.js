import axios from 'axios'

const getPerson = () => {
    //The promise way
    return axios
        .get("https://randomuser.me/api/")
        .then ((res)=> {
            return res.data.results[0];
        });
        // .then ((res)=> {
        //     return res.results;
        // })
        // .then ((res)=> {
        //     console.log('res: ', res);
        // });
    
  }

  export default getPerson;