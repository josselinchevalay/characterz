Capacity
==========

Nous Nous allons ici expliqué la hierarchie et les différentes classes des Capacités

Organisation
=============

-------------------
|   BaseCapacity  |
-------------------
     ^
     |
------------------
| Charism  (ex)  |
------------------


BaseCapacity
----------------

c'est la classe de base des capacité on y explique le comportement de base.
Vous devrez donc créer vos propres comportement de capacité celle indique dans 
ce module sont ici à titre d'exemple

```
var capacity = new BaseCapacity();
capacity.depend = "SOC";
capacity.test(character, -30); // le "-30" represente un modificateur de difficulté - => facile + => difficile
```

Charism (exemple)
------------------

ceci est un exemple

```
var charism = new Charism();
charism.test(character, 0);
```