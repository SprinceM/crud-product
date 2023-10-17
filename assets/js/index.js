const tableData = document.getElementById("tableContent");
const btnAddProduct = document.getElementById("addProduct");
const modal = document.getElementById("modal");


const products = [
  {
        data: '16/09/2023',
        nome: 'Tablet',
        quantidade : 1,
        cor: 'Vermelho',
        preco: 1300,
  },
  {
        data: '16/10/2023',
        nome: 'Monitor',
        quantidade : 1,
        cor: 'Preto',
        preco: 4000,
  },
  {
        data: '19/10/2023',
        nome: 'Mouse',
        quantidade : 1,
        cor: 'Azul',
        preco: 300,
    }
];

function formatDataToString(value) {
  const valorFormatado = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return valorFormatado;
}


function createTableRodyRow(data,nome,quantidade,cor,total){
    const html = (tableData.innerHTML += `
    <tr class="even:bg-[#f2f2f2]  odd:bg-white"> 
    <td class="text-left">16/10/2023</td>
    <td>Monitor</td>
    <td>26</td>
    <td>Preto</td>
    <td>R$ 4.000,00</td>
</tr>`
        
        
)
}

function renderDataTable() {
  products.map((product) => {
    const preco = formatDataToString(product.preco);
    const total = product.preco * product.quantidade;
    const totalFormatado = formatDataToString(total);
    const data = (tableData.innerHTML += `
    <tr class="even:bg-[#f2f2f2]  odd:bg-white"> 
        <td class="text-left">${product.data}</td>
        <td>${product.nome}</td>
        <td>${product.quantidade}</td>
        <td>${product.cor}</td>
        <td>${totalFormatado}</td>
    </tr> `
);

    return data;
  });
}

renderDataTable(products);

function opneModal (){
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

btnAddProduct.addEventListener("click", opneModal);