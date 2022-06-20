const inArray = (array1, array2)  => array1.map(el => array2.findIndex( str => str.includes(el)) !== -1 ? el : null).filter(el => el!==null).sort();


inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]); // works

