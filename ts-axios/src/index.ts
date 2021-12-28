import { AxiosRequestInterface } from "./types";
import xhr from "./xhr";
function axios(config: AxiosRequestInterface){
    xhr(config);
}
export default axios;