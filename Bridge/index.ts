interface IFile {
  playFile(): void;
}

class FileMp3 implements IFile {
  playFile(): void {
    console.log("open file mp3");
  }
}

class FileWav implements IFile {
  playFile(): void {
    console.log("open file wav");
  }
}

abstract class AbstractPlayer {
  protected file: IFile;

  constructor(file: IFile) {
    this.file = file;
  }

  abstract play(): void;
}

class PlayerMp3 extends AbstractPlayer {
  constructor(file: IFile) {
    super(file);
  }
  play(): void {
    this.file.playFile();
    console.log("play file mp3");
  }
}

class PlayerWav extends AbstractPlayer {
  constructor(file: IFile) {
    super(file);
  }
  play(): void {
    this.file.playFile();
    console.log("play file wav");
  }
}

const mp3Player = new PlayerMp3(new FileMp3());
const wavPlayer = new PlayerWav(new FileWav());

mp3Player.play();
wavPlayer.play();

/* якщо це вірно написано, то виходить начебто і все зрозуміло,
але я щось не до кінця розумію, яку проблему воно вирішує і які вигоди надає,
і що мені заважає зробити так - const mp3Player = new PlayerMp3(new FileWav()); 
помилок не буде але ж і файл не буде програватися)), хоча тут мабуть справа в самому прикладі
фішка схоже як раз таки в можливості створення комбінованих об'єктів, 
або так:
 - const mp3Player = new PlayerMp3(new FileMp3());
 або так:
  - const mp3Player = new PlayerMp3(new FileWav());
приклад з фігурами і кольорами мабуть більш вдалий  
*/
