let cart = {};

// Cole aqui os itemPrices e itemNames que eu te mandei anteriormente 👇
const itemPrices = {
  // Hamburgueres Tradicionais
  'X-Burger': 8.00,
  'Salada': 10.00,
  'X-Bacon': 12.00,
  'X-Frango': 12.00,
  'X-Calabresa':12.00,
  'X-Egg':12.00,
  'X-Coração':14.00,
  'X-Tudo':18.00,

  // Adicionais
  'Hamburguer': 2.00,
  'Bacon-adc': 2.00,
  'Frango-adc': 2.00,
  'Calabresa-adc': 2.00,
  'Coracao-adc': 4.00,
  'Batata': 4.00,

  // Linha Gold
  "Deliciu´s-burguer": 18.00,
  "Deliciu´s-Salada": 20.00,
  "Deliciu´s-Pepperoni": 30.00,
  "Deliciu´s-Pig": 24.00,
  "Deliciu´s-Bacon": 26.00,
  "Deliciu´s-Picanha": 28.00,
  "Deliciu´s-Mignon": 28.00,
  "Deliciu´s-Coracao": 26.00,
  "Deliciu´s-Super": 35.00,

  // Lomitos
  'lomito-carne': 20.00,
  'lomito-Frango': 20.00,
  'lomito-Misto': 24.00,
  'churras-grego': 20.00,

  // Cachorro Quente
  'Dog-simples': 10.00,
  'Dog-Duplo': 12.00,
  "Dog-deliciu´s": 16.00,

  // Veggie
  "Deliciu´s-veggie": 14.00,
  'Lomito-veggie': 16.00,

  // Porções
  'batata-por': 20.00,
  'mandioca-por': 20.00,
  'polenta-por': 20.00,
  'frango-por': 30.00,
  'tilapia-por': 40.00,
  'picanha-por': 50.00,
  'calabresa-por': 25.00,

  // Trios
  'frango-trio': 60.00,
  'calabresa-trio': 65.00,
  'Tilapia-trio': 65.00,
  'picanha-trio': 90.00,

  // Espetinhos
  'espeto-carne': 8.00,
  'carne-pimentao-cabola': 8.00,
  'espeto-frango': 8.00,
  'frango-bacon': 8.00,
  'coraçao-frango': 8.00,
  'calabresa': 5.00,
  'linguicinha-calabresa': 5.00,
  'pao-alho': 8.00,
  'queijo-coalho': 8.00,
  'tulipa': 8.00,
  'carne-bacon': 8.00,
  'kafta': 8.00,
  'picanha':10.00,


  // Bebidas
  'refrigerante': 5.00,
  'Fanta-uva': 5.00,
  'Fanta-laranja': 5.00,
  'GUARANA-LATA': 5.00,
  'coca-zero': 5.00,
  'coca-1l': 8.00,
  'coca-1l-zero': 8.00,
  'coca-2L': 12.00,
  'coca-2L-Zero': 12.00,
  'guarana-2L': 12.00,
  'Fanta-laranja-2L': 11.00,
  'guarana-2L-Zero': 11.00,
  'Sprite-2L': 11.00,
  'Heineken': 6.00,
  'Budweiser': 6.00,
  'Amistel': 4.00,
  'Original': 5.00,
  'Suco': 15.00,
  'agua': 3.50,
  'agua-gas': 3.50
};

