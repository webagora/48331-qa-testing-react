import axios from 'axios'

const getPerson = async () => {
    //The promise way - return the axios call
    // return axios
    
        // .get("https://randomuser.me/api/")
        // //  return the data without complications
        // .then ((res)=> {
        //     return res.data.results[0];
        // });

        
        // .then ((res)=> {
        //     return res.results;
        // })
        // .then ((res)=> {
        //     console.log('res: ', res);
        // });

    // The async way
    const res = await axios.get("https://randomuser.me/api/");
    return res.data.results[0]; 
    
  } 

  export default getPerson;