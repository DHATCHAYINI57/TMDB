import api from '../constants/index'
import axios from 'axios'
import https from 'https'


const agent = new https.Agent({
  rejectUnauthorized: false,
});

  const getMovieApi = () => {
  try {
       const resp =  axios.get(api.GENRE_API,{ httpsAgent: agent })
       
      return resp;
} catch (err) {
      console.error(err);
  }
};

export default getMovieApi();