export const formatText = (text, maxLength = null, maxLines = null, wrapType = null) => {
    if (!text || typeof (text) != "string") {
        return null;
    }

    let copyText = text.slice();
    let maxLen = maxLength, maxLin = maxLines, wrapTyp = wrapType, textSize = text.length, formattedText = copyText;

    if (wrapTyp) {
        copyText = formattedText;
        switch (wrapTyp) {
            case "word":
                for (let i = 0; i < textSize; i++) {
                    if (formattedText[i] == " ") {
                        formattedText = copyText.slice(0, i) + "\n" + copyText.slice(i + 1);
                        copyText = formattedText;
                        i++;
                    }
                }
                break;
            case "character":
                let n = 0;
                for (let i = 1; i < textSize; i++) {
                    if (i > 50) {
                        break;
                    }
                    formattedText = copyText.slice(0, i + n) + "\n" + copyText.slice(i + n);
                    copyText = formattedText;
                    n++;
                }
                break;
            case "sentence":
                for (let i = 0; i < textSize; i++) {
                    if (formattedText[i] == ".") {
                        formattedText = copyText.slice(0, i + 1) + "\n" + copyText.slice(i + 2);
                        copyText = formattedText;
                        i++;
                    }
                }
                break;
            case "none":
                formattedText = formattedText.trim()
                break;
        }
    }

    if (maxLen) {
        let dlugoscline = 1;
        for (let i = 0; i < formattedText.length; i++) {
            if (formattedText[i] == "\n") {
                console.log
                dlugoscline = 0;
                continue;
            }
            if (maxLen == dlugoscline - 1) {
                formattedText = copyText.slice(0, i) + "\n" + copyText.slice(i);
                copyText = formattedText;
                dlugoscline = 0;
            }
            dlugoscline++;
        }
    }

    if (maxLin) {
        for (let i = 0; i < formattedText.length; i++) {
            if (formattedText[i] == "\n") {
                maxLin--;
                if (maxLin == 0) {
                    if (formattedText[i - 1] == ".") {
                        formattedText = formattedText.slice(0, i) + "..";
                    } else {
                        formattedText = formattedText.slice(0, i) + "...";
                    }
                }
            }
        }
    }
    return formattedText;
}

/*
formatText("Hello world, this is JavaScript", 10, 2, "word");
formatText("Hello world!", 5, 3, "character");
*/