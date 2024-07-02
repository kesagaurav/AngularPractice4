{{ expression | currency:currencyCode:symbol:digitInfo:locale }}


<expression:currnecy:currencycode:symbol:digitalinfo:locale



currencyCode is the code to display such as INR for the rupee, EUR for the euro, etc.

symbol is a Boolean value that represents whether to display currency symbol or code.

code: displays code instead of a symbol such as USD, EUR, etc.

symbol (default): displays symbol such as $ etc.

symbol-narrow: displays the narrow symbol of currency. Some countries have two symbols for their currency, regular and narrow. For example, the Canadian Dollar CAD has the symbol as CA$ and symbol-narrow as $.

digitInfo is a string in the following format

{minIntegerDigits}.{minFractionDigits} - {maxFractionDigits}

minIntegerDigits is the minimum integer digits to display. The default value is 1

minFractionDigits is the minimum number of digits to display after the fraction. The default value is 0

maxFractionDigits is the maximum number of digits to display after the fraction. The default value is 3

locale is used to set the format followed by a country/language. To use a locale,  the locale needs to be registered in the root module.


{{ expression | date:format:timezone:locale }}
'medium' :equivalent to 'MMM d, y, h:mm:ss a' (e.g. Jan 31, 2018, 11:05:04 AM)

'short': equivalent to 'M/d/yy, h:mm a' (e.g. 1/31/2018, 11:05 AM)

'long': equivalent to 'MMMM d, y, h:mm:ss a z' (e.g. January 31, 2018 at 11:05:04 AM GMT+5)

'full': equivalent to 'EEEE, MMMM d, y, h:mm:ss a zzzz' (e.g. Wednesday, January 31, 2018 at 11:05:04 AM GMT+05:30)

'fullDate' : equivalent to 'EEEE, MMMM d, y' (e.g. Wednesday, January 31, 2018)

'longDate' : equivalent to 'MMMM d, y' (e.g. January 31, 2018)

'mediumDate' : equivalent to 'MMM d, y' (e.g. Jan 31, 2018)

'shortDate' : equivalent to 'M/d/yy' (e.g. 1/31/18)

'mediumTime' : equivalent to 'h:mm:ss a' (e.g. 11:05:04 AM)

'shortTime' :  equivalent to 'h:mm a' (e.g. 11:05 AM)

'longTime': equivalent to 'h:mm a' (e.g. 11:05:04 AM GMT+5)

'fullTime': equivalent to 'h:mm:ss a zzzz' (e.g. 11:05:04 AM GMT+05:30)
