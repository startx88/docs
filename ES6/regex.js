/**
 * Regular expression's are patter used to match char combination in string.
 *
 *  [abc] 	:   Find any character between the brackets
 *  [^abc]	:   Find any character NOT between the brackets
 *  [0-9]	  :   Find any character between the brackets (any digit)
 *  [^0-9]	:   Find any character NOT between the brackets (any non-digit)
 *  (x|y)	  :   Find any of the alternatives specified
 *
 *
 * * Metacharacters:=>
 * .        :   Find a single character, except newline or terminator.
 * \w       :   Find a word character
 * \W       :   Find non-word characters
 * \d       :   Find a digit
 * \D       :   Find any not digit character
 * \s       :   Find spaces
 * \S       :   Find non space
 * \b       :   Find a match at the beginning/end of word
 * \B       :   Find a match, but not beginning /end of a word
 * \0       :   Find a NULL character
 * \n       :   Find a new line character
 * \f	      :   Find a form feed character
 * \r	      :   Find a carriage return character
 * \t	      :   Find a tab character
 * \v	      :   Find a vertical tab character
 * \xxx	    :   Find the character specified by an octal number xxx
 * \xdd	    :   Find the character specified by a hexadecimal number dd
 * \udddd	  :   Find the Unicode character specified by a hexadecimal number dddd
 *
 * * Quantifiers
 * n+       :   Matches any string that contain at least one n.
 * n*       :   Matches any string that contain zero or more occurrence of n.
 * n?       :   Matches any string that contain zero or one occurrence of n
 * n{X}     :   Matches any string that contains a sequence of X n's
 * n{X,Y}   :   Matches any string that contains a sequence of X to y n's
 * n$       :   Matches any string with n at the end of it.
 * ^n       :   Matches any string with n at the beginning of it.
 * ?=n      :   Matches any string that is followed by a specific string n.
 * ?!n      :   Matches any string that is not followed by specific string n.
 */