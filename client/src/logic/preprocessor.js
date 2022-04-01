function preprocessorWhatsapp(text) {
  if (!text) {
    return [];
  } else {
    let split1 = text.split("\n");
    let jsontext = [];
    for (let i = 1; i < split1.length - 1; i++) {
      var temp = {};
      let split2 = split1[i].split(" - ");
      console.log(split2[1]);
      let nirjal2 = split2[1].split(": ");
      temp["date"] = split2[0];
      temp["sender"] = nirjal2[0];
      temp["text"] = nirjal2[1];
      jsontext[i] = temp;
    }
    return jsontext;
  }
}
export default preprocessorWhatsapp;
