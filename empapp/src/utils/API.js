import axios from "axios";


// const BASEURL = 'https://randomuser.me/api/';

// const API = {
//     $.ajax({
//         url: 'https://randomuser.me/api/',
//         dataType: 'json',
//         success: function(data) {
//           console.log(data);
//         }
//       })
// }


export default  {
    getRandomPeople: function() {
        return axios.get("https://randomuser.me/api/?results=100")
    }
};