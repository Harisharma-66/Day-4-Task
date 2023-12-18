//Arrow Function(a)   
oddNumbers = (array) => {
    for(var i = 0 ; i< array.length ; i++){
         if(array[i]%2!=0){
            console.log(array[i])
         } 
    }
         }

//Arrow Function(b): 
         
     titleCase = (str) => {
            str = str.toLowerCase().split(' ');
            for (var i = 0; i < str.length; i++) {
              str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
            } 
            return str.join(' ');
        }
        
        
//Arrow function(c):

    sum = (array)=>{
                     var sum = 0;
                          for(var i = 0 ; i< array.length ; i++){
                             sum = sum + array[i];
                           }
                           return sum;
                           }        
       
//Arrow Function(d) :
    
primeNumber = (numArray) => {
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}  


//Arrow : 
Palindrome = (arr, n) =>
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
