function bubblesortOnce(a) {
    const arr = [...a];
    for(let i = 0; i < a.length; i++) {
      if(arr[i] > arr[i+1]) {
        let t = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = t;
      }
    }
    return arr;
  }