Kuidas käivitada rakendus:
1. Mine command line-is root kausta.
2. tee command "npm install"
3. tee command "npx playwright install"
4. tee command "npm test"

Kui testid ei käivitu, tuleb ka eraldi käivitada ilmateate rakenduse.
1. Klooni weather forecast https://github.com/tormipoiss/TormiLaane_MelKosk-Weather_forecast
2. Mine visual studio sisse, vali õige kaust ja käivita rakendus

Süsteeminõuded:
Operatsioonisüsteem: Windows
Keele versioon: npm 10.9.2, node 22.14.0
Runtime versioon: npm 10.9.2, node 22.14.0
Brauser: Google chrome version 142

Tormi kasutaja tegevuse kontrollid:
Kontrollitakse järgmisi kasutajategevusi: registreerimine,
registreerimine kasutajaga mis on juba olemas,
sisse logimine, sisse logimine kasutajaga mis ei ole olemas,
shared link statistics klikkamine.

Registreerimise kontrollimine on oluline, sest kontrollib, et
uue kasutaja registreerimine töötaks. Kui see ei töötaks, ei saaks
ilmateate rakendust kasutada.

Registreerimise kontrollimine kasutajaga mis on juba olemas on oluline,
sest kontrollib, et kasutaja ei oleks juba olemas süsteemis, et vältida
olukorda kus on kaks sama nimega kasutajat.

Sisse logimise kontrollimine on oluline, sest kontrollib, et
kasutaja saaks rakendust kasutama hakata pärast kasutaja loomist
(registreerimist).
Kui ei saaks sisse logida, ei saaks rakendust kasutada.

Sisse logimise kontrollimine kasutajaga mis ei ole olemas
on oluline, sest kontrollib, et uut kasutajat ei saaks luua ainult
sisse logimisega, et registreerimise etappi on ka vaja.
Kui ei oleks registreerimise etappi, tekitaks see segadust
et kas sa logid sisse uue kasutajaga või olemasoleva kasutajaga.

Shared link statistics klikkamise kontrollimine, et ei töötaks, on
oluline, sest kontrollib, et kui ei ole shared linke, siis ei saa
minna shared link statistics lehele.
Kui saaks minna shared link statistics lehele, tekitaks see segadust,
et lehel pole mitte mingit statistikat.

Mel kasutaja tegevuse kontrollid:
Asukoha ilma valimine ja vaatamine. See on oluline kuna ilma selleta ei oleks projektil mingit pointi.

Asukoha valimine ilma, et sisestatakse asukoht. Oluline, kas tuleb vea teade või mitte. Kasutaja saab kohe teada mida ta
peab muutma enda valikute juures ilma, et peaks nuputama mis viga on.

Mitme päeva ilmateate vaatamine. Oluline kuna tavaliselt vaadatakse mis ilm on homme või mitme päeva pärast.
Ilma selleta oleks võimalus ainult vaadata ilmateadet tänase päeva kohta.

Mitme päeva ilmateate vaatamine kui päevade arv läheb üle limiidi. Oluline kui tuleks veateade, et liimiiti on ületatud
ja vaikimisi läheb tagasi max päevadele mida saab vaadata.

IP järgi asukoha valimine kas asukoht on õige. Oluline kuna võib tekkida probleem, et asukoha nimi on hästi pikk.
See lahendab selle probleemi kasutades IP järgi asukoha leidmist. Asukoht peab olema lähedal IP'le