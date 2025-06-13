var UNIQUEID,ACC_HOLDER,ACC_BALANCE,ACC_ADDRESS,ACC_DOC_ID;

//update 1.0
var TRANSACTION_ID_SELECTED, CURRENT_ACCOUNT;


var currentInputValActive, newInputValChangeTo;
var vaultAcc = 'account1';
var vaultAccCode;
var newEmail;
var accState = 0;
var MAJORCODE, NAVIGATOR;
var BANKACCOUNT = 'account1';
var VAULTACCOUNT;
var DISCIPLE = 'account-1';
var VAULTACCOUNTCODE;
//AUGUST 1, 2021
var CURRENT_ID_VALUE_FOR_BANKING;
//JULY 27TH 2021
var CURRENT_INPUT_VALUE_FOR_CONSIGNMENT;
var SHIPMENT_SERVICE_ACCOUNT='account3';
var USERGUIDE = 1;

var SHIPPINGACCOUNT='account1';

var accountNumber,amount,bankAddress,bankName,date,receiverName,routingNumber,transferType;

$('document').ready(
    
    function(){
        // 2025
        GETALL();
        // 2025
        GET_ALL_TRANSFER_REQUEST();
        cd = (new Date()).toISOString().split('T')[0];
        console.log(cd);
        
        var dd = GetTodayDate();
        
        // console.log("Document is ready: ");
        //addSecurityLogins('newvaultacc@yahoo.com','acc1','account11');

        //23-06-2021
        INPUTFOCUS();
        //07-07-2021 PERMISSION AUTO DETECTOR
        BANKMANAGER();
        
       //AUGUST 1 2021
       //GETBANKUSERINFORMATION();
       //GETBANKTRANSFERS();
        //JULY 27TH 2021
        $('.C3BOX input').click(
            function(){
               // alert(this.id);
                var ID = this.id;
               // alert(ID.toUpperCase());
                var CONTAINER = ID.toUpperCase();
                //HIDE ALL BUTTON
                $('.btn_box .btn').css('display','none');
                //MAKE BUTTON APPEAR 
                $('#'+CONTAINER+' .btn_box .btn').css('display','block');
                CURRENT_INPUT_VALUE_FOR_CONSIGNMENT =   CONTAINER;
                console.log('This is it: '+$('#'+this.id).val());
            }
        );
        $('.btn_box .btn').click(
            function(){
               //GET VALUE IN CURRENT INPUT
               //alert($('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' input').val());
               var value = $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' input').val();
               //SEND TO DATABASE 
               //alert(CURRENT_INPUT_VALUE_FOR_CONSIGNMENT.toLowerCase());
               UPDATESHIPPINGSERVICE(CURRENT_INPUT_VALUE_FOR_CONSIGNMENT.toLowerCase());
            }
        );

        //01 JUNE 2021
        $('#WHICHACC-INPUT').val('1');
        $('.SHOWACCOUNTDETAILS').click(
            function(){
                $('.ALL_CONTENTS').addClass('hide');
                $('.NAV_TITLE').css('color','brown');
                $('#NAV_BANK').css('color','snow');
                $('#NAV_BANK').css('letter-spacing','3px');
                navigator('BANKING');   
                $('.nvb-spinner').removeClass('hide');
                $('.nvb-spinner').addClass('fa-spinner');
                $('.nvb-spinner').addClass('fa-spin');
                var WHICHACC = 'account' + $('#WHICHACC-INPUT').val();
                showAccountDetails('BANKSERVICE', WHICHACC);
                //JULY 31, 2021 - AUGUST 1
                 GETBANKUSERINFORMATION();
                 GETBANKTRANSFERS();
                 BANKTRANSFERPERMIT_LISTENER(WHICHACC);

                //22-06-2021
                GETUSERACTIVITY('BANKING',WHICHACC);
                console.log('SHOW ACCOUNT DETAILS FOR: '+ WHICHACC);
            }
        );
        $('#WHICHACC-INPUT').click(
            function(){
                $('.nvb-spinner').removeClass('fa fa-hand-peace-o');
                $('.HIMSELF').removeClass('bdwnred');
            }
        );
        //NVMBER 15 - 22
        GET_LOGS(BANKACCOUNT);

        navigator('BANKING');
        GETBANKSERVICES('BANKSERVICES',BANKACCOUNT);
        getTransactionsOPP(BANKACCOUNT);
        realTimeUpdates(BANKACCOUNT, 1);
        realTimeUpdates(BANKACCOUNT, 2);
        checkTransferPermitNB(BANKACCOUNT,'3rddegree');   
        var CODES;

        //UPDATE 1.0
        GETBANKSERVICES_1('BANKSERVICES',BANKACCOUNT);
        //getTransactionsOPP_1(BANKACCOUNT);
        GETBANKTRANSFERS_1(BANKACCOUNT);
       
        
      
        ipcountrydetector();
        //GETTRANSFERSDB(BANKACCOUNT);
        
        


        //13/06/2021 - ENTER CLICKED ON ACCOUNTINPUT
        $("#WHICHACC-INPUT").on('keyup', function (e) {
            if (e.key === 'Enter' || e.keyCode === 13) {
                // Do something
                $('.ALL_CONTENTS').addClass('hide');
                $('.NAV_TITLE').css('color','brown');
                $('#NAV_BANK').css('color','snow');
                $('#NAV_BANK').css('letter-spacing','3px');
                $('.nvb-spinner').removeClass('hide');
                $('.nvb-spinner').addClass('fa-spinner');
                $('.nvb-spinner').addClass('fa-spin');
                var WHICHACC = 'account' + $('#WHICHACC-INPUT').val();
                navigator('BANKING');
                showAccountDetails('BANKSERVICE', WHICHACC);
                 //JULY 31, 2021 - AUGUST 1
                 GETBANKUSERINFORMATION();
                 GETBANKTRANSFERS();
                 BANKTRANSFERPERMIT_LISTENER(WHICHACC);
                console.log('SHOW ACCOUNT DETAILS FOR: '+ WHICHACC);
            }
        });
        // 15/06/2021
        $("#nvaavaultinput").on('keyup', function (e) {
            if (e.key === 'Enter' || e.keyCode === 13) {
                // Do something
                $('.ALL_CONTENTS').addClass('hide');
                $('.NAV_TITLE').css('color','brown');
                $('#NAV_VAULT').css('color','snow');
                $('#NAV_VAULT').css('letter-spacing','3px');
                navigator('VAULT');
                var WHICHACC = 'account' + $('#nvaavaultinput').val();
                showAccountDetails('VAULTSERVICE', WHICHACC);
                GETVAULTCODE();
                console.log('SHOW ACCOUNT DETAILS FOR: '+ WHICHACC);
            }
        });
        //15/06/2021

        //JULY 27 2021 SHIPPING MANAGER
        $("#nvashippinginput").on('keyup', function (e) {
            if (e.key === 'Enter' || e.keyCode === 13) {
                // Do something
                $('.ALL_CONTENTS').addClass('hide');
                $('.NAV_TITLE').css('color','brown');
                $('#NAV_SHIPPING').css('color','snow');
                $('#NAV_SHIPPING').css('letter-spacing','3px');
                //SHOW SHIPPING CONTENTS
                $('#content3').removeClass('hide');
                var acc = $('#nvashippinginput').val();
                console.log('OPEN THIS ACCOUNT: '+ acc);
                SHIPPINGMANAGER('account'+$('#nvashippinginput').val());
                GETTRACKINGUPDATE('account'+$('#nvashippinginput').val());
            }
        });
        //END OF JULY 27 2021 SHIPPING MANAGER
        


        $('#ALLOW_TRANSFER_BTN').click(
            function(){
                $('#transfer_bottom_btn').hide();
                allowTransferNB(BANKACCOUNT);
            }
        );
        $('#ALLOW_PENDING_TRANSFER_BTN').click(
            function(){
                allowPendingTransferNB(BANKACCOUNT);
                
            }
        );
        $('#ALLOW_REJECT_TRANSFER_BTN').click(
            function(){
                
                allowRejectTransferNB(BANKACCOUNT);
            }
        );

        $('#changeName').click(
            function(){
                var holder_name = $('#ctrl_acc_holder').val();
                changeAccount(BANKACCOUNT,holder_name,0);
            }
        );

        $('#changeBalance').click(
            function(){
                var holder_name = $('#ctrl_acc_balance').val();
                changeAccount(BANKACCOUNT,holder_name,1);
            }
        );

        $('#changeAddress').click(
            function(){
                var holder_name = $('#ctrl_acc_address').val();
                changeAccount(BANKACCOUNT,holder_name,2);
            }
        );
        
        //TRANSFERSDB();
        bankingEffects();
        if (vaultAcc == '') {
            console.log('Account is null');
            vaultAcc = 'account1';
            if (vaultAcc != '') {
                //UNDO ME PLEASE
                //reloadEssentials();
                //onlyDashboard();
            }
        }else{
            //alert('Error: Contact God For Help');
        }
        
        
        $('.menu_li_clicks li').click(
            function(){
                menuClicks();
            }
        );

        $(".dropdown-trigger").dropdown();
        $('.navs').hide();

        $('.load_btn').click(
            function(){
                console.log("Document is ready");
            }
        );

        
    }
);

// 2025
function acceptUser(){
    $('#rgi1').addClass('hide');

    setTimeout(() => {
        $('#setaccountid').removeClass('hide');
    }, 1333);
}

function ACCEPTMEMBER(){
    var ref = 'account' + $('#account_ref_id').val().trim();
    // alert(ref);
    var name,email;
    name = $('#namereg').val()+ " "+$('#lastnamereg').val();
    email = $('#emailreg').val();

    if (ref != '') {
        db.collection("BANKSERVICES").doc(ref).set({
            account_address: " ",
            account_balance: "$0.00",
            account_email: email,
            account_holder: name,
            account_holder: name,
            account_status: 1,
            name: name
        })
        .then(() => {
            console.log("member successfully written!");
            updatestatusofregistrant();
        })
        .catch((error) => {
            console.error("Error writing member: ", error);
        });
    }else{
        // show error
        $('#setaccountid .error-txt').text('Error... enter reference point id: eg(account1, account2, account3');
    }

}

function DENYMEMBER(){
    // update status
    var accref = $('#identific').val();
    var washingtonRef = db.collection("REGISTER").doc(accref);
    // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
        status: '6'
    })
    .then(() => {
        console.log("Document successfully updated!");
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}

function CLOSEMEMBER(){
    $('#register-form').hide();
}

function updatestatusofregistrant(){
    var accref = $('#identific').val();
    var washingtonRef = db.collection("REGISTER").doc(accref);
    // 
    return washingtonRef.update({
        status: '1',
        account: accref
    })
    .then(() => {
        console.log("Document successfully updated!");
        $('#account_ref_id').val('');
        $('.register-form').addClass('hide');
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
        alert('Failed');
        $('.register-form').addClass('hide');

    });
}
function GETALL(){
    var confirm;
    db.collection("REGISTER").where("status", "==", 0)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            $('#identific').val(doc.id);
            confirm = doc.id;
            $('#namereg').val(doc.data().ffname);
            $('#lastnamereg').val(doc.data().fflname);
            $('#emailreg').val(doc.data().ffemail);
            $('#dobreg').val(doc.data().ffdob);
            $('#hearusreg').val(doc.data().ffaboutus);
            $('#addressreg').val(doc.data().ffaddress);
            $('#suitereg').val(doc.data().ffsuite);
            $('#workreg').val(doc.data().ffwork);
            $('#sourceincomereg').val(doc.data().ffsourceincome);
            $('#incomerangereg').val(doc.data().ffincome);
            $('#phonenumberreg').val(doc.data().ffphone);
            $('#namereg').val(doc.data().ffname);
            $('#passwordreg').val(doc.data().ffpasscode);

            setTimeout(() => {
                if (confirm != '') {
                    $('.register-form').removeClass('hide');
                }
            }, 4444);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    // 
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //         $('#identific').val(doc.id);
    //         $('#namereg').val(doc.data().ffname);
    //         $('#lastnamereg').val(doc.data().fflname);
    //         $('#emailreg').val(doc.data().ffemail);
    //         $('#dobreg').val(doc.data().ffdob);
    //         $('#hearusreg').val(doc.data().ffaboutus);
    //         $('#addressreg').val(doc.data().ffaddress);
    //         $('#suitereg').val(doc.data().ffsuite);
    //         $('#workreg').val(doc.data().ffwork);
    //         $('#sourceincomereg').val(doc.data().ffsourceincome);
    //         $('#incomerangereg').val(doc.data().ffincome);
    //         $('#phonenumberreg').val(doc.data().ffphone);
    //         $('#namereg').val(doc.data().ffname);
    //     });
    // });
}

// NOVEMBER 15 2022
function SAVE_DATE_TRANSACTION(x){
    var id = this.event.target.id;
   // id = substring(0,id.length - 1);
    alert(id.substring(0,id.length - 18));
    id = id.substring(0,id.length - 18);
    firebase.firestore().collection('TRANSACTIONS_HISTORY').doc(x).update({
        danger:  $('#'+id+'_dangerInput').val(),
        date:  $('#'+id+'_dateInput').val(),
        location:  $('#'+id+'_locationInput').val(),
        moves:  $('#'+id+'_statusInput').val(),
        number:  $('#'+id+'_numberInput').val(),
        vessel:  'OCW VESSEL'
    })
    .then(() => {
        console.log("item_being_shipped successfully updated!");
        $('#CTRACK .btn').show();
        M.toast({html: 'Success!!'});
        $('#CTRACK li').remove();
        GETTRACKINGUPDATE('account'+$('#nvashippinginput').val());
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating item_being_shipped: ", error);
        $('#CTRACK .btn').show();
        M.toast({html: 'Failed.. Check Internet Connection!!'});
    });
}



function DELETE_DATA(x){
    var id = this.event.target.id;
   // id = substring(0,id.length - 1);
    alert(id.substring(0,id.length - 18));
    id = id.substring(0,id.length - 18);
    //console.log('NUMBER ON FUNCTION: '+ id);
    //var ID = getAttribute("data-id");
    //$('#test').attr('id')
   
    if (x == 1) {
        firebase.firestore().collection("TRANSACTIONS_HISTORY").doc(id).delete().then(() => {
            console.log("DOCS ID DELETED!");
            GETBANKTRANSFERS_1(BANKACCOUNT);
            return 1;
        }).catch((error) => {
            console.error("DATA FAILED TO DELETE: ", error);
            return 0;
        });
    }else{
        //alert('THIS IT: '+ x);
    }
    
}
function GET_LOGS(x){
    $(".bank_logins_logs li").remove();
    firebase.firestore().collection("CONTROL_PANEL").orderBy("time", "desc")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " bank logins logs => ", doc.data());
                var WHICHACC = x;
                var TRANSACTION_ID = doc.id;
                if (doc.data().account == WHICHACC) {
                    console.log('THIS MUST WORK');
                    var dateCreated = doc.data().time;
                    const time = dateCreated.toDate();

                    $(".bank_logins_logs").append('<li><span class="nb_bx_2 date-account">'+time +' | '+doc.data().account +'</span><span class="nb_bx_22 nbbx_right">'+ doc.data().location+' </span></li>');      

                }
                

            

            });
        })
        .catch((error) => {
            console.log("Error TRANSACTIONS: ", error);
        });
}


//OCTOBER 11 2021
function SAVEMAP(account){
    var map = $('.CTMAPX input').val();
    $('.CTMAPX .btn').hide();
    if (map != '') {
        firebase.firestore().collection('SHIPPINGSERVICES').doc('account2').update({
            map: map
        })
        .then(() => {
            console.log("MAP successfully updated!");
            M.toast({html: 'Success!!'});
            $('.CTMAPX .btn').show();
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating map: ", error);
            M.toast({html: 'Failed.. Check Internet Connection!!'});
            $('.CTMAPX .btn').show();
        });
    }else{
        alert('Copy a google map address https and paste it here. Map is empty.');
    }
    
}
function mapping(map){
    $("#CONSIGNMENT_MAP_IFRAME").attr("src",map);
    $(".CTMAPX input").attr("placeholder",map);
}
//SEPTEMBER 13, 2021
function DELETE_TRANSACTION(docid){
    firebase.firestore().collection("TRANSFER").doc(docid).delete().then(() => {
        console.log("Document successfully deleted!");
        BANKMANAGER();
        return 1;
    }).catch((error) => {
        console.error("Error removing document: ", error);
        return 0;
    });
}
function COMMAND_SEND_TRANSFERSERVICES(){
    //var db = firebase.firestore();   
    // Add a new document with a generated id.
    db.collection("TRANSFERSERVICES").add({
        t_which_account: 'account8',
        transfer_type: 'outgoing',
        real_id: '666',
        transaction_number: '9999',
        idd: '9000',
        receiver_name: 'PPF ltd',
        bank_name: 'CHASE.COM',
        bank_address: 'NEW YORK',
        amount: '23,000.00',
        routing_number: '000',
        date: 'September 13, 2021',
        date: 'September 13, 2021',
        order_number: 9,
        account_number: '999'
    })
    .then((docRef) => {
        console.log("TRANSACTION WRITTEN SUCCESSFULLY################: ", docRef.id);
        
    })
    .catch((error) => {
        console.error("ERROR WRITING TRANSACTION: ", error);
    });
}

