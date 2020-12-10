"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.SimpleForm =
/*#__PURE__*/
function () {
  function _class(t) {
    _classCallCheck(this, _class);

    this.config = t, this.form = document.querySelector(t.form), this.form && "function" == typeof window.fetch && (this.url = this.form.getAttribute("action"), this.formButton = this.form.querySelector(t.button), this.init());
  }

  _createClass(_class, [{
    key: "displayError",
    value: function displayError() {
      this.form.innerHTML = this.config.erro;
    }
  }, {
    key: "displaySuccess",
    value: function displaySuccess() {
      this.form.innerHTML = this.config.sucesso;
    }
  }, {
    key: "getFormValues",
    value: function getFormValues() {
      var t = new FormData();
      return this.form.querySelectorAll("[name]").forEach(function (e) {
        var r = e.getAttribute("name"),
            n = e.value;
        t.append(r, n);
      }), t;
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      var t = this.form.querySelectorAll("[required]");
      var e = !0;
      return t.forEach(function (t) {
        e && (e = !!t.value);
      }), e;
    }
  }, {
    key: "onSendForm",
    value: function onSendForm(t) {
      t.preventDefault(), t.currentTarget.disabled = !0, t.currentTarget.innerText = "Enviando...";
    }
  }, {
    key: "sendForm",
    value: function sendForm(t) {
      var _this = this;

      this.validateForm() && (this.onSendForm(t), fetch(this.url, {
        method: "POST",
        body: this.getFormValues()
      }).then(function (t) {
        if (!t.ok) throw Error(t.statusText);
        return t.text();
      }).then(function (t) {
        return _this.displaySuccess();
      })["catch"](function (t) {
        _this.displayError();
      }));
    }
  }, {
    key: "init",
    value: function init() {
      this.sendForm = this.sendForm.bind(this), this.formButton.addEventListener("click", this.sendForm);
    }
  }]);

  return _class;
}();