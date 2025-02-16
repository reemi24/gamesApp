export class UI{
    constructor(){};

    displayGames(data){
        let cartona = ` `
        for (let i = 0; i < data.length; i++) {
            cartona +=`<div data-id="${data[i].id}" class="col-md-3  border border-1 pt-3 rounded-3 border-edit card bg-transparent px-0 card">
            <img src="${data[i].thumbnail}" class="w-100 px-2" alt="">
            <div class=" px-2 hstack justify-content-between">
              <div >
                <h5 class="text-white pt-3">${data[i].title}</h5>
              </div>
              <div>
                <button class="btn btn-primary py-0 px-2 mt-3 ms-2">Free</button>
              </div>
            </div>
            <p class="text-center text-white px-2">${data[i].short_description.split(" ",5)}</p>
            <div class="border-top border-1 border-edit"></div>
            <div class="hstack justify-content-between mt-2 px-2">
              <div>
                <h6 class="text-white fw-bold edit-foot">${data[i].genre}</h6>
              </div>
              <div>
                <h6 class="text-white fw-bold ms-5 edit-foot">${data[i].platform}</h6>
              </div>
            </div>
          </div>`
        }
        document.querySelector("#myData").innerHTML = cartona;
  }

  displayGamesInfo(data){
    let detailsBox = ` `
      detailsBox +=`
        <div class=" py-3 row">
          <div class="col-md-4">
            <img src="${data.thumbnail}" class="w-100" alt="">
          </div>
          <div class="text-white col-md-8">
            <h2 class="fw-bold">Title: ${data.title}</h2>
            <p>Category: <span class="bg-info px-2 py-1 rounded rounded-3 text-dark">${data.genre}</span></p>
            <p>Platform: <span class="bg-info px-2 py-1 rounded rounded-3 text-dark">${data.platform}</span></p>
            <p>Status: <span class="bg-info px-2 py-1 rounded rounded-3 text-dark">${data.status}</span></p>
            <p>${data.description}</p>
            <button class="btn border border-1 border-warning text-white fw-bolder btn-show"><a href="${data.game_url}" target="_blank">Show Game</a></button>
          </div>
        </div>`;

      document.querySelector("#myDataInfo").innerHTML = detailsBox;
  }
}