const itemNames = {
  'X-Burgue': 'X-Burguer',
  'Salada': 'X-Salada',
  'X-Bacon': 'X-Bacon',
  'X-Frango': 'X-Frango',
  'X-Calabresa':'X-Calabresa',
  'X-Egg':'X-Egg',
  'X-Coração':'X-Coração',
  'X-Tudo':'X-Tudo',

  

  'Hamburguer': 'Adicional Hamburguer',
  'Bacon-adc': 'Adicional Bacon',
  'Frango-adc': 'Adicional Frango',
  'Calabresa-adc': 'Adicional Calabresa',
  'Coracao-adc': 'Adicional Coração',
  'Batata': 'Adicional Batata',

  "Deliciu´s-burguer": "Deliciu's Burguer",
  "Deliciu´s-Salada": "Deliciu's Salada",
  "Deliciu´s-Pepperoni": "Deliciu's Pepperoni",
  "Deliciu´s-Pig": "Deliciu's Pig",
  "Deliciu´s-Bacon": "Deliciu's Bacon",
  "Deliciu´s-Picanha": "Deliciu's Picanha",
  "Deliciu´s-Mignon": "Deliciu's Mignon",
  "Deliciu´s-Coracao": "Deliciu's Coração",
  "Deliciu´s-Super": "Deliciu's Super",

  'lomito-carne': 'Lomito Carne',
  'lomito-Frango': 'Lomito Frango',
  'lomito-Misto': 'Lomito Misto',
  'churras-grego': 'Churrasco Grego',

  'Dog-simples': 'Dog Simples',
  'Dog-Duplo': 'Dog Duplo',
  "Dog-deliciu´s": 'Dog Deliciu\'s',

  "Deliciu´s-veggie": "Deliciu's Veggie",
  'Lomito-veggie': 'Lomito Veggie',

  'batata-por': 'Batata (500g)',
  'mandioca-por': 'Mandioca (500g)',
  'polenta-por': 'Polenta (500g)',
  'frango-por': 'Frango a Passarinho (1kg)',
  'tilapia-por': 'Filé de Tilápia (500g)',
  'picanha-por': 'Picanha (500g)',
  'calabresa-por': 'Trio Calabresa (500g)',

  'frango-trio': 'Trio Frango',
  'calabresa-trio': 'Trio Calabresa',
  'Tilapia-trio': 'Trio Tilápia',
  'picanha-trio': 'Trio Picanha',

  'espeto-carne': 'Espeto de Carne',
  'espeto-linguica': 'Espeto Variado',
  'espeto-frango': 'Espeto de Frango',
  'frango-bacon':'frango-bacon',
  'pao-alho':'pao-alho',
  'tulipa':'tulipa',
  'carne-bacon':'carne-bacon',
  'queijo-coalho':'queijo-coalho',
  'linguicinha-calabresa':'linguicinha-calabresa',
  'espeto-coracaozinho': 'Espeto de Coraçãozinho',
  'kafta':'kafta',
  'picanha':'picanha',


  'refrigerante': 'Coca-Cola Lata',
  'Fanta-uva': 'Fanta Uva Lata',
  'Fanta-laranja': 'Fanta Laranja Lata',
  'GUARANA-LATA': 'Guaraná Lata',
  'coca-zero': 'Coca-Cola Zero Lata',
  'coca-1l': 'Coca-Cola 1L',
  'coca-1l-zero': 'Coca-Cola Zero 1L',
  'coca-2L': 'Coca-Cola 2L',
  'coca-2L-Zero': 'Coca-Cola Zero 2L',
  'guarana-2L': 'Guaraná 2L',
  'Fanta-laranja-2L': 'Fanta Laranja 2L',
  'guarana-2L-Zero': 'Guaraná Zero 2L',
  'Sprite-2L': 'Sprite 2L',
  'Heineken': 'Heineken (350ml)',
  'Budweiser': 'Budweiser (350ml)',
  'Amistel': 'Amistel (350ml)',
  'Original': 'Original (350ml)',
  'Suco': 'Suco Prast (900ml)',
  'agua': 'Água Mineral',
  'agua-gas': 'Água com Gás'
};

