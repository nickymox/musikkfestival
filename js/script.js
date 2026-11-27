let festival = new Date("2027-06-24T00:00:00+02:00");

function nedtelling() {
    let naa = new Date();
    let tid = festival - naa;

    if (tid <= 0) {
        document.getElementById("nedtelling").textContent = "Festivalen har startet!";
        return;
    }

    let dager = Math.floor(tid / (1000 * 60 * 60 * 24));
    let timer = Math.floor(tid / (1000 * 60 * 60)) % 24;
    let minutter = Math.floor(tid / (1000 * 60)) % 60;
    let sekunder = Math.floor(tid / 1000) % 60;

    document.getElementById("nedtelling").textContent =
        dager + " dager, " +
        timer + " timer, " +
        minutter + " minutter og " +
        sekunder + " sek igjen!";
}

nedtelling();
setInterval(nedtelling, 1000);