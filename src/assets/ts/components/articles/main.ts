export {};

// randomSelectBlocksOptimized.ts

document.addEventListener("DOMContentLoaded", function () {
  // Получаем все элементы с классом article-wrap
  const elements = document.querySelectorAll(".article-wrap");

  const n = elements.length;
  if (n < 2) {
    console.warn("Недостаточно элементов для выбора (нужно минимум 2)");
    return;
  }

  // Функция для выбора двух уникальных случайных индексов O(1)
  function getTwoRandomIndices(total: number): [number, number] {
    let first = Math.floor(Math.random() * total);
    let second = Math.floor(Math.random() * total);
    while (second === first) {
      second = Math.floor(Math.random() * total);
    }
    return [first, second];
  }

  const [index1, index2] = getTwoRandomIndices(n);

  // Скрываем все элементы (используем NodeList напрямую)
  elements.forEach((el) => {
    (el as HTMLElement).style.display = "none";
  });

  // Показываем выбранные два по индексам
  (elements[index1] as HTMLElement).style.display = "";
  (elements[index2] as HTMLElement).style.display = "";
});
