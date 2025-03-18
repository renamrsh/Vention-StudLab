
const arrowBtns = document.querySelectorAll("#wrapper .testimonials__arrow");
const slider = document.getElementById("slider");
if (!arrowBtns || !slider) {
    console.error("Container slider elements not found");
} else {
    arrowBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const sliderColumns = window.getComputedStyle(slider).getPropertyValue("grid-auto-columns");
            const sliderColumnsGap = window.getComputedStyle(slider).getPropertyValue("gap");
            if (!sliderColumns || !sliderColumnsGap) {
                console.error("Columns slider properities not found");
            } else {
                const gap = parseInt(sliderColumnsGap.slice(0, -2));
                let cardNumber, point;

                if (sliderColumns.length == 4) {
                    cardNumber = 1;
                } else if (sliderColumns.length == 3) {
                    cardNumber = Math.round(100 / parseInt(sliderColumns.slice(0, -1)));
                } else {
                    cardNumber = Math.round(100 / parseInt(sliderColumns.slice(5, 7)));
                }

                const changeWidth = (slider.offsetWidth - gap * (cardNumber - 1) - 10) / cardNumber + gap;

                const maxScrollLeft = slider.scrollWidth - slider.offsetWidth;
                if (btn.id === "left" && slider.scrollLeft > 0) {
                    slider.scrollLeft -= changeWidth;
                    point = Math.round(((slider.scrollLeft / changeWidth) % 1) * 100);
                    if (point != 100 && point != 0 && point < 97) {
                        slider.scrollLeft -= (point * changeWidth) / 100;
                    }

                } else if (btn.id === "right" && slider.scrollLeft < maxScrollLeft) {
                    slider.scrollLeft += changeWidth;
                    point = Math.round(((slider.scrollLeft / changeWidth) % 1) * 100);
                    if (point != 100 && point != 0) {
                        slider.scrollLeft += ((100 - point) * changeWidth) / 100;
                    }
                }
            }
        });
    });
}
