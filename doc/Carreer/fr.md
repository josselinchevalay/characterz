Career
==========

Nous allons ici expliqué la hierarchie et les différentes classes des carrières



Organisation
==============

---------------
| BaseCareer  |
----------------
       ^
       |
----------------
| JdrCareer    |
----------------
       ^
       |
----------------
| Agitator     |
----------------


BaseCareer
------------
Cette classe représente la structure d'une carrière. Vous devez vous même définir ce qu'une carrière a pour comportement. Une classe Intermedaire et final et a votre disposition pour exemple

```
var forgeron = new BaseCareer();
```

JdrCareer
------------
Cette classe exprime une vision du métier selon le jdr. Nous aurions peu exprimer une autre façon de faire

```
var jdr = new JdrCareer();
```

Agitator
-----------
c'est une classe final pouvant être affecté a un joueur toujours à titre d'exemple.

```
var perso = new Character();
var job   = new Agitator();
job.affectTo(perso);
```