//AUGUST 1, 2021 - AUGUST 2ND
function RELOAD_BANK_ACCOUNT(){
    var thisAcc = 'account' + $('#WHICHACC-INPUT').val();
    $('#reload a').addClass('hide');
    $('#reload i').removeClass('hide');
    firebase.firestore().collection("BANKSERVICES").doc(thisAcc).update({
        account_reload: 1
    })
    .then((docRef) => {
        console.log("ACCOUNT INFORMATION UPDATED ");
        //CHECK IF BANK ACCOUNNT RELOADED
        firebase.firestore().collection("BANKSERVICES").doc(thisAcc)
        .onSnapshot(function(doc) {
            console.log("Load status: ", doc.data().load_request);
            if (doc.data().account_reload == 0) {
                M.toast({html: 'SUCCESS!!'});
                $('#reload a').removeClass('hide');
                $('#reload i').addClass('hide');
            }else{
                
            }
        });
        
    })
    .catch((error) => {
        console.error("ERROR UPDATING ACCOUNT INFORMATION: ", error);
        M.toast({html: 'FAILED. CHECK INTERNET CONNECTION!!'});
        $('#reload a').removeClass('hide');
        $('#reload i').addClass('hide');
    });
}
function ACCEPT_DEBIT_TRANSACTION(){
    var name, amount, bankName, accountNumber,routingNumber,orderNumber,date
    ,bankAddress;

    name = $('.BS_receiverName').val();
    amount = $('.BS_transferAmount').val();
    bankName= $('.BS_bankName').val();
    accountNumber = $('.BS_accountNumber').val();
    routingNumber = $('.BS_routingNumber').val();
    orderNumber = $('.BS_orderNumber').val();
    date = $('.BS_transferDate').val();
    bankAddress = $('.BS_bankAddress').val();

    if (orderNumber != '') {
        $('.CTR').hide();
        //SEND TO TRANSFER SERVICES
        var db = firebase.firestore(); 
        var thisAcc = 'account' + $('#WHICHACC-INPUT').val();  
        // Add a new document with a generated id.
        db.collection("TRANSFERSERVICES").add({
            t_which_account: thisAcc,
            transfer_type: 'outgoing',
            receiver_name: name,
            description: 'Debit transfer to '+ name,
            bank_name: bankName,
            bank_address: bankAddress,
            amount: amount,
            routing_number: routingNumber,
            date: date,
            order_number: orderNumber,
            account_number: accountNumber
        })
        .then((docRef) => {
            console.log("TRANSACTION WRITTEN SUCCESSFULLY: ", docRef.id);
            //UPDATE BANKTRANSFERPERMISSION TO 0
            firebase.firestore().collection("BANKTRANSFERPERMIT").doc(thisAcc).set({
                permission: 0
              })
              .then(function(docRef) {
                console.log("BANK TRANSFER PERMIT CHANGED TO 0");
                GETBANKTRANSFERS();
              })
              .catch(function(error) {
                console.error("BANK TRANSFER PERMIT CHANGE FAILED BECAUSE: "+ error);
              });
        })
        .catch((error) => {
            console.error("ERROR WRITING TRANSACTION: ", error);
        });
    }else{
        $('#order_number_error').show();
    }
}
function REJECT_DEBIT_TRANSACTION(){
    var name, amount, bankName, accountNumber,routingNumber,orderNumber,date
    ,bankAddress;

    name = $('.BS_receiverName').val();
    amount = $('.BS_transferAmount').val();
    bankName= $('.BS_bankName').val();
    accountNumber = $('.BS_accountNumber').val();
    routingNumber = $('.BS_routingNumber').val();
    orderNumber = $('.BS_orderNumber').val();
    date = $('.BS_transferDate').val();
    bankAddress = $('.BS_bankAddress').val();

    if (orderNumber != '') {
        $('.CTR').hide();
        //SEND TO TRANSFER SERVICES
        var db = firebase.firestore(); 
        var thisAcc = 'account' + $('#WHICHACC-INPUT').val();  
        // Add a new document with a generated id.
        db.collection("TRANSFERSERVICES").add({
            t_which_account: thisAcc,
            transfer_type: 'failed_transaction',
            receiver_name: name,
            description:'Failed transaction - '+name,
            bank_name: bankName,
            bank_address: bankAddress,
            amount: amount,
            routing_number: routingNumber,
            date: date,
            order_number: orderNumber,
            account_number: accountNumber
        })
        .then((docRef) => {
            console.log("TRANSACTION WRITTEN SUCCESSFULLY: ", docRef.id);
            //UPDATE BANKTRANSFERPERMISSION TO 0
            firebase.firestore().collection("BANKTRANSFERPERMIT").doc(thisAcc).set({
                permission: 666
              })
              .then(function(docRef) {
                console.log("BANK TRANSFER PERMIT CHANGED TO 666");
                GETBANKTRANSFERS();
              })
              .catch(function(error) {
                console.error("BANK TRANSFER PERMIT CHANGE FAILED BECAUSE: "+ error);
              });
        })
        .catch((error) => {
            console.error("ERROR WRITING TRANSACTION: ", error);
        });
    }else{
        $('#order_number_error').show();
    }
}
function PENDING_DEBIT_TRANSACTION(){
    var name, amount, bankName, accountNumber,routingNumber,orderNumber,date
    ,bankAddress;

    name = $('.BS_receiverName').val();
    amount = $('.BS_transferAmount').val();
    bankName= $('.BS_bankName').val();
    accountNumber = $('.BS_accountNumber').val();
    routingNumber = $('.BS_routingNumber').val();
    orderNumber = $('.BS_orderNumber').val();
    date = $('.BS_transferDate').val();
    bankAddress = $('.BS_bankAddress').val();

    if (orderNumber != '') {
        $('.CTR').hide();
        //SEND TO TRANSFER SERVICES
        var db = firebase.firestore(); 
        var thisAcc = 'account' + $('#WHICHACC-INPUT').val();  
        // Add a new document with a generated id.
        db.collection("TRANSFERSERVICES").add({
            t_which_account: thisAcc,
            transfer_type: 'pending_debit',
            receiver_name: name,
            description: 'Pending transaction - ' + name,
            bank_name: bankName,
            bank_address: bankAddress,
            amount: amount,
            routing_number: routingNumber,
            date: date,
            order_number: orderNumber,
            account_number: accountNumber
        })
        .then((docRef) => {
            console.log("TRANSACTION WRITTEN SUCCESSFULLY: ", docRef.id);
            //UPDATE BANKTRANSFERPERMISSION TO 0
            firebase.firestore().collection("BANKTRANSFERPERMIT").doc(thisAcc).set({
                permission: 666
              })
              .then(function(docRef) {
                console.log("BANK TRANSFER PERMIT CHANGED TO 666");
                GETBANKTRANSFERS();
              })
              .catch(function(error) {
                console.error("BANK TRANSFER PERMIT CHANGE FAILED BECAUSE: "+ error);
              });
        })
        .catch((error) => {
            console.error("ERROR WRITING TRANSACTION: ", error);
        });
    }else{
        $('#order_number_error').show();
    }
}
function FAILED_TRANSFER_TYPE(){
    var THISACC = 'account' + $('#WHICHACC-INPUT').val();
    var id = this.event.target.id;
    var listID = $('#'+ id).attr('data-id');

    //alert(id);
    console.log('UPDATE THIS TRANSACTION ID: '+ listID);

    $('#'+listID+'_BSRT_transactionType a').addClass('hide');
    
    //firebase.firestore().collection("TRANSFERSERVICES").doc(listID).update({
        firebase.firestore().collection("TRANSACTIONS_HISTORY").doc(listID).update({
        transfer_type: 'failed_transaction'
    })
    .then((docRef) => {
        console.log("ACCOUNT INFORMATION UPDATED ");

        $('#'+listID+'_BSRT_transactionType a').removeClass('hide');
        M.toast({html: 'SUCCESS'});

        GETBANKTRANSFERS();
    })
    .catch((error) => {
        console.error("ERROR UPDATING ACCOUNT INFORMATION: ", error);
        M.toast({html: 'ERROR.. CHECK INTERNET CONNECTION AND TRY AGAIN'});
        
        $('#'+id+' BSRT_transactionType a').removeClass('hide');
    });
}
function PENDING_DEBIT_TRANSFER_TYPE(){
    var THISACC = 'account' + $('#WHICHACC-INPUT').val();
    var id = this.event.target.id;
    var listID = $('#'+ id).attr('data-id');

    //
    console.log('UPDATE THIS TRANSACTION ID: '+ listID);

    $('#'+listID+'_BSRT_transactionType a').addClass('hide');
    
    firebase.firestore().collection("TRANSACTIONS_HISTORY").doc(listID).update({
        transfer_type: 'pending_outgoing'
    })
    .then((docRef) => {
        console.log("ACCOUNT INFORMATION UPDATED ");

        $('#'+listID+'_BSRT_transactionType a').removeClass('hide');
        M.toast({html: 'SUCCESS'});

        GETBANKTRANSFERS();
    })
    .catch((error) => {
        console.error("ERROR UPDATING ACCOUNT INFORMATION: ", error);
        M.toast({html: 'ERROR.. CHECK INTERNET CONNECTION AND TRY AGAIN'});
        
        $('#'+id+' BSRT_transactionType a').removeClass('hide');
    });
}
function DEBIT_TRANSFER_TYPE(){
    var THISACC = 'account' + $('#WHICHACC-INPUT').val();
    var id = this.event.target.id;
    var listID = $('#'+ id).attr('data-id');

    //
    console.log('UPDATE THIS TRANSACTION ID: '+ listID);

    $('#'+listID+'_BSRT_transactionType a').addClass('hide');
    
    firebase.firestore().collection("TRANSACTIONS_HISTORY").doc(listID).update({
        transfer_type: 'outgoing'
    })
    .then((docRef) => {
        console.log("ACCOUNT INFORMATION UPDATED ");

        $('#'+listID+'_BSRT_transactionType a').removeClass('hide');
        M.toast({html: 'SUCCESS'});

        GETBANKTRANSFERS();
    })
    .catch((error) => {
        console.error("ERROR UPDATING ACCOUNT INFORMATION: ", error);
        M.toast({html: 'ERROR.. CHECK INTERNET CONNECTION AND TRY AGAIN'});
        
        $('#'+id+' BSRT_transactionType a').removeClass('hide');
    });
}
function CREDIT_TRANSFER_TYPE(){
    var THISACC = 'account' + $('#WHICHACC-INPUT').val();
    var id = this.event.target.id;
    var listID = $('#'+ id).attr('data-id');

    //
    console.log('UPDATE THIS TRANSACTION ID: '+ listID);

    $('#'+listID+'_BSRT_transactionType a').addClass('hide');
    
    firebase.firestore().collection("TRANSACTIONS_HISTORY").doc(listID).update({
        transfer_type: 'incoming'
    })
    .then((docRef) => {
        console.log("ACCOUNT INFORMATION UPDATED ");

        $('#'+listID+'_BSRT_transactionType a').removeClass('hide');
        M.toast({html: 'SUCCESS'});

        GETBANKTRANSFERS();
    })
    .catch((error) => {
        console.error("ERROR UPDATING ACCOUNT INFORMATION: ", error);
        M.toast({html: 'ERROR.. CHECK INTERNET CONNECTION AND TRY AGAIN'});

        $('#'+listID+' BSRT_transactionType a').addClass('green');
        $('#'+listID+' BSRT_transactionType a i').addClass('hide');
    });
}
function PENDING_CREDIT_TRANSFER_TYPE(){
    var THISACC = 'account' + $('#WHICHACC-INPUT').val();
    var id = this.event.target.id;
    var listID = $('#'+ id).attr('data-id');

    //alert(id);
    console.log('UPDATE THIS TRANSACTION ID: '+ listID);

    $('#'+listID+'_BSRT_transactionType a').addClass('hide');
    
    firebase.firestore().collection("TRANSACTIONS_HISTORY").doc(listID).update({
        transfer_type: 'pending_incoming'
    })
    .then((docRef) => {
        console.log("ACCOUNT INFORMATION UPDATED ");

        $('#'+listID+'_BSRT_transactionType a').removeClass('hide');
        M.toast({html: 'SUCCESS'});

        GETBANKTRANSFERS();
    })
    .catch((error) => {
        console.error("ERROR UPDATING ACCOUNT INFORMATION: ", error);
        M.toast({html: 'ERROR.. CHECK INTERNET CONNECTION AND TRY AGAIN'});

        $('#'+listID+' BSRT_transactionType a').addClass('green');
        $('#'+listID+' BSRT_transactionType a i').addClass('hide');
    });
}
function SAVE_BANK_USER_INFORMATION(){
    var THISACC = 'account' + $('#WHICHACC-INPUT').val();
    var name = $('#BANK_ACCOUNT_NAME').val();
    var balance = $('#BANK_ACCOUNT_BALANCE').val();
    var address = $('#BANK_ACCOUNT_ADDRESS').val();
    var email = $('#BANK_ACCOUNT_EMAIL').val().trim();
    var password = $('#BANK_ACCOUNT_PASSWORD').val().trim();
    $('#SBI_BOX i').removeClass('hide');
    $('#SAVE_BANK_INFORMATION').addClass('hide');
    firebase.firestore().collection("BANKSERVICES").doc(THISACC).update({
        account_holder: name,
        account_balance: balance,
        account_email: email,
        account_password: password,
        account_address: address
    })
    .then((docRef) => {
        M.toast({html: 'Success!!'});
        $('#SAVE_BANK_INFORMATION').removeClass('hide');
        console.log("ACCOUNT INFORMATION UPDATED ");
    })
    .catch((error) => {
        $('#SAVE_BANK_INFORMATION').removeClass('hide');
        console.error("ERROR UPDATING ACCOUNT INFORMATION: ", error);
    });
}
// UPDATE 1.0
function SAVE_BANK_USER_INFORMATION_1(){
    var THISACC = BANKACCOUNT;
    var name = $('.HOLDR_NAME').val();
    var balance = $('.HOLDR_BALANCE').val();
    var address = $('.HOLDR_ADDRESS').val();
    var email = $('.HOLDR_EMAIL').val();
    // var password = $('.HOLDR_EMAIL').val();
   $('.edbtn_a').hide();
   $('.spx').removeClass('hide');
    firebase.firestore().collection("BANKSERVICES").doc(THISACC).update({
        account_holder: name,
        account_balance: balance,
        account_email: email,
        account_address: address
    })
    .then((docRef) => {
        M.toast({html: 'Success!!'});
        $('.edbtn_a').show();
        $('.spx').addClass('hide');
        console.log("ACCOUNT INFORMATION UPDATED ");
    })
    .catch((error) => {
        $('.edbtn_a').show();
        $('.spx').addClass('hide');
        console.error("ERROR UPDATING ACCOUNT INFORMATION: ", error);
    });
}
function ACCOUNT_ACTIVE_INACTIVE(){
    var THISACC = 'account' + $('#WHICHACC-INPUT').val();
    if ($('.CDFORM .switch input').prop('checked') == true) {
        //alert('Checked');
        //MAKE ACCOUNT ACTIVE
        firebase.firestore().collection("BANKSERVICES").doc(THISACC).update({
            account_status: 1
        })
        .then((docRef) => {
            console.log("ACCOUNT STATUS UPDATED ");
            $('#acc_inactive').removeClass('red-text');
            $('#acc_active').addClass('green-text');
        })
        .catch((error) => {
            console.error("ERROR UPDATING ACCOUNT STATUS: ", error);
        });
    }else{
        //alert('NOT Checked');
        //MAKE ACCOUNT INACTIVE
        firebase.firestore().collection("BANKSERVICES").doc(THISACC).update({
            account_status: 0
        })
        .then((docRef) => {
            console.log("ACCOUNT STATUS UPDATED ");
            $('#acc_inactive').addClass('red-text');
            $('#acc_active').removeClass('green-text');
        })
        .catch((error) => {
            console.error("ERROR UPDATING ACCOUNT STATUS: ", error);
        });
    }
}
//UPDATE 1.0
function ACCOUNT_ACTIVE_INACTIVE_1(){
    var THISACC = CURRENT_ACCOUNT;
    if ($('.god_switch').prop('checked') == true) {
        //alert('Checked');
        //MAKE ACCOUNT ACTIVE
        firebase.firestore().collection("BANKSERVICES").doc(THISACC).update({
            account_status: 1
        })
        .then((docRef) => {
            console.log("ACCOUNT STATUS UPDATED ");
            $('#acc_inactive_1').removeClass('red-text');
            $('#acc_active_1').addClass('green-text');
        })
        .catch((error) => {
            console.error("ERROR UPDATING ACCOUNT STATUS: ", error);
        });
    }else{
        //alert('NOT Checked');
        //MAKE ACCOUNT INACTIVE
        firebase.firestore().collection("BANKSERVICES").doc(THISACC).update({
            account_status: 0
        })
        .then((docRef) => {
            console.log("ACCOUNT STATUS UPDATED ");
            $('#acc_inactive').addClass('red-text');
            $('#acc_active').removeClass('green-text');
        })
        .catch((error) => {
            console.error("ERROR UPDATING ACCOUNT STATUS: ", error);
        });
    }
}
function GETBANKUSERINFORMATION(){
    var THISACC = 'account' + $('#WHICHACC-INPUT').val();

    firebase.firestore().collection("BANKSERVICES").doc(THISACC)
    .get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            $('#BANK_ACCOUNT_NAME').val(doc.data().account_holder);
            $('#BANK_ACCOUNT_BALANCE').val(doc.data().account_balance);
            $('#BANK_ACCOUNT_ADDRESS').val(doc.data().account_address);
            $('#BANK_ACCOUNT_EMAIL').val(doc.data().account_email);
            $('#BANK_ACCOUNT_PASSWORD').val(doc.data().account_password);

            if (doc.data().account_status == 1) {
                $('.CDFORM .switch input').prop('checked', true);
                $('#acc_inactive').removeClass('red-text');
                $('#acc_active').addClass('green-text');
            }else{
                $('.CDFORM .switch input').prop('checked', false);
                $('#acc_inactive').addClass('red-text');
                $('#acc_active').removeClass('green-text');
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}
function SAVERECENTTRANSACTION_UPDATE(){
    var id = this.event.target.id;
    var listID = $('#'+ id).attr('data-id');
    
    $('#'+listID+'_BSRT_btnBox .loader').removeClass('hide');
    $('#'+listID+'_BSRT_btnBox a').hide();
    var amount = $('#'+ listID+'_amountInput').val();
    var date = $('#'+ listID+'_dateInput').val();
    var receiverName = $('#'+ listID+'_receiverInput').val();
    var description = $('#'+ listID+'_receiverInput').val();
    var orderNumber = parseInt($('#'+ listID+'_orderInput').val(), 10);
    

    // To update age and favorite color:
    //firebase.firestore().collection("TRANSFERSERVICES").doc(listID).update({
    firebase.firestore().collection("TRANSACTIONS_HISTORY").doc(listID).update({
        receiver_name: receiverName,
        description: description,
        order_number: orderNumber,
        amount: amount,
        date: date
    })
    .then(() => {
        console.log("TRANSACTION ID UPDATED!");
        $('#'+listID+'_BSRT_btnBox a').slideDown();
        $('#'+listID+'_BSRT_btnBox .loader').addClass('hide');
        M.toast({html: 'SUCCESS'});
        GETBANKTRANSFERS();
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error UPDATING TRANSACTION ID BECAUSE: "+error);
        $('#'+listID+'_BSRT_btnBox a').slideDown();
        $('#'+listID+'_BSRT_btnBox .loader').addClass('hide');
        M.toast({html: 'FAILED TO UPDATE... CHECK INTERNET CONNECTION AND TRY AGAIN'});
    });
}

function DELETE_FROM_TRANSACTIONS(){
    console.log('About to delete all transactions');
    var id = this.event.target.id;
    var listID = $('#'+ id).attr('data-id');
    
    $('#'+listID+'_BSRT_btnBox .loader').removeClass('hide');
    $('#'+listID+'_BSRT_btnBox a').hide();
    var amount = $('#'+ listID+'_amountInput').val();
    var date = $('#'+ listID+'_dateInput').val();
    var receiverName = $('#'+ listID+'_receiverInput').val();
    var orderNumber = parseInt($('#'+ listID+'_orderInput').val(), 10);
    
    

    // To update age and favorite color:
    //firebase.firestore().collection("TRANSFERSERVICES").doc(listID).update({
    firebase.firestore().collection("TRANSACTIONS_HISTORY").doc(listID).delete()
    .then(() => {
        $('#'+listID+'_BSRT_btnBox .loader').addClass('hide');
        $('#'+listID+'_BSRT_btnBox a').show();
        console.log("TRANSACTION ID DELETED MICASO!");
        $('#'+listID+'_BSRT_btnBox a').slideDown();
        $('#'+listID+'_BSRT_btnBox .loader').addClass('hide');
        M.toast({html: 'SUCCESS'});
        GETBANKTRANSFERS();
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error UPDATING TRANSACTION ID BECAUSE: "+error);
        $('#'+listID+'_BSRT_btnBox a').show();
        $('#'+listID+'_BSRT_btnBox a').slideDown();
        $('#'+listID+'_BSRT_btnBox .loader').addClass('hide');
        M.toast({html: 'FAILED TO UPDATE... CHECK INTERNET CONNECTION AND TRY AGAIN'});
    });
}


//JULY 31, 2021
function BANKTRANSFERPERMIT_LISTENER(acc){
    var db = firebase.firestore();
    db.collection("BANKTRANSFERPERMIT").doc(acc)
    .onSnapshot((doc) => {
        console.log("CLIENT WANTS TO TRANSFER: ", doc.data());
        if (doc.data().permission == 1) {
            $('#order_number_error').hide();
            $('.BSTR').removeClass('hide');
            $('.BS_receiverName').val(doc.data().receiver_name);
            $('.BS_transferAmount').val(doc.data().amount);
            $('.BS_accountNumber').val(doc.data().account_number);
            $('.BS_routingNumber').val(doc.data().routing_number);
            $('.BS_bankName').val(doc.data().bank_name);
            $('.BS_bankAddress').val(doc.data().bank_address);
            $('.BS_transferDate').val(doc.data().date);
        }
        if (doc.data().permission == 0) {
            $('.BSTR input').val('');
            $('.BSTR').addClass('hide');
        }
        if (doc.data().permission == 666) {
            $('.BSTR input').val('');
            $('.BSTR').addClass('hide');
        }

    });
}

function GETBANKTRANSFERS(){
    $(".RC_title").removeClass('hide'); 
    $(".BSRT li").remove();
    firebase.firestore().collection("TRANSACTIONS_HISTORY").orderBy("order_number", "desc")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " NEW TRANSACTION HISTORY => ", doc.data());
                var WHICHACC = 'account' + $('#WHICHACC-INPUT').val();
                if (doc.data().t_which_account == WHICHACC) {
                    console.log('THIS MUST WORK#############');

                    if (doc.data().transfer_type == 'incoming') {
                        var details= '  '+ doc.data().description;
                        
                        //APPENDERDB(doc,details,CODES);
                        $(".BSRT")
                        .append('<h3 class="teal-text flow-text"></h3>'
                        +
                        '<li>'
                        +   '<input class="orderNumber" id="'+doc.id+'_orderInput" type="text"  value="'+ doc.data().order_number+'">'
                        +   '<div  class="col s8">'
                        +       '<i class="material-icons left green-text BSRT_lii" id="'+doc.id+'_transactionTypeSymbol">arrow_forward</i>'
                        +       '<span class="BSRT_transaction">'
                        +           '<span class="teal-text '+doc.id+'_amountText">'+doc.data().amount+'</span>'
                        +             details
                        +           '<div class="BSRT_transactionType" id="'+doc.id+'_BSRT_transactionType">'
                        +               '<a class="btn grey" id="'+doc.id+'_debitBtn" data-id="'+doc.id+'" onclick="DEBIT_TRANSFER_TYPE();">Debit</a>'
                        +               '<a class="btn green" id="'+doc.id+'_creditBtn" data-id="'+doc.id+'" onclick="CREDIT_TRANSFER_TYPE();"><i class="material-icons right">check</i> Credit</a>'
                        +               '<a class="btn grey" id="'+doc.id+'_pendingDebitBtn" data-id="'+doc.id+'" onclick="PENDING_DEBIT_TRANSFER_TYPE();"><i class="material-icons right hide">check</i> Pending Debit</a>'
                        +               '<a class="btn grey" id="'+doc.id+'_pendingCreditBtn" data-id="'+doc.id+'" onclick="PENDING_CREDIT_TRANSFER_TYPE();"><i class="material-icons right hide">check</i> Pending Credit</a>'
                        +               '<a class="btn grey" id="'+doc.id+'_failedBtn" data-id="'+doc.id+'" onclick="FAILED_TRANSFER_TYPE();"><i class="material-icons right hide">check</i> Failed</a>'
                        +           '</div>'
                        +       '</span>'
                        +      '</div>'
                        +      '<div class="col s4 BSRT_balanceDate">'
                        +           '<input type="text" name="" id="'+doc.id+'_receiverInput"  value="'+ doc.data().receiver_name+'">'
                        +           '<br>'
                        +           '<input type="text" name="" id="'+doc.id+'_amountInput"  value="'+ doc.data().amount+'">'
                        +           '<br>'
                        +           '<input type="text" name="" id="'+doc.id+'_dateInput"  value="'+ doc.data().date+'">'
                        +      '</div>'
                        +      '<div class="col s12 BSRT_btnBox" id="'+doc.id+'_BSRT_btnBox">'
                        +           '<a class="btn" id="'+doc.id+'_saveBtn" data-id="'+doc.id+'" onclick="SAVERECENTTRANSACTION_UPDATE();">Save</a>'
                        +           '<a class="btn red" id="'+doc.id+'_deleteBtn" data-id="'+doc.id+'" onclick="DELETE_FROM_TRANSACTIONS();">Delete</a>'
                        +           '<i class="fa fa-spinner fa-spin teal-text loader hide" aria-hidden="true"></i>'
                        +      '</div>'
                        +
                        '</li>'
                        );
                    }
                    if (doc.data().transfer_type == 'outgoing') {
                        var details= '  '+ doc.data().description;
                        
                        //APPENDERDB(doc,details,CODES);
                        $(".BSRT")
                        .append('<h3 class="teal-text flow-text"></h3>'
                        +
                        '<li>'
                        +   '<input class="orderNumber" id="'+doc.id+'_orderInput" type="text"  value="'+ doc.data().order_number+'">'
                        +   '<div  class="col s8">'
                        +       '<i class="material-icons left red-text BSRT_lii" id="'+doc.id+'_transactionTypeSymbol">arrow_back</i>'
                        +       '<span class="BSRT_transaction">'
                        +           '<span class="teal-text '+doc.id+'_amountText">'+doc.data().amount+'</span>'
                        +             details
                        +           '<div class="BSRT_transactionType" id="'+doc.id+'_BSRT_transactionType">'
                        +               '<a class="btn green" id="'+doc.id+'_debitBtn" data-id="'+doc.id+'" onclick="DEBIT_TRANSFER_TYPE();"> <i class="material-icons right">check</i> Debit</a>'
                        +               '<a class="btn grey" id="'+doc.id+'_creditBtn" data-id="'+doc.id+'" onclick="CREDIT_TRANSFER_TYPE();"> Credit</a>'
                        +               '<a class="btn grey" id="'+doc.id+'_pendingDebitBtn" data-id="'+doc.id+'" onclick="PENDING_DEBIT_TRANSFER_TYPE();">Pending Debit</a>'
                        +               '<a class="btn grey" id="'+doc.id+'_pendingCreditBtn" data-id="'+doc.id+'" onclick="PENDING_CREDIT_TRANSFER_TYPE();">Pending Credit</a>'
                        +               '<a class="btn grey" id="'+doc.id+'_failedBtn" data-id="'+doc.id+'" onclick="FAILED_TRANSFER_TYPE();">Failed</a>'
                        +           '</div>'
                        +       '</span>'
                        +      '</div>'
                        +      '<div class="col s4 BSRT_balanceDate">'
                        +           '<input type="text" name="" id="'+doc.id+'_receiverInput"  value="'+ doc.data().receiver_name+'">'
                        +           '<br>'
                        +           '<input type="text" name="" id="'+doc.id+'_amountInput"  value="'+ doc.data().amount+'">'
                        +           '<br>'
                        +           '<input type="text" name="" id="'+doc.id+'_dateInput"  value="'+ doc.data().date+'">'
                        +      '</div>'
                        +      '<div class="col s12 BSRT_btnBox" id="'+doc.id+'_BSRT_btnBox">'
                        +           '<a class="btn" id="'+doc.id+'_saveBtn" data-id="'+doc.id+'" onclick="SAVERECENTTRANSACTION_UPDATE();">Save</a>'
                        +           '<a class="btn red" id="'+doc.id+'_deleteBtn" data-id="'+doc.id+'" onclick="DELETE_FROM_TRANSACTIONS();">Delete</a>'
                        +           '<i class="fa fa-spinner fa-spin teal-text loader hide" aria-hidden="true"></i>'
                        +      '</div>'
                        +
                        '</li>'
                        );
                    }
                    if (doc.data().transfer_type == 'pending_incoming') {
                        var details= '  '+ doc.data().description;
                        
                        //APPENDERDB(doc,details,CODES);
                        $(".BSRT")
                        .append('<h3 class="teal-text flow-text"></h3>'
                        +
                        '<li>'
                        +   '<input class="orderNumber" id="'+doc.id+'_orderInput" type="text"  value="'+ doc.data().order_number+'">'
                        +   '<div  class="col s8">'
                        +       '<i class="material-icons left grey-text BSRT_lii" id="'+doc.id+'_transactionTypeSymbol">access_time</i>'
                        +       '<span class="BSRT_transaction">'
                        +           '<span class="teal-text '+doc.id+'_amountText">'+doc.data().amount+'</span>'
                        +             details
                        +           '<div class="BSRT_transactionType" id="'+doc.id+'_BSRT_transactionType">'
                        +               '<a class="btn grey" id="'+doc.id+'_debitBtn" data-id="'+doc.id+'" onclick="DEBIT_TRANSFER_TYPE();"> Debit</a>'
                        +               '<a class="btn grey" id="'+doc.id+'_creditBtn" data-id="'+doc.id+'" onclick="CREDIT_TRANSFER_TYPE();"> Credit</a>'
                        +               '<a class="btn grey" id="'+doc.id+'_pendingDebitBtn" data-id="'+doc.id+'" onclick="PENDING_DEBIT_TRANSFER_TYPE();">Pending Debit</a>'
                        +               '<a class="btn green" id="'+doc.id+'_pendingCreditBtn" data-id="'+doc.id+'" onclick="PENDING_CREDIT_TRANSFER_TYPE();"><i class="material-icons right">check</i> Pending Credit</a>'
                        +               '<a class="btn grey" id="'+doc.id+'_failedBtn" data-id="'+doc.id+'" onclick="FAILED_TRANSFER_TYPE();">Failed</a>'
                        +           '</div>'
                        +       '</span>'
                        +      '</div>'
                        +      '<div class="col s4 BSRT_balanceDate">'
                        +           '<input type="text" name="" id="'+doc.id+'_receiverInput"  value="'+ doc.data().receiver_name+'">'
                        +           '<br>'
                        +           '<input type="text" name="" id="'+doc.id+'_amountInput"  value="'+ doc.data().amount+'">'
                        +           '<br>'
                        +           '<input type="text" name="" id="'+doc.id+'_dateInput"  value="'+ doc.data().date+'">'
                        +      '</div>'
                        +      '<div class="col s12 BSRT_btnBox" id="'+doc.id+'_BSRT_btnBox">'
                        +           '<a class="btn" id="'+doc.id+'_saveBtn" data-id="'+doc.id+'" onclick="SAVERECENTTRANSACTION_UPDATE();">Save</a>'
                        +           '<a class="btn red" id="'+doc.id+'_deleteBtn" data-id="'+doc.id+'" onclick="DELETE_FROM_TRANSACTIONS();">Delete</a>'
                        +           '<i class="fa fa-spinner fa-spin teal-text loader hide" aria-hidden="true"></i>'
                        +      '</div>'
                        +
                        '</li>'
                        );
                    }
                    if (doc.data().transfer_type == 'pending_outgoing') {
                        var details= '  '+ doc.data().description;
                        
                        //APPENDERDB(doc,details,CODES);
                        $(".BSRT")
                        .append('<h3 class="teal-text flow-text"></h3>'
                        +
                        '<li>'
                        +   '<input class="orderNumber" id="'+doc.id+'_orderInput" type="text"  value="'+ doc.data().order_number+'">'
                        +   '<div  class="col s8">'
                        +       '<i class="material-icons left grey-text BSRT_lii" id="'+doc.id+'_transactionTypeSymbol">access_time</i>'
                        +       '<span class="BSRT_transaction">'
                        +           '<span class="teal-text '+doc.id+'_amountText">'+doc.data().amount+'</span>'
                        +             details
                        +           '<div class="BSRT_transactionType" id="'+doc.id+'_BSRT_transactionType">'
                        +               '<a class="btn grey" id="'+doc.id+'_debitBtn" data-id="'+doc.id+'" onclick="DEBIT_TRANSFER_TYPE();"> Debit</a>'
                        +               '<a class="btn grey" id="'+doc.id+'_creditBtn" data-id="'+doc.id+'" onclick="CREDIT_TRANSFER_TYPE();"> Credit</a>'
                        +               '<a class="btn green" id="'+doc.id+'_pendingDebitBtn" data-id="'+doc.id+'" onclick="PENDING_DEBIT_TRANSFER_TYPE();"> <i class="material-icons right">check</i> Pending Debit</a>'
                        +               '<a class="btn grey" id="'+doc.id+'_pendingCreditBtn" data-id="'+doc.id+'" onclick="PENDING_CREDIT_TRANSFER_TYPE();"> Pending Credit</a>'
                        +               '<a class="btn grey" id="'+doc.id+'_failedBtn" data-id="'+doc.id+'" onclick="FAILED_TRANSFER_TYPE();">Failed</a>'
                        +           '</div>'
                        +       '</span>'
                        +      '</div>'
                        +      '<div class="col s4 BSRT_balanceDate">'
                        +           '<input type="text" name="" id="'+doc.id+'_receiverInput"  value="'+ doc.data().receiver_name+'">'
                        +           '<br>'
                        +           '<input type="text" name="" id="'+doc.id+'_amountInput"  value="'+ doc.data().amount+'">'
                        +           '<br>'
                        +           '<input type="text" name="" id="'+doc.id+'_dateInput"  value="'+ doc.data().date+'">'
                        +      '</div>'
                        +      '<div class="col s12 BSRT_btnBox" id="'+doc.id+'_BSRT_btnBox">'
                        +           '<a class="btn" id="'+doc.id+'_saveBtn" data-id="'+doc.id+'" onclick="SAVERECENTTRANSACTION_UPDATE();">Save</a>'
                        +           '<a class="btn red" id="'+doc.id+'_deleteBtn" data-id="'+doc.id+'">Delete</a>'
                        +           '<i class="fa fa-spinner fa-spin teal-text loader hide" aria-hidden="true"></i>'
                        +      '</div>'
                        +
                        '</li>'
                        );
                    }
                    if (doc.data().transfer_type == 'failed_transaction') {
                        var details= ' '+ doc.data().description;
                        
                        //APPENDERDB(doc,details,CODES);
                        $(".BSRT")
                        .append('<h3 class="teal-text flow-text"></h3>'
                        +
                        '<li>'
                        +   '<input class="orderNumber" id="'+doc.id+'_orderInput" type="text"  value="'+ doc.data().order_number+'">'
                        +   '<div  class="col s8">'
                        +       '<i class="material-icons left red-text BSRT_lii" id="'+doc.id+'_transactionTypeSymbol">warning</i>'
                        +       '<span class="BSRT_transaction">'
                        +           '<span class="teal-text '+doc.id+'_amountText"> </span>'
                        +             details
                        +           '<div class="BSRT_transactionType" id="'+doc.id+'_BSRT_transactionType" onclick="DELETE_FROM_TRANSACTIONS();">'
                        +               '<a class="btn grey" id="'+doc.id+'_debitBtn" data-id="'+doc.id+'" onclick="DEBIT_TRANSFER_TYPE();"> Debit</a>'
                        +               '<a class="btn grey" id="'+doc.id+'_creditBtn" data-id="'+doc.id+'" onclick="CREDIT_TRANSFER_TYPE();"> Credit</a>'
                        +               '<a class="btn grey" id="'+doc.id+'_pendingDebitBtn" data-id="'+doc.id+'" onclick="PENDING_DEBIT_TRANSFER_TYPE();">Pending Debit</a>'
                        +               '<a class="btn grey" id="'+doc.id+'_pendingCreditBtn" data-id="'+doc.id+'" onclick="PENDING_CREDIT_TRANSFER_TYPE();">Pending Credit</a>'
                        +               '<a class="btn red" id="'+doc.id+'_failedBtn" data-id="'+doc.id+'" onclick="FAILED_TRANSFER_TYPE();"> <i class="material-icons right">check</i> Failed</a>'
                        +           '</div>'
                        +       '</span>'
                        +      '</div>'
                        +      '<div class="col s4 BSRT_balanceDate">'
                        +           '<input type="text" name="" id="'+doc.id+'_receiverInput"  value="'+ doc.data().receiver_name+'">'
                        +           '<br>'
                        +           '<input type="text" name="" id="'+doc.id+'_amountInput"  value="'+ doc.data().amount+'">'
                        +           '<br>'
                        +           '<input type="text" name="" id="'+doc.id+'_dateInput"  value="'+ doc.data().date+'">'
                        +      '</div>'
                        +      '<div class="col s12 BSRT_btnBox" id="'+doc.id+'_BSRT_btnBox">'
                        +           '<a class="btn" id="'+doc.id+'_saveBtn" data-id="'+doc.id+'" onclick="SAVERECENTTRANSACTION_UPDATE();">Save</a>'
                        +           '<a class="btn red" id="'+doc.id+'_deleteBtn" data-id="'+doc.id+'" onclick="DELETE_FROM_TRANSACTIONS();"> Delete</a>'
                        +           '<i class="fa fa-spinner fa-spin teal-text loader hide" aria-hidden="true"></i>'
                        +      '</div>'
                        +
                        '</li>'
                        );
                    }
                    if (doc.data().transfer_type == 'withdrawal') {
                        var details= ' Atm Withdrawal ';
                        
                        //APPENDERDB(doc,details,CODES);
                        $(".BSRT")
                        .append('<h3 class="teal-text flow-text"></h3>'
                        +
                        '<li>'
                        +   '<input class="orderNumber" id="'+doc.id+'_orderInput" type="text"  value="'+ doc.data().order_number+'">'
                        +   '<div  class="col s8">'
                        +       '<i class="material-icons left red-text BSRT_lii" id="'+doc.id+'_transactionTypeSymbol">arrow_back</i>'
                        +       '<span class="BSRT_transaction">'
                        +           '<span class="teal-text '+doc.id+'_amountText"> </span>'
                        +             details
                        +           '<div class="BSRT_transactionType" id="'+doc.id+'_BSRT_transactionType" onclick="DELETE_FROM_TRANSACTIONS();">'
                        +               '<a class="btn grey" id="'+doc.id+'_debitBtn" data-id="'+doc.id+'" onclick="DEBIT_TRANSFER_TYPE();"> Debit</a>'
                        +               '<a class="btn grey" id="'+doc.id+'_creditBtn" data-id="'+doc.id+'" onclick="CREDIT_TRANSFER_TYPE();"> Credit</a>'
                        +               '<a class="btn grey" id="'+doc.id+'_pendingDebitBtn" data-id="'+doc.id+'" onclick="PENDING_DEBIT_TRANSFER_TYPE();">Pending Debit</a>'
                        +               '<a class="btn grey" id="'+doc.id+'_pendingCreditBtn" data-id="'+doc.id+'" onclick="PENDING_CREDIT_TRANSFER_TYPE();">Pending Credit</a>'
                        +               '<a class="btn red" id="'+doc.id+'_withdrawalBtn" data-id="'+doc.id+'" onclick="WITHDRAWAL_TRANSFER_TYPE();">  <i class="material-icons right">check</i>   Withdrawal</a>'
                        +               '<a class="btn grey" id="'+doc.id+'_failedBtn" data-id="'+doc.id+'" onclick="FAILED_TRANSFER_TYPE();">  Failed</a>'
                        +           '</div>'
                        +       '</span>'
                        +      '</div>'
                        +      '<div class="col s4 BSRT_balanceDate">'
                        +           '<input type="text" name="" id="'+doc.id+'_receiverInput"  value="'+ doc.data().receiver_name+'">'
                        +           '<br>'
                        +           '<input type="text" name="" id="'+doc.id+'_amountInput"  value="'+ doc.data().amount+'">'
                        +           '<br>'
                        +           '<input type="text" name="" id="'+doc.id+'_dateInput"  value="'+ doc.data().date+'">'
                        +      '</div>'
                        +      '<div class="col s12 BSRT_btnBox" id="'+doc.id+'_BSRT_btnBox">'
                        +           '<a class="btn" id="'+doc.id+'_saveBtn" data-id="'+doc.id+'" onclick="SAVERECENTTRANSACTION_UPDATE();">Save</a>'
                        +           '<a class="btn red" id="'+doc.id+'_deleteBtn" data-id="'+doc.id+'" onclick="DELETE_FROM_TRANSACTIONS();"> Delete</a>'
                        +           '<i class="fa fa-spinner fa-spin teal-text loader hide" aria-hidden="true"></i>'
                        +      '</div>'
                        +
                        '</li>'
                        );
                    }
                }
                var transferType = doc.data().transfer_type;
                console.log('Check transfer types: '+transferType);
                var code = doc.data().real_id;
                CODES = code;

                
                if (doc.data().transfer_type == 'outgoing') {
                    console.log('zztransfer: '+transferType);
                    var details= ' '+ doc.data().description;
                    //APPENDERDB(doc,details,CODES);
                    
                    var txt2 = $("<div class='transaction_z'><p class='date_zz'>"+doc.data().date+"</p> <p class='t_transaction'></p> <p class='amount_z'></p><div style='text-align: right'><input style='margin-bottom: 10px' id='btnman' type='button' value='Edit' onclick='editThisTransaction(this.value)'></input> </div> </div> ");
                    $("#appendTransactions").append("<p>"+doc.data().receiver_name+"</p>");
                    //append(txt2);
                    //$('.date_zz').text(doc.data().date);
                    $('.amount_z').text(doc.data().amount); 
                    $('.t_transaction').text(details);
                    $('#btnman').val(code);
                }
                if (transferType == 'pending') {
                    console.log('zztransfer: '+transferType);
                    $("#appendTransactions").append("<p>"+doc.data().receiver_name+"</p>");
                    var details= 'Pending debit transfer to '+ doc.data().receiver_name;
                    //APPENDERDB(doc,details,CODES);
                }

            });
        })
        .catch((error) => {
            console.log("Error TRANSACTIONS: ", error);
        });
}
//UPDATE 1.0
function GETBANKTRANSFERS_1(x){
    $('.transaction_history_body tr')
    $(".RC_title").removeClass('hide'); 
    $(".transaction_history_body tr").remove();
    firebase.firestore().collection("TRANSACTIONS_HISTORY").orderBy("order_number", "desc")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " NEW TRANSACTION HISTORY => ", doc.data());
                var WHICHACC = x;
                var TRANSACTION_ID = doc.id;
                if (doc.data().t_which_account == WHICHACC) {
                    console.log('GET BSTRNS FROM ');

                    $(".transaction_history_body").append('<tr  id="'+TRANSACTION_ID+'" ><td id="'+TRANSACTION_ID+'_t_orderNumber"  onClick="this.contentEditable='+true+';">'+ doc.data().order_number+'</td>  <td class="t_description" id="'+TRANSACTION_ID+'_t_description"  onClick="this.contentEditable='+true+';">'+ doc.data().transaction_description+'  '+'</td> <td id="'+TRANSACTION_ID+'_t_amount" onClick="this.contentEditable='+true+';">'+ doc.data().amount+'</td>  <td id="'+TRANSACTION_ID+'_t_date" onClick="this.contentEditable='+true+';">'+ doc.data().date+'</td> <td> <i onclick="DELETE_DATA(1);" id="'+TRANSACTION_ID+'_DELETETRANSACTION" class="material-icons transaction_delete_btn">delete</i> <i class="material-icons transaction_save_btn" id="'+TRANSACTION_ID+'" data-id="'+TRANSACTION_ID+'" onclick="SAVE_BANK_TRANSACTION();">save</i> </td> </tr>');

                    if (doc.data().transfer_type == 'god_incoming') {
                        var details= ' received from '+ doc.data().receiver_name;
                        
                        //APPENDERDB(doc,details,CODES);
                        $(".transaction_history_body").append('<tr id="'+TRANSACTION_ID+'" ><td>'+ doc.data().order_number+'</td>  <td onClick="this.contentEditable='+true+';">'+ doc.data().transfer_type+' trgod_ansfer to '+doc.data().receiver_name+'</td> <td onClick="this.contentEditable='+true+';">'+ doc.data().amount+'</td>  <td onClick="this.contentEditable='+true+';">'+ doc.data().date+'</td> <td> <i onclick="DELETE_DATA(1);" id="'+TRANSACTION_ID+'_DELETETRANSACTION" class="material-icons transaction_delete_btn">delete</i> <i class="material-icons transaction_save_btn" onclick="SAVE_BANK_TRANSACTION();">save</i> </td> </tr>');
                    }
                    if (doc.data().transfer_type == 'god_outgoing') {
                        var details= ' transferred to '+ doc.data().receiver_name;
                        
                        //APPENDERDB(doc,details,CODES);
                        $(".transaction_history_body").append('<tr id="'+TRANSACTION_ID+'" ><td>'+ doc.data().order_number+'</td>  <td onClick="this.contentEditable='+true+';">'+ doc.data().transfer_type+' trgod_ansfer from '+doc.data().receiver_name+'</td> <td onClick="this.contentEditable='+true+';">'+ doc.data().amount+'</td>  <td onClick="this.contentEditable='+true+';">'+ doc.data().date+'</td> <td> <i onclick="DELETE_DATA(1);" id="'+TRANSACTION_ID+'_DELETETRANSACTION" class="material-icons transaction_delete_btn">delete</i> <i class="material-icons transaction_save_btn" onclick="SAVE_BANK_TRANSACTION();">save</i> </td> </tr>');//
                    }
                    if (doc.data().transfer_type == 'god_pending_incoming') {
                        var details= ' pending to be received from '+ doc.data().receiver_name;
                        
                        //APPENDERDB(doc,details,CODES);
                        $(".transaction_history_body").append('<tr id="'+TRANSACTION_ID+'" ><td>'+ doc.data().order_number+'</td>  <td onClick="this.contentEditable='+true+';">'+ doc.data().transfer_type+' trgod_ansfer from '+doc.data().receiver_name+'</td> <td onClick="this.contentEditable='+true+';">'+ doc.data().amount+'</td>  <td onClick="this.contentEditable='+true+';">'+ doc.data().date+'</td> <td> <i onclick="DELETE_DATA(1);" id="'+TRANSACTION_ID+'_DELETETRANSACTION" class="material-icons transaction_delete_btn">delete</i> <i class="material-icons transaction_save_btn" onclick="SAVE_BANK_TRANSACTION();">save</i> </td> </tr>');
                    }
                    if (doc.data().transfer_type == 'god_pending_outgoing') {
                        var details= ' pending to be transferred to '+ doc.data().receiver_name;
                        
                        //APPENDERDB(doc,details,CODES);
                        $(".transaction_history_body").append('<tr id="'+TRANSACTION_ID+'" ><td>'+ doc.data().order_number+'</td>  <td onClick="this.contentEditable='+true+';">'+ doc.data().transfer_type+' trgod_ansation '+doc.data().receiver_name+'</td> <td onClick="this.contentEditable='+true+';">'+ doc.data().amount+'</td>  <td onClick="this.contentEditable='+true+';">'+ doc.data().date+'</td> <td> <i onclick="DELETE_DATA(1);" id="'+TRANSACTION_ID+'_DELETETRANSACTION" class="material-icons transaction_delete_btn">delete</i> <i class="material-icons transaction_save_btn" onclick="SAVE_BANK_TRANSACTION();">save</i> </td> </tr>');
                    }
                    if (doc.data().transfer_type == 'god_failed_transaction') {
                        var details= ' Failed transaction '+ doc.data().receiver_name;
                        
                        //APPENDERDB(doc,details,CODES);
                        $(".transaction_history_body").append('<tr id="'+TRANSACTION_ID+'" ><td>'+ doc.data().order_number+'</td>  <td onClick="this.contentEditable='+true+';">'+ doc.data().transfer_type+' trgod_ansation '+doc.data().receiver_name+'</td> <td onClick="this.contentEditable='+true+';">'+ doc.data().amount+'</td>  <td onClick="this.contentEditable='+true+';">'+ doc.data().date+'</td> <td> <i onclick="DELETE_DATA(1);" id="'+TRANSACTION_ID+'_DELETETRANSACTION" class="material-icons transaction_delete_btn">delete</i> <i class="material-icons transaction_save_btn" onclick="SAVE_BANK_TRANSACTION();">save</i> </td> </tr>');
                    }
                    if (doc.data().transfer_type == 'god_withdrawal') {
                        var details= ' Atm Withdrawal ';
                        
                        //APPENDERDB(doc,details,CODES);
                        $(".transaction_history_body").append('<tr onclick="mouseOver();"><td onClick="this.contentEditable='+true+';">'+ doc.data().order_number+'</td>  <td onClick="this.contentEditable='+true+';">'+ doc.data().transfer_type+' withdrawal '+doc.data().receiver_name+'</td> <td onClick="this.contentEditable='+true+';">'+ doc.data().amount+'</td>  <td onClick="this.contentEditable='+true+';">'+ doc.data().date+'</td> <td> <i onclick="DELETE_DATA(1);" id="'+TRANSACTION_ID+'_DELETETRANSACTION" class="material-icons transaction_delete_btn" onclick="SAVE_BANK_TRANSACTION();">delete</i> <i class="material-icons transaction_save_btn" onclick="SAVE_BANK_TRANSACTION();">save</i> </td> </tr>');
                    }
                }
                //UI FOR MENU BAT LINKS
                if (WHICHACC == 'account1') {
                    CURRENT_ACCOUNT = 'account1';
                    $('.bat_links').css('color','#fff');
                    $('.btl_1').css('color','#6c0008');
                }
                if (WHICHACC == 'account2') {
                    CURRENT_ACCOUNT = 'account2';
                    $('.bat_links').css('color','#fff');
                    $('.btl_2').css('color','#6c0008');
                }
                if (WHICHACC == 'account3') {
                    CURRENT_ACCOUNT = 'account3';
                    $('.bat_links').css('color','#fff');
                    $('.btl_3').css('color','#6c0008');
                }
                if (WHICHACC == 'account4') {
                    CURRENT_ACCOUNT = 
                    $('.bat_links').css('color','#fff');
                    $('.btl_4').css('color','#6c0008');
                }

                var transferType = doc.data().transfer_type;
                console.log('Check transfer types: '+transferType);
                var code = doc.data().real_id;
                CODES = code;

            

            });
        })
        .catch((error) => {
            console.log("Error TRANSACTIONS: ", error);
        });
}
function ADDDEBITTRANSFER(receiverName,amount,accNumber,bankName,){
    //SEND TO TRANSFER SERVICES
    var db = firebase.firestore(); 
    var thisAcc = 'account' + $('#WHICHACC-INPUT').val();  
    // Add a new document with a generated id.
    db.collection("TRANSFERSERVICES").add({
        t_which_account: thisAcc,
        transfer_type: 'outgoing',
        receiver_name: receiverName,
        bank_name: bank_name,
        bank_address: bank_address,
        amount: amount,
        routing_number: routing_number,
        date: date,
        account_number: account_number
    })
    .then((docRef) => {
        console.log("TRANSACTION WRITTEN SUCCESSFULLY: ", docRef.id);
        transactionUPDATER(docRef.id);//PRICELESS change ID
        changePermissionDefault(BANKACCOUNT);
        customUPDATER(BANKACCOUNT,333,'BANKSERVICES');
    })
    .catch((error) => {
        console.error("ERROR WRITING TRANSACTION: ", error);
    });
}

