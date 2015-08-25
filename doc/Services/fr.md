Services
==========

Nous allons ici expliqué la hierarchie et les différentes classes services


Organisation
============

```
------------------------------------------------------------------------
|                            BaseService                               |
------------------------------------------------------------------------
        ^                           ^                        ^
        |                           |                        |
---------------------      ---------------------         -------------------
|  CapacityServices |      |    ClassServices  |         |    SpellService |
---------------------      ---------------------         -------------------
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

ClassServices
---------------
Recuperere des instance de class

```
var moi = new Character("joss", "le barman");
ClassService().get("Warrior").affectTo(moi); // affect
moi.Level ++;
ClassService().get("Warrior").levelUp(moi); // level up
```


SpellService
--------------
recupere les instances de spell

```   
SpellService().get("FireBall").start(new Character('mathieu', 'le wizzard'), new Character('joss', 'le barman'));
```
