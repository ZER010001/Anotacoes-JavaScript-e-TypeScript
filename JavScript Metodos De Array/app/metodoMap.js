function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto
}



// Map
//const array1 = [1, 4, 9, 16];
// Pass a function to map
//const map1 = array1.map((x) => x * 2);
//console.log(map1);
// Expected output: Array [2, 8, 18, 32]