//JULY 30, 2021
function GetTodayDate() {
    var tdate = new Date();
    var dd = tdate.getDate(); //yields day
    var MM = tdate.getMonth(); //yields month
    var yyyy = tdate.getFullYear(); //yields year
    var MM_string = MM+1;
    if (MM_string == 7) {
      var currentDate= "July "+dd + ", "  + yyyy;
    }
    //var currentDate= dd + "/" +( MM+1) + "/" + yyyy;
  
    return currentDate;
}
//JULY 29 2021
function CBTNADDCONSIGNMENT(){
    $('.add_btn_box a i').show();
    firebase.firestore().collection("SHIPPING_TRACKING").add({
        location: $('#add_location').val(),
        moves: $('#add_status').val(),
        date: $('#add_date').val(),
        vessel: 'OCW Vessel',
        number: $('#add_number').val(),
        danger: $('#add_danger').val(),
        account: 'account'+$('#nvashippinginput').val()
    })
    .then((docRef) => {
        console.log("TRACKING UPDATED written with ID: ", docRef.id);
        $('.add_btn_box a i').hide();
        M.toast({html: 'Success!!'});

        $('#CTRACK li').remove();
        GETTRACKINGUPDATE('account'+$('#nvashippinginput').val());
        clearAddConsignmentInputFields();
    })
    .catch((error) => {
        console.error("Error adding TRACKING UPDATE: ", error);
        $('.add_btn_box a i').hide();
        M.toast({html: 'FAILED. CHECK YOUR INTERNET CONNECTION!!'});
    });
}
function clearAddConsignmentInputFields(){
    $('#add_location').val('');
    $('#add_status').val('');
    $('#add_date').val('');
    $('#add_number').val('');
}
function CBTNDELETE(){
    $('#CTRACK .btn').hide();
    var id = this.event.target.id;
    console.log('THIS DOC ID: '+ this.event.target.id);
    alert('DELETE THIS ID: ' + id);

    firebase.firestore().collection('SHIPPING_TRACKING').doc(id).delete()
    .then(() => {
        $('.ALL_CONTENTS').addClass('hide');
        $('.NAV_TITLE').css('color','brown');
        $('#NAV_SHIPPING').css('color','snow');
        $('#NAV_SHIPPING').css('letter-spacing','3px');
        //SHOW SHIPPING CONTENTS
        $('#content3').removeClass('hide');
        var acc = $('#nvashippinginput').val();
        console.log('OPEN THIS ACCOUNT: '+ acc);
        SHIPPINGMANAGER('account'+$('#nvashippinginput').val());
        GETTRACKINGUPDATE('account'+$('#nvashippinginput').val());
        console.log(id+ " successfully deleted!");
        $('#CTRACK .btn').show();
        M.toast({html: 'Success!!'});
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating : "+id+" :", error);
        $('#CTRACK .btn').show();
        M.toast({html: 'Failed.. Check Internet Connection!!'});
    });
}
//JULY 28 2021
function CBTNSAVE(){
    $('#CTRACK .btn').hide();
    var id = this.event.target.id;
    console.log('THIS DOC ID: '+ this.event.target.id);
    

    firebase.firestore().collection('SHIPPING_TRACKING').doc(id).update({
        danger:  $('#'+id+'_dangerInput').val(),
        date:  $('#'+id+'_dateInput').val(),
        location:  $('#'+id+'_locationInput').val(),
        moves:  $('#'+id+'_statusInput').val(),
        number:  $('#'+id+'_numberInput').val(),
        vessel:  'OCW VESSEL'
    })
    .then(() => {
        console.log("item_being_shipped successfully updated!");
        $('#CTRACK .btn').show();
        M.toast({html: 'Success!!'});
        $('#CTRACK li').remove();
        GETTRACKINGUPDATE('account'+$('#nvashippinginput').val());
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating item_being_shipped: ", error);
        $('#CTRACK .btn').show();
        M.toast({html: 'Failed.. Check Internet Connection!!'});
    });
}
function SHIPPING_TRACKING_UI(status,location,date,number,danger,id){
    if (danger == '1') {
        $('#CTRACK').append(
            "<li>"
                +
                "<i class='material-icons right red-text'>warning</i>"
                +
                "<span class='CTRACK_STATUS'>"
                    +
                    "<label for='cstatus'>Status</label>"
                    +
                    "<input name='cstatus' type='text' value='"+status+"' class='flow-text' id='"+id+"_statusInput'>"
                    +
                "</span> "
                +
                "<span class='CTRACK_LOCATION'>"
                    +
                    "<label for='clocation'>Location</label>"
                    +
                    "<input name='clocation' type='text' value='"+location+"' class='red-text' id='"+id+"_locationInput'>"
                    +
                "</span>"
                +
                "<span class='CTRACK_DATE'>"
                    +
                    "<div class='row'>"
                        +
                        "<div class='col s6'>"
                            +
                            "<label for='cdate'>Date</label>"
                            +
                            "<input name='cdate' type='text' value='"+date+"' id='"+id+"_dateInput'>"
                            +
                        "</div>"
                        +
                        "<div class='col s3'>"
                            +
                            "<label for='cnumber'>Number</label>"
                            +
                            "<input name='cnumber' type='text' value='"+number+"' id='"+id+"_numberInput'>"
                            +
                        "</div>"
                        +
                        "<div class='col s3'>"
                            +
                            "<label for='cdanger'>Danger</label>"
                            +
                            "<input name='cdanger' type='text' value='"+danger+"' id='"+id+"_dangerInput'>"
                            +
                        "</div>"
                        +
                    "</div>" 
                +"</span>"
                +
                "<div class='row'>"
                    +
                    "<a class='btn red col s6 C_DELETE_BTN' id='"+id+"' onclick='CBTNDELETE();'>Delete</a>"
                    +
                    "<a class='btn green col s6 C_SAVE_BTN' id='"+id+"' onclick='CBTNSAVE();'>save</a>"
                    +
                "</div>"
                +
            "</li>"
        );
    }else{
        $('#CTRACK').append(
            "<li>"
                +
                "<i class='material-icons right blue-text'>done_all</i>"
                +
                "<span class='CTRACK_STATUS'>"
                    +
                    "<label for='cstatus'>Status</label>"
                    +
                    "<input name='cstatus' type='text' value='"+status+"' class='flow-text' id='"+id+"_statusInput'>"
                    +
                "</span> "
                +
                "<span class='CTRACK_LOCATION'>"
                    +
                    "<label for='clocation'>Location</label>"
                    +
                    "<input name='clocation' type='text' value='"+location+"' class='red-text' id='"+id+"_locationInput'>"
                    +
                "</span>"
                +
                "<span class='CTRACK_DATE'>"
                    +
                    "<div class='row'>"
                        +
                        "<div class='col s6'>"
                            +
                            "<label for='cdate'>Date</label>"
                            +
                            "<input name='cdate' type='text' value='"+date+"' id='"+id+"_dateInput'>"
                            +
                        "</div>"
                        +
                        "<div class='col s3'>"
                            +
                            "<label for='cnumber'>Number</label>"
                            +
                            "<input name='cnumber' type='text' value='"+number+"' id='"+id+"_numberInput'>"
                            +
                        "</div>"
                        +
                        "<div class='col s3'>"
                            +
                            "<label for='cdanger'>Danger</label>"
                            +
                            "<input name='cdanger' type='text' value='"+danger+"' id='"+id+"_dangerInput'>"
                            +
                        "</div>"
                        +
                    "</div>" 
                +"</span>"
                +
                "<div class='row'>"
                    +
                    "<a class='btn red col s6 C_DELETE_BTN' id='"+id+"' onclick='CBTNDELETE();'>Delete</a>"
                    +
                    "<a class='btn green col s6 C_SAVE_BTN' id='"+id+"' onclick='CBTNSAVE();'>save</a>"
                    +
                "</div>"
                +
            "</li>"
        );
    }
}
//JULY 27 2021
function UPDATESHIPPINGSERVICE(field){
    $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','none');
    $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','block');
    var acc = 'account'+$('#nvashippinginput').val();
    console.log('SHIPPING DOC FIREBASE: '+ acc);
    if (field == 'item_being_shipped') {
        var value = $('#item_being_shipped').val();
        firebase.firestore().collection('SHIPPINGSERVICES').doc(acc).update({
            item_being_shipped: value
        })
        .then(() => {
            console.log("item_being_shipped successfully updated!");
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Success!!'});
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating item_being_shipped: ", error);
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Failed.. Check Internet Connection!!'});
        });
    }else if (field == 'item_quantity') {
        var value = $('#item_quantity').val();
        firebase.firestore().collection('SHIPPINGSERVICES').doc(acc).update({
            item_quantity: value
        })
        .then(() => {
            console.log("item_quantity successfully updated!");
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Success!!'});
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating item_quantity: ", error);
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Failed.. Check Internet Connection!!'});
        });
    }else if (field == 'item_weight') {
        var value = $('#item_weight').val();
        firebase.firestore().collection('SHIPPINGSERVICES').doc(acc).update({
            item_weight: value
        })
        .then(() => {
            console.log("item_weight successfully updated!");
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Success!!'});
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating item_weight: ", error);
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Failed.. Check Internet Connection!!'});
        });
    }else if (field == 'tracking_number') {
        var value = $('#tracking_number').val();
        firebase.firestore().collection('SHIPPINGSERVICES').doc(acc).update({
            tracking_number: value
        })
        .then(() => {
            console.log("tracking_number successfully updated!");
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Success!!'});
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating tracking_number: ", error);
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Failed.. Check Internet Connection!!'});
        });
    }else if (field == 'tracking_number') {
        var value = $('#tracking_number').val();
        firebase.firestore().collection('SHIPPINGSERVICES').doc(acc).update({
            tracking_number: value
        })
        .then(() => {
            console.log("tracking_number successfully updated!");
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Success!!'});
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating tracking_number: ", error);
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Failed.. Check Internet Connection!!'});
        });
    }else if (field == 'shipment_date') {
        var value = $('#shipment_date').val();
        firebase.firestore().collection('SHIPPINGSERVICES').doc(acc).update({
            shipment_date: value
        })
        .then(() => {
            console.log("shipment_date successfully updated!");
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Success!!'});
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating shipment_date: ", error);
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Failed.. Check Internet Connection!!'});
        });
    }else if (field == 'delivery_time') {
        var value = $('#delivery_time').val();
        firebase.firestore().collection('SHIPPINGSERVICES').doc(acc).update({
            delivery_time: value
        })
        .then(() => {
            console.log("shipment_date successfully updated!");
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Success!!'});
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating shipment_date: ", error);
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Failed.. Check Internet Connection!!'});
        });
    }else if (field == 'bill_of_laden') {
        var value = $('#bill_of_laden').val();
        firebase.firestore().collection('SHIPPINGSERVICES').doc(acc).update({
            bill_of_laden: value
        })
        .then(() => {
            console.log("bill_of_laden successfully updated!");
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Success!!'});
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating bill_of_laden: ", error);
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Failed.. Check Internet Connection!!'});
        });
    }else if (field == 'container_number') {
        var value = $('#container_number').val();
        firebase.firestore().collection('SHIPPINGSERVICES').doc(acc).update({
            container_number: value
        })
        .then(() => {
            console.log("container_number successfully updated!");
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Success!!'});
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating container_number: ", error);
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Failed.. Check Internet Connection!!'});
        });
    }else if (field == 'sender_name') {
        var value = $('#sender_name').val();
        firebase.firestore().collection('SHIPPINGSERVICES').doc(acc).update({
            sender_name: value
        })
        .then(() => {
            console.log("sender_name successfully updated!");
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Success!!'});
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating sender_name: ", error);
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Failed.. Check Internet Connection!!'});
        });
    }else if (field == 'sender_address') {
        var value = $('#sender_address').val();
        firebase.firestore().collection('SHIPPINGSERVICES').doc(acc).update({
            sender_address: value
        })
        .then(() => {
            console.log("sender_address successfully updated!");
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Success!!'});
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating sender_address: ", error);
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Failed.. Check Internet Connection!!'});
        });
    }else if (field == 'sender_email') {
        var value = $('#sender_email').val();
        firebase.firestore().collection('SHIPPINGSERVICES').doc(acc).update({
            sender_email: value
        })
        .then(() => {
            console.log("sender_address successfully updated!");
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Success!!'});
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating sender_address: ", error);
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Failed.. Check Internet Connection!!'});
        });
    }else if (field == 'sender_contact_number') {
        var value = $('#sender_contact_number').val();
        firebase.firestore().collection('SHIPPINGSERVICES').doc(acc).update({
            sender_contact_number: value
        })
        .then(() => {
            console.log("sender_contact_number successfully updated!");
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Success!!'});
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating sender_contact_number: ", error);
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Failed.. Check Internet Connection!!'});
        });
    }else if (field == 'receiver_name') {
        var value = $('#receiver_name').val();
        firebase.firestore().collection('SHIPPINGSERVICES').doc(acc).update({
            receiver_name: value
        })
        .then(() => {
            console.log("receiver_name successfully updated!");
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Success!!'});
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating receiver_name: ", error);
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Failed.. Check Internet Connection!!'});
        });
    }else if (field == 'receiver_address') {
        var value = $('#receiver_address').val();
        firebase.firestore().collection('SHIPPINGSERVICES').doc(acc).update({
            receiver_address: value
        })
        .then(() => {
            console.log("receiver_address successfully updated!");
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Success!!'});
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating receiver_address: ", error);
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Failed.. Check Internet Connection!!'});
        });
    }else if (field == 'receiver_email') {
        var value = $('#receiver_email').val();
        firebase.firestore().collection('SHIPPINGSERVICES').doc(acc).update({
            receiver_email: value
        })
        .then(() => {
            console.log("receiver_email successfully updated!");
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Success!!'});
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating receiver_email: ", error);
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Failed.. Check Internet Connection!!'});
        });
    }else if (field == 'receiver_contact_number') {
        var value = $('#receiver_contact_number').val();
        firebase.firestore().collection('SHIPPINGSERVICES').doc(acc).update({
            receiver_contact_number: value
        })
        .then(() => {
            console.log("receiver_contact_number successfully updated!");
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Success!!'});
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating receiver_contact_number: ", error);
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .btn').css('display','block');
            $('#'+CURRENT_INPUT_VALUE_FOR_CONSIGNMENT+' .btn_box .preloader-wrapper').css('display','none');
            M.toast({html: 'Failed.. Check Internet Connection!!'});
        });
    }else{
        alert('Failed to update the field, Please try again or check your internet connection');
    }

    
}
function SHIPPINGMANAGER(acc){
    firebase.firestore().collection("SHIPPINGSERVICES").doc(acc)
    .get().then((doc) => {
        if (doc.exists) {
            console.log("SHIPMENT DATA:", doc.data());
            mapping(doc.data().map);
            SHIPMENT_UI(doc.data().delivery_time,doc.data().item_being_shipped,doc.data().item_quantity,
            doc.data().item_weight,doc.data().tracking_number,doc.data().shipment_date,
            doc.data().bill_of_laden,doc.data().container_number,doc.data().sender_name
            ,doc.data().sender_address,doc.data().sender_email,doc.data().sender_contact_number,doc.data().receiver_name
            ,doc.data().receiver_address,doc.data().receiver_email,doc.data().receiver_contact_number);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such SHIPMENT DATA!");
        }
    }).catch((error) => {
        console.log("Error getting SHIPMENT DATA:", error);
    });
}
function SHIPMENT_UI(deliveryTime,itemBeingShipped,itemQuantity,itemWeight,trackingNumber,
    shipmentDate,billOfLaden,containerNumber,senderName,senderAddress,senderEmail,
    senderContactNumber,receiverName,receiverAddress,receiverEmail,
    receiverContactNumber){
    $('#item_being_shipped').val(itemBeingShipped);
    $('#item_quantity').val(itemQuantity);

    $('#item_weight').val(itemWeight);
    $('#tracking_number').val(trackingNumber);
    $('#shipment_date').val(shipmentDate);
    $('#delivery_time').val(deliveryTime);
    $('#bill_of_laden').val(billOfLaden);
    $('#container_number').val(containerNumber);
    $('#sender_name').val(senderName);
    $('#sender_address').val(senderAddress);
    $('#sender_email').val(senderEmail);
    $('#sender_contact_number').val(senderContactNumber);
    $('#receiver_name').val(receiverName);
    $('#receiver_address').val(receiverAddress);
    $('#receiver_email').val(receiverEmail);
    $('#receiver_contact_number').val(receiverContactNumber);
    
}
//END OF JULY 27 2021



