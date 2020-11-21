import item from './item.js';

const items = [];
const hideCheckedItems = false;

function findById(id){
    const found = items.find(items => items.id === id);
    return found;
    
    
}

function addItem(name){
try{
    item.validateName(name);
    let newItem = item.create(name);

    this.items.push(newItem);
    console.log(`${item} added`)
    
} catch {
    //console.log(`Error adding item ${error.message}`)
}
}

function findAndToggleChecked(id){
    const found = findById(id);
    console.log(found);
    found.checked = !found.checked;
}

function findAndUpdateName(id, itemName){
    try{
        item.validateName(itemName);
        const found = findById(id);
        found.name = itemName;

    } catch {
        console.log(`Cannot update name: ${error.message}`);
    }
}

function findAndDelete(id){
    
    let remove = items.findIndex(element => element.id === id);
    items.splice(remove, 1);
}

const toggleCheckedFilter = function () {
    this.hideCheckedItems = !this.hideCheckedItems;
  }

export default {
    items,
    hideCheckedItems,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
  };

  