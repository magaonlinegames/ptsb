
var storage, db;

$(document).ready(function(){
  

 
      
      // Initialize Firebase
    //   firebase.initializeApp(firebaseConfig);
    //   db = firebase.firestore();
    //   var storageRef = firebase.storage().ref();

      // Create a root reference

      $('.distract .transfer-info-txt').text('');


      bank_login_sessions();
      
      transferChecker();
        menuChecker = 0;

    //   TRIAL 1.0
    // check_all_inputs();
    $('#from_which_acc').val('Savings Account ('+menuChecker+')');
    $('#which_currency').val('$(US DOLLAR)');
        

      $("form").submit(
          function(e){
              e.preventDefault();
          }
        );
});


function register(x){
    var fname, lname, email;
    var dob;
    // var mophone;
    var ssaddy, sssuite, sszipcode, sscity,ssstate;
    var sspasscode;
    var ssmobilephone;
    var sssourceincome, ssworkinput, ssincomeinput, ssaboutusinput;
    var ssssn;

    ssssn= $('#registerssninput').val().trim();  
    
    sspasscode= $('#registerpasswordinput').val().trim();

    sssourceincome= $('#registerincomesourceinput').val().trim();
    ssworkinput= $('#registerworkinput').val().trim();
    ssincomeinput= $('#registerincomeinput').val().trim();
    ssaboutusinput= $('#registeraboutusinput').val().trim();

    fname= $('#registerfirstnameinput').val().trim();
    lname= $('#registerlastnameinput').val().trim();
    email= $('#registeremailinput').val().trim();
    dob= $('#registerDOBinput').val().trim();
    // mophone= $('#registerphonenumberinput').val().trim();
    ssaddy= $('#registerstreetaddressinput').val().trim();
    sssuite= $('#registeraptsuiteinput').val().trim();
    sszipcode= $('#registerzipcodeinput').val().trim();
    sscity= $('#registercityinput').val().trim();
    ssstate= $('#registerstateinput').val().trim();
    sspasscode= $('#registerstateinput').val().trim();
    ssmobilephone= $('#registerphonenumberinput').val().trim();

    if (x == 1 ) {
        if (fname != '' && lname != '' && email != '') {
            $('#rpformbtn-1').hide();
            loads();
            // hide 1 and show 2
            $('.rpf').addClass('hide');
            $('#form2').removeClass('hide');

        }
    }

    if (x == 2 ) {
        if (dob != '') {
            $('#rpformbtn-2').hide();
            loads();
            // hide 1 and show 2
            $('.rpf').addClass('hide');
            $('#form3').removeClass('hide');

        }
    }

    if (x == 3) {
        if (ssmobilephone != '') {
            $('#rpformbtn-3').hide();
            loads();
            // hide 1 and show 2
            $('.rpf').addClass('hide');
            $('#form4').removeClass('hide');

        }
    }
    // password
    if (x == 4 ) {
        if (ssaddy != '' && sssuite != '' && sscity != ''
            && sszipcode != '' && ssstate != '') {
            $('#rpformbtn-4').hide();
            loads();
            // hide 1 and show 2
            $('.rpf').addClass('hide');
            $('#form5').removeClass('hide');
        }
    }
    if (x == 5 ) {
        if (sssourceincome != '' && ssworkinput != '' 
            && ssincomeinput != '' && ssaboutusinput != '') {
            $('#rpformbtn-5').hide();
            loads();
            // hide 1 and show 2
            $('.rpf').addClass('hide');
            $('#form6').removeClass('hide');
        }
    }
    if (x == 6 ) {
        if (sspasscode != '') {
            $('#rpformbtn-6').hide();
            loads();
            // hide 1 and show 2
            $('.rpf').addClass('hide');
            $('#form7').removeClass('hide');
        }
    }
    if (x == 7) {
        var confirmssn = $('#registerssnconfirminput').val().trim();
        if (ssssn != '') {
            if (ssssn == confirmssn) {
                $('#rpformbtn-7').hide();
                loads();
                // db
                registeruser(fname,lname,email,dob,ssaddy,sssuite,sszipcode,sscity,
                    ssstate,sspasscode,ssmobilephone,sssourceincome,ssworkinput,
                    ssincomeinput, ssaboutusinput,ssssn);
            }

            
        }
    }
}


function registeruser(fn,ln,em,dob,addy,sute,zpcde,cty,ste,pscde,mbphne,
    srcincme,wrk,incme,aboutus,securitynumber){
    db.collection("REGISTER").add({
        ffname:  fn,
        fflname:  ln,
        ffemail:  em,
        ffdob:  dob,
        ffaddress:  addy,
        ffsuite:  sute,
        ffzip:  zpcde,
        ffcity:  cty,
        ffstate:  ste,
        ffpasscode:  pscde,
        ffphone:  mbphne,
        ffsourceincome:  srcincme,
        ffwork:  wrk,
        ffincome:  incme,
        ffaboutus:  aboutus,
        status: 0,
        ffsecuritynumber:  securitynumber
    })
    .then((docRef) => {
        console.log("MEMBER ADDED: ", docRef.id);
            $('.rpf').addClass('hide');
            $('#complete').removeClass('hide');
            $('#rpsymb1').addClass('symbolactive');
            $('#rpsymb2').addClass('symbolactive');
            $('#rpline1').addClass('symbolactive');
    })
    .catch((error) => {
        console.error("Error adding member: ", error);
    });
}

function loads(){
    $('#loaderpage').removeClass('hide');
    setTimeout(() => {
        $('#loaderpage').addClass('hide');
    }, 3333);
}



