function validateName(name){
if(name === ''){
    throw new TypeError('Name must not be blank');
}
else {
    return name;
}
}

function create (name){
    return {
        'id': cuid(),
        'name': name,
        'checked': false,
    }
}

export default {
    validateName,
    create

};