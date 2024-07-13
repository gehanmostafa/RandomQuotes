let GetQuotes = () => {
    let Request = new XMLHttpRequest();
    Request.open("GET", "https://type.fit/api/quotes");
    Request.responseType = "json";
    Request.send()
  
    Request.onload = () => {
        let Quotes = Request.response;
        let i = Math.round(Math.random() * 16);
        let element = Quotes[i];
        let content = ` 
        <p class="quote">${element.text}</p>
        <div class="author">${element.author}</div>`;
        document.getElementsByClassName("content")[0].innerHTML = content;
    };
}

let btn = document.getElementById("button");
btn.addEventListener("click", () => {
    GetQuotes();
   
}
) 