// Tabela de taxas por bairro
const taxasPorBairro = {
  'Aeroporto': 30.00,
  'Alto Boa Vista': 30.00,
  'Aparecidinha': 25.00,
  'Arroio Dourado': 20.00,
  'Bubas': 25.00,
  'Bevely Falls Park': 8.00,
  'Campos Iguaçu': 8.00,
  'Centro': 15.00,
  'Conj B.' : 15.00,
  'Cidade Nova': 20.00,
  'Cohiguaçu': 8.00,
  'Conj Libra' :8.00,
  'Cohapar' : 8.00,
  'conj Plaza' : 15.00,
  'Cognopolis' : 14.00,
  'Gleba Guarani' : 18.00,
  'Lot Jd das Oliveira' : 20.00,
  'Lot Witt' : 20.00,
  'Lot San Cateano' : 8.00,
  'Museu de Cera' : 20.00,
  'Mata Verde' : 15.00,
  'Morumbi 1, 2 e 3' : 8.00,
  'Multirão' : 8.00,
  'Marco das 3F' : 15.00,
  'Portal da Foz' : 8.00,
  'Parq. das Aves' : 25.00,
  'Imperatriz' : 12.00,
  'Monjolo' : 12.00,
  'Ouro Verde' : 15.00,
  'Pilar Campestre' : 15.00,
  'Presidente 1' : 10.00,
  'Presidente 2' : 12.00,
  'profilurb´s' : 20.00,
  '1° de Maio' : 8.00,
  'Remanso Grande' : 18.00,
  'Sol de Maio' : 20.00,
  'Shop Catuai' : 20.00,
  'Shop Jl' : 15.00,
  'Terra Alfha 1 e 2' : 20.00,
  'Tres Lagoas' : 20.00,
  'Tres Pinheiro' : 8.00,
  'Vila A' : 12.00,
  'Vila B' : 12.00,
  'Vila Adriana 1 e 2' : 15.00,
  'Vila Anita Garibaldi' : 12.00,
  'Vila Boa Esperança' : 15.00,
  'Vila Borges' : 8.00,
  'Vila Brasilia' : 15.00,
  'Vila Carima' : 15.00,
  'Vila C Nova e Velha' : 20.00,
  'Vila Macaranã' : 10.00,
  'Vila Matilde' : 10.00,
  'Vila Paraguaia' : 15.00,
  'vila Pérola' : 12.00,
  'Vila Portes' : 15.00,
  'Vila Shallon' : 15.00,
  'Vila Yolanda' : 12.00,
  'Vila Florata' : 8.00,
  'Vila Militar' : 8.00,
  'Vila Vitorassi' : 30.00,
  'Jd Acaray' : 8.00,
  'Jd Alice' : 8.00,
  'Jd Almada' : 15.00,
  'Jd Alvorada' : 18.00,
  'Jd Almazonas' : 8.00,
  'Jd América' : 15.00,
  'Jd Atlantis' : 18.00,
  'Jd Ana Cristina' : 12.00,
  'Jd Apora' : 15.00,
  'Jd Bandeirantes' : 20.00,
  'Jd Belvedere' : 18.00,
  'Jd Bourbon' : 15.00,
  'Jd Boa Vista' : 15.00,
  'Jd Buenos Aires' : 15.00,
  'Jd California' : 20.00,
  'Jd Canada' : 12.00,
  'Jd Cataratas' : 20.00,
  'Jd Central' : 15.00,
  'Jd Cedro' : 20.00,
  'Jd Claudia' : 8.00,
  'Jd Cohiguaçu' : 8.00,
  'Jd Coiaba' : 8.00,
  'Jd Colombeli' : 20.00,
  'Jd Copacabana' : 8.00,
  'Jd Curitibano' : 8.00,
  'Jd Cristina' : 15.00,
  'Jd das Flores' : 20.00,
  'Jd das Nações' : 15.00,
  'Jd das Palmeiras' : 15.00,
  'Jd Dom Pedro' : 8.00,
  'Jd Don Giovane' : 8.00,
  'Jd Don Giuseppe' : 8.00,
  'Jd Dona Amanda' : 15.00,
  'Jd Dona Fátima' : 8.00,
  'Jd Dourado' : 20.00,
  'Jd Duarte' : 12.00,
  'Jd Eldorado' : 15.00,
  'Jd Eliza 1 e 2' : 15.00,
  'Jd Esmeralda 1 e 2' : 10.00,
  'Jd Estrela' : 15.00,
  'Jd Europa' : 8.00,
  'Jd Evagélico' : 20.00,
  'Jd Festugato' : 15.00,
  'Jd Floresta' : 20.00,
  'Jd Guaíra' : 20.00,
  'Jd Guarapuava 1 e 2 ' : 10.00,
  'Jd Lara' : 17.00,
  'Jd Iguaçu' : 10.00,
  'Jd italia' : 8.00,
  'Jd Itamaraty' : 12.00,
  'Jd Jupira' : 15.00,
  'Jd Karla' : 12.00,
  'Jd Lancaster' : 15.00,
  'Jd Lindoia' : 8.00,
  'Jd Laranjeira' : 15.00,
  'Jd Manaus' : 8.00,
  'Jd Morenitas 1 e 2' : 20.00,
  'Jd Nacional' : 12.00,
  'Jd Naipi' : 10.00,
  'Jd Niterói' : 8.00,
  'Jd Nova Andradina' : 15.00,
  'Jd Novo Horizonte' : 18.00,
  'Jd Ooriente' : 20.00,
  'Jd Panorama 1 e 2' : 8.00,
  'Jd Porto Belo' : 20.00,
  'Jd Paraná' : 18.00,
  'Jd Patriarca' : 15.00,
  'Jd Petrópolis' : 15.00,
  'Jd Polo Centro' : 12.00,
  'Jd São Luiz' : 8.00,
  'Jd Santa Rita ' : 15.00,
  'Jd São Miguel' : 8.00,
  'Jd São Paulo' : 8.00,
  'Jd São Sebastião' : 18.00,
  'JD São rafael' : 8.00,
  'Jd São Roque' : 8.00,
  'Jd Soledade' : 8.00,
  'Jd Social' : 12.00,
  'Jd Taroba ' : 10.00,
  'Jd Tropical' : 20.00,
  'Jd Universitário' : 20.00,
  'Jd Vasco da Gama' : 18.00,
  'Jd Veranei ' : 20.00,
  'Jd Vitória' : 8.00,
 
};

let taxaEntregaAtual = 0;

function changeQuantity(itemId, change) {
  if (!cart[itemId]) cart[itemId] = 0;
  cart[itemId] += change;
  if (cart[itemId] < 0) cart[itemId] = 0;
  if (cart[itemId] === 0) delete cart[itemId];
  updateDisplay();
}

