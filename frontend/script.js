function changeLanguage() {
    const language = document.getElementById("languageSelect").value;

    if (language === "te") {
        document.querySelector("header p").textContent =
            "ప్రతి మహిళకు ఆర్థిక సాధికారత";

        document.querySelector(".hero h2").textContent =
            "మీ డబ్బు. మీ భవిష్యత్తు. మీ శక్తి.";

        document.querySelector(".hero p").textContent =
            "సులభమైన ఆర్థిక మార్గదర్శకత్వంతో నేర్చుకోండి, ప్రణాళిక చేసుకోండి మరియు మీ డబ్బును నిర్వహించండి.";

        document.querySelector(".hero button").textContent =
            "నేర్చుకోవడం ప్రారంభించండి";

        document.querySelector(".card:nth-child(1) h3").textContent =
            "🪙 ఆర్థిక విషయాలు నేర్చుకోండి";

        document.querySelector(".card:nth-child(2) h3").textContent =
            "💰 డబ్బును నిర్వహించండి";

        document.querySelector(".card:nth-child(3) h3").textContent =
            "💡 మార్గదర్శకత్వం పొందండి";
    } else {
        location.reload();
    }
}
function startLearning() {
    alert("Welcome to Saheli 🌸");
}

function learnFinance() {
    alert("Let's learn about saving, budgeting and everyday money management.");
}

function manageMoney() {
    alert("Let's create a simple budget and track your financial goals. 💰");
}

function getGuidance() {
    alert("Ask me any financial question. I'm here to help! 💬");
}


// ===============================
// MONEY MANAGEMENT
// ===============================

let income = 0;
let expense = 0;

function addIncome() {
    const amount = Number(document.getElementById("incomeAmount").value);
    const source = document.getElementById("incomeSource").value;

    if (amount <= 0 || source === "") {
        alert("Please enter a valid income amount and source.");
        return;
    }

    income += amount;

    updateDashboard();

    alert("Income added successfully! 💰");

    document.getElementById("incomeAmount").value = "";
    document.getElementById("incomeSource").value = "";
}


function addExpense() {
    const amount = Number(document.getElementById("expenseAmount").value);
    const reason = document.getElementById("expenseReason").value;

    if (amount <= 0 || reason === "") {
        alert("Please enter a valid expense amount and reason.");
        return;
    }

    expense += amount;

    updateDashboard();

    alert("Expense added successfully! 💸");

    document.getElementById("expenseAmount").value = "";
    document.getElementById("expenseReason").value = "";
}


function updateDashboard() {
    const balance = income - expense;

    document.getElementById("balance").innerText = "₹" + balance;
    document.getElementById("totalIncome").innerText = "₹" + income;
    document.getElementById("totalExpense").innerText = "₹" + expense;
    document.getElementById("totalBalance").innerText = "₹" + balance;
}


// ===============================
// SAVINGS GOAL
// ===============================

