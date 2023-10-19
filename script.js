document.addEventListener("DOMContentLoaded", function () {
  const data = [
    {
      label: "Օդորակում",
      children: [
        {
          label: "Կենցաղային սպլիտ համակարգեր",
          children: [
            { label: "- Պատի" },
            { label: "- Հատակի" },
            { label: "- Առաստաղի" },
            { label: "- Կասետային" },
            { label: "- Կանալային" },
          ],
        },
        { label: "Մուլտի սպլիտ համակարգեր" },
        {
          label: "Կիսաարդյունաբերական սերիա",
        },
        { label: "VRF համակարգեր" },
        { label: "Չիլլեր-ֆանքոյլային համակարգեր" },
        { label: "Ջերմային պոմպեր" },
        { label: "Ճշգրիտ օդորակիչներ" },
        { label: "Օդային վարագույներ" },
        {
          label: "Մոնտաժային նյութեր",
          children: [
            { label: "- Պղնձե խողովակներ" },
            { label: "- Պլաստիկ խողովակներ" },
            { label: "- Սառնագենտ ֆրեոն" },
          ],
        },
      ],
    },
    {
      label: "Օդափոխություն",
      children: [
        { label: "Օդամղիչներ" },
        { label: "Օդի ներածման-արտածման սարքեր" },
        { label: "Ռեկուպերատորներ" },
        { label: "Պատին տեղադրվող և ներկառուցվող օդափոխության սարքեր" },
        { label: "Օդատարներ" },
      ],
    },
    {
      label: "Օդի մշակում",
      children: [
        { label: "Օդի խոնավացուցիչներ" },
        { label: "Օդի չորացուցիչներ" },
        { label: "Օդի զտիչներ" },
      ],
    },
  ];

  const ul = document.querySelector(".categories__wrapper");

  const createList = (data, parent) => {
    for (const item of data) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = item.label;
      if (item.children) {
        a.className = "caret";
      }
      li.appendChild(a);
      li.classList.add("category");

      if (item.children) {
        const ul = document.createElement("ul");
        ul.className = "nested";
        li.appendChild(ul);
        createList(item.children, ul);
      }

      parent.appendChild(li);
    }
  };

  createList(data, ul);

  const categories = document.querySelectorAll(".category");
  categories.forEach(category => {
    const nestedList = category.querySelector(".nested");
    if (nestedList) {
      category.addEventListener("mouseenter", function () {
        const parentWidth = this.getBoundingClientRect().width;
        nestedList.style.left = parentWidth + "px";
        nestedList.style.top = "0";
        nestedList.classList.add("active");
        this.querySelector(".caret").classList.add("caret-down");
      });

      category.addEventListener("mouseleave", function () {
        nestedList.classList.remove("active");
        this.querySelector(".caret").classList.remove("caret-down");
      });
    }
  });
});
