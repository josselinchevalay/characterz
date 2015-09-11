/* global require, module, console*/
'use strict';

var BaseCharacter   = require('./BaseCharacter.js');
var Characteristic  = require('../Attribute/Charateristic.js');

var CharacterJDR = function(firstName, lastName){
    var characterJDR = {};
    characterJDR.__proto__ = BaseCharacter();

    /**
    * Define FirstName
    */
    var _firstName = firstName;
    Object.defineProperty(characterJDR, 'FirstName', {
        get: function(){
            return _firstName;
        },
        set: function(){

        },
        enumerable: true,
        configurable: true
    });

    /**
    * Define LastName
    */
    var _lastName = lastName;
    Object.defineProperty(characterJDR, 'LastName', {
        get: function(){
            return _lastName;
        },
        set: function(){

        },
        enumerable:true,
        configurable:true
    });


    /**
    * Define Capacity Combat (CC)
    */
    var _cc = new Characteristic(0);
    Object.defineProperty(characterJDR, 'CC', {
        get: function(){
            return _cc.getCurrentValue();
        },
        set: function(value){
            _cc.setCurrentValue(value);
        }
    });

    /**
    * Define Race
    */
    var _race = '';
    Object.defineProperty(characterJDR, 'Race', {
        get: function(){
            return _race;
        },
        set: function(value){
            _race = value;
        },
        enumerable: true,
        configurable:true
    });

    /**
    * Define Capacity Tir
    */
    var _ct = new Characteristic(0);
    Object.defineProperty(characterJDR, 'CT',{
        get: function(){
            return _ct.getCurrentValue();
        },
        set: function(value){
            _ct.setCurrentValue(value);
        },
        enumerable: true,
        configurable:true
    });

    /**
    * Define Endurance (E)
    */
    var _e = new Characteristic(0);
    Object.defineProperty(characterJDR, 'E',{
        get: function(){
            return _e.getCurrentValue();
        },
        set: function(value){
            _e.setCurrentValue(value);
        },
        enumerable: true,
        configurable:true
    });

    /**
    * Define  Force (F)
    */
    var _f = new Characteristic(0);
    Object.defineProperty(characterJDR, 'F',{
        get: function(){
            return _f.getCurrentValue();
        },
        set: function(value){
            _f.setCurrentValue(value);
        },
        enumerable: true,
        configurable:true
    });

    /**
    * Define Agility (AG)
    */
    var _ag = new Characteristic(0);
    Object.defineProperty(characterJDR, 'AG',{
        get: function(){
            return _ag.getCurrentValue();
        },
        set: function(value){
            _ag.setCurrentValue(value);
        },
        enumerable: true,
        configurable:true
    });

    /**
    * Define Intelligy (IN)
    */
    var _in = new Characteristic(0);
    Object.defineProperty(characterJDR, 'IN',{
        get: function(){
            return _in.getCurrentValue();
        },
        set: function(value){
            _in.setCurrentValue(value);
        },
        enumerable: true,
        configurable:true
    });

    /**
    * Define Force mentale (FM)
    */
    var _fm = new Characteristic(0);
    Object.defineProperty(characterJDR, 'FM',{
        get: function(){
            return _fm.getCurrentValue();
        },
        set: function(value){
            _fm.setCurrentValue(value);
        },
        enumerable: true,
        configurable:true
    });

    /**
    * Define Sociability (SOC)
    */
    var _soc = new Characteristic(0);
    Object.defineProperty(characterJDR, 'SOC',{
        get: function(){
            return _soc.getCurrentValue();
        },
        set: function(value){
            _soc.setCurrentValue(value);
        },
        enumerable: true,
        configurable:true
    });

    /**
    * Define Attaque (A)
    */ 
    var _a = new Characteristic(0);
    Object.defineProperty(characterJDR, 'A',{
        get: function(){
            return _a.getCurrentValue();
        },
        set: function(value){
            _a.setCurrentValue(value);
        },
        enumerable: true,
        configurable:true
    });

    /**
    * Define Point blessure
    */
    var _b = new Characteristic(0);
    Object.defineProperty(characterJDR, 'B',{
        get: function(){
            return _b.getCurrentValue();
        },
        set: function(value){
            _b.setCurrentValue(value);
        },
        enumerable: true,
        configurable:true
    });

    /**
    * Define Bonus Force (BF)
    */
    var _bf = new Characteristic(0);
    Object.defineProperty(characterJDR, 'BF',{
        get: function(){
            return _bf.getCurrentValue();
        },
        set: function(value){
            _bf.setCurrentValue(value);
        },
        enumerable: true,
        configurable:true
    });

    /**
    * Define Bonus Endurance 
    */
    var _be = new Characteristic(0);
    Object.defineProperty(characterJDR, 'BE',{
        get: function(){
            return _be.getCurrentValue();
        },
        set: function(value){
            _be.setCurrentValue(value);
        },
        enumerable: true,
        configurable:true
    });

    /**
    * Define Mouvement
    */
    var _m = new Characteristic(0);
    Object.defineProperty(characterJDR, 'M',{
        get: function(){
            return _m.getCurrentValue();
        },
        set: function(value){
            _m.setCurrentValue(value);
        },
        enumerable: true,
        configurable:true
    });

    /**
    * Define Magie (MAG)
    */
    var _mag = new Characteristic(0);
    Object.defineProperty(characterJDR, 'MAG',{
        get: function(){
            return _mag.getCurrentValue();
        },
        set: function(value){
            _mag.setCurrentValue(value);
        },
        enumerable: true,
        configurable:true
    });

    /**
    * Define Folie (PF)
    */
    var _pf = new Characteristic(0);
    Object.defineProperty(characterJDR, 'PF',{
        get: function(){
            return _pf.getCurrentValue();
        },
        set: function(value){
            _pf.setCurrentValue(value);
        },
        enumerable: true,
        configurable:true
    });


    /**
    * Define XP (XP)
    */
    var _xp = new Characteristic(0);
    Object.defineProperty(characterJDR, 'XP',{
        get: function(){
            return _xp.getCurrentValue();
        },
        set: function(value){
            _xp.setCurrentValue(value);
        },
        enumerable: true,
        configurable:true
    });

    /**
    * Define Talents (Talents)
    */
    var _talents = [];
    Object.defineProperty(characterJDR, 'Talents',{
        get: function(){
            return _talents;
        },
        set: function(value){
            _talents = value;
        },
        enumerable: true,
        configurable:true
    });

    /**
    * Define Capacities (Capacities)
    */
    var _capacities = [];
    Object.defineProperty(characterJDR, 'Capacities',{
        get: function(){
            return _capacities;
        },
        set: function(value){
            _capacities = value;
        },
        enumerable: true,
        configurable:true
    });


    var _career = '';
    Object.defineProperty(characterJDR, 'Career',{
        get: function(){
            return _career;
        },
        set: function(value){
            _career = value;
        },
        enumerable: true,
        configurable:true
    });

    var _level = '';
    Object.defineProperty(characterJDR, 'Level',{
        get: function(){
            return _level;
        },
        set: function(value){
            _level = value;
        },
        enumerable: true,
        configurable:true
    });

    characterJDR.Grimmoire = [];
    

    characterJDR.display = function() {
        console.log('%s : CC = %d, CT = %d, E = %d, F = %d, AG = %d, IN = %d, FM = %d, soc = %d, A = %d, B = %d, BF = %d, BE = %d, M = %d, MAG = %d, PF = %d, XP = %d', 
            this.FirstName, 
            this.CC, 
            this.CT, 
            this.E, 
            this.F, 
            this.AG, 
            this.IN,
            this.FM,
            this.SOC,
            this.A,
            this.B,
            this.BF,
            this.BE,
            this.M,
            this.MAG,
            this.PF,
            this.XP
            );
    };

    return characterJDR;
};

module.exports = CharacterJDR;