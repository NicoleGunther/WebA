import axios from 'axios'
export const App = {
    getConnection(){
        return axios.get('http://150.136.7.153:5000/meas');
    },
}
export default App