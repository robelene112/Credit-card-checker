# Credit card checker using Luhn algorithm

<br>

### **Intro**

---

<p>
This was done as a challenge project on codecademy. Each array was made up of digits that together formed a credit card number. I was given 5 valid arrays, 5 invalid arrays and 5 arrays of which I did not know whether they were valid or invalid until I ran the array through the algorithm. I was also given a nested array that contained all the above mentioned arrays. The project consists of a total of three functions. 
</p>

<br>

### **validateCred()**

---

This function implemented Luhn algorithm. It took in one of the arrays and returned a boolean. These were the steps taken:<br>

1. Loop over all the elements in the array, starting from the check digit, which is the right most digit.
2. Every other digit is doubled, the check digit is not.
3. If the doubled digit is bigger than 9, subtract 9.
4. Append all the digits to a new array and sum all those digits.
5. Check if the sum is divisble by 10. If it is, that means the credit card number is valid, if it isn't then the credit card number is invalid. We return a boolean value based on whether the credit card number is valid or not.<br>

This function definitely could have been more concise. After I finished coding, I realised the given credit card numbers can be of various lengths. This is why the algorithm looks patched up. Next time i'd probably find a different approach, one that doesn't rely on the length of the array being even.

### **findInvalidCards()**

---

This was a helper function that filtered all the invalid cards out of the batch. The input of the function was the batch and the output was a nested array of invalid credit card numbers. Implementing this function took me longer than i'd like to admit because of a nasty bug in the for loop. In the first iteration of this function I used 'i' as the looping variable. I found out this caused an issue when calling validateCred() inside the loop. Because of that the script had two 'i' variables to keep track off (since I also used 'i' in the loops of validateCred()), which resulted in something that looked like an infinite loop. All in all i'm pretty happy with the conciseness of this function.<br>

### **idInvalidCompanies()**

---

The last function took the array of findInvalidCards() and matched every first digit of a number with a credit card company in the object. If the first digit matched the unique id of a company, the function would add the name of the company to a result array. It then would return the result array. The function made sure to never add the same company twice. If the first digit was not in the object, the function would log out an error message.
