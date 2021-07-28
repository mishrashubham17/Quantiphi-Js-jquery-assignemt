/*Given below is the speech to text output of a Call center conversation, in the paragraph
format
Task 1:- Extract the sentences from this paragraph and display only those which contain more than 3 words in it, along with the sentence
number. 


`Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your
phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`*/
let str="Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is yoursphone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!"
let sentences=str.split(/[\\.!\?]/);
sentences.map((sentence)=>{
    let len=sentence.split(' ').length;
    if(len>3){
        console.log(sentences.indexOf(sentence)+1+" "+sentence);
    }
})
/*Task 2: Mask the personal vital data from the sentences ( if it is present) i.e replace the ‘9876535362’ with ‘XXXXXXXXXX’*/
sentences.map((sentence)=>{
   let s=sentence.replace(/\d+/,"XXXXXXXXXX");
   console.log(s);
})
/*output
1 Thank you so much for contacting us
2  Dreamland guest relations
3  You're speaking with Ronaldo
4  May I have your name, please
6  My name is robin soleimani
7  What is yoursphone number
8  It is 9876535362 as mentioned in the book Diary
9  Thank you so much for providing the info   

Thank you so much for contacting us
 Dreamland guest relations
 You're speaking with Ronaldo
 May I have your name, please
 Yes, sure
 My name is robin soleimani
 What is yoursphone number
 It is XXXXXXXXXX as mentioned in the book Diary
 Thank you so much for providing the info
 */
