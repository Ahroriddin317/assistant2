document.write("hello!");
// console.info("Javascript!");
// console.error("some error");
// console.warn("warning");
const dialog = document.getElementById("myDialog");
const bugsBlock = document.getElementById("bugs");
dialog.addEventListener("close", () => {
  if (dialog.returnValue === "debug") {
    bugsBlock.innerText = bugsBlock.innerText.substring(
      0,
      bugsBlock.innerText.length - 2
    );
  } else {
    bugsBlock.innerText += "🐞";
  }
});

// async function queryOllama(prompt) {
//     const response = await fetch("http://localhost:11434/api/generate", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         model: "deepseek-r1:1.5b",
//         prompt: prompt,
//         stream: false, // Set to true for real-time streaming
//       }),
//     });
//     return await response.json();
//   }
  
  // Example usage:
//   queryOllama("Hello, how are you?")
//     .then(response => console.log(response.response));

    const context = `
    Ты — ИИ-ассистент технической поддержки компании "ТехноКорп". 
    Твои задачи:
    1. Вежливо отвечать на вопросы клиентов
    2. Решать проблемы с продуктами компании
    3. Предлагать стандартные решения для частых вопросов
    
    Инструкции:
    - Всегда сохраняй профессиональный тон
    - Если не знаешь ответа — попроси уточнить детали
    - Не выдумывай информацию
    
    Продукты компании:
    1. CloudBox (облачное хранилище)
    2. SafeVPN (VPN-сервис)
    3. OfficePro (офисный пакет)
    `;