function loadLogin() {
    if(!liff.isInClient()){
        if (liff.isLoggedIn()){
            return getData();
        } else {
        alert('Kak, sebelum order...mohon login dulu ya. Gampang kok, klik aja tombol Login'); 
        }
    }
    else {
        return getData();
    }
}

function loadLogin1() {
    if(!liff.isInClient()){
        if (liff.isLoggedIn()){
            return confirmOrder();
        } else {
        alert('Kak, sebelum order...mohon login dulu ya. Gampang kok, klik aja tombol Login'); 
        }
    }
    else {
        return confirmOrder();
    }
}

function confirmOrder() {
    if (!liff.isInClient()){
        alert('Hai, kak '+ document.getElementById('user').innerHTML + '\n' + 'Terima kasih telah memesan nasi gorengnya, berikut adalah review pesanannya: ' + '\n'+'\n' + document.getElementById('jumlahPesan').innerHTML + ' menu nasi goreng,'+ '\n' + 'Total harga Rp.' + document.getElementById('jumlahHarga').innerHTML + '\n' + '\n' + 'Pesanan kakak akan segera diproses dan akan diberitahu jika sudah siap untuk diambil. \nMohon ditunggu ya!');
    } else {
        getData();
        profil();
        let struk = 'Hai, kak '+ document.getElementById('user').innerHTML + '\n' + 'Terima kasih telah memesan nasi gorengnya, berikut adalah review pesanannya: ' + '\n'+'\n' + document.getElementById('jumlahPesan').innerHTML + ' menu nasi goreng,'+ '\n' + 'Total harga Rp.' + document.getElementById('jumlahHarga').innerHTML + '\n' + '\n' + 'Pesanan kakak akan segera diproses dan akan diberitahu jika sudah siap untuk diambil. \nMohon ditunggu ya!'
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

function getData() {

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
