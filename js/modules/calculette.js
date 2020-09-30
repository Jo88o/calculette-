// création de la calculette //
// création de la div principale //
let body = document.querySelector('body');
let divPrincipale = document.createElement('div'); 
body.appendChild(divPrincipale)

divPrincipale.classList= 'div1'

//selection de la div principale //
// creation de la seconde div à l'interrieur de la div principale //
let divSecondaire = document.createElement('div'); 
divPrincipale.appendChild(divSecondaire)

divSecondaire.classList = 'div2'

// creation des 5 div de la calculette //
let divSecondaire1 = document.createElement('div'); 
let divSecondaire2 = document.createElement('div'); 
let divSecondaire3 = document.createElement('div'); 
let divSecondaire4 = document.createElement('div'); 
let divSecondaire5 = document.createElement('div'); 
divSecondaire.appendChild(divSecondaire1); 
divSecondaire.appendChild(divSecondaire2); 
divSecondaire.appendChild(divSecondaire3); 
divSecondaire.appendChild(divSecondaire4); 
divSecondaire.appendChild(divSecondaire5); 

console.log(divSecondaire);

divSecondaire1.classList = 'div2-1'
divSecondaire2.classList = 'div2-1'
divSecondaire3.classList = 'div2-1'
divSecondaire4.classList = 'div2-1'
divSecondaire5.classList = 'div2-1'

// creation de la div2-1 // 
let divSecondaire1Input = document.createElement('input')
divSecondaire1.appendChild(divSecondaire1Input)

divSecondaire1Input.classList = 'input-div2-1'

//creation de la div2-2 //
let divSecondaireBtn1_1 = document.createElement('button'); 
let divSecondaireBtn1_2 = document.createElement('button'); 
let divSecondaireBtn1_3 = document.createElement('button'); 
let divSecondaireBtn1_4 = document.createElement('button'); 
divSecondaire2.appendChild(divSecondaireBtn1_1)
divSecondaire2.appendChild(divSecondaireBtn1_2)
divSecondaire2.appendChild(divSecondaireBtn1_3)
divSecondaire2.appendChild(divSecondaireBtn1_4)

divSecondaireBtn1_1.innerText = '1'
divSecondaireBtn1_2.innerText = '2'
divSecondaireBtn1_3.innerText = '3'
divSecondaireBtn1_4.innerText = '+'

divSecondaire2.style ='display: flex; justify-content: space-around; margin: auto'
divSecondaireBtn1_1.classList = 'button-div2-2'
divSecondaireBtn1_2.classList = 'button-div2-2'
divSecondaireBtn1_3.classList = 'button-div2-2'
divSecondaireBtn1_4.classList = 'button-div2-2'

divSecondaireBtn1_4.style = 'background-color: lightblue'

// creation de la div2-3 //
let divSecondaireBtn2_1 = document.createElement('button'); 
let divSecondaireBtn2_2 = document.createElement('button'); 
let divSecondaireBtn2_3 = document.createElement('button'); 
let divSecondaireBtn2_4 = document.createElement('button'); 
divSecondaire3.appendChild(divSecondaireBtn2_1)
divSecondaire3.appendChild(divSecondaireBtn2_2)
divSecondaire3.appendChild(divSecondaireBtn2_3)
divSecondaire3.appendChild(divSecondaireBtn2_4)

divSecondaireBtn2_1.innerText = '4'
divSecondaireBtn2_2.innerText = '5'
divSecondaireBtn2_3.innerText = '6'
divSecondaireBtn2_4.innerText = '-'

divSecondaire3.style ='display: flex; justify-content: space-around; margin: auto'
divSecondaireBtn2_1.classList = 'button-div2-3'
divSecondaireBtn2_2.classList = 'button-div2-3'
divSecondaireBtn2_3.classList = 'button-div2-3'
divSecondaireBtn2_4.classList = 'button-div2-3'

divSecondaireBtn2_4.style = 'background-color: lightblue'

// creation de la div2-4 //
let divSecondaireBtn3_1 = document.createElement('button'); 
let divSecondaireBtn3_2 = document.createElement('button'); 
let divSecondaireBtn3_3 = document.createElement('button'); 
let divSecondaireBtn3_4 = document.createElement('button'); 
divSecondaire4.appendChild(divSecondaireBtn3_1)
divSecondaire4.appendChild(divSecondaireBtn3_2)
divSecondaire4.appendChild(divSecondaireBtn3_3)
divSecondaire4.appendChild(divSecondaireBtn3_4)

divSecondaireBtn3_1.innerText = '7'
divSecondaireBtn3_2.innerText = '8'
divSecondaireBtn3_3.innerText = '9'
divSecondaireBtn3_4.innerText = '*'

divSecondaire4.style ='display: flex; justify-content: space-around; margin: auto'
divSecondaireBtn3_1.classList = 'button-div2-3'
divSecondaireBtn3_2.classList = 'button-div2-3'
divSecondaireBtn3_3.classList = 'button-div2-3'
divSecondaireBtn3_4.classList = 'button-div2-3'

divSecondaireBtn3_4.style = 'background-color: lightblue'

// creation de la div2-5
let divSecondaireBtn4_1 = document.createElement('button'); 
let divSecondaireBtn4_2 = document.createElement('button'); 
let divSecondaireBtn4_3 = document.createElement('button'); 
let divSecondaireBtn4_4 = document.createElement('button'); 

divSecondaire5.appendChild(divSecondaireBtn4_1)
divSecondaire5.appendChild(divSecondaireBtn4_2)
divSecondaire5.appendChild(divSecondaireBtn4_3)
divSecondaire5.appendChild(divSecondaireBtn4_4)

divSecondaireBtn4_1.innerText = 'c'
divSecondaireBtn4_2.innerText = '0'
divSecondaireBtn4_3.innerText = '='
divSecondaireBtn4_4.innerText = '/'

divSecondaire5.style ='display: flex; justify-content: space-around; margin: auto'
divSecondaireBtn4_1.classList = 'button-div2-3'
divSecondaireBtn4_2.classList = 'button-div2-3'
divSecondaireBtn4_3.classList = 'button-div2-3'
divSecondaireBtn4_4.classList = 'button-div2-3'

divSecondaireBtn4_1.style = 'background-color: tomato'
divSecondaireBtn4_3.style = 'background-color: yellow'
divSecondaireBtn4_4.style = 'background-color: lightblue'






