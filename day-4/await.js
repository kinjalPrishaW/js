async function myfun(){
    let myPro = new Promise(function(res, rej) {
        let a=10; 
        let b=6;
        if (a<b) {
          res("Operation was successful!"); 
        } else {
          rej("There was an error."); 
        }
      });   
        try {
        var result = await myPro;
              console.log(result); 
            }
            catch(error) {
              console.error(error); 
            }

    return "hello";

}
myfun();