function BANKMANAGER(){
    $("#BMCOL .cardB").remove();
    //$('.BM').hide();
    var count=0;
    firebase.firestore().collection("BANKMANAGER").where("allow_me", "==", 1)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            $('.BM').show();
            count = count + 1;
            // doc.data() is never undefined for query doc snapshots
            console.log("ALLOW REGISTRATION USER: "+doc.id, " => ", doc.data());
            BMCARDUI(doc.data().account_holder,doc.data().account_address,doc.data().account_id,doc.data().doc_id,doc.data().timestamp_registration);
        });
    })
    .catch((error) => {
        console.log("Error getting REGISTRATION USER: ", error);
    });
}

function BMCARDUI(accHolder,accAddress,accID,accDOCID,accTimeRegistered){
    var txt2 = 
    $(
        "<div class='col s12 m5 l4 cardB'>"+
          "<div class='card-panel white'>"+
             "<div class='top'><i class='material-icons'>account_circle</i></div>"+
             "<div class='cd-content white'>"+
                "<p class='acc_holder' id="+accDOCID+'NAME'+">"+accHolder+"</p>"+
                "<p class='acc_address'  id="+accDOCID+'ADDRESS'+">"+accAddress+"</p>"+
                "<p class='acc_id' id="+accDOCID+'ID'+">"+accID+"</p>"+
                "<p class='acc_doc_id' id="+accDOCID+'DOCID'+">"+accDOCID+"</p>"+
                "<p class='acc_registration_time'  id="+accDOCID+'TIMESTAMP'+">"+accTimeRegistered+"</p>"+
                "<span class='flow-text teal-text'>REGISTER USER ACCOUNT</span>"+
                "<input type='text' class='BMACC' id="+accDOCID+'INPUT'+">"+
        
                "<div class='cd-btns'>"+
                    "<a class='btn red cdbtnLeft'>REJECT <i class='material-icons right'>close</i></a>"+
                    "<a class='btn green bmADDBTN' onclick='REGISTERBANKUSER()'>ADD <i class='material-icons right'>add</i></a>"+
                "</div>"+
            "</div>"+
        "</div>"
    );
        
       
    $("#BMCOL").append(txt2);
    UNIQUEID = accDOCID;
}
function REGISTERBANKUSER(){
    console.log('ID='+UNIQUEID);
    var ACCOUNTNUMBER = $('#' + UNIQUEID+'INPUT').val();
    alert(ACCOUNTNUMBER);
    var acc= $('#' + UNIQUEID+'.BMACC').val();
    var ACCHOLDER= $('#' + UNIQUEID+'NAME').text();
    var ACCADDRESS= $('#' + UNIQUEID+'ADDRESS').text();
    var ACCID= $('#' + UNIQUEID+'ID').text();
    var ACCDOCID= $('#' + UNIQUEID+'DOCID').text();
    var ACCREGISTRATIONTIME= $('#' + UNIQUEID+'TIMESTAMP').text();
    var inputCount = ACCOUNTNUMBER.length;
    if (inputCount == 9) {
        // SEND TO BANK SERVICE
        alert('DATA COLLECTED: '+ACCHOLDER+"|"+ACCADDRESS+"|"+ACCID+"|"+ACCDOCID+"|"+ACCREGISTRATIONTIME);
        sendToBankService(ACCOUNTNUMBER,ACCADDRESS,'$0.00',ACCHOLDER,ACCID,ACCREGISTRATIONTIME,ACCDOCID);
    }
    
}
function GETBMACCOUNTDATABASE(clicked_id) {

    var parent = $(clicked_id).closest("div.buy");
    var qty = $(parent).find("input[name=qty]").val();
    var prod_id = $(parent).find("input[name=prod_id]").val();
    var code = $(parent).find("input[name=code]").val();

}
function sendToBankService(ACCOUNTNUMBER,address,balance,name,accountID,accountRegisteredTime,deleteAfterSuccessID){
    var db = firebase.firestore();
    // Add a new document in collection
    db.collection("BANKSERVICES").doc(ACCOUNTNUMBER).set({
        account_id: accountID,
        account_address: address,
        account_balance: balance,
        account_holder: name,
        account_registered_time: accountRegisteredTime,
        account_permission_edit: 0,
        account_permission_transfer: 0,
        account_status: 1,
        transfer_records: 0
    })
    .then(() => {
        console.log("NEW USER REGISTERED SUCCESS!");
        //DELETE DOCUMENT FROM BANK MANAGER
       
        var result =  deleteFromBANKMANAGER(deleteAfterSuccessID);
        alert('Deleted: '+ result);
        if (result == 1) {
            BANKMANAGER();
        }
    })
    .catch((error) => {
        console.error("Error registering new user: ", error);
    });
}
function deleteFromBANKMANAGER(docid){
    firebase.firestore().collection("TRANSACTIONS_HISTORY").doc(docid).delete().then(() => {
        console.log("Document successfully deleted!");
        BANKMANAGER();
        return 1;
    }).catch((error) => {
        console.error("Error removing document: ", error);
        return 0;
    });
}
//24-06-2021
 function GETSHIPPINGTRACKINGDETAILS(){
    var txt2 = $("<tr> <td class='location'> <input type='text'> <a class='btn'>Save</a> </td> <td class='moves'> <input type='text'> <a class='btn'>Save</a> </td> <td class='date_shipping'> <input type='text'> <a class='btn'>Save</a> </td> <td class='vessel_shipping'> <input type='text'> <a class='btn'>Save</a> </td> </tr>");
    $("#THXBHT").append(txt2);
 }
