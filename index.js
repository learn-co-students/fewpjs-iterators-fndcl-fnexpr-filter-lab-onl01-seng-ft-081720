// Code your solution here

       function findMatching(arr, name){
        return arr.filter(el => el.toLowerCase() === name.toLowerCase())

       }
      
   
       function fuzzyMatch(arr, beginningLetters){
           beginningLetters = `^` + beginningLetters
        return arr.filter(el => el.toLowerCase().match(beginningLetters.toLowerCase()))

       }
   

       function matchName(arr, string){
        return arr.filter(arrObject => arrObject.name === string)
       }
 
