'use strict';

{
    const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

    const addPrefix = ([...names], prefix) =>{
        for (const key in names) {
            names[key] = prefix + ' ' + names[key];
        }
        return names;
    }

    console.log(addPrefix(names, 'Mr'));
}