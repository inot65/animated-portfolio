Pasi creare aplicatie cu vite
-----------------------------

link video: 

https://morioh.com/a/c4dbe96efee0/build-an-animated-portfolio-website-with-react-and-framer-motion

intr-un folder unde vreau sa fac aplicatia, deschid vscode si acolo:

npm i vite ....

Cum fac fork in github ?
------------------------

merg in pagina unde e proiectul din care fac fork.

Trebuie sa fiu logat daca vreau sa fie activa optiunea de fork.

Github va face pe contul meu un nou proiect, exact cu numele proiectului la care fac fork:

inot65/animated-portfolio

mai departe dau click pe butonul 'clone' si fac clonarea proiectului...asta va copia link-ul 

Clonare proiect
---------------

copii linkul si revin in terminal in vscode si dau comanda:

git clone _link_

Ce fac daca nu am fork facut si doresc sa copii doar branch-ul 'starter' ?

Lamadev folosind branch-uri multiple, eu voi dori sa folosesc numai branch-ul 'starter' din proiectul sau :

git clone --single-branch -b starter https://github.com/safak/animated-portfolio.git



Apoi instalez cele necesare
---------------------------

npm install

pentru a popula un folder denumit 'node-module' cu dependintele necesare

Pentru a porni site-ul:

# npm run dev



Cum folosesc sass ?
-------------------

il instalez cu:

npm i sass

daca vreau o anumita versiune:

npm i sass@1.68.0

Avantajul lui SASS ?
--------------------

poate scrie ceva de genul:

.navbar {
  height: 100px;

  .wrapper {
    max-width: 1366px;
  }
}


am ramas la 15:45


Instaleaza Framer Motion
------------------------

npm i framer-motion


Utilizare SVG
-------------

in Figma se pot face aceste linii, poligoane , etc... si apoi se exporta va SVG...


am ramas la 52.31

Pentru aflarea unei anumite pozitii foloseste useScroll
-------------------------------------------------------

import {motion, useScroll} from 'framer-motion'  

foloseste si useTransform, un alt hook care face o mapare intre un set de valori si alt set de valori date amandoua ca parametrii.

 const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

 ## pe masura ce "scrollYProgress" incepe sa ia valori de la 0 la 1, useTransform returneaza valori intre "0%" si "100%"


 Foloseste hookul useInView din 'framer-motion'
 ----------------------------------------------

 ## ce face acesta : asculta un element tinta, si cind marginea depaseste o anumita valoare, returneaza true, altfel returneaza false

 am ramas la 1:35:43


 pe svgrepo.com gasim ce imagini dorim si apoi se descarca ca svg


 ## cind se face site-ul responsiv, recomanda sa comentezi componentele in afara de cel care il adaptezi ... le iei pe rand

 urmeaza distributia
 -------------------

 npm run build

 apare un folder nou "/dist" ce contine site-ul meu.

 

Postat pe https://site-portofoliu.onrender.com/ !!!

lipseste o poza cu mine...