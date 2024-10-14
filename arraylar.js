var siteler = ["emlak konut","aga oglu","kozalar"];
siteler[0] = ["a1","a2","a3","a4"];

siteler[0][2]=["1","2","3","4"];
siteler[0][2][3]=[];
let tumBorc = 0;
let toplam = 0;
let birles = 0;
function borcEkleme() {
    var borcmiktari = document.getElementById("borcMiktari").value;
    siteler[0][2][3].push(borcmiktari);
    document.getElementById("borcMiktari").value = "";
    
}
let i = 0;

function borcGoster() { 
    var yeniElemanMetni = siteler[0][2][3][i];
    var yeniListe = document.createElement("li");
    var metin = document.createTextNode(yeniElemanMetni);
    yeniListe.appendChild(metin);
    var liste = document.getElementById("borc_defteri") 
    liste.appendChild(yeniListe);
    
    //document.getElementById("borc_defteri").textContent = siteler[0][2][3][i]

    //console.log((i+1) + ". siparis = " + siteler[0][2][3][i]," TL");
    i++;
    
}
function borcYaz() {
    const now = new Date();
    const day = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    
    var borc_miktari = document.getElementById("borcMiktari").value;    
    if (borc_miktari == 0 || borc_miktari==null){
        alert("lutfen bir deger giriniz")
    }else{
        
        siteler[0][2][3].push(borc_miktari);
        var yeniElemanMetni ="Tarih: " + day + " Saat: " + time + "------->" + siteler[0][2][3][i] + " TL";
        var metin = document.createTextNode(yeniElemanMetni);
        var yeniListe = document.createElement("li");
        yeniListe.appendChild(metin);
        var liste = document.getElementById("borc_defteri");
        liste.prepend(yeniListe);
        document.getElementById("borcMiktari").value = "";
        document.getElementById("keypadBorcMiktari").value = "";
        borcTopla();
        
        i++;
} 
}
function borcTopla(){
    for(let a = 0; a <siteler[0][2][3].length; a++ ){
         toplam = toplam + Number(siteler[0][2][3][a]);

    }
    document.getElementById("toplam").textContent ="toplam tutar "+toplam+" TL";
    toplam = 0;
}


function borcSil() {
    var borc_miktari = document.getElementById("borcMiktari").value;    
    if (borc_miktari == 0 || borc_miktari==null){
    alert("lutfen bir deger giriniz")
}else{
    siteler[0][2][3].push(-borc_miktari);
    var yeniElemanMetni = siteler[0][2][3][i]+" TL BORC ODENDI";
    var metin = document.createTextNode(yeniElemanMetni);
    var yeniListe = document.createElement("li");
    yeniListe.appendChild(metin);
    var liste = document.getElementById("borc_defteri");
    liste.prepend(yeniListe);
    document.getElementById("borcMiktari").value = "";
    document.getElementById("keypadBorcMiktari").value = "";
    borcTopla();
    i++;
}
}
const keypadtextbox = document.getElementById('keypadBorcMiktari')
const textbox = document.getElementById('borcMiktari');
    const keypad = document.getElementById('keypad');

    // bosluga tikaltinca keypadin ortaya cikabilmesi icin
    textbox.addEventListener('click', function() {
      keypad.style.display = 'block';
    });

    // degerlerin textboxa sokmak icin
    function insertValue(value) {
      textbox.value += value;
      keypadtextbox.value += value;
    }


    // clear
    function clearTextbox() {
      textbox.value = '';
      keypadtextbox.value = '';
    }

    // baska bir yere basinca keypadin kapanabilmesi icin 
    document.addEventListener('click', function(event) {
      if (!textbox.contains(event.target) && !keypad.contains(event.target)) {
        keypad.style.display = 'none';
      }
    });
function tumBorcSil() {
    for(let a = 0; a <siteler[0][2][3].length; a++ ){
        tumBorc = tumBorc + Number(siteler[0][2][3][a]);

   }
   siteler[0][2][3].push(-tumBorc);
   var yeniElemanMetni = " TUM BORC SILINDI";
    var metin = document.createTextNode(yeniElemanMetni);
    var yeniListe = document.createElement("li");
    yeniListe.appendChild(metin);
    var liste = document.getElementById("borc_defteri");
    liste.prepend(yeniListe);
    document.getElementById("borcMiktari").value = "";
    borcTopla();
    i++;
    tumBorc = 0;

}
const now = new Date();
const day = now.toLocaleDateString();
const time = now.toLocaleTimeString();

//console.log(`Bugünün tarihi: ${day}`);
//console.log(`Şu anki saat: ${time}`);
     



  