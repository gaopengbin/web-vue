import { defineComponent as l, openBlock as d, createElementBlock as p, normalizeClass as g, createElementVNode as y, renderSlot as $, onMounted as f, provide as b, getCurrentInstance as v } from "vue";
const w = Array.isArray, x = (t) => typeof t == "string", E = (t) => t !== null && typeof t == "object";
function m(...t) {
  const n = [];
  for (let o = 0; o < t.length; o++) {
    const e = t[o];
    if (!!e) {
      if (x(e))
        n.push(e);
      else if (w(e))
        for (let s = 0; s < e.length; s++) {
          const r = m(e[s]);
          r && n.push(r);
        }
      else if (E(e))
        for (const s in e)
          e[s] && n.push(s);
    }
  }
  return n.join(" ");
}
const S = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "md"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  loading: {
    type: Boolean,
    default: !1
  }
}, B = l({
  name: "WeButton",
  props: S,
  setup(t) {
    return {
      classString: m([
        "we-button",
        `we-button-type-${t.type}`,
        t.disabled ? "we-button-disabled" : ""
      ])
    };
  }
}), _ = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [e, s] of n)
    o[e] = s;
  return o;
}, C = ["disabled"], j = { class: "we-button-inner" };
function P(t, n, o, e, s, r) {
  return d(), p("button", {
    class: g([t.classString]),
    disabled: t.disabled || t.loading
  }, [
    y("span", j, [
      $(t.$slots, "default")
    ])
  ], 10, C);
}
const c = /* @__PURE__ */ _(B, [["render", P]]);
c.install = function(t) {
  return t.component(c.name, c), t;
};
function k(t) {
  let n = null, o = !1;
  const e = async () => (n = new XE.Earth(t), o = !0, s(n), n);
  let s;
  const r = new Promise((u, V) => {
    s = u;
  });
  return f(async () => {
    console.log("onMounted"), e().then((u) => {
      s(u);
    });
  }), {
    isReady: o,
    load: e,
    earth: n,
    createPromise: r
  };
}
function A(t) {
  return { all: t = t || /* @__PURE__ */ new Map(), on: function(n, o) {
    var e = t.get(n);
    e ? e.push(o) : t.set(n, [o]);
  }, off: function(n, o) {
    var e = t.get(n);
    e && (o ? e.splice(e.indexOf(o) >>> 0, 1) : t.set(n, []));
  }, emit: function(n, o) {
    var e = t.get(n);
    e && e.slice().map(function(s) {
      s(o);
    }), (e = t.get("*")) && e.slice().map(function(s) {
      s(n, o);
    });
  } };
}
const h = A();
const M = l({
  name: "lg-earth",
  components: {},
  props: {},
  emits: {},
  setup(t, n) {
    return f(async () => {
      const o = document.querySelector("#container");
      let { load: e } = k(o), s = await e();
      h.emit("earth", s), b("earth", s);
      const r = v();
      r == null || r.appContext.app.provide("earth", s), r == null || r.appContext.app.provide("aaa", 222);
    }), {};
  }
}), O = { id: "container" };
function z(t, n, o, e, s, r) {
  return d(), p("div", O);
}
const a = /* @__PURE__ */ _(M, [["render", z]]);
a.install = (t) => {
  t.component(a.name, a);
};
const F = { class: "test-div" }, I = l({
  name: "lg-test"
}), i = /* @__PURE__ */ l({
  ...I,
  setup(t) {
    return (n, o) => (d(), p("div", F, "test"));
  }
});
i.install = (t) => {
  t.component(i.name, i);
};
const N = [c, a, i];
function T() {
  console.log("testFunc");
}
function W(t) {
  return new Promise((n, o) => {
    h.on("earth", (e) => {
      n(e);
    });
  });
}
const R = function(t) {
  N.forEach((n) => {
    t.use(n);
  });
}, X = {
  install: R
};
export {
  c as Button,
  a as Earth,
  i as Test,
  X as default,
  T as testFunc,
  W as useEarth
};