function updateDisplay() {
  Object.keys(itemPrices).forEach(itemId => {
    const qtyEl = document.getElementById(`qty-${itemId}`);
    if (qtyEl) qtyEl.textContent = cart[itemId] || 0;
  });
  updateOrderSummary();
  updateSubmitButton();
}

function updateOrderSummary() {
  const summaryItems = document.getElementById('summaryItems');
  const emptyCart = document.getElementById('emptyCart');
  const totalAmount = document.getElementById('totalAmount');
  const totalValue = document.getElementById('totalValue');

  summaryItems.innerHTML = '';
  let total = 0;
  let hasItems = false;

  Object.keys(cart).forEach(itemId => {
    if (cart[itemId] > 0) {
      hasItems = true;
      const itemTotal = cart[itemId] * itemPrices[itemId];
      total += itemTotal;
      const div = document.createElement('div');
      div.className = 'summary-item';
      div.innerHTML = `<span>${cart[itemId]}x ${itemId}</span><span>R$ ${itemTotal.toFixed(2).replace('.', ',')}</span>`;
      summaryItems.appendChild(div);
    }
  });

  emptyCart.style.display = hasItems ? 'none' : 'block';
  totalAmount.style.display = hasItems ? 'block' : 'none';
  totalValue.textContent = (total + taxaEntregaAtual).toFixed(2).replace('.', ',');
}

function updateSubmitButton() {
  const submitBtn = document.getElementById('submitBtn');
  const hasItems = Object.keys(cart).some(id => cart[id] > 0);
  submitBtn.disabled = !hasItems;
}

// 🔍 Atualiza taxa de entrega com base no bairro digitado
document.getElementById('neighborhood').addEventListener('input', function () {
  const bairro = this.value.trim();
  const taxa = taxasPorBairro[bairro];

  if (taxa !== undefined) {
    taxaEntregaAtual = taxa;
    document.getElementById('taxaEntregaTexto').textContent = `Taxa: R$ ${taxa.toFixed(2).replace('.', ',')}`;
  } else {
    taxaEntregaAtual = 0;
    document.getElementById('taxaEntregaTexto').textContent = `⚠️ Bairro não atendido`;
  }
  updateOrderSummary();
});

document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();

  if (!Object.keys(cart).some(id => cart[id] > 0)) {
    alert('Adicione pelo menos um item!');
    return;
  }

  const data = new FormData(this);
  const customerName = data.get('customerName');
  const customerPhone = data.get('customerPhone');
  const street = data.get('street');
  const number = data.get('number');
  const neighborhood = data.get('neighborhood');
  const cep = data.get('cep');
  const paymentMethod = data.get('paymentMethod');
  const changeAmount = data.get('changeAmount');
  const observations = data.get('observations');

  // ✅ Valida bairro
  if (!(neighborhood in taxasPorBairro)) {
    alert('Por favor, selecione um bairro válido da lista.');
    return;
  }

  const address = `${street}, Nº ${number}, ${neighborhood} - CEP: ${cep}`;

  let summary = `*NOVO PEDIDO - DELICIU'S BURGER & ESPETINHOS*\n\n`;
  summary += `*Cliente:* ${customerName}\n*Telefone:* ${customerPhone}\n*Endereço:* ${address}\n\n*ITENS:*\n`;

  let total = 0;
  Object.keys(cart).forEach(id => {
    const q = cart[id];
    const t = q * itemPrices[id];
    total += t;
    summary += `• ${q}x ${id} - R$ ${t.toFixed(2).replace('.', ',')}\n`;
  });

  summary += `\n*Subtotal:* R$ ${total.toFixed(2).replace('.', ',')}`;
  summary += `\n*Entrega (${neighborhood}):* R$ ${taxaEntregaAtual.toFixed(2).replace('.', ',')}`;
  summary += `\n*TOTAL:* R$ ${(total + taxaEntregaAtual).toFixed(2).replace('.', ',')}\n`;
  summary += `*Pagamento:* ${paymentMethod}`;
  if (paymentMethod === 'dinheiro' && changeAmount) {
    summary += ` (Troco para R$ ${parseFloat(changeAmount).toFixed(2).replace('.', ',')})`;
  }
  if (observations) summary += `\n*Obs:* ${observations}`;
  summary += `\n*Horário:* ${new Date().toLocaleString('pt-BR')}`;

  const whatsapp = '5545984229611';
  const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(summary)}`;
  window.open(url, '_blank');

  setTimeout(() => {
    if (confirm('Pedido enviado! Deseja limpar o carrinho?')) {
      cart = {};
      updateDisplay();
      document.getElementById('orderForm').reset();
      document.getElementById('taxaEntregaTexto').textContent = "Taxa: R$ 0,00";
      taxaEntregaAtual = 0;
    }
  }, 1000);
});

updateDisplay();