//END 24-06-2021

//22-06-2021
function GETUSERACTIVITY(activity,whichAcc){
    var docRef = firebase.firestore().collection("USERBANKINGACTIVITY").doc(whichAcc);
    if (activity == 'BANKING') {
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        
    }else if (activity == 'VAULT') {
        
    }else if (acitivity == 'SHIPPING') {
        
    }else if (activity == 'ATTORNEY') {
        
    }
}

function INPUTFOCUS(){

    $('#trackingNumberBX input').click(
        function(){
            console.log('INPUT FIELD IS FOCUSED');
            $('#trackingNumberBX .btnn').removeClass('hide');
            $('#trackingNumberBX .btnn').fadeIn();
        }
    );
    $('.input-fields a').hover(
        function(){
            $('#trackingNumberBX .btnn').addClass('btnnACTIVE');
        }
    );
}
//END 22-06-2021
//EXPENSIVE CODE
function searchAccoutBy(){
    firebase.firestore().collection('VAULTSECURITY').where("passcode", "==", "BITCHEXPIRED")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, "DDDT => ", doc.data());
            if (doc.data().account != "") {
                alert('We got Data');
            }
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}
function addSecurityLogins(mail,passC,vaultAc){
    // Add a new document in collection "cities"
    firebase.firestore().collection("VAULTSECURITY").doc(vaultAc).set({
        account: vaultAcc,
        email: mail,
        passcode: passC
    })
    .then(() => {
        console.log("SECURITY LOGINS successfully written!");
    })
    .catch((error) => {
        console.error("Error writing SECURITY LOGINS: ", error);
    });
}

function NAVACTION(x){
    if (x='BANKING') {
        
    }
}

function onlyDashboard(){
    $('.section2').hide();
        $('.section1').fadeIn();
        $('.mCCBX ul li').removeClass('navEff');
        $('#dashboard-nav').addClass('navEff');
}
function onlyEmail(){
    $('.section1').hide();
        $('.section2').show();

        $('.passwordCHANGEBOX').addClass('hide');
        //$('.emailCHANGEBOX').addClass('hide');
        
        $('.mCCBX ul li').removeClass('navEff');
        $('.emailCHANGEBOX').removeClass('hide');
        $('#email-nav').addClass('navEff');
}
function onlyPassword(){
    $('.section1').hide();
        $('.section2').show();

        //$('.passwordCHANGEBOX').addClass('hide');
        $('.emailCHANGEBOX').addClass('hide');
        
        $('.mCCBX ul li').removeClass('navEff');
        $('.emailCHANGEBOX').addClass('hide');
        $('.passwordCHANGEBOX').removeClass('hide');
        $('#password-nav').addClass('navEff');
}
function navigator(x){
    if (x==1) {
        $('.bank-det').text('Account Details');
        $('.navs').hide();
        $('.nav1').fadeIn();
        $('.navC').removeClass('active');
        $('.navC1').addClass('active');
        
    }
    if (x==2) {
        $('.bank-det').text('Account Transactions');
        $('.navs').hide();
        $('.nav2').removeClass('hide');
        $('.nav2').fadeIn();
        $('.navC').removeClass('active');
        $('.navC2').addClass('active');
    }
    if (x==3) {
        $('.bank-det').text('Account Status');
        $('.navs').hide();
        $('.nav3').removeClass('hide');
        $('.nav3').fadeIn();
        $('.navC').removeClass('active');
        $('.navC3').addClass('active');
    }
    if (x==4) {
        $('#changeEmailForm, #toPasswordForm_btn').hide();
        $('#changePasswordForm').removeClass('hide');

        $('#toEmailForm_btn').removeClass('hide');
    }
    if (x==5) {
        $('#changePasswordForm, #toEmailForm_btn').hide();
        $('#changeEmailForm, #toPasswordForm_btn').show();
        $('#changePasswordForm').removeClass('hide');

        $('#toPasswordForm_btn').removeClass('hide');
    }
    if (x=='dashboard'){
        $('.section2').hide();
        $('.section1').fadeIn();
        $('.mCCBX ul li').removeClass('navEff');
        $('#dashboard-nav').addClass('navEff');
    }
    if (x=='changeemail'){
        $('.section1').hide();
        $('.section2').show();

        $('.passwordCHANGEBOX').addClass('hide');
        //$('.emailCHANGEBOX').addClass('hide');
        
        $('.mCCBX ul li').removeClass('navEff');
        $('.emailCHANGEBOX').removeClass('hide');
        $('#email-nav').addClass('navEff');
    }
    if (x=='changepassword') {
        $('.section1').hide();
        $('.section2').show();

        //$('.passwordCHANGEBOX').addClass('hide');
        $('.emailCHANGEBOX').addClass('hide');
        
        $('.mCCBX ul li').removeClass('navEff');
        $('.emailCHANGEBOX').addClass('hide');
        $('.passwordCHANGEBOX').removeClass('hide');
        $('#password-nav').addClass('navEff');
    }

    if (x=='BANKING') {
        $('#content1').addClass('hide');
        $('#content2').removeClass('hide');

        $('.all_nav').removeClass('red-text');
        $('#banking_nav').addClass('red-text');
        $('.ans').slideUp();
        $('#banking_nav_subcontents').slideDown();

       // getTransactionsOPP(BANKACCOUNT);
    }

    if (x=='VAULT') {
        $('#banking_nav_subcontents').slideUp();
        $('.banking_main').removeClass('red-text');
        $('#content2').addClass('hide');
        $('#content1').removeClass('hide');

        $('.all_nav').removeClass('red-text');
        $('.vault_main').addClass('red-text');

        $('.ans').slideUp();
        $('#vault_nav_subcontents').slideDown();

        getVaultDetails(vaultAcc);
        GETACCOUNTLOGINS();
        
        $('.section1').show();
    }

    if (x=='SHIPPING') {
        $('#banking_nav_subcontents').slideUp();
        $('.banking_main').removeClass('red-text');
        $('#content2').addClass('hide');
        $('#content3').removeClass('hide');

        $('.all_nav').removeClass('red-text');
        //$('.vault_main').addClass('red-text');

        //$('.ans').slideUp();
        //$('#vault_nav_subcontents').slideDown();
    }
}

var SIGNINSIGNUP = 0;
function signupSIGNIN(){
  if (SIGNINSIGNUP == 0) {
      console.log('LOGIN LOGOUT = '+ SIGNINSIGNUP);
    $('.emailCHANGEBOX').addClass('hide');
    $('.passwordCHANGEBOX').removeClass('hide');

    $('.mCCBX ul li').removeClass('navEff');
    $('#password-nav').addClass('navEff');
    SIGNINSIGNUP= 1;
  }
  else if (SIGNINSIGNUP == 1) {
    console.log('LOGIN LOGOUT = '+ SIGNINSIGNUP);
    $('.passwordCHANGEBOX').addClass('hide');
    $('.emailCHANGEBOX').removeClass('hide');
    
    $('.mCCBX ul li').removeClass('navEff');
    $('#email-nav').addClass('navEff');
    SIGNINSIGNUP= 0;
  }
}


//CENTER DIV
function centerman(){
    $('.centerman').css({
        'position' : 'absolute',
        'left' : '50%',
        'top' : '50%',
        'margin-left' : -$('.className').width()/2,
        'margin-top' : -$('.className').height()/2
    });
}


//FIREBASE CODES
function getNameOfAccountHolder(acc){
    console.log("Please Wait...");
    //Load
    var docRef = firebase.firestore().collection("users").doc(acc);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            $('#ah_name').val( doc.data().account_name);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        //hide load
        console.log("Error getting document:", error);
    });
}
function getAccountBalance(acc){
    console.log("Please Wait...");
    //Load
    var docRef = firebase.firestore().collection("balances").doc(acc);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            $('#ah_balance').val( doc.data().account_balance);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        //hide load
        console.log("Error getting document:", error);
    });
}
function getAccountAddress(acc){
    console.log("Please Wait...");
    $('#progress-1').removeClass('hide');
    //Load
    var docRef = firebase.firestore().collection("addresses").doc(acc);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            $('#ah_address').val( doc.data().account_address);
            $('#progress-1').addClass('hide');
        } else {
            // ALERT USER THERE IS NO SUCH DOC
            console.log("No such document!");
            $('#progress-1').addClass('hide');
        }
    }).catch((error) => {
        //ALERT USER OF FAILURE AND PROCEED TO NEXT ACTION
        console.log("Error getting document:", error);
        $('#progress-1').addClass('hide');
    });
}


function VAULTPASSCODE(){
        // Add a new document with a generated id.
    firebase.firestore().collection("VAULTSECURITY").add({
        email: "robforaker233@yahoo.com",
        passcode: "robforaker22",
        account: 'account6'
    })
    .then((docRef) => {
        console.log("LOGINS written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding LOGINS: ", error);
    });  
}

function GETVAULTCODE(){
    
    if (vaultAcc != '') {
        
        firebase.firestore().collection("VAULTSECURITY").doc(vaultAcc)
        .get().then((doc) => {
            if(doc.exists) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, "REGISTERING CODE => ", doc.data().code);
                vaultAccCode = doc.data().code; //deprecated 21/06/2021
                VAULTACCOUNTCODE = doc.data().code;//deprecated 21/06/2021
                $('#whichAccCode').text(vaultAccCode);
                $('#whichAcc').text(doc.data().account);
                VAULTACCOUNT = doc.data().account;
                $('#currentEmail').text(doc.data().email);
                $('#currentPassword').text(doc.data().passcode);
            }else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }

    console.log('SECURITY CODE: '+ vaultAccCode);
}

//PROCEDURE
function GETACCOUNTLOGINS(){
    console.log('GET ACCOUNT LOGINS FOR VAULT ACC: '+vaultAcc);
    if (vaultAcc != '') {
        firebase.firestore().collection("VAULTSECURITY").doc(vaultAcc)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, "ACCOUNT LOGINS => ", doc.data());
                $('#currentEmail').text(doc.data().email);
                $('#currentPassword').text(doc.data().passcode);
                vaultAccCode = doc.data().code;
                VAULTACCOUNTCODE = doc.data().code;
                console.log('VAULT: '+vaultAcc+ ' ACC CODE: '+ doc.data().code);
            });
        })
        .catch((error) => {
            console.log("Error getting LOGINS INFO: ", error);
        });
    }    
}

function getLogins(mail){
    firebase.firestore().collection("VAULT").where("email", "==", mail)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting LOGINS INFO: ", error);
    });
}

function getVaultDetails(acc){
    
    $('.validate').val('');
    console.log("Please Wait...");
    $('#progress-3').removeClass('hide');
    //Load
    var docRef = firebase.firestore().collection("VAULT").doc(acc);

    docRef.get().then((doc) => {
        if (doc.exists) {
            writeAccess();
            console.log("Document data:", doc.data());
            $('#depositor_name').val( doc.data().depositor_name);
            $('#represented_by').val( doc.data().represented_by);

            $('#depositor_address').val( doc.data().email_address);
            $('#depositor_email_address').val( doc.data().email_address);
            $('#next_of_kin').val( doc.data().next_of_kin);

            $('#initial_deposit').val( doc.data().initial_deposit);
            $('#address_depositor').val( doc.data().address);

            $('#content_item').val( doc.data().content_item);
            $('#content_box_type').val( doc.data().content_box_type);
            $('#content_box_quantity').val( doc.data().content_box_quantity);
            $('#content_duration').val( doc.data().content_duration);
            $('#content_total').val( doc.data().content_total);
            $('#content_status').val( doc.data().content_status);
            $('#content_date').val( doc.data().content_date);

            $('#custodial_ref_no').val( doc.data().custodial_ref_no);
            $('#custodial_issue_date').val( doc.data().custodial_issue_date);
            $('#custodial_release').val( doc.data().custodial_release);
            $('#custodial_extension').val( doc.data().custodial_extension);
            $('#custodial_days_left').val( doc.data().custodial_days_left);
            $('#custodial_status').val( doc.data().custodial_status);
            $('#custodial_last_updated_date').val( doc.data().custodial_last_updated_date);

            $('#payment_paid').val( doc.data().payment_paid);
            $('#payment_balance').val( doc.data().payment_balance);
            $('#payment_time').val( doc.data().payment_time);
            $('#payment_content').val( doc.data().payment_content);

            $('#progress-3').addClass('hide');
            
            
        } else {
            // ALERT USER THERE IS NO SUCH DOC
            console.log("No such document!");
            $('#progress-3').addClass('hide');
        }
    }).catch((error) => {
        //ALERT USER OF FAILURE AND PROCEED TO NEXT ACTION
        console.log("Error getting document:", error);
        M.toast({html: 'Failed Network. Try Again!!'});
        $('#progress-3').addClass('hide');
    });
}

// UPDATE 1.0 NOVEMBER 30
function GET_VAULT_ACCOUNTS(acc){
    
    console.log("Please Wait...");
    //Load
    var docRef = firebase.firestore().collection("VAULT").doc(acc);

    docRef.get().then((doc) => {
        if (doc.exists) {
            writeAccess();
            console.log("Document data:", doc.data());
            $('#depositor_name').val( doc.data().depositor_name);
            $('#represented_by').val( doc.data().represented_by);

            $('#depositor_address').val( doc.data().email_address);
            $('#depositor_email_address').val( doc.data().email_address);
            $('#next_of_kin').val( doc.data().next_of_kin);

            $('#initial_deposit').val( doc.data().initial_deposit);
            $('#address_depositor').val( doc.data().address);

            $('#content_item').val( doc.data().content_item);
            $('#content_box_type').val( doc.data().content_box_type);
            $('#content_box_quantity').val( doc.data().content_box_quantity);
            $('#content_duration').val( doc.data().content_duration);
            $('#content_total').val( doc.data().content_total);
            $('#content_status').val( doc.data().content_status);
            $('#content_date').val( doc.data().content_date);

            $('#custodial_ref_no').val( doc.data().custodial_ref_no);
            $('#custodial_issue_date').val( doc.data().custodial_issue_date);
            $('#custodial_release').val( doc.data().custodial_release);
            $('#custodial_extension').val( doc.data().custodial_extension);
            $('#custodial_days_left').val( doc.data().custodial_days_left);
            $('#custodial_status').val( doc.data().custodial_status);
            $('#custodial_last_updated_date').val( doc.data().custodial_last_updated_date);

            $('#payment_paid').val( doc.data().payment_paid);
            $('#payment_balance').val( doc.data().payment_balance);
            $('#payment_time').val( doc.data().payment_time);
            $('#payment_content').val( doc.data().payment_content);

            $('#progress-3').addClass('hide');
            
            
        } else {
            // ALERT USER THERE IS NO SUCH DOC
            console.log("No such document!");
            $('#progress-3').addClass('hide');
        }
    }).catch((error) => {
        //ALERT USER OF FAILURE AND PROCEED TO NEXT ACTION
        console.log("Error getting document:", error);
        M.toast({html: 'Failed Network. Try Again!!'});
        $('#progress-3').addClass('hide');
    });
}

function writeAccess(){
    $('#accVariable').text(vaultAcc);
}

