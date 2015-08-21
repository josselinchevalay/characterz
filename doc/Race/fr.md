Attribute
==========

Nous allons ici expliqué la hierarchie et les différentes classes des races


Organisation
============
```
---------------------
|    BaseRace       |
---------------------
         ^
         |
----------------------
|      JdrRace   (ex)|
----------------------
         ^
         |
-----------------------
|        Human   (ex) |
-----------------------
```

BaseRace
---------
Cette classe permet de mettre en place les comportement de base des classe race


```
var maRace = new BaseRace();
```

JdrRace
----------
Cette classe là permet de définir le comportement d'une race du monde jdr

```
var perso = new character();
var jdr  = new JdrRace();
jdr.affectTo(jdr);
```


Human
-------

Implementation of human in jdr

```
var me = new Character();
var human = new Human();
human.affectTo(me);
```