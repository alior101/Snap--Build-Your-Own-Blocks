/*

	lang-it.js

	Italian  translation for SNAP!

	written by Jens Mönig

	Copyright (C) 2012 by Jens Mönig

	This file is part of Snap!.

	Snap! is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as
	published by the Free Software Foundation, either version 3 of
	the License, or (at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.

	You should have received a copy of the GNU Affero General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.



    Note to Translators:
    --------------------
    At this stage of development, Snap! can be translated to any LTR language
    maintaining the current order of inputs (formal parameters in blocks).

    Translating Snap! is easy:


    1. Download

    Download the sources and extract them into a local folder on your
    computer:

        <http://snap.berkeley.edu/snapsource/snap.zip>

    Use the German translation file (named 'lang-de.js') as template for your
    own translations. Start with editing the original file, because that way
    you will be able to immediately check the results in your browsers while
    you're working on your translation (keep the local copy of snap.html open
    in your web browser, and refresh it as you progress with your
    translation).


    2. Edit

    Edit the translation file with a regular text editor, or with your
    favorite JavaScript editor.

    In the first non-commented line (the one right below this
    note) replace "de" with the two-letter ISO 639-1 code for your language,
    e.g.

        fr - French => SnapTranslator.dict.fr = {
        it - Italian => SnapTranslator.dict.it = {
        pl - Polish => SnapTranslator.dict.pl = {
        pt - Portuguese => SnapTranslator.dict.pt = {
        es - Spanish => SnapTranslator.dict.es = {
        el - Greek => => SnapTranslator.dict.el = {

    etc. (see <http://en.wikipedia.org/wiki/ISO_639-1>)


    3. Translate

    Then work through the dictionary, replacing the German strings against
    your translations. The dictionary is a straight-forward JavaScript ad-hoc
    object, for review purposes it should be formatted as follows:

        {
            'English string':
                'Translation string',
            'last key':
        }       'last value'

    and you only edit the indented value strings. Note that each key-value
    pair needs to be delimited by a comma, but that there shouldn't be a comma
    after the last pair (again, just overwrite the template file and you'll be
    fine).

    If something doesn't work, or if you're unsure about the formalities you
    should check your file with

        <http://JSLint.com>

    This will inform you about any missed commas etc.


    4. Accented characters

    Depending on which text editor and which file encoding you use you can
    directly enter special characters (e.g. Umlaut, accented characters) on
    your keyboard. However, I've noticed that some browsers may not display
    special characters correctly, even if other browsers do. So it's best to
    check your results in several browsers. If you want to be on the safe
    side, it's even better to escape these characters using Unicode.

        see: <http://0xcc.net/jsescape/>


    5. Block specs:

    At this time your translation of block specs will only work
    correctly, if the order of formal parameters and their types
    are unchanged. Placeholders for inputs (formal parameters) are
    indicated by a preceding % prefix and followed by a type
    abbreviation.

    For example:

        'say %s for %n secs'

    can currently not be changed into

        'say %n secs long %s'

    and still work as intended.

    Similarly

        'point towards %dst'

    cannot be changed into

        'point towards %cst'

    without breaking its functionality.


    6. Submit

    When you're done, rename the edited file by replacing the "de" part of the
    filename with the two-letter ISO 639-1 code for your language, e.g.

        fr - French => lang-fr.js
        it - Italian => lang-it.js
        pl - Polish => lang-pl.js
        pt - Portuguese => lang-pt.js
        es - Spanish => lang-es.js
        el - Greek => => lang-el.js

    and send it to me for inclusion in the official Snap! distribution.
    Once your translation has been included, Your name will the shown in the
    "Translators" tab in the "About Snap!" dialog box, and you will be able to
    directly launch a translated version of Snap! in your browser by appending

        lang:xx

    to the URL, xx representing your translations two-letter code.


    7. Known issues

    In some browsers accents or ornaments located in typographic ascenders
    above the cap height are currently (partially) cut-off.

    Enjoy!
    -Jens
*/

