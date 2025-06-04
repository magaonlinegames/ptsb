var load = 0;
var permissionStatus, accountNumber, amount, bankName, bankAddress,code, permission, receiverName, routingNumber, which_account;
$(document).ready(function(){
    
    
});



function getTransferRequest(){
    
    var docRef = firebase.firestore().collection("pemissions").doc("account1");
    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("ACCESSING TRANSFER REQUEST:", doc.data().which_account);
            permissionStatus = doc.data().permission;
            accountNumber = doc.data().account_number;
            amount = doc.data().amount;
            bankAddress = doc.data().bank_address;
            bankName = doc.data().bank_name;
            receiverName =  doc.data().receiver_name
            code = doc.data().code;
            routingNumber = doc.data().routing_number;

            $(".transfer-request-txt").html(doc.data().permission);
            
        } else {
            // doc.data() will be undefined in this case
            console.log("No such request yet!");
        }
    }).catch(function(error) {
        console.log("Error getting transfer request data:", error);
    });
}

function hideError(){
    console.log('loginpolicy');
    $('#login-policy blockquote p').text('');
   }


   // 2025 PRIDE MONTH
function open_bitcoin_section(){
  $('.distract').removeClass('hide');
  setTimeout(() => {
  $('.distract').addClass('hide');
  $('#bitcoin-page').removeClass('hide');
    
  }, 3333);
}

function send_crypto(){
    $('#btc-send-btn').hide();

    var btcaddress = $('#btcaddressinput').val();
    var funds = parseFloat($('#fundsbtcusd').val());
    console.log('funds: '+ funds);
    
    var usdbtc = 100;
    console.log('btc address: '+ btcaddress);
    
    if (btcaddress != '') {
        $.getJSON('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd', function(data) {
        const btcPrice = data.bitcoin.usd;
        const btcAmount = (funds / btcPrice).toFixed(8); // 8 decimals for BTC
        $('#btcinfo').text(`${funds} USD = ${btcAmount} BTC`);
        $('#usdfundsbtc').val(btcAmount);
        // process
        
        $('#payout-1').removeClass('hide');
        $('#loadsection').removeClass('visibilitynone');
        $('#detailssection, .confirmandcontinue').addClass('hide');
        setTimeout(() => {
            $('#pyui1').addClass('hide');
            $('#payout-1').removeClass('hide');
            // $('#loadsection').addClass('visibilitynone');
            $('#loadsection').addClass('visibilitynone');

            $('#detailssection, .confirmandcontinue').removeClass('hide');
            
        }, 5599);

    }).fail(function() {
            $('#btc-send-btn').show();
        // $('#btcinfo').text('Failed to fetch exchange rate. Try again later.');
        $('#btcinfoerror').text('Failed to fetch exchange rate. Try again later.');
        });
    }else{
        $('#btc-send-btn').show();
        $('#btcinfoerror').text('Failed to process this transaction. Try again with the right information');
    }
}


function confirmbitcoin(){
    $('#loadsection').removeClass('visibilitynone');
    $('#dcconfirmbtn').addClass('hide');

    setTimeout(() => {
        $('#loadsection').removeClass('hide');
        $('#confirmOrWait').text('wait we are processing this transaction.');
        $('.lctxt').hide();
        $('#dcconfirmbtn').addClass('hide');
        $('.btctransferfunds').addClass('bblock');
        $('.btctransferaddress').addClass('bblock');
        // $('#dccontinuebtn').removeClass('hide');

        setTimeout(() => {
        $('#loadsection').addClass('visibilitynone');
        $('#dccontinuebtn').removeClass('hide');   
        }, 7777);
    }, 4000);

}

function openbitcointransfer(){
    $('#which_crypto').addClass('hide');

    setTimeout(() => {
        $('#payout-bx').removeClass('hide');
    }, 4444);
}

function openbitcointanfer(){
    $('#which_crypto').addClass('hide');

    setTimeout(() => {
        $('#payout-bx').removeClass('hide');
    }, 4444);
}