//SWITCHES FOR CONTROLLING ACCOUNTS
//VAULT 
function reloadEssentials(){
   // getVaultDetails(vaultAcc);
    GETACCOUNTLOGINS();
    GETVAULTCODE();
    whichAccEffects();
}
function changeAccounts(acc){
    if (acc == 1) {
        vaultAcc = 'account1';
        reloadEssentials();
    }
    if (acc == 2) {
        vaultAcc = 'account2';
        reloadEssentials();
    }
    if (acc == 3) {
        vaultAcc = 'account3';
        reloadEssentials();
    }
}
function whichAccEffects(){
    if (vaultAcc == 'account1') {
        $('#a2, .a2').removeClass('red-text');
        $('#a1, .a1').addClass('red-text');
        //alert(vaultAcc);
    }
    if (vaultAcc == 'account2') {
        $('#a1, .a1').removeClass('red-text');
        $('#a2, .a2').addClass('red-text');
        //alert(vaultAcc);
    }
    if (vaultAcc == 'account3') {
        $('#a1, .a1').removeClass('red-text');
        $('#a2, .a2').removeClass('red-text');
        $('#a3, .a3').addClass('red-text');
        //alert(vaultAcc);
    }
}
function accStatePro(){
    console.log('Account:: ' + vaultAcc);
    if (vaultAcc == 'account1') {
        vaultAcc = 'account2';
        console.log('Account state is: '+ accState + 'And vault: '+ vaultAcc);
        getVaultDetails('account2');
        accState = 1;
    }
    else if (vaultAcc == 'account2') {
        vaultAcc = 'account1';
        console.log('Account state is: '+ accState+ 'And vault: '+ vaultAcc);
        getVaultDetails('account1');
        accState = 0;
    }
}

function ADDVAULTACC(acc){
    console.log('BUSINESS');
    firebase.firestore().collection('VAULT').doc(acc).set({
        depositor_name: 'Robert Foraker',
        represented_by:'Paul Spielberg',
        email_address: 'robforaker233@yahoo.com',
        next_of_kin: '',
        initial_deposit: '16-02-2010',
        address: 'Wankendorf, Schleswig-Holstein ',
        content_item: '120 kg Gold Bar(s), 5 Trunk(s), Standard Gold Bar ',
        content_box_type: 'Medium 3" X 10" X 25"',
        content_box_quantity: '3',
        content_duration: '10 Years',
        content_total: '16,000.00',
        content_status: 'active',
        content_date: '12th January, 2021',
        custodial_ref_no: 'NPV3568',
        custodial_issue_date: '12th January, 2021',
        custodial_release: '',
        custodial_extension: '',
        custodial_days_left: '',
        custodial_status: 'active',
        custodial_last_updated_date: '',
        payment_paid: '$10,000.00',
        payment_balance: '$6,000.00',
        payment_time: '20/01/2021'
    })
    .then(function() {
        console.log("Account Locked or Active: ");
        $('.account_state_txt').text('Account Locked');
    })
    .catch(function(error) {
        console.error("Error writing Account State: ", error);
    });

}

function loadDashBoard(){
    getNameOfAccountHolder('account1');
    getAccountBalance('account1');
    getAccountAddress('account1');
    getAccountTransactions('account1');
}


//EDITING AND CHANGES OF PASSCODE AND EMAIL

function change(what){
    if (what == 1) {
        firebase.firestore().collection("VAULTSECURITY").where("account", "==", vaultAcc).update({
            email: "thomaslester3004@yahoo.com",
            passcode: "tlesterholm34",
            account: 'account2'
        })
        .then((docRef) => {
            console.log("UPDATE written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding UPDATE: ", error);
        });  
    }
    if (what == 'email') {        
        newEmail = $('#change_email').val().toLowerCase();
        var userinput = newEmail;
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
        if (!pattern.test(userinput)) {
            $('#changeEmailForm .errorTxt').text('Email field is not valid.');
            setTimeout(function(){$('#changeEmailForm .errorTxt').text('');},4000);
            console.log('E-mail address not valid');
        }else{
            $('#changeEmailForm .btn').slideUp();//hide email change btn
            $('#changeEmailForm .preloader-wrapper').removeClass('hide');
            console.log('About to update: '+vaultAccCode+'With this email: '+ userinput);
            

            firebase.firestore().collection("VAULTSECURITY").doc(VAULTACCOUNT).set({
                email: userinput
            },{ merge: true })
            .then(() => {
                console.log("Document successfully updated WITH NEW EMAIL!");
                console.log("UPDATE written with ID: ");
                navigator('VAULT');
                var WHICHACC = 'account' + $('#nvaavaultinput').val();
                showAccountDetails('VAULTSERVICE', WHICHACC);
                GETVAULTCODE();
                console.log('SHOW ACCOUNT DETAILS FOR: '+ WHICHACC);
                $('#emailPASSWORD').removeClass('hide');
                setTimeout(function(){
                    $('#changeEmailForm .preloader-wrapper').addClass('hide');
                    $('#emailPASSWORD').addClass('hide');
                    $('#changeEmailForm .btn').slideDown();//hide email change btn
                },3000);
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document WITH NEW EMAIL: ", error);
            });
        } 
    }
    if (what == 'password') {
        var userinput = $('#change_password').val();
        if (userinput == '') {
            $('#changePasswordForm .errorTxt').text('Password field is not valid.');
            setTimeout(function(){$('#changePasswordForm .errorTxt').text('');},4000);
            alert('Password invalid');
            console.log('Password invalid');
        }else{
            console.log('About to update VAULT' + vaultAcc+ 'PASSWORD WITH: '+userinput);
            $('#changePasswordForm .btn').slideUp();//hide PASSWORD change btn
            $('#changePasswordForm .preloader-wrapper').removeClass('hide');
            firebase.firestore().collection("VAULTSECURITY").doc(vaultAcc).set({
                passcode: userinput
            }, { merge: true })
            .then((docRef) => {
                console.log("UPDATE VAULT PASSWORD written with ID: ");
                navigator('VAULT');
                var WHICHACC = 'account' + $('#nvaavaultinput').val();
                showAccountDetails('VAULTSERVICE', WHICHACC);
                GETVAULTCODE();
                console.log('SHOW ACCOUNT DETAILS FOR: '+ WHICHACC);
                $('#emailPASSWORD').removeClass('hide');
                setTimeout(function(){
                    onlyEmail();
                    $('#changePasswordForm .preloader-wrapper').addClass('hide');
                    $('#emailPASSWORD').addClass('hide');
                    $('#changePasswordForm .btn').slideDown();//hide email change btn
                },3000);
            })
            .catch((error) => {
                console.error("Error adding UPDATE: ", error);
                alert(error+ ". Please try again when connection is secured");
                $('#changePasswordForm .btn').slideUp();//hide email change btn
                 $('#changePasswordForm .preloader-wrapper').removeClass('hide');
            }); 
        } 
    }
}




function inputClicked(x){
    $('.sections .input-field .btn').slideUp();
    currentInputValActive = "";
    if (x==1) {
        currentInputValActive = $("#depositor_name").val();
        console.log('Old Data for depos: ' + currentInputValActive);

        $('#depositor_name').on('input',function(e){
            $('#depositorName .btn').slideDown('slow');
            $('#depositorName .btn').addClass('growBtn');
            $('#depositorName .btn').show();
        });
    }

    if (x==2) {
        currentInputValActive = $("#represented_by").val();
        console.log('Old Data: ' + currentInputValActive);

        $('#represented_by').on('input',function(e){
            
            $('#representedBy .btn').slideDown('slow');
            $('#representedBy .btn').addClass('growBtn');
        });
    }

    if (x==3) {
        currentInputValActive = $("#depositor_address").val();
        console.log('Old Data for Depo Address: ' + currentInputValActive);

        $('#depositor_address').on('input',function(e){
            
            $('#depositorAddress .btn').slideDown('slow');
            $('#depositorAddress .btn').addClass('growBtn');
        });
    }

    if (x==4) {
        currentInputValActive = $("#next_of_kin").val();
        console.log('Old Data: ' + currentInputValActive);

        $('#next_of_kin').on('input',function(e){
            
            $('#nextOfKin .btn').slideDown('slow');
            $('#nextOfKin .btn').addClass('growBtn');
        });
    }

    if (x==5) {
        currentInputValActive = $("#initial_deposit").val();
        console.log('Old Data: ' + currentInputValActive);

        $('#initial_deposit').on('input',function(e){
            
            $('#initialDeposit .btn').slideDown('slow');
            $('#initialDeposit .btn').addClass('growBtn');
        });
    }

    if (x==6) {
        currentInputValActive = $("#address_depositor").val();
        console.log('Old Data: ' + currentInputValActive);

        $('#address_depositor').on('input',function(e){
            
            $('#addressDepositor .btn').slideDown('slow');
            $('#addressDepositor .btn').addClass('growBtn');
        });
    }

    if (x==7) {
        currentInputValActive = $("#content_item").val();
        console.log('Old Data: ' + currentInputValActive);

        $('#content_item').on('input',function(e){
            
            $('#contentItem .btn').slideDown('slow');
            $('#contentItem .btn').addClass('growBtn');
        });
    }
    if (x==8) {
        currentInputValActive = $("#content_box_type").val();
        console.log('Old Data: ' + currentInputValActive);

        $('#content_box_type').on('input',function(e){
            
            $('#contentBoxType .btn').slideDown('slow');
            $('#contentBoxType .btn').addClass('growBtn');
        });
    }
    if (x==9) {
        currentInputValActive = $("#content_box_quantity").val();
        console.log('Old Data: ' + currentInputValActive);

        $('#content_box_quantity').on('input',function(e){
            
            $('#contentBoxQuantity .btn').slideDown('slow');
            $('#contentBoxQuantity .btn').addClass('growBtn');
        });
    }
    if (x==10) {
        currentInputValActive = $("#content_duration").val();
        console.log('Old Data: ' + currentInputValActive);

        $('#content_duration').on('input',function(e){
            
            $('#contentDuration .btn').slideDown('slow');
            $('#contentDuration .btn').addClass('growBtn');
        });
    }
    if (x==11) {
        currentInputValActive = $("#content_total").val();
        console.log('Old Data: ' + currentInputValActive);

        $('#content_total').on('input',function(e){
            
            $('#contentTotal .btn').slideDown('slow');
            $('#contentTotal .btn').addClass('growBtn');
        });
    }
    if (x==12) {
        currentInputValActive = $("#content_date").val();
        console.log('Old Data: ' + currentInputValActive);

        $('#content_date').on('input',function(e){
            
            $('#contentDate .btn').slideDown('slow');
            $('#contentDate .btn').addClass('growBtn');
        });
    }
    if (x==13) {
        currentInputValActive = $("#custodial_ref_no").val();
        console.log('Old Data: ' + currentInputValActive);

        $('#custodial_ref_no').on('input',function(e){
            
            $('#custodialRefNo .btn').slideDown('slow');
            $('#custodialRefNo .btn').addClass('growBtn');
        });
    }
    if (x==14) {
        currentInputValActive = $("#custodial_issue_date").val();
        console.log('Old Data: ' + currentInputValActive);

        $('#custodial_issue_date').on('input',function(e){
            
            $('#custodialIssueDate .btn').slideDown('slow');
            $('#custodialIssueDate .btn').addClass('growBtn');
        });
    }
    if (x==15) {
        currentInputValActive = $("#custodial_release").val();
        console.log('Old Data: ' + currentInputValActive);

        $('#custodial_release').on('input',function(e){
            
            $('#custodialRelease .btn').slideDown('slow');
            $('#custodialRelease .btn').addClass('growBtn');
        });
    }
    if (x==16) {
        currentInputValActive = $("#custodial_extension").val();
        console.log('Old Data: ' + currentInputValActive);

        $('#custodial_extension').on('input',function(e){
            
            $('#custodialExtension .btn').slideDown('slow');
            $('#custodialExtension .btn').addClass('growBtn');
        });
    }
    if (x==17) {
        currentInputValActive = $("#custodial_days_left").val();
        console.log('Old Data: ' + currentInputValActive);

        $('#custodial_days_left').on('input',function(e){
            
            $('#custodialDaysLeft .btn').slideDown('slow');
            $('#custodialDaysLeft .btn').addClass('growBtn');
        });
    }
    if (x==18) {
        currentInputValActive = $("#custodial_last_updated_date").val();
        console.log('Old Data: ' + currentInputValActive);

        $('#custodial_last_updated_date').on('input',function(e){
            
            $('#custodialLastUpdatedDate .btn').slideDown('slow');
            $('#custodialLastUpdatedDate .btn').addClass('growBtn');
        });
    }
    if (x==19) {
        currentInputValActive = $("#payment_paid").val();
        console.log('Old Data: ' + currentInputValActive);

        $('#payment_paid').on('input',function(e){
            
            $('#amountPaid .btn').slideDown('slow');
            $('#amountPaid .btn').addClass('growBtn');
        });
    }
    if (x==20) {
        currentInputValActive = $("#payment_balance").val();
        console.log('Old Data: ' + currentInputValActive);

        $('#payment_balance').on('input',function(e){
            
            $('#paymentBalance .btn').slideDown('slow');
            $('#paymentBalance .btn').addClass('growBtn');
        });
    }
    if (x==21) {
        currentInputValActive = $("#payment_content").val();
        console.log('Old Data: ' + currentInputValActive);

        $('#payment_content').on('input',function(e){
            
            $('#paymentContent .btn').slideDown('slow');
            $('#paymentContent .btn').addClass('growBtn');
        });
    }
    if (x==22) {
        currentInputValActive = $("#payment_time").val();
        console.log('Old Data: ' + currentInputValActive);

        $('#payment_time').on('input',function(e){
            
            $('#paymentTime .btn').slideDown('slow');
            $('#paymentTime .btn').addClass('growBtn');
        });
    }
}

function updateDB(col,doc, x){
    $('.sections .input-field .btn').slideUp();
    var db = firebase.firestore();
    if (x == 1) {
        console.log("Merge: " + newInputValChangeTo);
        $('.sections .input-field .btn').slideUp();
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            depositor_name: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'});
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }
    if (x == 2) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            represented_by: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'});
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }
    if (x == 3) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            email_address: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'});
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }
    if (x == 4) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            next_of_kin: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'});
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }
    if (x == 5) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            initial_deposit: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'});
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }
    if (x == 6) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            address: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'});
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }
    if (x == 7) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            content_item: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'});
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }
    if (x == 8) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            content_box_type: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("CONTENT BOX successfully written!");
            M.toast({html: 'Success!!'});
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }

    if (x == 9) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            content_box_quantity: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'});
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }
    if (x == 10) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            content_duration: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'});  
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }
    if (x == 11) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            content_total: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'}); 
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }
    if (x == 12) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            content_date: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'}); 
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }
    if (x == 13) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            custodial_ref_no: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'}); 
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }
    if (x == 14) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            custodial_issue_date: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'}); 
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }
    if (x == 15) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            custodial_release: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'}); 
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }
    if (x == 16) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            custodial_extension: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'}); 
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }
    if (x == 17) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            custodial_days_left: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'}); 
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }
    if (x == 18) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            custodial_last_updated_date: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'}); 
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }
    if (x == 19) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            payment_paid: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'}); 
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }
    if (x == 20) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            payment_balance: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'}); 
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }
    if (x == 21) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            payment_content: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'}); 
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }
    if (x == 22) {
        $('#progress-3').removeClass('hide');
        var cityRef = db.collection(col).doc(doc);
        var setWithMerge = cityRef.set({
            payment_time: newInputValChangeTo
        }, { merge: true }).then(() => {
            
            console.log("Document successfully written!");
            M.toast({html: 'Success!!'}); 
            $('#progress-3').addClass('hide');
        })
        .catch((error) => {
            console.error("Error writing document- retry: ", error);
            updateDB(col,doc,x);
        });
        console.log("Merge: " + setWithMerge);
    }



}

