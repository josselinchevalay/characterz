Class
==========


Nous allons ici expliqué la hierarchie et les différentes classes 


Organisation
============

```
-----------------------
|      BaseClass      |
-----------------------
         ^
         |
-----------------------
|     JdrClass        |
-----------------------
         ^
         |
-----------------------
|      Warrior        |
-----------------------

```


BaseClass
-----------

Cette classe permet de définir les comportement généreaux des classes de votre jeu.

```
var maclasse = new BaseClass();
```

JdrClass
------------
Cette classe permet de définir les comportements généreaux lié à la gestion d'un personnage jdr

```
var  class = new JdrClass();
```

Warrior
--------
Un exemple d'implementation de jdrClass

```
var moi = new Character("moi", "le mj");
var warriorClass = new Warrior();
warriorClass.affectTo(moi); // affect
moi.Level++;
warriorClass.levelUp(moi); // level spells 
```


