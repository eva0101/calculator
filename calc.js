function calc(ident, a, b) {
   if (ident == null || typeof a !== 'number' || typeof b !== 'number') {
      return 'Error';
   } else if (ident == 'divis' && b == 0) {
      return "Can't divide by zero";
   } 
      switch(ident) {
         case 'sum':
            return a + b;
         case 'sub':
            return a - b;
         case 'erect':
            return a ** b;
         case 'multi':
            return a * b;
         case 'divis':
            return a / b;
         case 'more(>)':
            return a > b;
         case 'less(<)':
            return a < b;
         default:
            return 'unknown operation';
   }
}
console.log(calc('sum', 2, 2));