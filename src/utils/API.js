import axios from "axios";

const projects = () => 
    axios.get('https://api.github.com/users/jaychan0125/repos');

export default projects;