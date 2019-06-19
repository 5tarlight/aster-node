import 'colors'
class Logger {
  static send(text: string): void {
    const date: Date = new Date();
    const o = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    ]
    let t: string[] = []
    for(let i in o){
      if(o[i] < 10) t[i] = "0"+o[i];
      else t[i] = o[i].toString();
    }
    console.log("["+t[0]+"-"+t[1]+"-"+t[2]+" "+t[3]+":"+t[4]+":"+t[5]+"] "+text);
  }

  static info(text: string): void {
    Logger.send('[info] ' + text)
  }
  
  static warn(text: string): void {
    Logger.send('[warn] '.black.bgYellow + text)
  }
  
  static success(text: string): void {
    Logger.send('[success] '.green + text)
  }
  
  static err(text: string): void {
    Logger.send('[warn] '.bgRed + text)
  }
}

export default Logger