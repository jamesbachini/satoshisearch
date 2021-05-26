# satoshisearch
 
Fairly simple little scraper and vocabulary analyser of the https://www.metzdowd.com cryptography mailing list archives where Satoshi first posted the Bitcoin whitepaper.

Blog post: https://jamesbachini.com/search-for-satoshi/

## Methodology:

Scrape all the messages from Satoshi after November 2008.

Remove common words with an english word list and manually

Rescrape the archives prior to November 2008 to see who uses similar words and phrases.

Additional weight on very unique words that are uncommon and not likely to be widely used by a broad range of people.

## Update May 2021

I had some data given to me from an anonymous researcher which I've added to the list of words/phrases that Satoshi used. I reran the test and the result was as follows:

#Score - Name - [newPhrasesFound / numberOfEmailsInDataset]
34 - Satoshi Nakamoto - [3 / 1]

28 - Trei, Peter - [5 / 1]

24 - Greg Broiles - [3 / 1]

21 - Sampo Syreeni - [6 / 2]

21 - Linda Casals - [8 / 3]

20 - silvio - [3 / 1]

20 - Eric Young - [13 / 4]

20 - Ariel Waissbein - [8 / 2]

19 - Clausen, Martin (DK - Copenhagen) - [2 / 2]

18 - zooko - [53 / 22]

16 - R.A. Hettinga - [22 / 10]

16 - David I. Emery - [2 / 1]

16 - Dan Walker - [6 / 2]

15 - Vin McLellan - [10 / 4]

15 - sjk - [6 / 2]

15 - Joye Marc - [2 / 1]

15 - David Chessler - [5 / 2]

14 - StealthMonger - [7 / 3]

14 - Pasi.Eronen at nokia.com - [5 / 2]

14 - mtd - [7 / 3]

13 - Crawford Nathan-HMGT87 - [9 / 6]

13 - bear - [4 / 3]

13 - auto37159 at hushmail.com - [5 / 3]

13 - alex at alten.org - [7 / 4]

12 - Sam Hartman - [2 / 1]

12 - rgb - [2 / 1]

12 - Leichter, Jerry - [166 / 107]

12 - Guus Sliepen - [5 / 4]

12 - David Wagner - [8 / 6]

12 - Adam Aviv - [8 / 4]

11 - William Allen Simpson - [25 / 16]

11 - travis+ml-cryptography at subspacefield.org - [33 / 22]

11 - Richard Clayton - [4 / 2]

11 - Netsecurity - [2 / 1]

11 - John Denker - [33 / 19]

11 - Jim Cheesman - [5 / 3]

11 - Jason - [5 / 3]

11 - ian.farquhar at rsa.com - [2 / 1]

11 - Ian Farquhar (ifarquha) - [10 / 6]

11 - Hovav Shacham - [4 / 2]

11 - Erik Tews - [4 / 2]

11 - David Molnar - [5 / 3]

11 - Dan Kaminsky - [6 / 4]

10 - Rod Van Meter - [2 / 1]

10 - Nate Lawson - [10 / 7]

10 - Matt Curtin - [2 / 1]

10 - maf at appgate.com - [2 / 1]

10 - John Gilmore - [11 / 8]

10 - Dirk-Willem van Gulik - [18 / 11]

10 - Christian Rechberger - [3 / 2]

10 - Bodo Moeller - [4 / 3]

9 - silky - [4 / 3]

9 - Matt Blaze - [12 / 8]

9 - Jon Callas - [37 / 30]

9 - Eugen Leitl - [8 / 6]

9 - Anne &amp; Lynn Wheeler - [38 / 45]

8 - Thor Lancelot Simon - [12 / 13]

8 - Sherri Davidoff - [9 / 7]

8 - Ray Dillinger - [2 / 3]

8 - Philipp G&#252;hring - [15 / 12]

8 - Muffys Wump - [1 / 1]

8 - Karsten Nohl - [6 / 4]

