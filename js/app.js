let pages = document.querySelector(".pages");
let elForm = document.querySelector("form");
let search = document.querySelector(".search");

let token = localStorage.token;

let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  localStorage.clear(async function () {
    await window.location("../index.html");
  });
  
 
});
if (!token) {
  document.location.replace("../index.html");
}


 fetch(
  "https://www.googleapis.com/books/v1/volumes?q=${a}%7BsearchItem%7D&startIndex=1&maxResults=6&orderBy=newest"
)
  .then((res) => res.json())
  .then((data) => {
    data.items.forEach((item) => {
      let card = document.createElement("div");
      card.classList.add("card-book");
      let h3 = document.createElement("h3");
      h3.textContent = item.volumeInfo.title;
      let p = document.createElement("p");
      p.textContent = item.volumeInfo.authors;
      let img = document.createElement("img");
      img.classList.add("img");
      img.src = item.volumeInfo.imageLinks.smallThumbnail;
      let btn = document.createElement("div");
      btn.classList.add("btn-book");
      let button1 = document.createElement("button");
      let button2 = document.createElement("button");
      let button3 = document.createElement("button");
      let a1 = document.createElement("a");
      let a2 = document.createElement("a");
      let a3 = document.createElement("a");
      a2.style.textDecoration="none";
      a1.textContent = "Bookmark";
      button1.append(a1);
      a2.href = item.selfLink;
      a2.target="_blank";
      a2.textContent = "More info";
      a3.textContent = "Read";
      button3.append(a3);
      button1.classList.add("button1");
      button2.classList.add("button2");
      button3.classList.add("button3");
      button2.append(a2);

      button1.addEventListener("click", (evt) => {
        evt.preventDefault();
          
        
        let bookmark = document.querySelector(".bookmark");
        let cards = document.createElement("div");
        let paragraph = document.createElement("p");
        paragraph.classList.add('birinchi');
        let para = document.createElement("p");
        para.classList.add('ikkinchi');
        let delet = document.createElement('button');
        delet.classList.add('delete');
        delet.textContent="DELETE";
        paragraph.textContent = item.volumeInfo.title;
        para.textContent = item.volumeInfo.authors;
        cards.style.border="2px solid black";
        cards.style.height="75px";
        cards.style.borderRadius="10px";
        cards.style.overflow="scroll";
        cards.style.margin="8px";
        cards.append(paragraph, para, delet);
        bookmark.appendChild(cards);

        delet.addEventListener('click',(evt)=>{
        evt.preventDefault();
        cards.style.display="none";
        });
        
      });
      btn.append(button1, button2);
      card.append(img, h3, p, btn, button3);
      pages.appendChild(card);


      elForm.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let elInputVal = search.value;
        fetch(elInputVal);

        elInput.value = '';
      });

      
      


      let modal=document.querySelector('.modal');
     button3.addEventListener('click',(evt)=>{
      evt.preventDefault();
      let rasm=document.querySelector('.rasm');
      rasm.src = item.volumeInfo.imageLinks.smallThumbnail;
      let gap=document.querySelector('.gap');
      gap.textContent = item.volumeInfo.description;
      let avtor=document.querySelector('.avtor');
      avtor.textContent = item.volumeInfo.title;
       modal.style.display="block";
     });

     let btnn=document.querySelector('.btnn');
     btnn.addEventListener('click',(evt)=>{
      evt.preventDefault();
     
         modal.style.display = "none";
      
     } );
      

    });
  })
  .catch((err) => console.log(err));
