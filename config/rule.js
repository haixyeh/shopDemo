/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

const _assert = _interopRequireDefault(require("assert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return {
    name: 'rules',

    validate(val) {
      (0, _assert.default)(Array.isArray(val),  `The rules config must be Array, but got ${val}`);
    }
  };
}