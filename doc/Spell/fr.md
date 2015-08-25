Attribute
==========

Nous allons ici expliqué la hierarchie et les différentes classes sort


Organisation
============
```
--------------
| BaseSpell  |
--------------
      ^
      |
-----------------
| FireBall (ex) |
-----------------
```

BaseSpell
------------
expose le comportement de base des spell

```
var spell  = new BaseSpell();
spell.depend = "IN"; // depend de l'intelligence
spell.start = function(caster, target) {
    console.log("yop");
}
```

FireBall
---------

exemple avec un sort de boule de feu

```
var speller = new CharacterJDR("mathieu", "le wizzard");
var target  = new CharacterJDR("joss", "le barman");
speller.IN = 50;
target.B = 10;    
SpellService().get("FireBall").start(speller, target);
var result = target.B == 10 || target.B == 9;
console.log(result);
```