/*global SnapTranslator*/

SnapTranslator.dict.he = {

/*
    Special characters: (see <http://0xcc.net/jsescape/>)

    Ä, ä   \u00c4, \u00e4
    Ö, ö   \u00d6, \u00f6
    Ü, ü   \u00dc, \u00fc
    ß      \u00df
*/
	'Arduino':'ארדוינו' ,

    // translations meta information
    'language_name':
        'עברית', // the name as it should appear in the language menu
    'language_translator':
        'ליאור אסולין', // your name for the Translators tab
    'translator_e-mail':
        'alior101@gmail.com', // optional
    'last_changed':
        '2014-11-8', // this, too, will appear in the Translators tab

    // GUI
    // control bar:
    'untitled':  'ללא שם' ,
    'development mode':'מוד פיתוח',

    // categories:
    'Motion':     'תנועה',
    'Looks':
        'מראה',
    'Sound':
        'צליל',
    'Pen':
        'עט',
    'Control':
        'שליטה',
    'Sensing':
        'תחושה',
    'Operators':
        'פעולה',
    'Variables':
        'משתנים',
    'Lists':
        'רשימות',
    'Other':
        'אחר',

    // editor:
    'draggable':
        'נגרר',

    // tabs:
    'Scripts':
        'תסריט',
    'Costumes':
        'תחפושת',
    'Sounds':
        'קול',

    // names:
    'Sprite':
        'ספרייט',
    'Stage':
        'במה',

    // rotation styles:
    'don\'t rotate':         'לסיבוב ניתן לא',
    'can rotate':        'לסיבוב ניתן',
    'only face left/right':        'ימינה או שמאלה רק',

    // new sprite button:
    'add a new sprite':        'חדש ספרייט הוסף',

    // tab help
    'costumes tab help':
 'לכאן גרירה ידי על תמונה קובץ ייבא',
    'import a sound from your computer\nby dragging it into here':
        'לכאן גרירה ידי על קול קובץ ייבא',

    // primitive blocks:

    /*
        Attention Translators:
        ----------------------
        At this time your translation of block specs will only work
        correctly, if the order of formal parameters and their types
        are unchanged. Placeholders for inputs (formal parameters) are
        indicated by a preceding % prefix and followed by a type
        abbreviation.

        For example:

            'say %s for %n secs'

        can currently not be changed into

            'say %n secs long %s'

        and still work as intended.

        Similarly

            'point towards %dst'

        cannot be changed into

            'point towards %cst'

        without breaking its functionality.
    */

    // motion:
    'Stage selected:\nno motion primitives':
        'Stage selezionato:\nNessun blocco per il movimento\n',

    'move %n steps':
        'צעדים %n זוז',
    'turn %clockwise %n degrees':
         'צעדים  %n %clockwise הסתובב',
    'turn %counterclockwise %n degrees': 
        'צעדים %n %counterclockwise  הסתובב',
    'point in direction %dir': 
		'%dir לכוון הצבע',
    'point towards %dst':
		'%dst לכוון הצבע ', 
    'go to x: %n y: %n':
        'x: %n y: %n – ל לך',
    'go to %dst': 
       '%dst – ל לך',

    'glide %n secs to x: %n y: %n': 
       'שניות %n - ב  x: %n y: %n – ל החלק',

    'change x by %n': 
       '%n – ב x שנה',
    'set x to %n': 
       '%n – ל x שנה',
    'change y by %n': 
       '%n – ב y שנה',
    'set y to %n': 
       '%n – ל y שנה',
    'if on edge, bounce':
        'קפוץ – בקצה פגעת אם',
    'x position':  
      'x מיקום',
    'y position': 
       'y מיקום',
    'direction': 
       'כוון',

    // looks:
    'switch to costume %cst':
        '%cst לתחפושת עבור',
    'next costume':
        ' הבאה התחפושת ',
    'costume #':
        'מספר תחפושת',
    'say %s for %n secs':
        'שניות %n במשך %s אמור',
    'say %s':
        '%s אמור',
    'think %s for %n secs':
        'שניות %n במשך %s חשוב',
    'think %s':
        '%s חשוב',
    'Hello!':
        'היי!',
    'Hmm...':
        'המממ...',
    'change %eff effect by %n':
        'שניות %n -ב %eff אפקט שנה',
    'set %eff effect to %n':
        '%n -ל %eff אפקט הבא',
    'clear graphic effects':
        'גרפיים אפקטים בטל',
    'change size by %n':
        '%n -ב גודל שנה',
    'set size to %n %':
        '% %n -כ גודל קבע',
    'size':
        'מימדים',
    'show':
        'הצג',
    'hide':
        'הסתר',
    'go to front':
        'קדימה העבר',
    'go back %n layers':
        'שכבות %n אחורה העבר',

    'development mode \ndebugging primitives:':
        'פיתוח מוד\nפרימיטיבים דיבוג',
    'console log %mult%s':
        'לוג %mult%s',
    'alert %mult%s':
        'התרעה: %mult%s',

    // sound:
    'play sound %snd':
        '%snd קול נגן',
	
    'play sound %snd until done':
        'הסוף עד %snd קול נגן',
    'stop all sounds':     
  'הכל השתק',
  
    'rest for %n beats':
        'פעימות %n למשך עצור' ,
	
    'play note %n for %n beats':
        'פעימות %n למשך %n תו נגן',
  
    'change tempo by %n':
        'פעימות %n -ב קצב שנה' , 
 
    'set tempo to %n bpm':
        'לשניה פעימות %n קצב קבע',
    'tempo':
        'קצב',
 
    // pen:
    'clear':
        'נקה',
    'pen down':
        'מטה עט',
    'pen up':
        'מעלה עט',
    'set pen color to %clr':
        '%clr -ל  עט צבע  שנה',
    'change pen color by %n':
        '%n -ב עט צבע שנה',
    'set pen color to %n':
        '%n -ל עט צבע שנה',
    'change pen shade by %n':
        '%n -ב עט גוון שנה',
    'set pen shade to %n':
        '%n -ל עט גוון שנה',
    'change pen size by %n':
        '%n -ב עט עובי שנה',
    'set pen size to %n':
        '%n -ל עט עובי שנה',
    'stamp':
        'חותמת',

    // control:
    'when %greenflag clicked':
        '%greenflag על לוחצים כאשר',
    'when %keyHat key pressed':
        '%keyHat על לוחצים כאשר',
    'when I am clicked':
  'כשלוחצים עלי'	,
    'when I receive %msgHat':
        '%msgHat הודעת מקבל כשאני',
    'broadcast %msg':
        '%msg הודעת שדר',
    'broadcast %msg and wait':
        'וחכה %msg הודעה שדר',
    'Message name':
        'הודעה שם',
    'message':
        'הודעה',
    'wait %n secs':
        'שניות %n חכה',
    'wait until %b':
        '%b עד חכה',
    'forever %c':
        'תמיד %c',
    'repeat %n %c':
        'פעמים %n חזור %c',
    
    'repeat until %b %c':
        '%b -ש עד חזור %c',
    'if %b %c':
        '%b אם %c',
    'if %b %c else %c':
        '%b אם %c אחרת %c',
    'report %s':
        '%s תוצאת',
    'stop block':
        'בלוק עצור',
    'stop script':
        'תסריט עצור',
    'stop all %stop':
        '%stop כל עצור',
    'run %cmdRing %inputs':
        '%inputs על %cmdRing על הרץ',
    'launch %cmdRing %inputs':
          '%inputs על %cmdRing על טען',
    'call %repRing %inputs':
        '%inputs על %repRing -ל קרא',
    'run %cmdRing w/continuation':
        'המשך עם %cmdRing -ל הרץ',
    'call %cmdRing w/continuation':
          'המשך עם %cmdRing -ל קרא',
    'warp %c':
        'טורבו במוד בצע %c',
    'when I start as a clone':
        'quando vengo clonato',
    'create a clone of %cln':
        'crea un clone di %cln',
    'myself':
        'אני',
    'delete this clone':
        'זה העתק מחק',

    // sensing:
    'touching %col ?':
        '? %col ב- נוגע',
    'touching %clr ?':
        '? %clr -ב נוגע',
    'color %clr is touching %clr ?':
        '? %clr -ב נוגע %clr',
    'ask %s and wait':
        'וחכה %s שאל',
    'what\'s your name?':
        '? שמך מה',
    'answer':
        'תשובה',
    'mouse x':
        'אופקי עכבר מיקום',
    'mouse y':
        'אנכי עכבר מיקום',
    'mouse down?':
        '? לחוץ עכבר',
    'key %key pressed?':
        '? לחוץ %key מקש',
    'distance to %dst':
        '%dst -ל מרחק',
    'reset timer':
        'שעון אפס',
    'timer':
        'עצר שעון',
    '%att of %spr':
        '%spr של %att',
    'http:// %s':
        'http:// %s דף טען',
    'turbo mode?':
        'טורבו מוד',
    'set turbo mode to %b':
        '%b -ל טורבו שנה',

    'filtered for %clr':
        '%clr לצבע פילטר',
    'stack size':
        'מחסנית גודל',
    'frames':
        'תמונה',

    // operators:
    '%n mod %n':
        ' %n מודולו %n ',
    'round %n':
        '%n עיגול',
    '%fun of %n':
        '%n של %fun',
    'pick random %n to %n':
         '%n - ל %n בין מספר בחר',
    '%b and %b':
        '%b ו %b',
    '%b or %b':
        '%b או %b',
    'not %b':
        '%b -מ הפוך',
    'true':
        'אמת',
    'false':
        'שקר',
    'join %words':
        '%words של איחוד',
    'hello':
        'שלום',
    'world':
        'עולם',
	
    'letter %n of %s':
        '%s -ב %n במיקום האות',
    'length of %s':
        '%s של אורכו',
    'unicode of %s':
        '%s של יוניקוד המרת',
    'unicode %n as letter':
        'כאות %n יוניקוד',
	
    'is %s a %typ ?':
        '? %typ מסוג %s האם',
    'is %s identical to %s ?':
        '? %s -ל זהה %s',
    'type of %s':
        'סוג של %s',

    // variables:
    'Make a variable':
        'צור משתנה',
    'Variable name':
        'המשתנה שם?',
    'Delete a variable':
        'משתנה מחק',

    'set %var to %s':
        '%s -ל %var שנה',
    'change %var by %n':
        '%n -ב %var שנה',
    'show variable %var':
        '%var הצג',
    'hide variable %var':
        '%var הסתר',
    'script variables %scriptVars':
        '%scriptVars התסריט משתני',

    // lists:
    'list %exp':
        '%exp רשימת',
	
    '%s in front of %l':
        '%l לפני %s',

    'item %idx of %l':
        '%l -ב %idx  איבר',
		
    'all but first of %l':
        '%l של הראשון מהאיבר חוץ הכל',
	
	
    'length of %l':
        '%l של אורכו',
    '%l contains %s':
        '%s את מכיל %l',
	
    'thing':
        'משהוא',
    'add %s to %l':
        '%l -ל %s הוסף',
    'delete %ida of %l':
        '%l -מ %ida מחק',
    'insert %s at %idx of %l':
        '%l של %idx במיקום %s הכנס',
    'replace item %idx of %l with %s':
        '%s ב- %l של %idx איבר החלף',

	
    // other
    'Make a block':
        'בלוק צור',

    // menus
    // snap menu
    'About...':
        'סנפ אודות',
    'Snap! website':
        'הבית אתר  Snap!',
    'Download source':
        'מקור קוד הורד',
    'Switch back to user mode':
        'משתמש למוד חזור',
	
    'Reference manual':
        ' משתמש מדריך',
	
/*	
    'disable deep-Morphic\ncontext menus\nand show user-friendly ones':
        'disabilita i menu contestuali\ndi Morphic e mostra quelli user-friendly',
    'Switch to dev mode':
        'פיתוח למוד עבור',
    'enable Morphic\ncontext menus\nand inspectors,\nnot user-friendly!':
        'Abilita i menu contestuali\ndi Morphic e l\'inspector,\n non user-friendly',
*/
    // project menu
    'Project notes...':
        'הערות',
    'New':
        'חדש',
    'Open...':
        'פתח',
    'Save':
        'שמור',
    'Save As...':
        'בשם שמירה',
    'Import...':
        'ייבא',
    'file menu import hint':
        'פרוייקט ייבא\nהדפדפנים בכל נתמך לא' ,
    'Export project as plain text...':
        'טקסט בפורמט פרוייקט ייצא',
    'Export project...':
        'פרוייקט ייצא',
    'show project data as XML\nin a new browser window':
        ' כדף פרויקט הצג \n xml חדש דפדפן בחלון',
    'Export blocks...':
        'בלוקים ייצא',
    'show global custom block definitions as XML\nin a new browser window':
        'mostra in formato XML le definizione dei nuovi blocchi\nin una nuova finestra del browser',
    'Import tools':
        'כלים ייבא',
    'load the official library of\npowerful blocks':
        'הרישמית הספריה את טען \n סנאפ כלי של',
    'Libraries...':
        'ספריות',
    // cloud menu
    'Login...':
        'הכנס',
    'Signup...':
        'הרשם',
    'Reset Password...':
        'אפס סיסמה',
   'Sounds...':
        'קולות',
   'Libraries':
        'ספריות',
   'Import':
        'ייבא',
   'Export':
        'ייצא',

    // settings menu
    'Language...':
        'שפה',
    'Zoom blocks...':
        'בלוקים גודל',
    'Stage size...':
        'במה גודל',
    'Flat design':
        'שטוח מראה',
    'Blurred shadows':
        'מטושטש צל',
    'uncheck to use solid drop\nshadows and highlights':
        'disabilitare per visualizzare ombreggiature\ned evidenziature solide',
    'check to use blurred drop\nshadows and highlights':
        'abilitare per visualizzare ombreggiature\ned evidenziature attenuate',
    'Zebra coloring':
        'Colorazione alternata',
    'check to enable alternating\ncolors for nested blocks':
        'abilitare per visualizzare a colori\nalternati i blocchi annidati',
    'uncheck to disable alternating\ncolors for nested block':
        'disabilitare per non visualizzare a colori\nalternati i blocchi annidati',

    'Dynamic input labels':
        'Etichette degli input dinamiche',
    'uncheck to disable dynamic\nlabels for variadic inputs':
        'disabilitare per non avere etichette\ndinamiche per input variabili',
    'check to enable dynamic\nlabels for variadic inputs':
        'abilitare per avere etichette\ndinamiche per input variabili',

    'Prefer empty slot drops':
        'Favorisci l\'aggancio a slot vuoti',
    'settings menu prefer empty slots hint':
        'abilitare per favorire l\'inserimento in slot vuoti\nquando si trascinano e rilasciano dei reporter',
    'uncheck to allow dropped\nreporters to kick out others':
        'disabilitare per permettere agli slot di espellere\ni reporter inclusi al loro interno',
    'Long form input dialog':
        'מלא באורך נתונים חלון',
    'check to always show slot\ntypes in the input dialog':
        'abilitare per mostrare sempre i tipi degli slot\nnella finestra di creazione degli input',
    'uncheck to use the input\ndialog in short form':
        'disabilitare per non mostrare automaticamente i tipi degli slot\nnella finestra di creazione degli input',
    'Virtual keyboard':
        'Tastiera virtuale',
    'uncheck to disable\nvirtual keyboard support\nfor mobile devices':
        'disabilitare per non usare il supporto\ndella tastiera virtuale con i dispositivi mobili',
    'check to enable\nvirtual keyboard support\nfor mobile devices':
        'לאפשר מנת על סמן\ntastiera virtuale con i dispositivi mobili',
    'Input sliders':
        'נתונים בהכנסת סליידרים',
    'uncheck to disable\ninput sliders for\nentry fields':
        'disabilitare per non visualizzare gli slider\n per inserire valori numerici',
    'check to enable\ninput sliders for\nentry fields':
        'abilitare per visualizzare gli slider\n per inserire valori numerici',
    'Clicking sound':
        'Click di aggancio dei blocchi',
    'uncheck to turn\nblock clicking\nsound off':
        'disabilitare per non riprodurre il suono di aggancio dei blocchi',
    'check to turn\nblock clicking\nsound on':
        'abilitare per riprodurre il suono di aggancio dei blocchi',
    'Animations':
        'Animazioni',
    'uncheck to disable\nIDE animations':
        'disabilitare per non consentire\nanimazioni dell\u0027IDE',
    'Turbo mode':
        'טורבו מוד',
    'check to prioritize\nscript execution':
        'סקריפט לתעדף מנת על סמן',
    'uncheck to run scripts\nat normal speed':
        'רגילה במהירות סקריפט להריץ מנת על סימון בטל',
    'check to enable\nIDE animations':
        'אנימציות לאפשר מנת על סמן IDE',
    'Thread safe scripts':
        'טרדים איבטוח',
    'uncheck to allow\nscript reentrancy':
        'disabilitare per permettere agli script di rientrare',
    'check to disallow\nscript reentrancy':
        'abilitare per impedire agli script di rientrare',
    'Prefer smooth animations':
        'חלקה לאנימציה עדיפות',
    'uncheck for greater speed\nat variable frame rates':
        'ביצוע למהירות עדיפות',
    'check for smooth, predictable\nanimations across computers':
        'אנימציה לאפשר מנת על סמן',

    // inputs
    'with inputs':
        'כניסות עם',
    'input names:':
        'הכניסות שמות:',
    'Input Names:':
        'משתנים שמות עם:',

    // context menus:
    'help':
        'עזרה',

    // blocks:
    'help...':
        'עזרה',
    'relabel...':
        'שם שנה',
    'duplicate':
        'שכפל',
    'make a copy\nand pick it up':
        'העתק צור',
    'only duplicate this block':
        'זה בלוק רק שכפל',
    'delete':
        'מחק',
    'script pic...':
        'התסריט תמונת',
    'open a new window\nwith a picture of this script':
        'התסריט תמונת עם חדש חלון פתח',
    'ringify':
        'אחד',
    'unringify':
        'איחוד בטל',

    // custom blocks:
    'delete block definition...':
        'הבלוק הגדרת בטל',
    'edit...':
        'ערוך',

    // sprites:
    'edit':
        'ערוך',
    'export...':
        'יצא',

    // stage:
    'show all':
        'הכל הצג',
    'pic...':
        'הרמה של תמונה שמור',
    'open a new window\nwith a picture of the stage':
        'הרמה של התמונה עם חדש חלון פתח',

    // scripting area
    'clean up':
        'נקה',
    'arrange scripts\nvertically':
        'אנכית בצורה תסריטים שנה',
    'add comment':
        'הערה הוסף',
    'make a block...':
        'בלוק צור',

    // costumes
    'rename':
        'שם שנה',
    'export':
        'יצא',
    'rename costume':
        'התחפושת שם שנה',

    // sounds
    'Play sound':
        'הקול נגן',
    'Stop sound':
        'הקול עצור',
    'Stop':
        'עצור',
    'Play':
        'נגן',
    'rename sound':
        'קול קובץ שם שנה ',

    // dialogs
    // buttons
    'OK':
        'אוקי',
    'Cancel':
        'בטל',
    'Yes':
        'כן',
    'No':
        'לא',

    // help
    'Help':
        'עזרה',

    // zoom blocks
    'Zoom blocks':
        'בלוקים הגדל',
    'build':
        'בנה',
    'your own':
        'בעצמך',
    'blocks':
        'בלןקים',
    'normal (1x)':
        'רגיל (1x)',
    'demo (1.2x)':
        'הדגמה (1.2x)',
    'presentation (1.4x)':
        'מצגת (1.4x)',
    'big (2x)':
        'גדול  (2x)',
    'huge (4x)':
        'גדול מאוד (4x)',
    'giant (8x)':
        'ענקי (8x)',
    'monstrous (10x)':
        'מפלצתי (10x)',

    // Project Manager
    'Untitled':
        'ללא שם',
    'Open Project':
        'פתח פרוייקט',
    '(empty)':
        '(ריק)',
    'Saved!':
        'נשמר!',
    'Delete Project':
        'מחק פרוייקט',
    'Are you sure you want to delete':
        'האם בטוח ?',
    'rename...':
        'שנה שם',

    // costume editor
    'Costume Editor':
        'תחפושת תמונת',
    'click or drag crosshairs to move the rotation center':
        'clicca e trascina la croce per spostare il centro di rotazione',

    // project notes
    'Project Notes':
        'לפרוייקט הערות',

    // new project
    'New Project':
        'חדש פרוייקט',
    'Replace the current project with a new one?':
        '? בחדש נוכחי פרוייקט החלף',

    // open project
    'Open Projekt':
        'פרוייקט פתח',

    // save project
    'Save Project As...':
        'בשם פרוייקט שמור',

    // export blocks
    'Export blocks':
        'בלוקים ייצא',
    'Import blocks':
        'חשובים בלוקים',
    'this project doesn\'t have any\ncustom global blocks yet':
        'in questo progetto non sono stati ancora definiti dei nuovi blocchi',
    'select':
        'בחר',
    'all':
        'הכל',
    'none':
        'כלום',

    // variable dialog
    'for all sprites':
        'הספרייטים לכל',
    'for this sprite only':
        'בלבד הנוכחי לספרייט',

    // block dialog
    'Change block':
        'בלוק שנה',
    'Command':
        'פקדה',
    'Reporter':
        'מדווח',
    'Predicate':
        'תנאי',

    // block editor
    'Block Editor':
        'Editor di Blocchi',
    'Apply':
        'Applica',

    // block deletion dialog
    'Delete Custom Block':
        'Cancella Blocco',
    'block deletion dialog text':
        'Sei sicuro di voler cancellare questo blocco\n' +
            'e tutte le sue occorrenze?',

    // input dialog
    'Create input name':
        'Crea parametro',
    'Edit input name':
        'Modifica parametro',
    'Edit label fragment':
        'Modifica porzione di etichetta',
    'Title text':
        'Parole della definizione',
    'Input name':
        'Parametro',
    'Delete':
        'Cancella',
    'Object':
        'Oggetto',
    'Number':
        'Numero',
    'Text':
        'Testo',
    'List':
        'Lista',
    'Any type':
        'Qualunque tipo',
    'Boolean (T/F)':
        'Booleano (V/F)',
    'Command\n(inline)':
        'Comando\n(in linea)',
    'Command\n(C-shape)':
        'Comando \n(a forma di C)',
    'Any\n(unevaluated)':
        'Qualunque\n(non valutato)',
    'Boolean\n(unevaluated)':
        'Booleano\n(non valutato)',
    'Single input.':
        'Un solo valore.',
    'Default Value:':
        'Valore predefinito:',
    'Multiple inputs (value is list of inputs)':
        'Molti valori (il valore \u00E8 una lista di argomenti)',
    'Upvar - make internal variable visible to caller':
        'Rendi il parametro visibile all\'esterno',

    // About Snap
    'About Snap':
        'סנפ אודות',
    'Back...':
        'אחורה',
    'License...':
        'רשיון',
    'Modules...':
        'מודולים',
    'Credits...':
        'תודות',
    'Translators...':
        'מתרגמים',
    'License':
        'רשיון',
    'current module versions:':
        'מודולים נוכחים:',
    'Contributors':
        'תורמים:',
    'Translations':
        'תרגומים',

    // variable watchers
    'normal':
        'רגיל',
    'large':
        'גדול',
    'slider':
        'סמן',
    'slider min...':
        'מזערי ערך',
    'slider max...':
        'מירבי ערך',
    'import...':
        'ייבא',
    'Slider minimum value':
        'מינימלי ערך',
    'Slider maximum value':
        'מקסימלי ערך',

    // list watchers
    'length: ':
        'אורך: ',

    // coments
    'add comment here...':
        'כאן הערות',

    // drow downs
    // directions
    '(90) right':
        '(90) ימינה',
    '(-90) left':
        '(-90) שמאלה',
    '(0) up':
        '(0) מעלה',
    '(180) down':
        '(180) מטה',

    // collision detection
    'mouse-pointer':
        'עכבר קצה',
    'edge':
        'קצה',
    'pen trails':
        'עט סימני',

    // costumes
    'Turtle':
        'צב',
    'Empty':
        'ריק',

    // graphical effects
    'ghost':
        'צל',

    // keys
    'space':
        'רווח',
    'up arrow':
        'מעלה חץ',
    'down arrow':
        'מטה חץ',
    'right arrow':
        'ימינה חץ',
    'left arrow':
        'שמאלה חץ',
    'a':
        'a',
    'b':
        'b',
    'c':
        'c',
    'd':
        'd',
    'e':
        'e',
    'f':
        'f',
    'g':
        'g',
    'h':
        'h',
    'i':
        'i',
    'j':
        'j',
    'k':
        'k',
    'l':
        'l',
    'm':
        'm',
    'n':
        'n',
    'o':
        'o',
    'p':
        'p',
    'q':
        'q',
    'r':
        'r',
    's':
        's',
    't':
        't',
    'u':
        'u',
    'v':
        'v',
    'w':
        'w',
    'x':
        'x',
    'y':
        'y',
    'z':
        'z',
    '0':
        '0',
    '1':
        '1',
    '2':
        '2',
    '3':
        '3',
    '4':
        '4',
    '5':
        '5',
    '6':
        '6',
    '7':
        '7',
    '8':
        '8',
    '9':
        '9',

    // messages
    'new...':
        'חדש',

    // math functions
    'abs':
        'מוחלט ערך',
    'sqrt':
        'ריבועי שורש',
    'sin':
        'סינוס',
    'cos':
        'קוסינוס',
    'tan':
        'טנגנס',
    'asin':
        'ארקסינוס',
    'acos':
        'ארקוסינוס',
    'atan':
        'ארקטנגנס',
    'ln':
        'לן',
    'e^':
        'e בחזקה',
    'floor':
        'השלם החלק',

    // data types
    'number':
        'מספר',
    'text':
        'טקסט',
    'Boolean':
        'בוליאני',
    'list':
        'רשימה',
    'command':
        'פקודה',
    'reporter':
        'חישוב',
    'predicate':
        'תנאי',

    // list indices
    'last':
        'אחרון',
    'any':
       'כלשהוא',
    'Opening project...':
        'פרויקט פותח',
	
	'You are not logged in':
	 ' תחילה כניסה בצע נא ',  
	
};
