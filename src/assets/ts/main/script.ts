export {};

// ======================= Header Scroll Bottom ============================= //

const defaultOffset: number = 40;
const header: HTMLElement | null = document.querySelector(".header");

const scrollPosition = (): number => window.pageYOffset || document.documentElement.scrollTop;

// Функция для инициализации состояния header
const initializeHeader = (): void => {
  if (header) {
    if (scrollPosition() <= defaultOffset) {
      header.classList.remove("is-active");
    } else {
      header.classList.add("is-active");
    }
  }
};

// Вызываем инициализацию при загрузке страницы
document.addEventListener("DOMContentLoaded", initializeHeader);

// Обработчик прокрутки
window.addEventListener("scroll", (): void => {
  if (header) {
    const currentScroll = scrollPosition();
    if (currentScroll > defaultOffset) {
      header.classList.add("is-active");
    } else {
      header.classList.remove("is-active");
    }
  }
});

// ============== Вызов формы ================= //

const startProjectForm = document.querySelector<HTMLElement>(".start-project-overlay");
const startProjectButtons = document.querySelectorAll<HTMLElement>(".js-startcontact");
const closeButton = document.querySelector<HTMLElement>(".js-closebutton");

if (startProjectForm) {
  startProjectButtons.forEach((el: HTMLElement) => {
    el.addEventListener("click", () => {
      startProjectForm.classList.add("is-active");
    });
  });

  closeButton?.addEventListener("click", () => {
    startProjectForm.classList.remove("is-active");
  });
}

// ================ Checked Form ================ //

// Используем типы HTMLElement или их подтипы (например, HTMLInputElement)
const formButton = document.querySelector('[name="formbutton"]') as HTMLButtonElement | null;
const formCheck = document.querySelector('[name="formcheck"]') as HTMLInputElement | null;

if (formButton && formCheck) {
  formButton.setAttribute("disabled", "true");

  formCheck.oninput = () => {
    if (formCheck.checked) {
      formButton.removeAttribute("disabled");
    } else {
      formButton.setAttribute("disabled", "true");
    }
  };
} else {
  console.error("Один из элементов формы не найден");
}

// ====================== Изменение заголовка формы ======================== //

// Выбираем все кнопки, которые должны открывать форму.
// Используем утверждение типа 'as NodeListOf<HTMLButtonElement>', чтобы TypeScript
// знал, что мы работаем именно с элементами кнопок.
const contactButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".js-startcontact");

// Выбираем заголовок формы.
// Тип 'HTMLHeadingElement | null' указывает, что элемент может быть не найден.
const formTitle: HTMLHeadingElement | null = document.querySelector(".h1-inner");

// Проверяем, существуют ли кнопки и заголовок на странице,
// чтобы избежать ошибок во время выполнения.
if (contactButtons.length > 0 && formTitle) {
  // Перебираем каждую кнопку из найденных.
  contactButtons.forEach((button) => {
    // Добавляем обработчик события 'click' для каждой кнопки.
    button.addEventListener("click", () => {
      // При клике на кнопку, получаем ее текстовое содержимое.
      // Используем 'button.textContent' и проверяем, что оно не null или пустое.
      const buttonText = button.textContent;

      // Если у кнопки есть текст, устанавливаем его как текст заголовка формы.
      if (buttonText) {
        formTitle.textContent = buttonText.trim(); // .trim() убирает лишние пробелы
      }
    });
  });
} else {
  // Выводим сообщение в консоль, если не удалось найти необходимые элементы.
  // Это поможет при отладке.
  console.warn("Не удалось найти кнопки для открытия формы или заголовок формы.");
}
