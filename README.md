# Password-Generation-web-app -->  https://shadowclan-r.github.io/Password-Generation-web-app/
A password generation web app generates strong, unique passwords to protect online accounts.
It has settings for length, complexity, special characters and allows for password storage and strength check.

The skeleton of the web

This code is an HTML document that creates a password generator webpage. 
It includes a text area for displaying the generated password, various settings for determining the characteristics of the password (length, inclusion of uppercase/lowercase letters, numbers, and symbols), and buttons for generating and copying the password. The webpage also includes a footer with a copyright notice. A separate JavaScript file is also included, which is likely used to handle the functionality of the password generator.

![image](https://user-images.githubusercontent.com/106614237/212555662-be2892a6-6b4e-456d-bfb5-9d70fe547418.png)

 

 
Styling the web 🎨

This code is CSS used to style an HTML document. It defines a number of variables for colors and filters, and applies them to various elements on the webpage such as the background, text, buttons, and containers. It also sets some basic styling for elements such as the font family, margins, and padding. It also defines some hover effects for some elements.
 ![image](https://user-images.githubusercontent.com/106614237/212555682-931b5c76-b799-4914-a4aa-fbab266d188e.png)


css variables for colors, typography, visuals etc .
 
![image](https://user-images.githubusercontent.com/106614237/212555698-d4ead9d9-7a88-4ae8-b485-19abfc393dd2.png)


Basic styling
 
![image](https://user-images.githubusercontent.com/106614237/212555707-1f092a7a-629b-45e4-bc8f-db329a98f184.png)


Styling main container , referencing --bg-color,--filter1 css variables
 

![image](https://user-images.githubusercontent.com/106614237/212555715-3db57c50-186f-47ab-be7d-7e8f515aec12.png)

Styling .result-container , referencing --bg-color, --filter2 css var
 
![image](https://user-images.githubusercontent.com/106614237/212555731-6f772bce-152b-44f5-b552-a0b0697a3001.png)


Styling textarea , referencing --color css var
 

![image](https://user-images.githubusercontent.com/106614237/212555740-c7708f33-219a-4456-816f-34ab3672d80b.png)


Setting align the flex items space between
 
![image](https://user-images.githubusercontent.com/106614237/212555749-f0d3dcfa-c645-4d80-add9-c76f062152ff.png)


Styling buttons
 
![image](https://user-images.githubusercontent.com/106614237/212555756-347e8755-ca8c-486e-b7c9-90a8a86ebbb3.png)


Setting flex to buttons for displaying buttons in a row
 
![image](https://user-images.githubusercontent.com/106614237/212555759-d5523db6-76cb-405e-9173-db2537135b56.png)



 
Function for generating random lowercase, uppercase, number, symbol

This code is JavaScript that is used to generate a random password based on certain user-specified parameters.
It defines a number of functions that generate a random lowercase letter, uppercase letter, number, and symbol. 
These functions are later used to generate the password. It also defines an object that maps the names of these functions to their corresponding function. 
An event listener is added to the generate button element, which when clicked, calls the generatePassword function,
passing in the values of the user-specified settings and the desired length of the password. 
The generatePassword function uses the passed in values to determine what types of characters to include in the generated password,
and uses the previously defined functions to generate a random password of the specified length.
It also has a click event listener on the copy button element, which when clicked, copies the generated password to the clipboard.


Charcode image
 ![image](https://user-images.githubusercontent.com/106614237/212556018-be698fba-17c1-441d-93c0-f1f3148ae306.png)


Function for generating random lowercase letter
 
![image](https://user-images.githubusercontent.com/106614237/212556025-4461fade-d485-4768-a0ef-d8b9d3460b31.png)


 Function for generating random uppercase letter
 
![image](https://user-images.githubusercontent.com/106614237/212556036-13c8b999-f1af-4650-ad44-b9392223013a.png)


Function for generating random numbers
 
![image](https://user-images.githubusercontent.com/106614237/212556045-e5189156-4dee-4ab7-89d8-7d21db63afc4.png)


Function for generating random symbols
 
![image](https://user-images.githubusercontent.com/106614237/212556051-22828fa6-947e-4d04-97e4-ea477fa083b9.png)


Putting all generator function into randomFun object
 
![image](https://user-images.githubusercontent.com/106614237/212556068-f26c9bdd-e637-43c0-99a6-b7993e696823.png)


 
Main function generatePassword for generating a random password
 
![image](https://user-images.githubusercontent.com/106614237/212556074-3d0497b9-fcbb-4466-8a9d-61bc1da04ad2.png)


Slicing password
 ![image](https://user-images.githubusercontent.com/106614237/212556081-1e2aa08d-90ef-492d-b1e3-3fca5f413628.png)



 Copy generated password feature
 ![image](https://user-images.githubusercontent.com/106614237/212556091-74187c2c-369c-44b3-831f-43c3f8d7fcc4.png)


shadowclan-R/Password-Generation-web-app: A password generation web app generates strong, unique passwords to protect online accounts. It has settings for length, complexity, special characters and allows for password storage and strength check. (github.com)
