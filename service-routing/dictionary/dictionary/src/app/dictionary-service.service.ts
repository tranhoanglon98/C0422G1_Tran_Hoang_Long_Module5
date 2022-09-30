import { Injectable } from '@angular/core';
import {IWord} from "./i-word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  dictionary: IWord[]
  words: string[]
  constructor() {
    this.dictionary =  [
      {
        word: 'Long',
        mean: 'Đẹp trai'
      },
      {
        word: 'Anh hùng',
        mean: '"Anh" là hoa của cây, tức phần đẹp nhất của cây. "Hùng" là con trống, con đực của các loài chim thú,' +
          'là biểu tượng của sức mạnh. "Anh hùng" vốn là tinh hoa của chim thú, hay là tinh hoa của vạn vật, cho nên' +
          'dùng để chỉ người xuất chúng.'
      },
      {
        word: 'Anh thư',
        mean: '"Anh" là hoa của cây, tức phần đẹp nhất của cây. "Thư" là con mái, con cái của các loài chim thú, "thư"' +
          'chính là đối lại của "hùng". "Anh thư" nghĩa bóng dùng để chỉ người con gái xinh đẹp dũng cảm. Ngày nay, chữ' +
          '"Anh thư" chỉ thường xuất hiện trong tên các bạn nữ, còn để khen một cô gái là "anh thư", ta hay dùng chữ' +
          '"nữ anh hùng".'
      },
      {
        word: 'Ảnh hưởng',
        mean: '"Ảnh" là cái bóng của vật, "hưởng" là âm vang của tiếng. "Ảnh hưởng" vốn là cái bóng có tiếng vang, được' +
          'đùng để chỉ kết quả tất yếu và khách quan, về sau thường được dùng như động từ, chỉ sự tác động của cái này ' +
          'đến cái khác.'
      },
      {
        word: 'Biệt thự',
        mean: '"Thự" vốn là một nếp nhà ở thôn quê, như nhà giữa ruộng hoặc giữa vườn. Ngày xưa, ngoài nhà chính, những' +
          'gia đình khá giả còn làm thêm một ngôi nhà nhỏ nằm riêng biệt, thường ở trong vườn cảnh, làm chỗ nghỉ ngơi. Nhà đó' +
          'gọi là "biệt thự". Sau này, từ "biệt thự" di nghĩa, trở thành từ để chỉ những ngôi nhà to, đẹp, sang trọng' +
          'và thường có sân vườn.'
      },
      {
        word: 'Căn nguyên',
        mean: '"Căn" là rễ cây, dùng để chỉ phần dưới, phần gốc của vật thể (như "bênh căn" là nguyên do, gốc rễ của' +
          'chứng bệnh, "nha căn" là chân răng), cũng chỉ nền tảng của sự việc. "Nguyên" là đầu nguồn nước, cũng chỉ ' +
          'ngọn nguồn của vấn đề. Do đó, "căn nguyên" được đùng để chỉ nguồn gốc, nguyên do, gốc gác của một sự việc,' +
          'một vấn đề.'
      },
      {
        word: 'Động phòng',
        mean: 'Chữ "động" ở đây có nghĩa là hang sâu, ta quen dùng là :"hang động", không phải chữ "động" trong "hành ' +
          'động". Do đó, "động phòng" có nghĩa là "phòng sâu kín", chỉ phòng của vợ chông mới cưới. Dân dần, "động phong" ' +
          'mới được dùng chỉ việc vợ chộng làm viêc chăn gối. Truyện kiều của Nguyễn Du có câu: "Động phòng dìu dặt chén mồi/ ' +
          'Bâng khuâng duyên mới ngậm ngùi tình xưa."'
      }
    ]
  }

  getWord(){
    this.words = []
    for (const word of this.dictionary) {
      this.words.push(word.word)
    }
    return this.words
  }

  getMean(word: string){
   return  this.dictionary.filter(w => w.word === word)[0].mean
  }
}