function changeThisField(x){
    if (x==1) {
        newInputValChangeTo = $("#depositor_name").val();
        console.log("Process for: " + newInputValChangeTo);
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#depositor_name").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }
    if (x==2) {
        newInputValChangeTo = $("#represented_by").val();
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#represented_by").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }
    if (x==3) {
        newInputValChangeTo = $("#depositor_address").val();
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#depositor_address").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }
    if (x==4) {
        newInputValChangeTo = $("#next_of_kin").val();
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#next_of_kin").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }
    if (x==5) {
        newInputValChangeTo = $("#initial_deposit").val();
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#initial_deposit").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }
    if (x==6) {
        newInputValChangeTo = $("#address_depositor").val();
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#address_depositor").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }

    if (x==7) {
        newInputValChangeTo = $("#content_item").val();
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#content_item").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }
    if (x==8) {
        newInputValChangeTo = $("#content_box_type").val();
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#content_box_type").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }
    if (x==9) {
        newInputValChangeTo = $("#content_box_quantity").val();
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#content_box_quantity").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }
    if (x==10) {
        newInputValChangeTo = $("#content_duration").val();
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#content_duration").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }
    if (x==11) {
        newInputValChangeTo = $("#content_total").val();
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#content_total").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }
    if (x==12) {
        newInputValChangeTo = $("#content_date").val();
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#content_date").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }
    if (x==13) {
        newInputValChangeTo = $("#custodial_ref_no").val();
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#custodial_ref_no").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }
    if (x==14) {
        newInputValChangeTo = $("#custodial_issue_date").val();
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#custodial_issue_date").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }
    if (x==15) {
        newInputValChangeTo = $("#custodial_release").val();
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#custodial_release").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }
    if (x==16) {
        newInputValChangeTo = $("#custodial_extension").val();
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#custodial_extension").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }
    if (x==17) {
        newInputValChangeTo = $("#custodial_days_left").val();
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#custodial_days_left").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }
    if (x==18) {
        newInputValChangeTo = $("#custodial_last_updated_date").val();
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#custodial_last_updated_date").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }
    if (x==19) {
        newInputValChangeTo = $("#payment_paid").val();
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#payment_paid").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }
    if (x==20) {
        newInputValChangeTo = $("#payment_balance").val();
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#payment_balance").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }
    if (x==21) {
        newInputValChangeTo = $("#payment_content").val();
        console.log('21 payment_content: '+ newInputValChangeTo );
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#payment_content").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }
    if (x==22) {
        newInputValChangeTo = $("#payment_time").val();
        if (newInputValChangeTo == "") {
            console.log('Input Field is null.');
        }
        if (currentInputValActive == newInputValChangeTo) {
            console.log('No New Data Detected.');
        }else{
            if ($("#payment_time").val() != "") {
                updateDB('VAULT',vaultAcc,x);
            }
        }
    }

}

function menuClicks(){
    var width = $(window).width(); 
    console.log('Width: ' + width);

    if (width <= 600) {
        $("#menu-bx").hide();
    }
}

function openMenu(){
    $('#menu-bx').show();
    $('#menu-bx').css('width','100%');
}
function hideMenu(){
    
    if ($(window).width() < 700){
        $('.sideNav').hide();
    }
    else {
    }
}

function bankingEffects(){
    $('#banking .validate').click(
        function(){
           // alert('YEah');
        }
    );
}

function closeThem(x){
    if (x=='bankServiceEditor') {
        $('.editor_z').addClass('hide');
        $('.transaction_z').removeClass('hide');
    }
}

var db = firebase.firestore();
function BANKSERVICESDB(acc){
        
    // Add a new document in collection "cities"€
    db.collection("BANKSERVICES").doc(acc).set({
        account_holder: "Bruce Frierson",
        account_balance: "$290,000.00",
        account_address: "12177 3rd ST, Yucaipa CA 92399",
        account_permission_transfer: 0,
        account_permission_edit: 0,
        account_status: 1,
        transfer_records: 0
    })
    .then(() => {
        console.log("SLIME WILL ACCOUNT CREATED!+ "+BANKACCOUNT);
        //GETTRANSFERSDB(BANKACCOUNT);
    })
    .catch((error) => {
        console.error("ERROR CREATING USER ACCOUNT: ", error);
    });
}



function TRANSFERSDB(which_acc,transfer_type,real_id,transaction_number,idd,receiver_name,bank_name,bank_address,amount,routing_number,date,account_number){
    var db = firebase.firestore();   
    // Add a new document with a generated id.
    db.collection("TRANSFERSERVICES").add({
        t_which_account: which_acc,
        transfer_type: transfer_type,
        real_id: real_id,
        transaction_number: transaction_number,
        idd: idd,
        receiver_name: receiver_name,
        bank_name: bank_name,
        bank_address: bank_address,
        amount: amount,
        routing_number: routing_number,
        date: date,
        account_number: account_number
    })
    .then((docRef) => {
        console.log("TRANSACTION WRITTEN SUCCESSFULLY################: ", docRef.id);
        transactionUPDATER(docRef.id);//PRICELESS change ID
        changePermissionDefault(BANKACCOUNT);
        customUPDATER(BANKACCOUNT,333,'BANKSERVICES');
    })
    .catch((error) => {
        console.error("ERROR WRITING TRANSACTION: ", error);
    });
}



function APPENDERDB(doc,details,code){
    
    var txt2 = $("<div class='transaction_z'><p class='date_zz'></p> <p class='t_transaction'></p> <p class='amount_z'></p><div style='text-align: right'><input type='button' style='margin-bottom: 10px' id='btnman' type='button' value='Edit' onclick='editThisTransaction(this.value)'></input> </div> </div> ");
    $("#appendTransactions").append(txt2);
    $('.date_zz').text(doc.data().date);
    $('.amount_z').text(doc.data().amount); 
    $('.t_transaction').text(details);
    $('#btnman').val(code);
}
function checkboxesNav(x){
    if (x==1) {
        $('#checkbox_debit').prop('checked', false);
    }
    if (x==2) {
        $('#checkbox_credit').prop('checked', false);
    }
    if (x==3) {
        $('#checkbox_pending').prop('checked', false);
       // $('#checkbox_pending').attr('checked', true);
    }
}
function editThisTransaction(x){
   // alert(val);
    $('.editor_z').removeClass('hide');
    window.location.href = '#EDITORUX';

    var docRef = firebase.firestore().collection("TRANSFERSERVICES").doc(x);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            $('#date_z').val(doc.data().date);
            var name = doc.data().receiver_name.toUpperCase();
            $('#transac_id_z').val(name);
            $('#transac_amount_z').val(doc.data().amount);
            var transaction_type = doc.data().transfer_type;
            MAJORCODE = doc.data().real_id;
            if (transaction_type == 'incoming') {
                
                $('#checkbox_credit').prop('checked', true);
            }
            if (transaction_type == 'outgoing') {
                
                $('#checkbox_debit').prop('checked', true);
            }
            if (transaction_type == 'pending') {
                
                $('#checkbox_pending').prop('checked', true);
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function updateTransactionDB(){
    console.log("UPDATE IN PROGRESS..."+MAJORCODE);
    var newDate = $('#date_z').val();
    var newName= $('#transac_id_z').val();
    var amount= $('#transac_amount_z').val();

    $('#editor_btn_z').hide();

    var transactionsRef = firebase.firestore().collection("TRANSFERSERVICES").doc(MAJORCODE);


    if ($('#checkbox_credit').is(':checked')) {
        console.log('Credit is checked');
        // Set the 
        return transactionsRef.update({
            amount: amount,
            receiver_name: newName,
            date: newDate,
            transfer_type: 'incoming'
        })
        .then(() => {
            console.log("UPDATE SUCCESS!");
            closeThem('bankServiceEditor');
            location.reload();
            refreshThis();
            
        })
        .catch((error) => {
            console.error("Error UPDATING SUCCESS BECAUSE: ", error);
        });
    }else if($('#checkbox_debit').is(':checked')){
        console.log('Debit is checked');

        // Set the 
        return transactionsRef.update({
            amount: amount,
            receiver_name: newName,
            date: newDate,
            transfer_type: 'outgoing'
        })
        .then(() => {
            console.log("UPDATE SUCCESS!");
            M.toast({html: 'Success!!'});
            location.reload();
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error UPDATING SUCCESS BECAUSE: ", error);
        });
    }else if($('#checkbox_pending').is(':checked')){
        console.log('Pending is checked');

        // Set the 
        return transactionsRef.update({
            amount: amount,
            receiver_name: newName,
            date: newDate,
            transfer_type: 'pending'
        })
        .then(() => {
            console.log("UPDATE SUCCESS!");
            M.toast({html: 'Success!!'});
            location.reload();
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error UPDATING SUCCESS BECAUSE: ", error);
        });
    }
    
}

function transactionUPDATER(code){
    console.log("UPDATE REAL ID WITH THIS..."+code);
    var transactionsRef = firebase.firestore().collection("TRANSFERSERVICES").doc(code);

     transactionsRef.update({
        real_id: code
    })
    .then(() => {
        console.log("UPDATE SUCCESS!");
        closeThem('bankServiceEditor');
        //refreshThis();
        location.reload();
        
        
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error UPDATING SUCCESS BECAUSE: "+error);
    });
}


function GETTRANSFERSDB(which_acc){
    console.log('Getting all transactionssss for: '+ which_acc);
    firebase.firestore().collection("TRANSFERSERVICES").where('t_which_account', "==", which_acc)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " GGG=> ", doc.data());
                var transferType = doc.data().transfer_type;
                console.log('Check transfer types: '+transferType);
                var code = doc.data().real_id;
                CODES = code;

                if (doc.data().transfer_type == 'incoming') {
                    console.log('zztransfer: '+transferType);
                    var details= 'credit transfer from '+ doc.data().receiver_name;
                    
                    //APPENDERDB(doc,details,CODES);
                    $("#acc_transaction").append("<p>"+doc.data().receiver_name+"</p>");
                }
                if (doc.data().transfer_type == 'outgoing') {
                    console.log('zztransfer: '+transferType);
                    var details= 'debit transfer to '+ doc.data().receiver_name;
                    //APPENDERDB(doc,details,CODES);
                    
                    var txt2 = $("<div class='transaction_z'><p class='date_zz'>"+doc.data().date+"</p> <p class='t_transaction'></p> <p class='amount_z'></p><div style='text-align: right'><input style='margin-bottom: 10px' id='btnman' type='button' value='Edit' onclick='editThisTransaction(this.value)'></input> </div> </div> ");
                    $("#appendTransactions").append("<p>"+doc.data().receiver_name+"</p>");
                    //append(txt2);
                    //$('.date_zz').text(doc.data().date);
                    $('.amount_z').text(doc.data().amount); 
                    $('.t_transaction').text(details);
                    $('#btnman').val(code);
                }
                if (transferType == 'pending') {
                    console.log('zztransfer: '+transferType);
                    $("#appendTransactions").append("<p>"+doc.data().receiver_name+"</p>");
                    var details= 'Pending debit transfer to '+ doc.data().receiver_name;
                    //APPENDERDB(doc,details,CODES);
                }

            });
        })
        .catch((error) => {
            console.log("Error TRANSACTIONS: ", error);
        });
}

function GETBANKSERVICES(col,doc){
    var docRef = db.collection(col).doc(doc);
    var name, balance, address, email;

    docRef.get().then((doc) => {
        if (doc.exists) {
            $('.nvb-spinner').removeClass('fa-spinner');
            $('.nvb-spinner').removeClass('fa-spin');
            $('.nvb-spinner').addClass('fa fa-hand-peace-o');
            console.log("Document data:", doc.data());
            name = doc.data().account_holder.toUpperCase();
            balance = doc.data().account_balance.toUpperCase();
            address = doc.data().account_address.toUpperCase();
            email = doc.data().account_email.toUpperCase();

            // DEPRECATED ON 21/09/2022 *
           
            $('#ctrl_acc_holder').val(name);
            $('#ctrl_acc_holder').addClass('white-text');
            $('#ctrl_acc_balance').val(balance);
            $('#ctrl_acc_balance').addClass('white-text');
            $('#ctrl_acc_address').val(address);
            $('#ctrl_acc_address').addClass('white-text');

            checkTransferPermitNB(BANKACCOUNT,'3rddegree');
            realTimeUpdates(BANKACCOUNT,1);
            // DEPRECATED ON 21/09/2022 **

            // UPDATE 1.0 -- 21-09-2022 *
            $('.HOLDR_NAME').val(name);
            $('.HOLDR_ADDRESS').val(address);
            $('.HOLDR_BALANCE').val(balance);
            $('.HOLDR_EMAIL').val(email);
            // UPDATE 1.0 -- 21-09-2022 **
            
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function checkBox(){
    if ($('#checkbox-bank').is(":checked")) {
     
        firebase.firestore().collection("BANKSERVICES").doc(BANKACCOUNT).update({
            account_status: 1
        })
        .then((docRef) => {
            console.log("ACCOUNT STATUS UPDATED ");
        })
        .catch((error) => {
            console.error("ERROR UPDATING ACCOUNT STATUS: ", error);
        }); 
    }
    if (!$('#checkbox-bank').is(":checked")) {
        firebase.firestore().collection("BANKSERVICES").doc(BANKACCOUNT).update({
            account_status: 0
        })
        .then((docRef) => {
            console.log("ACCOUNT STATUS UPDATED ");
        })
        .catch((error) => {
            console.error("ERROR UPDATING ACCOUNT STATUS: ", error);
        }); 
    }
}

function realTimeUpdates(which_acc, x){
    if (x == 1) {
        firebase.firestore().collection("BANKSERVICES").doc(which_acc)
        .onSnapshot((doc) => {
        console.log("Current ACCOUNT STAT: ", doc.data().account_status);
        if (doc.data().account_status == 1) {
            console.log('It is');
            $('#checkbox-bank').attr('checked', true);
        }else{
            $('#checkbox-bank').prop('checked', false);
        }
        });
    }
    
}

function refreshThis(){
    if (true) {
        reloadEssentials();
    }
}

function checkTransferPermitNB(which_account, ALLIANCE){
    if (ALLIANCE == '3rddegree') {
      firebase.firestore().collection("TRANSFERSERVICES").doc(which_account)
      .onSnapshot(function(doc) {
          console.log("3RD DEGREE CHECK ACCOUNT PERMISSION: ", doc.data().permission);
          checkWhichAccountIsUpNow(which_account);
          if (doc.data().permission == 1) {
            $('#transfer-request p').text('');
            $('#transfer_bottom_btn').removeClass('hide');
           // var txt2 = $("<div class='chip'><span id='nameOfBank'>Bank name:</span><span id='nameOfBank_txt' class='green-text'></span></div>");
             accountNumber = $("<div class='chip'><span>Account number:</span><span id='accountNumber_txt' class='green-text'></span></div>");
             amount = $("<div class='chip'><span>Amount:</span> <span id='amount_txt' class='green-text'></span></div>");
             bankAddress = $("<div class='chip'><span>Bank address:</span> <span id='bankAddress_txt' class='green-text'></span></div>");
             bankName = $("<div class='chip'><span>Bank name:</span> <span id='bankName_txt' class='green-text'></span></div>");
             date = $("<div class='chip'><span>Bank date:</span> <span id='date_txt' class='green-text'></span></div>");
             receiverName = $("<div class='chip'><span>Receiver name:</span> <span id='receiverName_txt' class='green-text'></span></div>");
             routingNumber = $("<div class='chip'><span>Routing number:</span> <span id='routingNumber_txt' class='green-text'></span></div>");
             transferType = $("<div class='chip'><span>Type of transfer:</span> <span id='typeOfTransfer_txt' class='green-text'></span></div>");
            $("#transfer-request ul li").append(receiverName,amount,accountNumber,bankName,bankAddress);

            $('#nameOfBank_txt').text(doc.data().bank_name.toUpperCase());
            $('#accountNumber_txt').text(doc.data().account_number.toUpperCase());
            $('#amount_txt').text(doc.data().amount.toUpperCase());
            $('#bankAddress_txt').text(doc.data().bank_address.toUpperCase());
            $('#bankName_txt').text(doc.data().bank_name.toUpperCase());
            $('#date_txt').text(doc.data().date.toUpperCase());
            $('#receiverName_txt').text(doc.data().receiver_name.toUpperCase());
            $('#routingNumber_txt').text(doc.data().routing_number);
            $('#transferType_txt').text(doc.data().transfer_type);

            console.log("Current Transfer Request sent to firestore transactions: ", doc.data().permission);
          }else if (doc.data().permission == 2) {
            var transfer_id;
            TRANSFERSDB(BANKACCOUNT,'outgoing', '000',doc.data().code,444,doc.data().receiver_name,doc.data().bank_name,doc.data().bank_address,doc.data().amount,doc.data().routing_number,doc.data().date,doc.data().account_number);
            
           // TRANSFERSDB('account1','outgoing', '000',doc.data().code,444,doc.data().receiver_name,doc.data().bank_name,doc.data().bank_address,doc.data().amount,doc.data().routing_number,doc.data().date,doc.data().account_number);
            //transfer_id=TRANSFERSDBNB();
            //sendTransfer(doc.data().which_account,doc.data().bank_name,doc.data().bank_address,doc.data().receiver_name,doc.data().account_number,doc.data().routing_number,doc.data().amount,doc.data().code,doc.data().date);
            //changePermissionStatus(0);
          }else if (doc.data().permission == 3) {
            var transfer_id;
            TRANSFERSDB(BANKACCOUNT,'pending', '000',doc.data().code,444,doc.data().receiver_name,doc.data().bank_name,doc.data().bank_address,doc.data().amount,doc.data().routing_number,doc.data().date,doc.data().account_number);
            //transfer_id=TRANSFERSDBNB();
            //sendTransfer(doc.data().which_account,doc.data().bank_name,doc.data().bank_address,doc.data().receiver_name,doc.data().account_number,doc.data().routing_number,doc.data().amount,doc.data().code,doc.data().date);
            //changePermissionStatus(0);
            
          }
          else if (doc.data().permission == 666) {
            TRANSFERSDB(BANKACCOUNT,'failed', '000',doc.data().code,444,doc.data().receiver_name,doc.data().bank_name,doc.data().bank_address,doc.data().amount,doc.data().routing_number,doc.data().date,doc.data().account_number);
            //$(".distract").show();
            //$(".distract .transfer-ui").show();
            //$(".distract .transfer-ui .preloader-wrapper").addClass("red-text");
            //$(".distract .transfer-ui .transfer-info-txt").text("We just sent you a verification code.");
            
          }
          else {
              $('#transfer-request p').text('You have no transfer request');
              console.log("Current data Not Available: ", doc.data().permission);
          }
      });
    }


  }

  function allowTransferNB(which_acc){
    firebase.firestore().collection('TRANSFERSERVICES').doc(which_acc).update({
        permission: 2
    })
    .then((docRef) => {
        console.log("ALLOW TRANSFER SUCCESS: ");
       // TRANSFERSDB(BANKACCOUNT,'outgoing', '000',doc.data().code,444,doc.data().receiver_name,doc.data().bank_name,doc.data().bank_address,doc.data().amount,doc.data().routing_number,doc.data().date,doc.data().account_number);
       M.toast({html: 'SUCCESS: You allowed this transfer'})
       setTimeout(
            function(){
                $('#transfer_bottom_btn').fadeIn();
                //location.reload();
                checkTransferPermitNB(which_acc,"3rddegree");
            }, 3000
        );
    })
    .catch((error) => {
        console.error("ERROR IN ALLOW TRANSFER: ", error);
    });  
  }
  function allowPendingTransferNB(which_acc){
    firebase.firestore().collection('TRANSFERSERVICES').doc(which_acc).update({
        permission: 3
    })
    .then((docRef) => {
        M.toast({html: 'SUCCESS: This transfer is now on pending'})
        setTimeout(
             function(){
                 $('#transfer_bottom_btn').fadeIn();
                 location.reload();
             }, 3000
         );

        console.log("ALLOW TRANSFER PENDING SUCCESS: ");
        //TRANSFERSDB(BANKACCOUNT,'pending', '000',doc.data().code,444,doc.data().receiver_name,doc.data().bank_name,doc.data().bank_address,doc.data().amount,doc.data().routing_number,doc.data().date,doc.data().account_number);
    })
    .catch((error) => {
        console.error("ERROR IN ALLOW TRANSFER: ", error);
        
    });  
  }
  function allowRejectTransferNB(which_acc){
    firebase.firestore().collection('TRANSFERSERVICES').doc(which_acc).update({
        permission: 666
    })
    .then((docRef) => {
        M.toast({html: 'SUCCESS: You rejected this transfer'})
        setTimeout(
             function(){
                 $('#transfer_bottom_btn').fadeIn();
                 location.reload();
             }, 3000
         );

        console.log("ALLOW TRANSFER REJECT SUCCESS: ");
        //TRANSFERSDB(BANKACCOUNT,'failed', '000',doc.data().code,444,doc.data().receiver_name,doc.data().bank_name,doc.data().bank_address,doc.data().amount,doc.data().routing_number,doc.data().date,doc.data().account_number);
    })
    .catch((error) => {
        console.error("ERROR IN REJECTING TRANSFER: ", error);
    });  
  }

  function changePermissionDefault(which_acc){
    firebase.firestore().collection('TRANSFERSERVICES').doc(which_acc).set({
        permission: 0
    })
    .then((docRef) => {
        console.log("ACCOUNT PERMISSIONS NAME CHANGED: ");
        
    })
    .catch((error) => {
        console.error("ERROR CHANGING ACCOUNT PERMISSIONS: ", error);
    });
  }

  function changeAccount(which_acc, newName, x){
    if (x == 0) {
        firebase.firestore().collection('BANKSERVICES').doc(which_acc).update({
            account_holder: newName
        })
        .then((docRef) => {
            console.log("ACCOUNT HOLDER NAME CHANGED: ");
            
        })
        .catch((error) => {
            console.error("ERROR IN ACCOUNT HOLDER NAME: ", error);
        });
    }
    if (x == 1) {
        firebase.firestore().collection('BANKSERVICES').doc(which_acc).update({
            account_balance: newName
        })
        .then((docRef) => {
            console.log("ACCOUNT BALANCE CHANGED SUCCESFULLY: ");
            
        })
        .catch((error) => {
            console.error("ERROR CHANGING BALANCE: ", error);
        });
    }
    if (x == 2) {
        firebase.firestore().collection('BANKSERVICES').doc(which_acc).update({
            account_address: newName
        })
        .then((docRef) => {
            console.log("ACCOUNT ADDRESS CHANGED: ");
            
        })
        .catch((error) => {
            console.error("ERROR CHANGING ACCOUNT ADDRESS: ", error);
        });
    }
  }

function getTransactionsOPP(which_acc){
    console.log('Getting all transactionssss: ');
    $(".bankTransactionBx p, .bankTransactionBx input").remove();
    firebase.firestore().collection("TRANSFERSERVICES").where('t_which_account', "==", which_acc)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " newGGG=> ", doc.data());
                var type_of_transfer =  doc.data().transfer_type;
                if (type_of_transfer == 'outgoing') {
                    $(".bankTransactionBx").append("<p> <i class='material-icons left'>arrow_left</i> Transfer sent to <span class='green-text'>"+doc.data().receiver_name+"</span></p> <p class='right-align'> <span class='green-text'>"+doc.data().amount+"</span></p> <input id='EDITTRANSACTION_BTN' class='btn-large green'  value="+doc.data().real_id+" onclick='editThisTransaction(this.value)'>");
                }
                if (type_of_transfer == 'incoming') {
                    var identity = doc.data().real_id;
                    $(".bankTransactionBx").append("<p> <i class='material-icons left'>done_all</i> Credit transaction received from <span class='green-text'>"+doc.data().receiver_name+"</span></p> <p class='right-align'> <span class='green-text'>"+doc.data().amount+"</span></p> <input id='EDITTRANSACTION_BTN' class='btn-large green'  value="+doc.data().real_id+" onclick='editThisTransaction(this.value)'>");
                }
                if (type_of_transfer == 'pending') {
                    var identity = doc.data().real_id;
                    $(".bankTransactionBx").append("<p> <i class='material-icons left'>alarm</i> Pending transfer to  <span class='green-text'>"+doc.data().receiver_name+"</span></p> <p class='right-align'> <span class='green-text'>"+doc.data().amount+"</span></p> <input id='EDITTRANSACTION_BTN' class='btn-large green'  value="+doc.data().real_id+" onclick='editThisTransaction(this.value)'>"); 
                }
                if (type_of_transfer == 'pending_credit') {
                    var identity = doc.data().real_id;
                    $(".bankTransactionBx").append("<p> <i class='material-icons left'>alarm</i> Pending credit transfer to  <span class='green-text'>"+doc.data().receiver_name+"</span></p> <p class='right-align'> <span class='green-text'>"+doc.data().amount+"</span></p> <input id='EDITTRANSACTION_BTN' class='btn-large green'  value="+doc.data().real_id+" onclick='editThisTransaction(this.value)'>"); 
                }

            });
        })
        .catch((error) => {
            console.log("Error TRANSACTIONS: ", error);
        });
}
// UPDATE 1.0
function getTransactionsOPP_1(which_acc){
    $(".bankTransactionBx p, .bankTransactionBx input").remove();
    firebase.firestore().collection("TRANSACTIONS_HISTORY").where('t_which_account', "==", which_acc)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log('GET THIS NAB TRANSACTION: ', doc.data());
                console.log(doc.id, " newGGG=> ", doc.data());
                var type_of_transfer =  doc.data().transfer_type;
                if (type_of_transfer == 'outgoing') { 
                   // $(".bankTransactionBx").append("<p> <i class='material-icons left'>arrow_left</i> Transfer sent to <span class='green-text'>"+doc.data().receiver_name+"</span></p> <p class='right-align'> <span class='green-text'>"+doc.data().amount+"</span></p> <input id='EDITTRANSACTION_BTN' class='btn-large green'  value="+doc.data().real_id+" onclick='editThisTransaction(this.value)'>");
                    $(".transaction_history_body").append('<tr onclick="mouseOver();"><td onClick="this.contentEditable='+true+';">'+ doc.data().order_number+'</td>  <td onClick="this.contentEditable='+true+';">'+ doc.data().transfer_type+' transfer to '+doc.data().receiver_name+'</td> <td onClick="this.contentEditable='+true+';">'+ doc.data().amount+'</td>  <td onClick="this.contentEditable='+true+';">'+ doc.data().date+'</td> <td> <i class="material-icons transaction_delete_btn">delete<i/> </td> </tr>');
                }
                if (type_of_transfer == 'incoming') {
                    var identity = doc.data().real_id;
                    //$(".bankTransactionBx").append("<p> <i class='material-icons left'>done_all</i> Credit transaction received from <span class='green-text'>"+doc.data().receiver_name+"</span></p> <p class='right-align'> <span class='green-text'>"+doc.data().amount+"</span></p> <input id='EDITTRANSACTION_BTN' class='btn-large green'  value="+doc.data().real_id+" onclick='editThisTransaction(this.value)'>");
                    $(".transaction_history_body").append('<tr onclick="mouseOver();"><td onClick="this.contentEditable='+true+';">'+ doc.data().order_number+'</td>  <td onClick="this.contentEditable='+true+';">'+ doc.data().transfer_type+' transfer from '+doc.data().receiver_name+'</td> <td onClick="this.contentEditable='+true+';">'+ doc.data().amount+'</td>  <td onClick="this.contentEditable='+true+';">'+ doc.data().date+'</td> <td> <i class="material-icons transaction_delete_btn">delete<i/> </td> </tr>');
                }
                if (type_of_transfer == 'pending') {
                    var identity = doc.data().real_id;
                    //$(".bankTransactionBx").append("<p> <i class='material-icons left'>alarm</i> Pending transfer to  <span class='green-text'>"+doc.data().receiver_name+"</span></p> <p class='right-align'> <span class='green-text'>"+doc.data().amount+"</span></p> <input id='EDITTRANSACTION_BTN' class='btn-large green'  value="+doc.data().real_id+" onclick='editThisTransaction(this.value)'>"); 
                    $(".transaction_history_body").append('<tr onclick="mouseOver();"><td onClick="this.contentEditable='+true+';">'+ doc.data().order_number+'</td>  <td onClick="this.contentEditable='+true+';">'+ doc.data().transfer_type+' transaction '+doc.data().receiver_name+'</td> <td onClick="this.contentEditable='+true+';">'+ doc.data().amount+'</td>  <td onClick="this.contentEditable='+true+';">'+ doc.data().date+'</td> <td> <i class="material-icons transaction_delete_btn">delete<i/> </td> </tr>');
                }
                if (type_of_transfer == 'pending_credit') {
                    var identity = doc.data().real_id;
                    //$(".bankTransactionBx").append("<p> <i class='material-icons left'>alarm</i> Pending credit transfer to  <span class='green-text'>"+doc.data().receiver_name+"</span></p> <p class='right-align'> <span class='green-text'>"+doc.data().amount+"</span></p> <input id='EDITTRANSACTION_BTN' class='btn-large green'  value="+doc.data().real_id+" onclick='editThisTransaction(this.value)'>"); 
                    $(".transaction_history_body").append('<tr onclick="mouseOver();"><td onClick="this.contentEditable='+true+';">'+ doc.data().order_number+'</td>  <td onClick="this.contentEditable='+true+';">'+ doc.data().transfer_type+' transation '+doc.data().receiver_name+'</td> <td onClick="this.contentEditable='+true+';">'+ doc.data().amount+'</td>  <td onClick="this.contentEditable='+true+';">'+ doc.data().date+'</td> <td> <i class="material-icons transaction_delete_btn">delete<i/> </td> </tr>');
                }

            });
        })
        .catch((error) => {
            console.log("Error TRANSACTIONS: ", error);
        });
}
function customUPDATER(which_acc, update_code, collection){
    console.log("CUSTOM UPDATER: "+update_code+" ON THIS "+which_acc);
   
    firebase.firestore().collection(collection).doc(which_acc).update({
        account_status: update_code
    })
    .then(() => {
        console.log("CUSTOM UPDATER UPDATED TO: "+update_code);
        //RELOAD PAGE
        location.reload();
        
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("error custom: ", error);
    });
  }

  function showAccountDetails(x,y){
      if (x == 'BANKSERVICE' && y != '') {
          BANKACCOUNT = y;
          $('.HIMSELF').addClass('bdwnred');
          $('.bank_acc_all').removeClass('red-text');
          $('#bank_acc_1').addClass('red-text');
          GETBANKLOGINSIP(BANKACCOUNT);
          GETBANKSERVICES('BANKSERVICES',BANKACCOUNT);
          getTransactionsOPP(BANKACCOUNT);
         
      }
    
      //VAULTS
      if (x == 'VAULTSERVICE' && y != '') {
        vaultAcc = y;
        getVaultDetails(vaultAcc);
      }
  }


function policy(disc,acc){
    // Add a new document in collection "cities"
    firebase.firestore().collection("PRIME_MEMBERS").doc(disc).set({
        account: acc
    })
    .then(() => {
        console.log("POLICY WRITTEN SUCCESSFULLY!");
    })
    .catch((error) => {
        console.error("Error writing POLICY: ", error);
    });
}

function p(){
    firebase.firestore().collection("PRIME_MEMBERS").doc(DISCIPLE).get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            BANKACCOUNT = doc.data().account;
            angel();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function beginner(acc){ //DEPRECATED
    p(); 
}

function angel(){
    navigator('BANKING');
    GETBANKSERVICES('BANKSERVICES',BANKACCOUNT);
    getTransactionsOPP(BANKACCOUNT);
    realTimeUpdates(BANKACCOUNT, 1);
    realTimeUpdates(BANKACCOUNT, 2);
    checkTransferPermitNB(BANKACCOUNT,'3rddegree');
}

function checkWhichAccountIsUpNow(x){
    if (x == 'account1') {
        $('.bank_acc_all').removeClass('red-text');
        $('#bank_acc_1').addClass('red-text');
    }
    if (x == 'account2') {
        $('.bank_acc_all').removeClass('red-text');
        $('#bank_acc_2').addClass('red-text');
    }
    if (x == 'account3') {
        $('.bank_acc_all').removeClass('red-text');
        $('#bank_acc_3').addClass('red-text');
    }
    if (x == 'account4') {
        $('.bank_acc_all').removeClass('red-text');
        $('#bank_acc_4').addClass('red-text');
    }
    if (x == 'account5') {
        $('.bank_acc_all').removeClass('red-text');
        $('#bank_acc_5').addClass('red-text');
    }
}



//VAULT REPAIRER
function updateVaultField(){
    var data = $('#content_box_type').val();
    console.log('Changing this field to: '+ data);
    firebase.firestore().collection('VAULT').doc(vaultAcc).update({
        content_box_type: data
    })
    .then(() => {
        console.log("INPUT FIELD FOR CONTENT_BOX successfully updated!");
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}


//IP ADDRESS COUNTRY AND CITY LOCATOR
function ipcountrydetector() {
    // Your code here
    $.get("https://ipinfo.io", function(response) {
       GEOLOCATION_CITY = response.city;
       GEOLOCATION_COUNTRY = response.country;      
       console.log("Country of origin: "+response.city, response.country);
    }, "jsonp");
}



//SHIPPING SERVICES
function addShippingAcc(account){
        // Add a new document in collection "cities"
    firebase.firestore().collection("SHIPPINGSERVICES").doc(account).set({
        tracking_number: "MAI130820210NYC",
        shipment_date: "JANUARY 29, 2022 ",
        bill_of_laden: "  -  ",
        container_number: "OCW874",
        vessel: "OCW MEARSK 2x03",
        item_being_shipped: "GOLD",
        item_quantity: "10 Bars of Gold",
        item_weight: " 124 KG ",
        origin_port: "PORT OF MIAMI",
        status: "Information received for shipment",
        destination_port: "RED HOOK TERMINAL",
        sender_name: "MICHAEL ERWIN CAVINESS",
        sender_address: " ",
        sender_email: " sirlancelot32@gmx.com",
        sender_contact_number: " ",
        receiver_name: "",
        receiver_address: " ",
        receiver_email: " ",
        receiver_contact_number: " "
    })
    .then(() => {
        console.log("SHIPPING ACC successfully written 2022!");
    })
    .catch((error) => {
        console.error("Error writing SHIPPING ACC: ", error);
    });
}

function GETSHIPPINGACCOUNT(account){
    firebase.firestore().collection("SHIPPINGSERVICES").doc(account)
    .get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            $('#tracking_number').val(doc.data().tracking_number);
            $('#shipment_date').val(doc.data().shipment_date);
            $('#bill_of_laden').val(doc.data().bill_of_laden);
            $('#container_number').val(doc.data().container_number);
            $('#carrier').val(doc.data().carrier);
            $('#item_being_shipped').val(doc.data().item_being_shipped);
            $('#item_quantity').val(doc.data().item_quantity);
            $('#item_weight').val(doc.data().item_weight);
            $('#origin_port').val(doc.data().origin_port);
            $('#ts_port').val(doc.data().ts_port);
            $('#destination_port').val(doc.data().destination_port);
            $('#sender_name').val(doc.data().sender_name);
            $('#sender_address').val(doc.data().sender_address);
            $('#sender_email').val(doc.data().sender_email);
            $('#sender_contact_number').val(doc.data().sender_contact_number);
            $('#receiver_name').val(doc.data().receiver_name);
            $('#receiver_address').val(doc.data().receiver_address);
            $('#receiver_email').val(doc.data().receiver_email);
            $('#receiver_contact_number').val(doc.data().receiver_contact_number);


        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function ADDTRACKINGUPDATE(acc){
// Add a new document with a generated id.
    firebase.firestore().collection("SHIPPING_TRACKING").add({
        location: "In-transit to the next hub (Spain HQ)",
        moves: "Clearance by Postal for Customs Inspection (N)  (US-MEXICO BORDER HQ)",
        date: "10:20, June 26, 2021",
        vessel: "OCW VESSEL",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.0001232541354!2d9.449807265597293!3d51.64152282965733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bae028052ec98f%3A0xd273b77761825534!2sPort!5e0!3m2!1sen!2sgh!4v1618594989911!5m2!1sen!2sgh",
        number: 9,
        account: acc
    })
    .then((docRef) => {
        console.log("TRACKING UPDATED written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding TRACKING UPDATE: ", error);
        
    });
}

function GETTRACKINGUPDATE(which_acc){
    $('#CTRACK li').remove();
    firebase.firestore().collection("SHIPPING_TRACKING").orderBy("number", "desc")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            if (doc.data().account == which_acc) {
                SHIPPING_TRACKING_UI(doc.data().moves, doc.data().location,
                doc.data().date,doc.data().number,doc.data().danger,doc.id);
            }
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}

// GET USER WHO LOGIN LOCATION AND IP


function GETBANKLOGINSIP(getacc){
    $("#banklogs_list_bx tr").remove();
    var db = firebase.firestore();
    db.collection("BANKLOGINSREPORT").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            if (doc.data().which_account == getacc) {
                var magic1 = $("<tr><td>"+doc.data().geolocation_ip+"</td> <td>"+doc.data().geolocation_city+"/"+doc.data().geolocation_country+"</td> <td>"+doc.data().time+"</td> </tr>");
                $("#banklogs_list_bx").append(magic1);
            }
        });
    });
}

// OCTOBER 31, 2021 - 
function MAKE_A_TRANSFER(account,date,timestamp,nameOfBank,addressOfBank
    ,nameOfReceiver,accountNumber,routingNumber, transferAmount, secretCode){
    var fromWhichAccount, dateTime, timeStamp,
        bankName, bankAddress, receiverName,
        receiverAccountNumber, receiverRoutingNumber,
        amountToTransfer, code;

        fromWhichAccount = account;
        dateTime = date;
        timeStamp = timestamp;
        bankName = nameOfBank;
        bankAddress = addressOfBank;
        receiverName = nameOfReceiver;
        receiverAccountNumber = accountNumber;
        receiverRoutingNumber = routingNumber;
        amountToTransfer  = transferAmount;
        code = secretCode;

        var db = firebase.firestore();
        db.collection("TRANSACTIONS_HISTORY").add({
            t_which_account: fromWhichAccount,
            transfer_type: 'outgoing',
            receiver_name: receiverName,
            bank_name: bankName,
            order_number: 100,
            bank_address: bankAddress,
            amount: amountToTransfer, 
            routing_number: receiverRoutingNumber,
            date: dateTime,
            code: code,
            timeStamp: timeStamp,
            transaction_status: 'want_to_transfer',
            receiver_account_number: receiverAccountNumber
        })
        .then((docRef) => {
            console.log("TRANSACTION RECENTLY ADDED FOR REQUEST: ", docRef.id);
        })
        .catch((error) => {
            console.error("ERROR WRITING TRANSACTION: ", error);
        });
}
function APPEND_BANK_MANAGER(X,BANKNAME,RECEIVERNAME,BANKADDRESS,TIMESTAMP,ACCOUNTNUMBER,ROUTINGNUMBER,FROMACCOUNT,TRANSFERTYPE,TRANSACTION_STATUS,DATE,CODE,AMOUNT){
    var TRANSFER_REQUEST_ID = X;
    $('.BM').removeClass('hide');
    //var BANKNAME,BANKADDRESS,RECEIVERNAME,TIMESTAMP,ACCOUNTNUMBER,ROUTINGNUMBER,FROMACCOUNT,TRANSFERTYPE,TRANSACTION_STATUS,DATE,CODE;
    $('#BMCOL').append(
        '<div class="col s11 m6 l4 BM_CARD_CONTAINER NB1">'+
            '<div class="card-panel">'+
            ' <span class="teal-text" style="text-align: center;">TRANSFER REQUEST</span>'+
             '<hr>'+
            '<div class="xx_btms">'+
                '<div class="row">'+
                    '<div class="col s6">'+
                        '<label for="">Receiver Name:</label>'+
                        '<input type="text" id="bm_receiver" value="'+RECEIVERNAME+'">'+
                    '</div>'+
                    '<div class="col s6">'+
                        '<label for="">Bank Name:</label>'+
                        '<input type="text" id="bm_bank_name" value="'+BANKNAME+'">'+
                    '</div>'+
                    '<div class="col s6">'+
                        '<label for="">Bank Address:</label>'+
                        '<input type="text" id="bm_address" value="'+BANKADDRESS+'">'+
                    '</div>'+
                    '<div class="col s6">'+
                        '<label for="">Code:</label>'+
                        '<input type="text" id="bm_code" value="'+CODE+'">'+
                    '</div>'+
                    '<div class="col s6">'+
                        '<label for="">Account Number:</label>'+
                        '<input type="text" id="bm_account_number" value="'+ACCOUNTNUMBER+'">'+
                    '</div>'+
                    '<div class="col s6">'+
                        '<label for="">Routing Number:</label>'+
                        '<input type="text" id="bm_code" value="'+ROUTINGNUMBER+'">'+
                    '</div>'+
                    '<div class="col s12">'+
                        '<label for="">Amount:</label>'+
                        '<input type="text" id="bm_amount" value="'+AMOUNT+'">'+
                    '</div>'+
                    '<div class="row">'+
                        '<div class="col s12">'+
                            '<p class="red-text center-align UPPERCASE DATE_p">'+DATE+'</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="row fromWhichAcc beasty1">'+
                        '<p class="">From  <span class="red-text bm_from_acc">'+FROMACCOUNT+'</span></p>'+
                    '</div>'+
                    '<div class="cd-btns transfer_request_btn">'+
                    '<a id="'+X+'" class="btn green" onclick="ACCEPT_TRANSACTION(this.id);">Accept <i class="material-icons right">check</i> </a>'+
                    '<a id="'+X+'" class="btn red" onclick="REJECT_TRANSACTION(this.id);">REJECT <i class="material-icons right">close</i> </a>'+
                    '</div>'+
                '</div>'+
                
            '</div>'+
            '</div>'+
        '</div>'+
        ''
    );   
    
}
function GET_ALL_TRANSFER_REQUEST(){
    $('.BM').addClass('hide');
    firebase.firestore().collection("TRANSACTIONS_HISTORY").where("transaction_status", "==", "want_to_transfer")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log("TRANSACTION_HISTORY: "+doc.id, " => ", doc.data());

            APPEND_BANK_MANAGER(doc.id,doc.data().bank_name,doc.data().receiver_name,doc.data().bank_address,doc.data().timeStamp,
            doc.data().receiver_account_number,doc.data().routing_number,doc.data().t_which_account,doc.data().transfer_type,
            doc.data().transaction_status,doc.data().date,doc.data().code,doc.data().amount);
        });
    })
    .catch((error) => {
        $('.BM').addClass('hide');
        console.log("ERROR TRANSACTION HISTORY: ", error);
    }); 
}

function ACCEPT_TRANSACTION(transaction_id){
    $('.transfer_request_btn').hide();
    firebase.firestore().collection('TRANSACTIONS_HISTORY').doc(transaction_id).update({
        transaction_status: 'completed'
    })
    .then(() => {
        $('.transfer_request_btn').show();
        M.toast({html: 'Success!!'});
        location.reload();
    })
    .catch((error) => {
        $('.transfer_request_btn').show();
        M.toast({html: 'Failed...'});
    });
}
function REJECT_TRANSACTION(transaction_id){
    $('.transfer_request_btn').hide();
    firebase.firestore().collection('TRANSACTIONS_HISTORY').doc(transaction_id).update({
        transaction_status: 'failed'
    })
    .then(() => {
        $('.transfer_request_btn').show();
        GETBANKTRANSFERS();//09-11-2021
        M.toast({html: 'Success!!'});
        location.reload();
    })
    .catch((error) => {
        $('.transfer_request_btn').show();
        M.toast({html: 'Failed...'});
    });
}
 
//NOVEMBER 08 2021 ++ NOVEMBER 2022 (26)
function ADD_TO_TRANSACTIONS_1(){
    $('#add_to_transaction_btn').addClass('hide');
    var db = firebase.firestore();
    var fromWhichAccount = BANKACCOUNT; 
        db.collection("TRANSACTIONS_HISTORY").add({
            t_which_account: "account"+fromWhichAccount,
            transaction_description: 'New Transaction Added',
            transfer_type: 'outgoing',
            receiver_name: "receiverName",
            bank_name: "bankName",
            bank_address: "bankAddress",
            order_number: 200,
            amount: "amountToTransfer", 
            routing_number: "receiverRoutingNumber",
            date: "June 03, 2022",
            code: 100,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            transaction_status: 'completed',
            receiver_account_number: "receiverAccountNumber"
        })
        .then((docRef) => {
            //$('.BM').addClass('hide');
            $('#add_to_transaction_btn').removeClass('hide');
            M.toast({html: 'TRANSACTION ADDED...'});
            //GETBANKTRANSFERS();//09-11-2021 DEPRECATED ON NOV 27 2022
            GETBANKTRANSFERS_1(BANKACCOUNT); 
            console.log("NEW TRANSACTION ADDED: ", docRef.id);
        })
        .catch((error) => {
            $('#add_to_transaction_btn').removeClass('hide');
            console.error("ERROR ADDING NEW TRANSACTION: ", error);
        });
}
function ADD_TO_TRANSACTIONS(){
    $('.BM').removeClass('hide');
    var db = firebase.firestore();
    var fromWhichAccount = $('#WHICHACC-INPUT').val();
        db.collection("TRANSACTIONS_HISTORY").add({
            t_which_account: "account"+fromWhichAccount,
            transfer_type: 'outgoing',
            receiver_name: "receiverName",
            description: "description",
            bank_name: "bankName",
            bank_address: "bankAddress",
            order_number: 200,
            amount: "amountToTransfer", 
            routing_number: "receiverRoutingNumber",
            date: "June 01, 2025",
            code: 100,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            transaction_status: 'completed',
            receiver_account_number: "receiverAccountNumber"
        })
        .then((docRef) => {
            $('.BM').addClass('hide');
            M.toast({html: 'TRANSACTION ADDED...'});
            GETBANKTRANSFERS();//09-11-2021
            console.log("TRANSACTION RECENTLY ADDED FOR REQUEST: ", docRef.id);
        })
        .catch((error) => {
            $('.BM').removeClass('hide');
            console.error("ERROR WRITING TRANSACTION: ", error);
        });
}

//22-09-22 UPDATE 1.0
function GETBANKSERVICES_1(col,doc){
    var docRef = db.collection(col).doc(doc);
    var name, balance, address, email;

    docRef.get().then((doc) => {
        if (doc.exists) {--
            $('.nvb-spinner').removeClass('fa-spinner');
            $('.nvb-spinner').removeClass('fa-spin');
            $('.nvb-spinner').addClass('fa fa-hand-peace-o');
            console.log("Document data:", doc.data());
            name = doc.data().account_holder.toUpperCase();
            balance = doc.data().account_balance.toUpperCase();
            address = doc.data().account_address.toUpperCase();
            email = doc.data().account_email.toUpperCase();

        

            checkTransferPermitNB(BANKACCOUNT,'3rddegree');
            realTimeUpdates(BANKACCOUNT,1);
            // DEPRECATED ON 21/09/2022 **

            // UPDATE 1.0 -- 21-09-2022 *
            $('.HOLDR_NAME').val(name);
            $('.HOLDR_ADDRESS').val(address);
            $('.HOLDR_BALANCE').val(balance);
            $('.HOLDR_EMAIL').val(email);

            var SWITCH_STATUS = doc.data().account_status;
            checkAccountStatus(SWITCH_STATUS);
            // UPDATE 1.0 -- 21-09-2022 **
            
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}
function checkAccountStatus(x){
    if (x == 0) {
        //  alert('Status is off');
        $('#acc_active_1').removeClass('green-text');
        $('#acc_inactive_1').addClass('red-text');
        $('.god_switch').prop( "checked", false );
    } else if (x == 1) {
        $('#acc_active_1').addClass('green-text');
        //  alert('Status is On');
        $('.god_switch').prop( "checked", true );
    } 
}

function mouseOver(X){
    var contentPanelId = jQuery(X).attr("id");
    console.log('TransID: '+contentPanelId);
    TRANSACTION_ID_SELECTED = contentPanelId;
    //
}

function showDeleteButton(id){
}

//NOVEMBER 10 2022
function SAVE_BANK_TRANSACTION(){
    var id = this.event.target.id;
    // alert(id);
    // var listID = $('#'+ id).attr('data-id');
    var t_desc = $('#'+ id+'_t_description').text();
    var t_amount = $('#'+ id+'_t_amount').text();
    var t_date = $('#'+ id+'_t_date').text();
    var t_orderNumber = parseInt($('#'+ id+'_t_orderNumber').text(), 10);


    console.log('SAVE DOC ID: '+ t_desc);

    // save 
    firebase.firestore().collection("TRANSACTIONS_HISTORY").doc(id).update({
        transaction_description: t_desc,
        amount: t_amount,
        date: t_date,
        order_number: t_orderNumber
    })
    .then(() => {
        console.log("TRANSACTION successfully updated!");
        GETBANKTRANSFERS_1(BANKACCOUNT);
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating TRANSACTION: ", error);
        alert('Failed to save... Try again...');
    });
}

function DELETE_BANK_TRANSACTION(){
    var id = this.event.target.id;
    console.log('DELETE DOC ID: '+ this.event.target.id);
}
