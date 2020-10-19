import axios from "axios";

const instance=axios.create({
    baseURL:"https://my-react-burger-290e3.firebaseio.com/"
});

export default instance;
