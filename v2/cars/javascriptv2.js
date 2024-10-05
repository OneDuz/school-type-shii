function paziurekmasinahaha(carId) {
    if (carId === 'bmw-320d') {
        document.getElementById('masinos-fotke').src = 'https://iili.io/dDttb87.png';
        document.getElementById('oho-masinos-name').innerText = 'BMW 320d xDrive Sedan MHEV';
        document.getElementById('brangu-blyn').innerText = 'Kaina: 69,500 €';
        document.getElementById('info-gal-text').innerText = 'CO2 emisija: 143 g/km, Degalai: Dyzelinas, Pavarų dėžė: Automatinė';
    } else if (carId === 'bmw-520d') {
        document.getElementById('masinos-fotke').src = 'https://iili.io/dDtbBf4.png';
        document.getElementById('oho-masinos-name').innerText = 'BMW 520d xDrive Touring';
        document.getElementById('brangu-blyn').innerText = 'Kaina: 85,990 €';
        document.getElementById('info-gal-text').innerText = 'CO2 emisija: 153 g/km, Degalai: Dyzelinas, Pavarų dėžė: Automatinė';
    } else if (carId === 'bmw-xm') {
        document.getElementById('masinos-fotke').src = 'https://iili.io/dDtyFzF.png';
        document.getElementById('oho-masinos-name').innerText = 'BMW XM';
        document.getElementById('brangu-blyn').innerText = 'Kaina: 169,990 €';
        document.getElementById('info-gal-text').innerText = 'CO2 emisija: 63 g/km, Degalai: Phev, Pavarų dėžė: Automatinė';
    } else if (carId === 'bmw-x3') {
        document.getElementById('masinos-fotke').src = 'https://iili.io/dDDdOn1.png';
        document.getElementById('oho-masinos-name').innerText = 'BMW X3 xDrive20d MHEV';
        document.getElementById('brangu-blyn').innerText = 'Kaina: 75,000 €';
        document.getElementById('info-gal-text').innerText = 'CO2 emisija: 156 g/km, Degalai: Dyzelinas, Pavarų dėžė: Automatinė';
    } else if (carId === 'bmw-m5') {
        document.getElementById('masinos-fotke').src = 'https://iili.io/dDDFuaa.png';
        document.getElementById('oho-masinos-name').innerText = 'BMW M5 Touring';
        document.getElementById('brangu-blyn').innerText = 'Kaina: 111,024 €';
        document.getElementById('info-gal-text').innerText = 'CO2 emisija: 39-46 g/km, Degalai: Phev, Pavarų dėžė: Automatinė';
    }

    document.getElementById('info-gal').classList.remove('hidden');
    document.getElementById('info-gal').style.display = 'flex';
}


function bYEBYE() {
    document.getElementById('info-gal').style.display = 'none';
}