function hitungGaji(){

    try{
         let karyawan = document.getElementById('karyawan')
        let hari  = document.getElementById('hari')
        let gaji = document.getElementById('gaji')
        let hasil = document.getElementById('hasil')
        

         if( !gaji ||!gaji || !hasil){
            hasil.innerText = 'element HTML tidak di temukan'
            return;
        }

        let inputHari  = (hari.value.trim())
        let inputGaji  = (gaji.value.trim())

        if(inputHari == '' || inputGaji == '' ) {
            hasil.innerText = 'masukan hari dan gaji'
            return;
        }
         
        let hariValue = parseFloat(inputHari)
        const gajiValue = parseFloat(inputGaji)

        if(isNaN(hariValue) || hariValue < 0){
            hasil.innerText= 'masukkan total hari'
            return;
        }

        if(isNaN(gajiValue) || gajiValue < 0){
            hasil.innerText = ' masukan total gaji'
        }

        let totalGaji = hariValue * gajiValue

        if(isNaN(totalGaji)){
            hasil.innerText = 'error : gaji tidak ada'
            return;
        }else{
           hasil.innerText = 'total gaji karyawan  : '  + totalGaji
        }


    }catch(error){
       if(hasil){
        hasil.innerText = 'error' + error.message
       }

    }
    
}