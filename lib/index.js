'use strict'

export default class CouchnodePro {
    constructor(config = {}, deps = {}) {
        this._couchbase = deps.couchbase || require('couchbase');
        this._cluster = new this._couchbase.Cluster(config.cluster);
        this.N1qlQuery = this._couchbase.N1qlQuery;
        this.bucket = this._cluster.openBucket(config.bucket, config.password);
        Object.assign(this.bucket, config.timeouts);
    }

    _invoke(m, ...a) {
        return new Promise((o, f) => {
            this.bucket[m](...a, (e, r) => {
                if (e) { f(e); } else { o(r); }
            });
        });
    }

    read (...a) { return this._invoke('get', ...a); }
    query (...a) { return this._invoke('query', ...a); }
    touch (...a) { return this._invoke('touch', ...a); }
    count (...a) { return this._invoke('counter', ...a); }
    upsert (...a) { return this._invoke('upsert', ...a) }
    insert (...a) { return this._invoke('insert', ...a); }
    remove (...a) { return this._invoke('delete', ...a); }
    append (...a) { return this._invoke('append', ...a); }
    unlock (...a) { return this._invoke('unlock', ...a) }
    replace (...a) { return this._invoke('replace', ...a); }
    prepend (...a) { return this._invoke('prepend', ...a); }
    readMany (...a) { return this._invoke('getMulti', ...a); }
    lookupIn (...a) { return this._invoke('lookupIn', ...a); }
    mutateIn (...a) { return this._invoke('mutateIn', ...a); }
    getAndLock (...a) { return this._invoke('getAndLock', ...a); }
    getAndTouch (...a) { return this._invoke('getAndTouch', ...a); }
    getFromReplica (...a) { return this._invoke('getFromReplica', ...a); }

}
