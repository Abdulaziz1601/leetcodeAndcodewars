const isCoprime = (x, y) => 
    Math.max(
        ...Array.from({ length: x }, (_, i) => i + 1)
        .filter((el) => (num % el === 0 ? el : false))
        .filter((el) =>
          Array.from({ length: y }, (_, i) => i + 1)
            .filter((el) => (num % el === 0 ? el : false))
            .includes(el)
        )
    ) === 1;