// Tento kód musí být vložen do souboru "calendar.js" a propojen souborem "calendar.html"

// Vytvoření proměnných pro odkaz na HTML elementy kalendáře
const monthYearHeader = document.querySelector("#monthYearHeader");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const calendarBody = document.querySelector("#calendarBody");

// Vytvoření proměnných pro aktuální rok a měsíc
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

// Funkce pro vykreslení kalendáře pro aktuální rok a měsíc
function renderCalendar() {
  // Získání počtu dnů v aktuálním měsíci
  let numDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Získání indexu dne v týdnu, kdy začíná aktuální měsíc
  let firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

  // Vytvoření pole pro vykreslení kalendáře
  let calendarGrid = [];

  // Vytvoření prázdných buněk pro dny před začátkem měsíce
  for (let i = 0; i < firstDayIndex; i++) {
    calendarGrid.push("");
  }

  // Vytvoření buněk pro aktuální měsíc
  for (let i = 1; i <= numDays; i++) {
    calendarGrid.push(i);
  }

  // Vykreslení kalendáře do HTML
  calendarBody.innerHTML = "";

  // Vytvoření řádků pro kalendář
  for (let i = 0; i < calendarGrid.length; i += 7) {
    let calendarRow = calendarGrid.slice(i, i + 7);
    let calendarRowHTML = "<tr>";
    for (let j = 0; j < calendarRow.length; j++) {
      let calendarCellHTML = `<td>${calendarRow[j]}</td>`;
      calendarRowHTML += calendarCellHTML;
    }
    calendarRowHTML += "</tr>";
    calendarBody.innerHTML += calendarRowHTML;
  }

  // Vypsání aktuálního měsíce a roku v záhlaví kalendáře
  const months = [
    "Leden",
    "Únor",
    "Březen",
    "Duben",
    "Květen",
    "Červen",
    "Červenec",
    "Srpen",
    "Září",
    "Říjen",
    "Listopad",
    "Prosinec",
  ];
  monthYearHeader.innerHTML = `${months[currentMonth]} ${currentYear}`;
}

// Spuštění funkce pro vykreslení kalendáře pro aktuální rok a měsíc
renderCalendar();

// Funkce pro posunutí na předchozí měsíc
function prevMonth() {
currentMonth--;
if (currentMonth < 0) {
currentMonth = 11;
currentYear--;
}
renderCalendar();
}

// Funkce pro posunutí na následující měsíc
function nextMonth() {
currentMonth++;
if (currentMonth > 11) {
currentMonth = 0;
currentYear++;
}
renderCalendar();
}

// Propojení funkcí pro posunutí s tlačítky v HTML
prevButton.addEventListener("click", prevMonth);
nextButton.addEventListener("click", nextMonth);
