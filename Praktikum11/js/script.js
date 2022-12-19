document.querySelectorAll("#option a").forEach((a) => {
    // jika nanti di klik akan menjalankan sebuah fungsi computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
})


function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element hasil komputer dengan queryselector
    let pilihanKomputer = document.querySelector("#result");

    // mengisi pilihan komputer dengan array 
    let choices = ["Batu", "Kertas", "Gunting"];

    // pilihan komputer secara random
    pilihanKomputer.innerHTML = choices[Math.round(Math.random() * choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan user == pilihan komputer (DRAW)
    if (pilihanUser == pilihanKomputer){
        // alert("DRAW");
        setTimeout(() => alert("DRAW"), 300);
    } 

    // jika pilihan user menang 
    if (pilihanUser == "Batu" && pilihanKomputer == "Gunting"){
        //alert("YOUR WINN");
        setTimeout(() => alert("YOUR WINN"), 300);
    } else if (pilihanUser == "Kertas" && pilihanKomputer == "Batu"){
        //alert("YOUR WINN");
        setTimeout(() => alert("YOUR WINN"), 300);
    } else if (pilihanUser == "Gunting" && pilihanKomputer == "Kertas"){
       // alert("YOUR WINN");
       setTimeout(() => alert("YOUR WINN"), 300);
    }

    // jika pilihan komputer menang
    if (pilihanKomputer == "Batu" && pilihanUser == "Gunting"){
        //alert("COMPUTER WINN");
        setTimeout(() => alert("COMPUTER WINN"), 300);
    } else if(pilihanKomputer == "Kertas" && pilihanUser == "Batu"){
        //alert("COMPUTER WINN");
        setTimeout(() => alert("COMPUTER WINN"), 300);
    } else if(pilihanKomputer == "Gunting" && pilihanUser == "Kertas"){
        //alert("COMPUTER WINN")
        setTimeout(() => alert("COMPUTER WINN"), 300);
    }

    
}