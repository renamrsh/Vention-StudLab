export const DateFormatter = {
    monthName: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    format(date, inputFormat = null, outputFormat = null) {
        let day, month, year;

        if (inputFormat == null) {
            inputFormat = "DDMMYYYY";
        }

        if (outputFormat == null) {
            outputFormat = "DD-MM-YYYY";
        }

        let start = 0;
        let word = '';
        for (let i = 0; i < inputFormat.length; i++) {
            if (inputFormat[i] == " " || inputFormat[i] == "-") {
                start++;
                continue;
            }
            word += inputFormat[i];
            switch (word) {
                case "DD":
                    day = date.slice(start, i + 1);
                    word = "";
                    start = i + 1;
                    break;
                case "MM":
                    month = date.slice(start, i + 1);
                    word = "";
                    start = i + 1;
                    break;
                case "Month":
                    let monthName = "";
                    for (let k = 2; k < date.length; k++) {
                        if (isNaN(parseInt(date[k])) && date[k] != "-" && date[k] != " ") {
                            monthName += date[k];
                        }
                    }
                    for (let j = 0; j < DateFormatter.monthName.length; j++) {
                        if (DateFormatter.monthName[j] == monthName) {
                            if (j < 10) {
                                month = "0" + (j + 1);
                            } else {
                                month = j + 1;
                            }
                        }
                    }
                    start = start + monthName.length;
                    word = "";
                    break;
                case "YYYY":
                    year = date.slice(start);
                    word = "";
                    break;
            }
        }

        switch (outputFormat) {
            case "DD-MM-YYYY":
                return day + "-" + month + "-" + year;
                break;
            case "DD MM YYYY":
                return day + " " + month + " " + year;
                break;
            case "DDMMYYYY":
                return day + "" + month + "" + year;
                break;
            case "DD-Month-YYYY":
                if (month[0] == 0) month = month.slice(1);
                return day + "-" + DateFormatter.monthName[month - 1] + "-" + year;
                break;
            case "DD Month YYYY":
                if (month[0] == 0) month = month.slice(1);
                return day + " " + DateFormatter.monthName[month - 1] + " " + year;
                break;
            case "DDMonthYYYY":
                if (month[0] == 0) month = month.slice(1);
                return day + "" + DateFormatter.monthName[month - 1] + "" + year;
                break;
        }
    },

    fromNow(date, inputFormat = null) {
        let day, diffDay, month, diffMonth, year, diffYear;

        if (inputFormat == null) {
            inputFormat = "DDMMYYYY";
        }

        let start = 0;
        let word = '';
        for (let i = 0; i < inputFormat.length; i++) {

            if (inputFormat[i] == " " || inputFormat[i] == "-") {
                start++;
                continue;
            }

            word += inputFormat[i];
            switch (word) {
                case "DD":
                    day = date.slice(start, i + 1);
                    word = "";
                    start = i + 1;
                    break;
                case "MM":
                    month = date.slice(start, i + 1);
                    word = "";
                    start = i + 1;
                    break;
                case "Month":
                    let monthName = "";
                    for (let k = 2; k < date.length; k++) {
                        if (isNaN(parseInt(date[k])) && date[k] != "-" && date[k] != " ") {
                            monthName += date[k];
                        }
                    }
                    for (let j = 0; j < DateFormatter.monthName.length; j++) {
                        if (DateFormatter.monthName[j] == monthName) {
                            if (j < 10) {
                                month = "0" + j;
                            } else {
                                month = j + 1;
                            }
                        }
                    }
                    start = start + monthName.length;
                    word = "";
                    break;
                case "YYYY":
                    year = date.slice(start);
                    word = "";
                    break;
            }

        }

        let result = "past";
        let oldDate = new Date(year, month - 1, day);
        let currentDate = new Date();

        diffDay = currentDate.getDate() - oldDate.getDate();
        diffMonth = currentDate.getMonth() - oldDate.getMonth();
        diffYear = currentDate.getFullYear() - oldDate.getFullYear();

        if (diffYear < 0 || (diffYear === 0 && diffMonth < 0) || (diffYear === 0 && diffMonth === 0 && diffDay < 0)) {
            diffDay = oldDate.getDate() - currentDate.getDate();
            diffMonth = oldDate.getMonth() - currentDate.getMonth();
            diffYear = oldDate.getFullYear() - currentDate.getFullYear();
            result = "future";
        }

        if (diffDay < 0) {
            diffMonth--;
            let prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
            diffDay += prevMonth.getDate();
        }
        if (diffMonth < 0) {
            diffYear--;
            diffMonth += 12;
        }

        if (diffDay > 0) {
            if (diffDay == 1) {
                diffDay = "1 day ";
            } else {
                diffDay = diffDay + " days";
            }
        } else if (diffDay == 0) {
            diffDay = "";
        }

        if (diffMonth > 0) {
            if (diffMonth == 1) {
                diffMonth = "1 month ";
            } else {
                diffMonth = diffMonth + " months ";
            }
        } else if (diffMonth == 0) {
            diffMonth = "";
        }

        if (diffYear > 0) {
            if (diffYear == 1) {
                diffYear = "1 year ";
            } else {
                diffYear = diffYear + " years ";
            }
        } else if (diffYear == 0) {
            diffYear = "";
        }

        if (result == "past") {
            return diffYear + "" + diffMonth + "" + diffDay + " ago";
        } else {
            return "in " + diffYear + "" + diffMonth + "" + diffDay;
        }

    }
}

/*
console.log(DateFormatter.format("31102011"));
console.log(DateFormatter.format("31-10-2011", "DD-MM-YYYY", "DD Month YYYY"));
console.log("")
console.log(DateFormatter.format("01December2023", "DDMonthYYYY", "DD-MM-YYYY"));
console.log(DateFormatter.format("01 December 2023", "DD Month YYYY", "DD MM YYYY"));
console.log(DateFormatter.format("01-January-2023", "DD-Month-YYYY", "DDMMYYYY"));
console.log(DateFormatter.format("01122023", "DDMMYYYY", "DD-Month-YYYY"));
console.log(DateFormatter.format("01-03-2023", "DD MM YYYY", "DD Month YYYY"));
console.log(DateFormatter.format("01-08-2023", "DD-MM-YYYY", "DDMonthYYYY"));
console.log("")
console.log(DateFormatter.fromNow("01-01-2027", "DD-MM-YYYY"));
console.log(DateFormatter.fromNow("01-12-2027", "DD MM YYYY"));
console.log(DateFormatter.fromNow("01122027", "DDMMYYYY"));
console.log("")
console.log(DateFormatter.fromNow("01-December-2028", "DD-Month-YYYY"));
console.log(DateFormatter.fromNow("01 December 2028", "DD Month YYYY"));
console.log(DateFormatter.fromNow("01December2028", "DDMonthYYYY"));
*/