'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CouchnodePro = function () {
    function CouchnodePro() {
        var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var deps = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        _classCallCheck(this, CouchnodePro);

        this._couchbase = deps.couchbase || require('couchbase');
        this._cluster = new this._couchbase.Cluster(config.cluster);
        this.N1qlQuery = this._couchbase.N1qlQuery;
        this.bucket = this._cluster.openBucket(config.bucket, config.password);
        Object.assign(this.bucket, config.timeouts);
    }

    _createClass(CouchnodePro, [{
        key: '_invoke',
        value: function _invoke(m) {
            var _this = this;

            for (var _len = arguments.length, a = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                a[_key - 1] = arguments[_key];
            }

            return new Promise(function (o, f) {
                var _bucket;

                (_bucket = _this.bucket)[m].apply(_bucket, a.concat([function (e, r) {
                    if (e) {
                        return f(e);
                    } else {
                        return o(r);
                    }
                }]));
            });
        }
    }, {
        key: 'read',
        value: function read() {
            for (var _len2 = arguments.length, a = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                a[_key2] = arguments[_key2];
            }

            return this._invoke.apply(this, ['get'].concat(a));
        }
    }, {
        key: 'query',
        value: function query() {
            for (var _len3 = arguments.length, a = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                a[_key3] = arguments[_key3];
            }

            return this._invoke.apply(this, ['query'].concat(a));
        }
    }, {
        key: 'touch',
        value: function touch() {
            for (var _len4 = arguments.length, a = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                a[_key4] = arguments[_key4];
            }

            return this._invoke.apply(this, ['touch'].concat(a));
        }
    }, {
        key: 'count',
        value: function count() {
            for (var _len5 = arguments.length, a = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                a[_key5] = arguments[_key5];
            }

            return this._invoke.apply(this, ['counter'].concat(a));
        }
    }, {
        key: 'upsert',
        value: function upsert() {
            for (var _len6 = arguments.length, a = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                a[_key6] = arguments[_key6];
            }

            return this._invoke.apply(this, ['upsert'].concat(a));
        }
    }, {
        key: 'insert',
        value: function insert() {
            for (var _len7 = arguments.length, a = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                a[_key7] = arguments[_key7];
            }

            return this._invoke.apply(this, ['insert'].concat(a));
        }
    }, {
        key: 'remove',
        value: function remove() {
            for (var _len8 = arguments.length, a = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
                a[_key8] = arguments[_key8];
            }

            return this._invoke.apply(this, ['delete'].concat(a));
        }
    }, {
        key: 'append',
        value: function append() {
            for (var _len9 = arguments.length, a = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
                a[_key9] = arguments[_key9];
            }

            return this._invoke.apply(this, ['append'].concat(a));
        }
    }, {
        key: 'unlock',
        value: function unlock() {
            for (var _len10 = arguments.length, a = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
                a[_key10] = arguments[_key10];
            }

            return this._invoke.apply(this, ['unlock'].concat(a));
        }
    }, {
        key: 'replace',
        value: function replace() {
            for (var _len11 = arguments.length, a = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
                a[_key11] = arguments[_key11];
            }

            return this._invoke.apply(this, ['replace'].concat(a));
        }
    }, {
        key: 'prepend',
        value: function prepend() {
            for (var _len12 = arguments.length, a = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
                a[_key12] = arguments[_key12];
            }

            return this._invoke.apply(this, ['prepend'].concat(a));
        }
    }, {
        key: 'readMany',
        value: function readMany() {
            for (var _len13 = arguments.length, a = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
                a[_key13] = arguments[_key13];
            }

            return this._invoke.apply(this, ['getMulti'].concat(a));
        }
    }, {
        key: 'lookupIn',
        value: function lookupIn() {
            for (var _len14 = arguments.length, a = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
                a[_key14] = arguments[_key14];
            }

            return this._invoke.apply(this, ['lookupIn'].concat(a));
        }
    }, {
        key: 'mutateIn',
        value: function mutateIn() {
            for (var _len15 = arguments.length, a = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
                a[_key15] = arguments[_key15];
            }

            return this._invoke.apply(this, ['mutateIn'].concat(a));
        }
    }, {
        key: 'getAndLock',
        value: function getAndLock() {
            for (var _len16 = arguments.length, a = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
                a[_key16] = arguments[_key16];
            }

            return this._invoke.apply(this, ['getAndLock'].concat(a));
        }
    }, {
        key: 'getAndTouch',
        value: function getAndTouch() {
            for (var _len17 = arguments.length, a = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
                a[_key17] = arguments[_key17];
            }

            return this._invoke.apply(this, ['getAndTouch'].concat(a));
        }
    }, {
        key: 'getFromReplica',
        value: function getFromReplica() {
            for (var _len18 = arguments.length, a = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
                a[_key18] = arguments[_key18];
            }

            return this._invoke.apply(this, ['getFromReplica'].concat(a));
        }
    }]);

    return CouchnodePro;
}();

exports.default = CouchnodePro;