const rp = require('request-promise');
const fs = require('fs');
const commonWords = require('./common-words.json');

const foundWords = [];

const getData = async () => {
  const dates = ['2008-November','2008-December','2009-January','2009-February','2009-March','2009-April','2009-May','2009-June','2009-July','2009-August','2009-September','2009-October','2009-November'];
  dates.forEach(async (date) => {
    const html = await rp(`https://www.metzdowd.com/pipermail/cryptography/${date}/author.html`);
    html.split("\n\n").forEach(async (newBlock) => {
      if (newBlock.indexOf('Satoshi Nakamoto') > -1) {
        const links = newBlock.match(/"(.*).html"/g) || [""]; //could also use null for empty value
        const link = links[0].split('"').join('');
        const email = await rp(`https://www.metzdowd.com/pipermail/cryptography/${date}/${link}`);
        const mainEmail = email.match(/\<PRE\>([\s\S]*)\<\/PRE\>/g)[0];
        mainEmail.split("\n").forEach((emailLine) => {
          if (emailLine.indexOf('&gt;') === -1) {
            const words = emailLine.split(/(\s|\.|\?|\!|\<|\>)/);
            if (!words) return false;
            words.forEach((word) => {
              wordLC = word.toLowerCase().split(/[^a-z]/).join('');
              if (commonWords.en.indexOf(wordLC) === -1 && wordLC.length > 3) {
                console.log(wordLC);
                if (foundWords.indexOf(wordLC) === -1) foundWords.push(wordLC);
              }
            });
          }
        });
        writeOutAgain();
      }
    });
  });
};

const writeOutAgain = async () => {
  fs.writeFileSync('./satoshiWords.txt', foundWords.join("\n")+"\n", function (err) { });
}


// Data found
const statoshiWords = ['announcing','peertopeer','doublespending','decentralized','unpack','directory','connects','nodes','node','accepts','youll','firewall','theres','restarted','extensibility','versioning','proofofwork','ridiculously','generate','itll','adjustment','generated','recipient','transaction','theyll','disadvantage','circulation','distributed','transactions','mitigate','tokens','quantities','theyd','reversespamming','spammers','automated','mailboxes','ratio','botnet','harvesters','hasten','selfdefeating','exploiting','interestingly','egold','configure','theyre','inevitably','dumbed','niche','micropayments','paytosend','dialog','resizeable','doubleclicks','bitcoins','hotline','subscription','cannibalize','subscriptions','fulfilling','bootstrapped','effortlessly','vending','simplified','verification','headers','specialists','specialized','bandwidth','prohibitive','bytes','compact','centrally','networks','napster','gnutella','synchronisation','globally','propagate','versions','incorporating','viewpoint','propagated','invalid','selfevident','user','hashed','etched','whichever','receivers','respend','attacker','redo','rewriting','shenanigans','subfactions','cling','sufficiently','discarded','receives','spec','youre','assumptions','blanks','dillinger','compensate','varying','computing','proportionally','inflation','deflation','holders','propagating','cycles','requirement','collectively','overpower','generating','carding','diverting','tweak','output','input','payees','incentive','pendingtransaction','connectblock','removes','pendingtx','disconnectblock','sopping','reorgs','optimisation','broadcasts','transmissions','retry','obsolete','randomly','packets','libertarian','sourcecode','implementation','blinding','identities','reliance','recourse','prevention','satisfying','seller','circulate','relaying','containing','resolving','cheater','adjudicate','cheaters','simultaneously','doublespend','doublespends','wasnt','pools','refresh','hashcash','preimage','cpuintensive','memoryless','hashes','dominance','proportional','anyones','compensated','predetermined','combining','doublespent','timespan','doubles','calculation','instantant','nonrepudiability','existing','cheques','contested','irreversible','pseudonymous','nyms','identifying','youve','futile','trivially','puppets','credential','establishes','calculates','typically','networkscale','satisfactorily','spreads','exponentially','widely','competitor','overtaking','merchants','doublespender','scammer','downloads','nonfencible','websites','instantaccess','arent','optimize','wouldnt','peer','networking','timeout','coms','fumbled','inventoryrequestdata','introduces','latency','transmit','queues','conserving','coding','functional','byzantine','rephrase','wifi','theyve','stimulate','instantaneous','computation','proofsofwork','verifying','expended','allotted','exhibited'];

const reallyUnique = ['conserving','fumbled','instantaccess','nonfencible','nonrepudiability','pseudonymous','futile','trivially','puppets','satisfactorily','collectively','etched','shenanigans','subfactions','extensibility','ridiculously','hasten','selfdefeating','cannibalize','effortlessly','selfevident'];

const satoshiWordSearch = async () => {
  const authorCount = {};
  const dates = ['2007-July','2007-August','2007-September','2007-October','2007-November','2007-December','2008-January','2008-February','2008-March','2008-April','2008-May','2008-June','2008-July','2008-August','2008-September','2008-October'];
  dates.forEach((date,dateCount) => {
    setTimeout(async () => {
      const html = await rp(`https://www.metzdowd.com/pipermail/cryptography/${date}/author.html`);
      html.split("\n\n").forEach(async (newBlock) => {
        if (newBlock.indexOf('<LI>') > -1) {
          const links = newBlock.match(/"(.*).html"/g) || [""];
          const author = (newBlock.match(/\<I>(.*)\n/g) || [""])[0].split('<I>').join('').split("\n").join('');
          if (!authorCount[author]) {
            authorCount[author] = {};
            authorCount[author].wordCount = 0;
            authorCount[author].reallyUnique = 0;
            authorCount[author].score = 0;
            authorCount[author].emails = 0;
            authorCount[author].words = [];
            authorCount[author].name = author;
          }
          authorCount[author].emails += 1;
          const link = links[0].split('"').join('');
          const email = await rp(`https://www.metzdowd.com/pipermail/cryptography/${date}/${link}`);
          const mainEmail = email.match(/\<PRE\>([\s\S]*)\<\/PRE\>/g)[0];
          mainEmail.split("\n").forEach((emailLine) => {
            if (emailLine.indexOf('&gt;') === -1) {
              const words = emailLine.split(/(\s|\.|\?|\!|\<|\>)/);
              if (!words) return false;
              words.forEach((word) => {
                wordLC = word.toLowerCase().split(/[^a-z]/).join('');
                if (statoshiWords.indexOf(wordLC) > -1) {
                  console.log(author+' '+wordLC);
                  authorCount[author].wordCount += 1;
                  authorCount[author].words.push(wordLC);
                  if (reallyUnique.indexOf(wordLC) > -1) {
                    authorCount[author].reallyUnique += 1;
                  }
                }
              });
            }
          });
        }
      });
    }, dateCount*3000);
  });
  setTimeout(() => {
    fs.writeFileSync('./satoshiFound.json', JSON.stringify(authorCount), function (err) { });
    checkScores(authorCount);
  }, 60000);
};

const checkScores = (authorData) => {
  let highestScore = 0;
  let satoshi = 'Satoshi';
  Object.keys(authorData).forEach((authorKey) => {
    const author = authorData[authorKey];
    if (author.wordCount < 10  || author.emails < 3) return false;
    const wordDensity = Math.round(author.wordCount / author.emails);
    if (wordDensity <= 3) return false;
    const score = (author.reallyUnique * 3) + wordDensity;
    console.log(`${score} - ${author.name}`);
    if (score > highestScore && author.name !== 'Satoshi Nakamoto') {
      highestScore = score;
      satoshi = author.name;
    }
  });
  console.log(`\n\n${satoshi} is the closest match to Satoshi Nakamoto`);
};


satoshiWordSearch();