8 - Harald Hanche-Olsen - [3 / 2]

8 - Hal Finney - [19 / 23]

8 - Greg Rose - [17 / 12]

8 - Eric Rescorla - [36 / 32]

8 - David G. Koontz - [25 / 23]

8 - Darren J Moffat - [4 / 3]

8 - Daniel Carosone - [3 / 4]

8 - Brandon Enright - [3 / 4]

8 - Bill Stewart - [12 / 11]

8 - alien - [1 / 1]

8 - Alexander Klimov - [17 / 13]

8 - Alan - [4 / 3]

8 - ' =JeffH ' - [23 / 25]

7 - Woodchuck - [1 / 1]

7 - Tom Scavo - [2 / 2]

7 - Thomas Baign&#232;res - [1 / 1]

7 - Thierry Moreau - [22 / 20]

7 - Stanislaw Klekot - [1 / 1]

7 - Ray Perlner - [1 / 1]

7 - piers.bowness at rsa.com - [1 / 1]

7 - pgut001 at cs.auckland.ac.nz - [2 / 3]

7 - Peter Wayner - [2 / 2]

7 - Peter Gutmann - [129 / 148]

7 - Matt Ball - [8 / 7]

7 - mark seiden-via mac - [3 / 3]

7 - Marcos el Ruptor - [12 / 11]

7 - lists - [4 / 4]

7 - Joseph Ashwood - [11 / 11]

7 - Jeremy Hansen - [1 / 1]

7 - Jeff Simmons - [1 / 1]

7 - James A. Donald - [73 / 71]

7 - IanG - [7 / 7]

7 - EMC IMAP - [1 / 1]

7 - bmanning at vacation.karoshi.com - [3 / 3]

7 - Aram Perez - [14 / 11]

7 - Adam Back - [6 / 5]

6 - Tim Dierks - [3 / 4]

6 - Rui Paulo - [2 / 2]

6 - RL 'Bob' Morgan - [2 / 2]

6 - Peter Fairbrother - [2 / 2]

6 - Nicolas Williams - [21 / 23]

6 - Len Sassaman - [3 / 3]

6 - Joss Wright - [1 / 1]

6 - Joshua Hill - [2 / 4]

6 - Jonathan Katz - [9 / 8]

6 - Jim Youll - [9 / 9]

6 - Jerrold Leichter - [2 / 2]

6 - Jeff.Hodges at KingsMountain.com - [3 / 6]

6 - Izaac - [1 / 1]

6 - Ian G - [17 / 20]

6 - Dustin D. Trammell - [6 / 6]

6 - Charles Jackson - [8 / 8]

6 - Brian Gladman - [1 / 1]

6 - Brecht Wyseur - [1 / 1]

6 - Arshad Noor - [34 / 35]

6 - Allen - [38 / 39]

6 - Alex Pankratov - [10 / 10]

## Conclusion

It's good to see Satoshi scored highest :)

The other candidates are nothing more than that. Candidates that may have shared similar language patterns. It's interesting to cast a net but this is by no means definitive proof that x is Satoshi.

## Criticism:

This is a fairly low sample size analysis with more data for some users than others. It's impossible to draw any conclusions other than to identify potential candidates from this analysis.

Data could be pulled from the whitepaper and other known posts/emails. Perfectly plausible that Satoshi was a lurker and never posted before. More detailed analysis either with machine learning or sentence structure would be more conclusive.

## Further Research

Could apply this to code rather than English language? The first release of Bitcoin has quite a lot of original code. There's no chance that was the first program Satoshi ever wrote so it might be possible build a model to look for similar coding patterns and then throw it at sourceforge or old open source repositories on Linux and see what pops out.

If anyone has any other data sources then it would be interesting to run this with more data on candidates and Satoshi.

## Installation:
```
apt install nodejs;

apt install npm;

npm install request;

npm install request-promise;

node satoshisearch.js;
```