function setSavingsGoal() {
    const goalName = document.getElementById("goalName").value;
    const goalAmount = Number(document.getElementById("goalAmount").value);
    const savedAmount = Number(document.getElementById("savedAmount").value);

    if (goalName === "" || goalAmount <= 0 || savedAmount < 0) {
        alert("Please enter valid goal details.");
        return;
    }

    let percentage = (savedAmount / goalAmount) * 100;

    if (percentage > 100) {
        percentage = 100;
    }

    document.getElementById("goalTitle").innerText = "🎯 " + goalName;

    document.getElementById("goalProgress").innerText =
        "₹" + savedAmount + " / ₹" + goalAmount;

    document.getElementById("goalPercentage").innerText =
        Math.round(percentage) + "% completed";

    alert("Savings goal created successfully! 🎯");
}
function askSaheli() {
    const question = document.getElementById("userQuestion").value.trim();

    if (question === "") {
        alert("Please type a question first.");
        return;
    }

    let answer = "I'm here to help you understand your money simply. 💜";

    const lowerQuestion = question.toLowerCase();

    if (lowerQuestion.includes("save") || lowerQuestion.includes("saving")) {
        answer = "Try to save a small amount regularly. Even ₹50 or ₹100 at a time can help build a savings habit. 💰";
    } 
    else if (lowerQuestion.includes("budget")) {
        answer = "A budget helps you plan where your money goes. First note your income, then your important expenses, and finally decide how much you can save. 📊";
    } 
    else if (lowerQuestion.includes("expense") || lowerQuestion.includes("spend")) {
        answer = "Track your daily expenses and separate needs from wants. This can help you understand where your money is going. 📝";
    } 
    else if (lowerQuestion.includes("invest")) {
        answer = "Before investing, understand the risks and make sure you have some emergency savings. Never invest money you cannot afford to lose. 🌱";
    }

    document.getElementById("saheliAnswer").innerText = answer;
}
function checkScam() {
    const message = document.getElementById("scamMessage").value.trim();

    if (message === "") {
        alert("Please paste a message first.");
        return;
    }

    const lowerMessage = message.toLowerCase();

    let result = "⚠️ Be careful. Do not share your OTP, PIN, password, or bank details.";

    if (
        lowerMessage.includes("otp") ||
        lowerMessage.includes("pin") ||
        lowerMessage.includes("password") ||
        lowerMessage.includes("urgent") ||
        lowerMessage.includes("click this link") ||
        lowerMessage.includes("send money")
    ) {
        result = "🚨 WARNING: This message contains possible scam warning signs. Do not share personal or banking information, click suspicious links, or send money.";
    } else {
        result = "🟢 No obvious warning signs detected. Still verify the sender before sharing information or making payments.";
    }

    document.getElementById("scamResult").innerText = result;
}
function planSeason() {
    const season = document.getElementById("season").value;
    const budget = Number(document.getElementById("seasonBudget").value);

    if (season === "" || budget <= 0) {
        alert("Please choose a season and enter a valid amount.");
        return;
    }

    let plan = "";

    if (season === "harvest") {
        plan = "🌾 Harvest Season: Keep some money aside for seeds, equipment, and future needs.";
    } 
    else if (season === "festival") {
        plan = "🎉 Festival Season: Set a spending limit and save some money before the celebrations.";
    } 
    else if (season === "school") {
        plan = "📚 School Season: Plan for school fees, books, uniforms, and other education expenses.";
    } 
    else if (season === "wedding") {
        plan = "💍 Wedding Season: Make a budget for the event and avoid borrowing more than you can repay.";
    }

    document.getElementById("seasonResult").innerText =
        plan + " Planned amount: ₹" + budget;

    alert("Seasonal plan created! 🌾");
}
function changeLanguage() {
    const language = document.getElementById("languageSelect").value;

    // Header
    document.querySelector("header h1").innerText =
        language === "te" ? "🌸 సహేలి" : "🌸 Saheli";

    document.querySelector("header p").innerText =
        language === "te"
            ? "ప్రతి మహిళకు ఆర్థిక సాధికారత"
            : "Financial empowerment for every woman";

    // Hero section
    document.querySelector(".hero h2").innerText =
        language === "te"
            ? "మీ డబ్బు. మీ భవిష్యత్తు. మీ శక్తి."
            : "Your Money. Your Future. Your Power.";

    document.querySelector(".hero p").innerText =
        language === "te"
            ? "సులభమైన ఆర్థిక మార్గదర్శకత్వంతో నేర్చుకోండి, ప్లాన్ చేయండి మరియు మీ డబ్బును నిర్వహించండి."
            : "Learn, plan and manage your finances with simple, accessible financial guidance.";

    document.querySelector(".hero button").innerText =
        language === "te" ? "నేర్చుకోవడం ప్రారంభించండి" : "Start Learning";

    // Cards
    const cards = document.querySelectorAll(".card");

    if (cards.length >= 3) {
        // Learn Finance
        cards[0].querySelector("h3").innerText =
            language === "te" ? "🪙 ఆర్థిక విషయాలు నేర్చుకోండి" : "🪙 Learn Finance";

        cards[0].querySelector("p").innerText =
            language === "te"
                ? "పొదుపు, బడ్జెట్ మరియు రోజువారీ డబ్బు నిర్వహణ గురించి తెలుసుకోండి."
                : "Understand saving, budgeting and everyday money management.";

        cards[0].querySelector("button").innerText =
            language === "te" ? "ఇప్పుడే నేర్చుకోండి" : "Learn Now";

        // Manage Money
        cards[1].querySelector("h3").innerText =
            language === "te" ? "💰 డబ్బును నిర్వహించండి" : "💰 Manage Money";

        cards[1].querySelector("p").innerText =
            language === "te"
                ? "సులభమైన బడ్జెట్‌ను రూపొందించి మీ ఆర్థిక లక్ష్యాలను ట్రాక్ చేయండి."
                : "Create simple budgets and track your financial goals.";

        cards[1].querySelector("button").innerText =
            language === "te" ? "ఇప్పుడే నిర్వహించండి" : "Manage Now";

        // Get Guidance
        cards[2].querySelector("h3").innerText =
            language === "te" ? "💡 మార్గదర్శకత్వం పొందండి" : "💡 Get Guidance";

        cards[2].querySelector("p").innerText =
            language === "te"
                ? "మీ ఆర్థిక ప్రశ్నలకు సులభమైన సమాధానాలు మరియు సహాయం పొందండి."
                : "Get simple answers and support for your financial questions.";

        cards[2].querySelector("button").innerText =
            language === "te" ? "మార్గదర్శకత్వం పొందండి" : "Ask for Guidance";
    }

    // Money Dashboard
    const dashboardTitle = document.querySelector(".dashboard h2, .dashboard h3");

    if (dashboardTitle) {
        dashboardTitle.innerText =
            language === "te" ? "📊 మనీ డాష్‌బోర్డ్" : "📊 Money Dashboard";
    }

    const dashboardText = document.querySelector(".dashboard p");

    if (dashboardText) {
        dashboardText.innerText =
            language === "te"
                ? "ఇక్కడ మీ డబ్బు యొక్క సులభమైన వివరాలు ఉన్నాయి."
                : "Here is a simple view of your money.";
    }
}