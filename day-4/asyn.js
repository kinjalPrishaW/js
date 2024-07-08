async function myfun(){
    let a=10; 
        let b=6;
        if (a<b) {
          return("Operation was successful!"); 
        } else {
          return("There was an error."); 
        }
}
myfun().then(
    function(value) {
      console.log(value); 
    },
    function(error) {
      console.error(error); 
    }
  );
