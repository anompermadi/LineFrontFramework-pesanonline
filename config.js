function confirmOrder() {
    if (!liff.isInClient()){
        sendAlertIfNotInClient();
    } else {
        getData(jumlahPesan, jumlahHarga);
        let struk = 'Hai Customer,'+ '\n' + 'Terima kasih telah memesan nasi gorengnya, berikut adalah review pesanannya: ' + '\n' + console.log(jumlahPesan) + ' menu nasi goreng,'+ '\n' + console.log(jumlahHarga) + '\n' +'Pesanan kakak akan segera diproses dan akan diberitahu jika sudah siap untuk diambil. \nMohon ditunggu ya!'
        liff.sendMessages([{
            'type': 'text',
            'text': struk      
        }]).then(function() {
            alert('Pesanan kakak sudah kami terima');
        }).catch(function(error) {
            alert('error!!')
        });
    }
}

function getData(jumlahPesan, jumlahHarga) {

    var jumlahmenu1 = parseInt(document.getElementById("jumlahmenu1").value);
    var jumlahmenu2 = parseInt(document.getElementById("jumlahmenu2").value);
    var jumlahmenu3 = parseInt(document.getElementById("jumlahmenu3").value);
    
    var list_data = [jumlahmenu1, jumlahmenu2, jumlahmenu3];
    var jumlahPesan = 0;
    localStorage.setItem('list_data', JSON.stringify(list_data));
    
    for(i=0; i<list_data.length; i++){
        jumlahPesan += list_data[i];
    }
    document.querySelector('#jumlahPesan').innerText = jumlahPesan;

    var totalPrice1 = jumlahmenu1 * parseInt(document.getElementById("price1").innerHTML);
    var totalPrice2 = jumlahmenu2 * parseInt(document.getElementById("price2").innerHTML);
    var totalPrice3 = jumlahmenu3 * parseInt(document.getElementById("price3").innerHTML);


    var totalPrice = [totalPrice1, totalPrice2, totalPrice3];
    var jumlahHarga = 0;
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));

    for(i=0; i<totalPrice.length; i++){
        jumlahHarga += totalPrice[i];
    }
    document.querySelector('#jumlahHarga').innerText = jumlahHarga;
    return
}
