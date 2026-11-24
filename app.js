// Iegūstam nepieciešamos HTML elementus
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const counter = document.getElementById("counter");
const filterButtons = document.querySelectorAll("[data-filter]");

const STORAGE_KEY = "pdl-uzdevumi";

let tasks = loadTasks();
let currentFilter = "all";

// Ielādējam saglabātos uzdevumus
function loadTasks() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        const data = saved ? JSON.parse(saved) : [];
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

// Saglabājam uzdevumus JSON formātā
function saveTasks() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
        alert("Neizdevās saglabāt uzdevumus.");
    }
}

// Izveidojam unikālu uzdevuma identifikatoru
function generateId() {
    let id;

    do {
        id = Date.now().toString(36) +
            Math.random().toString(36).slice(2);
    } while (tasks.some(task => task.id === id));

    return id;
}

// Pievienojam jaunu uzdevumu
function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        return;
    }

    tasks.push({
        id: generateId(),
        text: text,
        done: false
    });

    taskInput.value = "";
    taskInput.focus();

    saveTasks();
    renderTasks();
}

// Mainām uzdevuma izpildes statusu
function toggleTask(id) {
    const task = tasks.find(task => task.id === id);

    if (task) {
        task.done = !task.done;
        saveTasks();
        renderTasks();
    }
}

// Dzēšam izvēlēto uzdevumu
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);

    saveTasks();
    renderTasks();
}

// Atlasām uzdevumus atbilstoši filtram
function getFilteredTasks() {
    if (currentFilter === "active") {
        return tasks.filter(task => !task.done);
    }

    if (currentFilter === "completed") {
        return tasks.filter(task => task.done);
    }

    return tasks;
}

// Izveidojam viena uzdevuma HTML elementu
function createTaskElement(task) {
    const li = document.createElement("li");
    li.classList.toggle("completed", task.done);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.setAttribute("aria-label", task.text);
    checkbox.addEventListener("change", () => toggleTask(task.id));

    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Dzēst";
    deleteBtn.setAttribute("aria-label", "Dzēst: " + task.text);
    deleteBtn.addEventListener("click", () => deleteTask(task.id));

    li.append(checkbox, text, deleteBtn);

    return li;
}

// Atjaunojam atlikušo uzdevumu skaitītāju
function updateCounter() {
    const remaining = tasks.filter(task => !task.done).length;

    counter.textContent = `Atlikuši ${remaining} uzdevumi`;
}

// Attēlojam uzdevumu sarakstu
function renderTasks() {
    taskList.textContent = "";

    getFilteredTasks().forEach(task => {
        taskList.appendChild(createTaskElement(task));
    });

    updateCounter();
}

// Mainām aktīvo filtru
function setFilter(filter) {
    currentFilter = filter;

    filterButtons.forEach(button => {
        const isActive = button.dataset.filter === filter;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    renderTasks();
}

// Pievienošana ar pogu
addBtn.addEventListener("click", addTask);

// Pievienošana ar Enter taustiņu
taskInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        addTask();
    }
});

// Filtru pogu darbības
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        setFilter(button.dataset.filter);
    });
});

// Sākotnējā uzdevumu attēlošana
setFilter("all");