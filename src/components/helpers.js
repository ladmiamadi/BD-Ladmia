import { useHistory } from "react-router-dom";

const list = () => {
            if (JSON.parse(sessionStorage.getItem('x'))) {
                return JSON.parse(sessionStorage.getItem('x'));
            } else {
                return [];
            }
        }


export default  list ;