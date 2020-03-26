export default {
    store,
    load
}

function store(key, value) {
    localStorage[key] = JSON.stringify(value);
}

function load(key) {
    var str = localStorage[key] || 'null';
    return JSON.parse(str);
}