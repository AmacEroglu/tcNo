/* Ödev 

TC Kimlik No Doğrulama Algoritması
Bu algoritma 5 adımlı yani 5 şart var. Bu 5 şartın hepsine de uyulması gerekiyor.

1 – TC Kimlik Numaraları 11 karakter olmak zorundadır.
2 – Her hanesi bir rakam olmaldır.
3 – İlk hanesi 0 (sıfır) olamaz
4 – 1, 3, 5, 7, 9 basamaklarının toplamının 7 katından, 2, 4, 6, 8 basamaklarının 
    toplamını çıkarttığımızda elde ettiğimiz sonucun 10’a bölümünden kalan sayı (MOD10)  
    10. basamaktaki sayıyı vermelidir.

5 – İlk 10 hanenin toplamından elde edilen sonucun 10’a bölümünden kalan sayı (MOD10)
     11. basamaktaki sayıyı vermelidir.

*/


function tcNo() {


    var tcNo = document.getElementById("tcnumara").value;


    if (tcNo[0] == 0) {
        alert("T.C. No '0' ile başlamaz.");
        return;
    }

    // Burayi inputu number olarak yapabilirsin
    if (isNaN(tcNo)) {

        alert('Lütfen bir sayı değeri giriniz.')
        return;
    }

    if (tcNo.length !== 11) {
        alert('T.C. No. 11 haneli olmalıdır.');
        return;
    }

    var tek = 0,
        cift = 0,
        sonuc = 0;
    TCToplam = 0,
        i = 0;

    for (let i = 0; i < 9; i++) {

        if (i % 2 == 0) {
            tek += tcNo[i]*1;
        }
        if (i % 2 == 1) {
            cift += tcNo[i]*1;
        }

    }



    tek *= 7
    console.log(tek)
    console.log(cift)
    sonuc = Math.abs(tek - cift);
    console.log(sonuc)

    if (sonuc % 10 != tcNo[9]) {
        alert('Hatalı T.C. No girdiniz.')

        return;
    }

    for (let i = 0; i < 10; i++) {
        TCToplam += tcNo[i]*1
    }
    if (TCToplam % 10 != tcNo[10]) {
        alert('Hatalı T.C. No girdiniz.')
        return;
    }
    alert('T.C. No doğru.')
}

