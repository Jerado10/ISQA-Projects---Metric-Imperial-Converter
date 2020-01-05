/*
*
*
*       Complete the handler logic below
*       
*       
*/

function converter(initNum, initUnit) {
    const galToL    = 3.78541;
    const lbsToKg   = 0.453592;
    const miToKm    = 1.60934;
    var result      = null;
    var initUnitNum = eval(initNum);
        
    if (initUnit === 'gal') {
      return initUnitNum * galToL
    } else if (initUnit === 'L') {
      return initUnitNum / galToL
    } else if (initUnit === 'lbs') {
      return initUnitNum * lbsToKg
    } else if (initUnit === 'kg') {
      return initUnitNum / lbsToKg
    } else if (initUnit === 'km') {
      return initUnitNum / miToKm
    } else if (initUnit === 'mi') {
      return initUnitNum * miToKm
    } else {
      return null
    }
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    var index = input.indexOf(input.match('[a-zA-Z]'));
    if (input.slice(0, index).trim() === '') {
      return 1
    } else if (input.slice(0, index).trim().match('/')) {
      return Number(toDecimal(input.slice(0, index).trim()).toFixed(5))
    } else {
      return input.slice(0, index).trim();
    }
  };
  
  this.getUnit = function(input) {
    var index = input.indexOf(input.match('[a-zA-Z]'));
    return input.slice(index, input.length).trim();
  };
  
  this.getReturnUnit = function(initUnit) {
    if (initUnit === 'gal') {
      return 'L'
    } else if (initUnit === 'L') {
      return 'gal'
    } else if (initUnit === 'lbs') {
      return 'kg'
    } else if (initUnit === 'kg') {
      return 'lbs'
    } else if (initUnit === 'km') {
      return 'mi'
    } else if (initUnit === 'mi') {
      return 'km'
    } else {
      return null
    };
  };

  this.spellOutUnit = function(unit) {
    let lookUp = {
      gal: 'gallons',
      L: 'liters',
      lbs: 'pounds',
      kg: 'kilograms',
      mi: 'miles',
      km: 'kilometers'
    };
    return lookUp[unit];
  };
  
  function toDecimal(_x) {
    var parts = _x.split("/");
    return Number(parts[0]) / Number(parts[1]);
  }
  
  this.convert = function(initNum, initUnit) {
    const galToL    = 3.78541;
    const lbsToKg   = 0.453592;
    const miToKm    = 1.60934;
    var result      = null;
    var initUnitNum = Number(initNum);
    
    if (initUnit === 'gal') {
      return initUnitNum * galToL
    } else if (initUnit === 'L') {
      return initUnitNum / galToL
    } else if (initUnit === 'lbs') {
      return initUnitNum * lbsToKg
    } else if (initUnit === 'kg') {
      return initUnitNum / lbsToKg
    } else if (initUnit === 'km') {
      return initUnitNum / miToKm
    } else if (initUnit === 'mi') {
      return initUnitNum * miToKm
    } else if (!isNaN(initUnitNum)) {
      return 1
    } else {
      return null
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = '';
    var result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum.toFixed(5) + " " + this.spellOutUnit(returnUnit); 
    return result;
  };
  
}

module.exports = ConvertHandler;
