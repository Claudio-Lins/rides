const Modal = {
  open() {
    // Abrir Modal
    // Adicionar a class active ao Modal
    document.querySelector('input[type="date"]').value = new Date()
      .toISOString()
      .substr(0, 10);
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    // Fechar o Modal
    // Removar a class active do Modal
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

const Storage = {
  get() {
    return JSON.parse(localStorage.getItem("dev.finances:transactions")) || [];
  },

  set(transactions) {
    localStorage.setItem(
      "dev.finances:transactions",
      JSON.stringify(transactions)
    );
  },
};

const Transaction = {
  all: Storage.get(),
  // [
  //   {
  //     description: "Luz",
  //     amount: -50001,
  //     date: "23/01/2021",
  //   },
  //   {
  //     description: "Criação Website",
  //     amount: 500000,
  //     date: "23/01/2021",
  //   },
  //   {
  //     description: "Internet",
  //     amount: -20012,
  //     date: "23/01/2021",
  //   },
  //   {
  //     description: "App",
  //     amount: 200000,
  //     date: "23/01/2021",
  //   },
  // ],

  add(transaction) {
    Transaction.all.push(transaction);

    App.reload();
  },

  remove(index) {
    Transaction.all.splice(index, 1);

    App.reload();
  },

  incomes() {
    let income = 0;
    const comissao = "0.80";

    //pegar todas as Transações
    //para cada transação,
    Transaction.all.forEach((transaction) => {
      // se ela for maior que ZERO e diferente de Combustível, Bolt e FreeNow
      switch (transaction.description) {
        case "Bolt":
          income += transaction.amount * comissao;
          break;
        case "FreeNow":
          income += transaction.amount * comissao;
          break;
        case "Uber":
          income += transaction.amount;
          break;
        case "Cash":
          income += transaction.amount;
          break;

        default:
          break;
      }
      // if (
      //   transaction.amount > 0 &&
      //   transaction.description != "Combustível" &&
      //   transaction.description != "Bolt" &&
      //   transaction.description != "FreeNow"
      // ) {
      //   income += transaction.amount;
      // } else {
      //   income += transaction.amount * comissao;
      // }
    });
    return income;
  },

  expenses() {
    let expense = 0;
    Transaction.all.forEach((transaction) => {
      if (transaction.description == "Combustível") {
        expense += transaction.amount;
      }
      // if (transaction.amount < 0) {
      //   expense += transaction.amount;
      // }
    });
    return expense;
  },

  total() {
    return Transaction.incomes() - Transaction.expenses();
  },
};

const DOM = {
  transactionsContainer: document.querySelector("#entradas"),

  addTransaction(transaction, index) {
    const entrada = document.createElement("entrada");
    entrada.innerHTML = DOM.innerHTMLTransaction(transaction, index);
    entrada.dataset.index = index;

    DOM.transactionsContainer.appendChild(entrada);
  },

  innerHTMLTransaction(transaction, index) {
    const comissao = "0.80";
    // const CSSclass = transaction.amount > 0 ? "income" : "expense";
    const CSSclass =
      transaction.description == "Combustível" ? "expense" : "income";

    if (
      transaction.description == "Bolt" ||
      transaction.description == "FreeNow"
    ) {
      amount = Utils.formatCurrency(transaction.amount * comissao);
    } else {
      amount = Utils.formatCurrency(transaction.amount);
    }

    const html = `
    <div class="flex items-center bg-gray-100 px-4 py-3 text-gray-500 text-sm rounded-md mb-0.5">
      <div style="width:33%;">${transaction.description}</div>
      <div style="width:27%;" class="${CSSclass}">${amount}</div>
      <div style="width:25%;">${transaction.date}</div>
      <div style="width:15%; display: flex; justify-content: flex-end;"><img onClick="Transaction.remove(${index})" src="./assets/minus.svg" width=20px alt="Imagem remover transação" /></div>
      </div>
  
      `;
    //class="bg-white flex items-center px-8 py-5 rounded-md text-left text-gray-500  tracking-wide mb-2">
    // const html = `
    //           <td class="descriptio">${transaction.description}</td>
    //           <td class="${CSSclass}">${amount}</td>
    //           <td class="date">${transaction.date}</td>
    //           <td>
    //             <img onClick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Imagem remover transaçnao" />
    //           </td>
    //     `;
    return html;
  },

  updateBalance() {
    document.querySelector("#incomeDisplay").innerHTML = Utils.formatCurrency(
      Transaction.incomes()
    );

    document.querySelector("#expenseDisplay").innerHTML = Utils.formatCurrency(
      Transaction.expenses()
    );

    document.querySelector("#totalDisplay").innerHTML = Utils.formatCurrency(
      Transaction.total()
    );
  },

  clearTransactions() {
    DOM.transactionsContainer.innerHTML = "";
  },
};

const Utils = {
  formateAmount(value) {
    // value = value * 100;
    // value = Number(value.replace(/\,\./g, "")) * 100
    value = value * 100;
    return Math.round(value);
  },

  formateDate(date) {
    const splittedDate = date.split("-");
    return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
  },

  formatCurrency(value) {
    // const signal = Number(value) < 0 ? "-" : "";
    // value = String(value).replace(/\D/g, "")
    value = Number(value) / 100;
    value = value.toLocaleString("PT", {
      style: "currency",
      currency: "EUR",
    });

    return value;
  },
};

const Form = {
  description: document.querySelector("select#description"),
  amount: document.querySelector("input#amount"),
  date: document.querySelector("input#date"),

  getValues() {
    return {
      description: Form.description.value,
      amount: Form.amount.value,
      date: Form.date.value,
    };
  },

  validateFields() {
    const { description, amount, date } = Form.getValues();
    if (
      description.trim() === "" ||
      amount.trim() === "" ||
      date.trim() === ""
    ) {
      throw new Error("Prencha todos os campos");
    }
  },

  formateValues(value) {
    let { description, amount, date } = Form.getValues();

    amount = Utils.formateAmount(amount);

    date = Utils.formateDate(date);

    return {
      description,
      amount,
      date,
    };
  },

  saveTransaction(transaction) {
    Transaction.add(transaction);
  },

  clearFields() {
    Form.description.value = "";
    Form.amount.value = "";
    Form.date.value = "";
  },

   

  submit(event) {
    event.preventDefault();

    try {
      // verificar se todas as informações foram preenchidas
      Form.validateFields();
      // formatar os dados para salvar
      const transaction = Form.formateValues();
      // salvar
      Form.saveTransaction(transaction);
      // apagar os dados do formulário
      Form.clearFields();
      // modal feche
      Modal.close();
      // atualizar a aplicação // Já temos um App.reload() no add
    } catch (error) {
      alert(error.message);
    }
  },
};

const App = {
  init() {
    Transaction.all.forEach((transaction, index) => {
      DOM.addTransaction(transaction, index);
      Storage.set(Transaction.all);
    });

    DOM.updateBalance();
  },

  reload() {
    DOM.clearTransactions();
    App.init();
  },
};

App.init();

// myDate = new Date();
// presentDay = myDate.getDate();

// setInterval(metas, 1000)
// function metas() {
// let presentDayIncome = Math.round(Transaction.incomes()) / 100;
// if (presentDayIncome == 1) {
//   document.querySelector("#incomeDisplay").classList.add('bg-black');
// }
// console.log(presentDayIncome);
// }

console.log(Math.round(Transaction.incomes()) / 100)
console.log(Transaction.incomes())



setInterval(metas, 1000);
function metas() {
  let incomeMetas = Transaction.incomes() / 100;
  let boxMetaToday = document.querySelector("#metaToday");

  if (incomeMetas >= 0 && incomeMetas <= 10) {
    boxMetaToday.classList.remove("w-[100px]","metaTodayUm", "metaTodayDois", "metaTodayTres", "metaTodayQuatro", "metaTodayCinco", "metaTodaySeis", "metaTodaySete", "metaTodayOito", "metaTodayNove", "metaTodayDez");
    boxMetaToday.classList.add("metaTodayUm");
  } else if (incomeMetas >= 11 && incomeMetas <= 20) {
    boxMetaToday.classList.remove("w-[100px]","metaTodayUm", "metaTodayDois", "metaTodayTres", "metaTodayQuatro", "metaTodayCinco", "metaTodaySeis", "metaTodaySete", "metaTodayOito", "metaTodayNove", "metaTodayDez");
    boxMetaToday.classList.add("metaTodayDois");
  } else if (incomeMetas >= 21 && incomeMetas <= 30) {
    boxMetaToday.classList.remove("w-[100px]","metaTodayUm", "metaTodayDois", "metaTodayTres", "metaTodayQuatro", "metaTodayCinco", "metaTodaySeis", "metaTodaySete", "metaTodayOito", "metaTodayNove", "metaTodayDez");
    boxMetaToday.classList.add("metaTodayTres");
  } else if (incomeMetas >= 31 && incomeMetas <= 40) {
    boxMetaToday.classList.remove("w-[100px]","metaTodayUm", "metaTodayDois", "metaTodayTres", "metaTodayQuatro", "metaTodayCinco", "metaTodaySeis", "metaTodaySete", "metaTodayOito", "metaTodayNove", "metaTodayDez");
    boxMetaToday.classList.add("metaTodayQuatro");
  } else if (incomeMetas >= 41 && incomeMetas <= 50) {
    boxMetaToday.classList.remove("w-[100px]","metaTodayUm", "metaTodayDois", "metaTodayTres", "metaTodayQuatro", "metaTodayCinco", "metaTodaySeis", "metaTodaySete", "metaTodayOito", "metaTodayNove", "metaTodayDez");
    boxMetaToday.classList.add("metaTodayCinco");
  } else if (incomeMetas >= 51 && incomeMetas <= 60) {
    boxMetaToday.classList.remove("w-[100px]","metaTodayUm", "metaTodayDois", "metaTodayTres", "metaTodayQuatro", "metaTodayCinco", "metaTodaySeis", "metaTodaySete", "metaTodayOito", "metaTodayNove", "metaTodayDez");
    boxMetaToday.classList.add("metaTodaySeis");
  } else if (incomeMetas >= 61 && incomeMetas <= 70) {
    boxMetaToday.classList.remove("w-[100px]","metaTodayUm", "metaTodayDois", "metaTodayTres", "metaTodayQuatro", "metaTodayCinco", "metaTodaySeis", "metaTodaySete", "metaTodayOito", "metaTodayNove", "metaTodayDez");
    boxMetaToday.classList.add("metaTodaySete");
  } else if (incomeMetas >= 71 && incomeMetas <= 80) {
    boxMetaToday.classList.remove("w-[100px]","metaTodayUm", "metaTodayDois", "metaTodayTres", "metaTodayQuatro", "metaTodayCinco", "metaTodaySeis", "metaTodaySete", "metaTodayOito", "metaTodayNove", "metaTodayDez");
    boxMetaToday.classList.add("metaTodayOito");
  } else if (incomeMetas >= 81 && incomeMetas <= 90) {
    boxMetaToday.classList.remove("w-[100px]","metaTodayUm", "metaTodayDois", "metaTodayTres", "metaTodayQuatro", "metaTodayCinco", "metaTodaySeis", "metaTodaySete", "metaTodayOito", "metaTodayNove", "metaTodayDez");
    boxMetaToday.classList.add("metaTodayNove");
  } else {
    boxMetaToday.classList.remove("w-[100px]","metaTodayUm", "metaTodayDois", "metaTodayTres", "metaTodayQuatro", "metaTodayCinco", "metaTodaySeis", "metaTodaySete", "metaTodayOito", "metaTodayNove", "metaTodayDez");
    boxMetaToday.classList.add("metaTodayDez");
  }
}