"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = Modal;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Modal(props) {
  var message = props.message || "";
  if (props.visible) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "modal"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "modal-content"
    }, /*#__PURE__*/_react["default"].createElement("p", {
      className: "modal-msg"
    }, message), /*#__PURE__*/_react["default"].createElement("button", {
      className: "modal-btn",
      onClick: props.onClose
    }, "Ok")));
  }
}