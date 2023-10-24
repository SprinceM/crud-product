const tableData = document.getElementById("tableContent");
const btnAddProduct = document.getElementById("addProduct");
const modal = document.getElementById("modal");
const productName = document.getElementById("productName");
const productValue = document.getElementById("productValue");
const productQuantity = document.getElementById("productQuantity");
const btnSend = document.getElementById("send");
const btnCancel = document.getElementById("cancel");
const erroMessage = document.getElementById("erroMessage");


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

function handleDelete(id){
  alert(id);
}

function handleEdit(id){
  alert(id);
}

function createTableRodyRow(nome, preco, quantidade, total, id){
    const html = (tableData.innerHTML += `
          <tr class="even:bg-[#f2f2f2]  odd:bg-white"> 
              <td class='p-3'>${nome}</td>
              <td class='p-3'>${preco}</td>
              <td class='p-3'>${quantidade}</td>
              <td class='text-center p-3'>${total}</td>
              <td class='flex  gap-2 items-center justify-center p-3'>
                <button onclick="handleEdit(${id})" class='py-1 px-2 bg-sky-700 text-white rounded-md'>Editar</button>
                <button onclick="handleDelete(${id})"  class='py-1 px-2 bg-red-800  text-white rounded-md'>Deletar</button>
              </td>
          </tr> `);
          return html
} 

function renderDataTable() {
  tableData.innerHTML = ''
  products.map((product, index) => {
    const preco = formatDataToString(Number(product.preco));
    const total = product.preco * product.quantidade;
    const totalFormatado = formatDataToString(total);
    const data = createTableRodyRow(
      product.nome,
      preco,
      product.quantidade,
      totalFormatado,
      index
    );
    return data;
  });
}

function opneModal (){
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeModal (){
  modal.classList.remove('flex');
  modal.classList.add('hidden');
  hiddenErroMessage();
  productName.value = ''
  productValue.value = ''
  productQuantity.value = ''
}

function openMessage (){
  erroMessage.classList.remove("hidden");
}

function hiddenErroMessage(){
  erroMessage.classList.add("hidden");
}

function addProduct() {
  if(productName.value && productQuantity.value && productValue.value){
    products.push({
      nome:productName.value,
      preco:productValue.value,
      quantidade:productQuantity.value
  });
  productName.value = ''
  productValue.value = ''
  productQuantity.value = ''
  closeModal();
} else 
    openMessage();
}

renderDataTable();


btnAddProduct.addEventListener("click", opneModal);


btnSend.addEventListener("click", (e) => {
  e.preventDefault();
  addProduct();
  renderDataTable()
  
});

btnCancel.addEventListener("click", (e) => {
  e.preventDefault();
  closeModal();
});
