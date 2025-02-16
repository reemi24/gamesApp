import { UI } from "./ui.module.js";
import { Details } from "./details.module.js";

export class Home{
    constructor(){
        document.querySelectorAll(".nav-link").forEach((link)=>{
            link.addEventListener("click",() => {
                this.ChangeActiveLink(link);
                const category = link.dataset.category;
                this.getGames(category)
            });
        });
        this.lds_spinner = document.querySelector(".lds-spinner");

        this.ui = new UI();

        this.details = document.getElementById("details")
        this.games = document.getElementById("games")
        this.getGames("mmorpg")
    }

    ChangeActiveLink(link){
        document.querySelector(".navbar-nav .active").classList.remove("active");
        link.classList.add("active")
    }

    async getGames(cat){
        this.lds_spinner.classList.remove("d-none")
        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,{
            method:"GET",
            headers:{
                'x-rapidapi-key': '69856bde43msh0734fe010347099p17fc99jsne132d693dc02',
		        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        });
        const response = await api.json();
        this.lds_spinner.classList.add("d-none")
        this.ui.displayGames(response)

        document.querySelectorAll(".card").forEach((card) => {
            card.addEventListener("click",()=>{
                this.details.classList.remove('d-none')
                this.games.classList.add('d-none')
                new Details(card.dataset.id)
            });
        });
    }
}

