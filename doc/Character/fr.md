Character
==========

Nous allons ici expliqué la hierarchie et les différentes classes des personnage

Organisation
=============

```
---------------------------------------------
|             BaseCharacter                 |
---------------------------------------------
         ^                      ^
         |                      |
-------------------------        ----------------------
| Character (deprecated)|        | CharacterJdr (ex)  |
-------------------------        ----------------------
```


BaseCharacter
------------------

Definit le comportement initial d'un personnage


CharacterJDR
---------------
Cette classe d'exemple definit le comportement attendu d'un personnage dans un univers JDR. 

```
var me = new CharacherJDR("joss", "le barbare");
console.log(me.FirstName);
```