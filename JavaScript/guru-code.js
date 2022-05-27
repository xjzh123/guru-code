//将字符串转换成二进制形式，中间用空格隔开
function strToBinary(str) {
    var result = [];
    var list = str.split("");
    for (var i = 0; i < list.length; i++) {
        if (i != 0) {
            result.push(" ");
        }
        var item = list[i];
        var binaryStr = item.charCodeAt().toString(2);
        result.push(binaryStr);
    }
    return result.join("");
}

//将二进制字符串转换成Unicode字符串
function binaryToStr(str) {
    var result = [];
    var list = str.split(" ");
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var asciiCode = parseInt(item, 2);
        var charValue = String.fromCharCode(asciiCode);
        result.push(charValue);
    }
    return result.join("");
}

function encode(str) {
    var binStr = strToBinary(str);
    var binList = binStr.split(" ");
    var guru = ""
    for (i = 0; i < binList.length; i++) {
        item = parseInt(binList[i], 2);

        oct = (item).toString(8);
        //如果位数大于1，最后一位八进制数采用标点符号表示
        if (oct.length > 1) {
            tail = oct[oct.length - 1];
            oct2 = oct.substring(0, oct.length - 1);
        }
        else {
            tail = "";
            oct2 = oct;
        }
        guruOct = oct2.replace(/0/g, "gu").replace(/1/g, "gU").replace(/2/g, "Gu").replace(/3/g, "GU").replace(/4/g, "ru").replace(/5/g, "rU").replace(/6/g, "Ru").replace(/7/g, "RU");
        guruTail = tail.replace(/0/g, "  ").replace(/1/g, ", ").replace(/2/g, ". ").replace(/3/g, "? ").replace(/4/g, "! ").replace(/5/g, "; ").replace(/6/g, ": ").replace(/7/g, "… ");
        guruChara = guruOct + guruTail;
        guru += guruChara;
    }
    return guru;
}

function decode(guru) {
    var guruList = guru.split(" ");
    console.log("guruList:" + guruList)
    var str = ""
    for (i = 0; i < guruList.length; i++) {
        item = guruList[i]
        console.log("item:" + item)
        var tail = item[item.length - 1]
        //给没有标点符号的标记空格，作为最后一位是0的标志，防止最后一位被按照字母读取
        if (!(tail.match(/[ ,.?!;:…]/))) {
            item += " "
        }
        //这里没有区分出字母部分和标点部分，不是很利于扩展，比如因此我不能用“...”表示7，而要用单个字符的“…”，防止“...”中的“.”被识别成连续的三个2。但是既然能用，我就不打算改了。
        octItem = item.replace(/gu/g, "0").replace(/gU/g, "1").replace(/Gu/g, "2").replace(/GU/g, "3").replace(/ru/g, "4").replace(/rU/g, "5").replace(/Ru/g, "6").replace(/RU/g, "7").replace(" ", "0").replace(",", "1").replace(".", "2").replace("?", "3").replace("!", "4").replace(";", "5").replace(":", "6").replace("…", "7");
        console.log("octitem:" + octItem);
        oct = parseInt(octItem, 8);
        bin = (oct).toString(2);
        strItem = binaryToStr(bin);
        str += strItem;
    }
    return str;

}
