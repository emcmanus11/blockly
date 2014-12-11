Blockly Search

Problem
====================
To use Google's advanced search, a user must either already know about using 
keywords in the search bar, or be told by someone else. Even user's who know 
about advanced search using keywords can have a difficult time keeping track 
of what syntax maps to which search command. Currently the only solution to 
this problem is either using Google's advanced search form, hidden in the 
settings bar, or google how to do an advanced search.

Our Solution
====================
We've created an interface that helps users utilize Google's advanced search 
features using blocks. User's can drag and drop blocks into a workspace area 
and build their query without worrying about remembering how to do advanced 
searches.

This tool is intended to introduce beginners and less experienced Google 
users to the availability of advanced search through the tool bar, as well as 
to assist users at a higher level remember which syntax maps to which search 
type. 

UI Aspects
====================
Blocks can be an easy way to visually categorize different components of the 
search language. We used different colors to correspond to each google search 
term for learnability purposes. Users would be more likely to remember a 
command by the color instead of having to read through the blocks every time. 

We also added boxes about the search bar so users can add blocks by clicking 
instead of dragging and dropping. This takes into account Fitt's law and 
makes building queries with our interface much faster for the more advanced 
crowd. 

Each box matches the color of the coresponding block and the boxes are in the 
same order that the blocks are listed in. The boxes have icons associated 
with the block's functionality or syntax in the Google search. For example, 
the icon for our "exact phrase" block are quotes because Google uses quotes 
to determine if a search should be exact.

In addition to the blocks and boxes, as users build their query, the actual 
google search is shown in a search bar in real time. This will allow users to 
see how to use advanced Google search in Google. This will help with 
learnability and can be used as a quick way to reference how to look up 
things using advanced search.

Why we chose the blocks we chose
====================
According to "Search User Interfaces" by Marti A. Hearst 
(http://searchuserinterfaces.com/book/), the most common operators used were 
double quotes, +, -, and site:. + is now obsolete on Google thanks to the existence of Google+, where the + operator is now used to signify things related to Google+, so we do not have that in our interface. We have the other ones plus range and filetype because those were ones people we asked said they would use. 

The paper also says, "Hargittai, 2004's study showed that even among the 
small fraction of users who did attempt to use operators, several completely 
misunderstood their meaning." To compensate for this, we as much information 
about how the block works as possible without being verbose by having terms 
on the side of the blocks to describe what they do. The blocks also have 
tooltips when a user hovers them, giving more details and examples on how to 
use the blocks. 

Technologies Used
====================
We added JavaScript, HTML, and CSS to the Blockly API for this project.
-----------------------------
From Google's Blockly Github page:

# Blockly

Google's Blockly is a web-based, visual programming editor.  Users can drag
blocks together to build a programs.  All code is free and open source.

**The project page is https://developers.google.com/blockly/**

![](https://developers.google.com/blockly/sample.png)
