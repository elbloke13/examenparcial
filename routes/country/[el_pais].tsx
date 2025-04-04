import {PageProps } from "$fresh/server.ts";
import { FunctionalComponent } from "preact/src/index.d.ts";
import Axios from "npm:axios"



type Country = {
    country: string;
    capital: string;
}

type CountryProps = {

    country: string;
    city: string;

}



/*const Pais:FunctionalComponent = (props) => {
    
    const API_KEY = Deno.env.get("API_KEY");
    const url = "https://api.api-ninjas.com/v1/country";
    const props = await Axios.get(url);
    
    
    return (
        
    );
}

*/

