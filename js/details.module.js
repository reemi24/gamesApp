import { UI } from "./ui.module.js";

export class Details{
    constructor(id){
        this.closeIcon();

        this.lds_spinner = document.querySelector(".lds-spinner");
        this.getGamesInfo(id);

    }

    closeIcon(){
        document.querySelector("#close_icon").addEventListener("click", () => {
            document.querySelector("#details").classList.add("d-none")
            document.querySelector("#games").classList.remove("d-none")
        });
    }
    
    async getGamesInfo(id){
        this.lds_spinner.classList.remove("d-none")
        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{
            method:"GET",
            headers:{
                'x-rapidapi-key': '69856bde43msh0734fe010347099p17fc99jsne132d693dc02',
		        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        });
        const response = await api.json();
        console.log(response);
        
        this.lds_spinner.classList.add("d-none")
        new UI().displayGamesInfo(response)
    }
}