// Roman numerals

function toRoman(num) {
				var roman = " ",
					numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
					romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
				for (var i = 0; i < numbers.length; i++) {
					while (num >= numbers[i]) {
						roman = roman + romanNumeral[i];
						num = num - numbers[i];
					}
				}
				return(roman);
			}


// Binary

function toBinary(num) {
				var binary = (num >>> 0).toString(2);
				return(binary)
				}






