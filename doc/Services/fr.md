Services
==========

Nous allons ici expliqué la hierarchie et les différentes classes services


Organisation
============


----------------
| BaseService  |
----------------
        ^
        |
---------------------
|  CapacityServices |
---------------------


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