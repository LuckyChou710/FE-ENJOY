const str1 = 'lucky';
const str2 = 'chou';

/**
 * charAt(index)
 * 返回指定索引的字符
 * 如果指定的 index 值超出了该范围，则返回一个空字符串
 */
console.log(str1.charAt(0));
console.log(str1.charAt(10));

/**
 * org.concat(str1,str2,...)
 * 拼接字符串形成一个新的字符串并返回 不改变原字符串
 * mdn官网建议使用 +/+= 代替此api来提升性能
 */

console.log(str1.concat(str2));

/**
 * endsWith
 */

/**
 * includes
 */

/**
 * indexOf
 */

/**
 * padEnd
 * padStart
 * 填充字符达到指定长度 不修改原来的字符串
 */

console.log('123'.padEnd('5', 0));
console.log('123'.padStart('5', 0));

console.log(str1.padEnd('10', '0'));
console.log(str1);

/**
 * repeat
 */

console.log('1'.repeat(5));

/**
 * replace
 */

/**
 * slice(beginIndex[, endIndex]) beginIndex默认为0
 */

/**
 * split
 */

/**
 * toLowerCase / toUpperCase
 */

/**
 * trim
 * trimEnd
 * trimStart
 */
