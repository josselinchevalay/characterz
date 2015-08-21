characterz
==========

Gestion on characters on nodejs &amp; js from rpg html5 


Summary
========


Attribute
==========

Nous allons ici expliqué la hierarchie et les différentes classes des attributs


Organisation
============

```
-----------------------------------------------------
|                    BaseAttribut                   |
-----------------------------------------------------                                       
      ^                     ^                       ^
      |                     |                       |
--------------       ---------------          --------------
| Attribut   |       | FinalBonus  |          | RawBonus   |
--------------       ---------------          --------------
      ^
      |
----------------------
| DependantAttribute |
----------------------
       ^
       |
------------------
| characteristic |
------------------
```

Dans lib/Attribute vous retrouverez toutes les classes qui permettent de gérer
les attribut dans votre jeu. Mais qu'est ce qu'un attribut ? 

Un attribut est element qui constitue un personnage par exemple ça force. Dans notre package
Attribut vous aurrez donc toute les class liée à cela comme par exemple les bonus.

BaseAttribut
---------------

C 'est la classe mère toutes les classe du module Attribut hérite de celle-ci. elle implemente
la base même de ce qu'est un attribut : une valeur et un multiplificateur (pour le bonus).

par exemple pour la force  de votre guerrier et de 50 avec un bonus de 20 % cela ce traduit donc par 
valuer : 50 , mulitiplificateur : 0.2

code
``` 
var attribut = new BaseAttribut(50, 0.2);
```` 

Attribut
----------
Cette classe Herite de BaseAttribute et permet en outre d'effectuer l'ensemble des calculs. Par exemlpe
si vous utilisé la classe mère vous devez a chaque fois recalculé la valeur de votre force. Cette classe le faite pour vous il vous suffit d'appeler la méthode finalValue()

code
```
var attribut = new Attribute(50);
console.log(attribut.finalValue);
```

FinalBonus
------------
Cette classe permet de gerer les bonus (chiffre possitif) et les malus (chiffre négatif) sur un 
caracteristique quand ceux-ci sont temporaires.

Par exemple le guerrier Ulrich active sont cri de guerre (+10% en force pendant 10 seconde)

code
```
var force = new Attribut(60);
var warCry = new finalBonus(1, 0.10, 600);
warCry.startTimer(force);
```

RawBonus
-----------
Cette classe gère les bonus et malus non periodic ou temporaire.

Par exemple le mage Alfredo gagne (+10 % d'intelligence avec son baton de feu)

code
```
var intelligence = new Attribute(50);
var fireStaff = new RawBonus(1, 0.10);
intelligence.addRawBonuses(fireStaff);
console.log(intelligence.finalValue());
```

DependantAttribute
--------------------
Cette classe gères la dependance d'attribut. 

Par exemple l'éclaireur marty augmente ça vie quand il augmente son endurance. 

code
```
var life = new DependantAttribut(145);
var Stamia = new Attribute(45);
life.addDependency(stamia);
```


Characteristic
---------------
cette classe represente un charactéristique d'un personnage. 


code
```
var force = new Characteristic(50);
```



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


Class
==========


Nous allons ici expliqué la hierarchie et les différentes classes 


Organisation
============
```
-----------------------
|      BaseClass      |
-----------------------
```


BaseClass
-----------

Cette classe permet de definir les comportement généreaux des classes de votre jeu.

```
var maclasse = new BaseClass();
```


Effect
==========

Nous allons ici expliqué la hierarchie et les différentes classes des effets


Organisation
============
```
-----------------------
|       Effect        |
-----------------------
```


Effect
-------
Cette classe va vous permettre de faire baisser ou augmenté la valeur d'un attribut sur un personnage


```
var effect = new Effect();
var person = new Character();

effect.descrease(person, "Life", 5);
``` 


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


Services
==========

Nous allons ici expliqué la hierarchie et les différentes classes services


Organisation
============

```
----------------
| BaseService  |
----------------
        ^
        |
---------------------
|  CapacityServices |
---------------------
```

BaseService
-------------

Explique le comportement basique d'un service

```
var service = new BaseService();
service.add("myContainer", function(){}());
```

CapacityService
-----------------
Recupere des instance de capacités

```
var service = new CapaticyService();
charism = service.get('Charism');
```


Attribute
==========

Nous allons ici expliqué la hierarchie et les différentes classes sort


Organisation
============
```
--------------
| BaseSpell  |
--------------
```

BaseSpell
------------
expose le comportement de base des spell


Util
==============


```
// roll des
Util.des(100);

// value of success
console.log(Util.isSucces(56, 60)); // -4 
```


