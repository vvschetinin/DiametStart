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

// const contactButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".js-startcontact");

// const formTitle: HTMLHeadingElement | null = document.querySelector(".h1-inner");

// const subjectInput: HTMLInputElement | null = document.querySelector('input[name="subject"]');

// if (contactButtons.length > 0 && formTitle && subjectInput) {
//   contactButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const buttonText = button.textContent?.trim();

//       if (buttonText) {
//         formTitle.textContent = buttonText;

//         subjectInput.value = buttonText;
//       }
//     });
//   });
// } else {
//   console.warn("Не удалось найти один или несколько элементов");
// }

// Указание на защиту авторских прав

// Ищем элемент внутри .footer-copyright — первый span, где нужно заменить год
const footer = document.querySelector(".footer-copyright");

if (footer) {
  const yearSpan = footer.querySelector("span");

  if (yearSpan) {
    const startYear = 2005;
    const currentYear = new Date().getFullYear();
    const copyrightText = `${startYear}–${currentYear}`;
    yearSpan.textContent = copyrightText;
  }
}

// =================================

// Мы создаем анонимную функцию и сразу же ее вызываем `(function() { ... })();`
// Все переменные и константы внутри этой функции (contactButtons, formTitle, subjectInput)
// будут "заперты" внутри и не смогут конфликтовать с глобальными переменными.
(function () {
  // Ждем, пока весь HTML-документ будет полностью загружен и обработан.
  // Это гарантирует, что мы точно найдем все нужные нам элементы.
  document.addEventListener("DOMContentLoaded", () => {
    // Выбираем все необходимые элементы
    const contactButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".js-startcontact");
    const formTitle: HTMLHeadingElement | null = document.querySelector(".h1-inner");
    const subjectInput: HTMLInputElement | null = document.querySelector('input[name="subject"]');

    // Проверяем, что все элементы найдены
    if (contactButtons.length === 0 || !formTitle || !subjectInput) {
      // Если чего-то не хватает, выводим одно предупреждение и прекращаем выполнение скрипта.
      // Это предотвращает ошибки в консоли.
      console.warn("FormUpdater: Не удалось найти все необходимые элементы (кнопки, заголовок или скрытое поле).");
      return; // Выход из функции
    }

    // Определяем функцию, которая будет выполняться при клике
    const handleButtonClick = (event: MouseEvent) => {
      // Получаем кнопку, на которую кликнули
      const button = event.currentTarget as HTMLButtonElement;

      // Получаем текст из кнопки
      const buttonText = button.textContent?.trim();

      if (buttonText) {
        // Обновляем заголовок формы
        formTitle.textContent = buttonText;

        // Обновляем значение скрытого поля
        subjectInput.value = buttonText;
      }
    };

    // Привязываем обработчик к каждой кнопке
    contactButtons.forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });
  });
})(); // Немедленный вызов функции
