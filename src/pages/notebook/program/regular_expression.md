---
title: "正则表达式"
date: "2020-06-10T06:48:00.000Z"
description: "正则表达式的使用"
type: "编程"
---

在对字符串进行内容解析时，优先使用正则表达式，比直接切割字符串会好用很多。以前总觉得难，用了之后发现好像也不难啊，还挺有趣。

先摆一个学习正则表达式比较有用的网站：https://regex101.com

### 定义
正则表达式(regular expression)描述了一种字符串匹配的模式（pattern），可以用来检查一个串是否含有某种子串、将匹配的子串替换或者从某个串中取出符合某个条件的子串等。
根据制定的规则构造正则表达式，就能从字符串中提取所有符合规则的字段。
正则表达式由普通字符和特殊字符（元字符）组成。

------------------------

### 普通字符
即平时使用的字符，相当于常量，自己代表自己本身

------------------------

### 元字符
不是做为它本身出现，而是有其他的含义的字符。
<table class="table table-bordered table-striped">
	<thead class="thead-light"><tr><th class="text-center" width="15%">字符</th><th>描述</th></tr></thead>
	<tbody>
		<tr>
			<td class="text-center">\</td>
    	<td>和下一字符合并组成特殊字符、原义字符、向后引用或八进制转义符</td>
		</tr>
		<tr>
			<td class="text-center">^</td>
    	<td>匹配起始位置。如果设置了RegExp对象的Multiline属性，也匹配<code>'\n'</code>或<code>'\r'</code>之后的位置</td>
		</tr>
		<tr>
			<td class="text-center">$</td>
    	<td>匹配结束位置。如果设置了RegExp对象的Multiline属性，也匹配<code>'\n'</code>或<code>'\r'</code>之前的位置</td>
		</tr>
		<tr>
			<td class="text-center">*</td>
    	<td>匹配前面的子表达式零次或多次，等价于<code>{0,}</code></td>
		</tr>
		<tr>
			<td class="text-center">+</td>
    	<td>匹配前面的子表达式一次或多次，等价于<code>{1,}</code></td>
		</tr>
		<tr>
			<td class="text-center">?</td>
    	<td>匹配前面的子表达式零次或一次，等价于<code>{0,1}</code></td>
		</tr>
		<tr>
			<td class="text-center">{n}</td>
    	<td>匹配前面的子表达式n次，n为非负整数</td>
		</tr>
		<tr>
			<td class="text-center">{n,}</td>
    	<td>匹配前面的子表达式至少n次，n为非负整数</td>
		</tr>
		<tr>
			<td class="text-center">{n,m}</td>
    	<td>匹配前面的子表达式次数在n次到m次之间，m、n均为非负整数，且m<=n</td>
		</tr>
		<tr>
			<td class="text-center align-middle">?</td>
    	<td>
				非贪婪模式匹配，当该字符紧跟其他限制符<code>(*, +, ?, {n}, {n,}, {n,m})</code>后面时，尽可能少的匹配所搜索的字符串。<br>
				例如，对于字符串<code>'oooo'</code>，<code>'o+?'</code>将匹配单个<code>'o'</code>，而<code>'o+'</code>将匹配所有<code>'o'</code>
			</td>
		</tr>
		<tr>
			<td class="text-center">.</td>
    	<td>匹配除换行符<code>（\n、\r）</code>外的任何单个字符</td>
		</tr>
		<tr>
			<td class="text-center">(pattern)</td>
    	<td>匹配pattern并获取这一匹配的实际内容</td>
		</tr>
		<tr>
			<td class="text-center">(?:pattern)</td>
    	<td>匹配pattern但不获取匹配结果</td>
		</tr>
		<tr>
			<td class="text-center align-middle">(?=pattern)</td>
    	<td>
					正向肯定预查，在任何匹配pattern的字符串开始处匹配查找字符串，非获取匹配。<br>
					例如，"<code>Windows(?=95|98|NT|2000)</code>"能匹配"<code>Windows2000</code>"中的"<code>Windows</code>"，但不能匹配"<code>Windows3.1</code>"中的"<code>Windows</code>"。<br>
					预查不消耗字符，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。
			</td>
		</tr>
		<tr>
			<td class="text-center align-middle">(?!pattern)</td>
    	<td>
				正向否定预查，在任何不匹配pattern的字符串开始处匹配查找字符串。非获取匹配。<br>
				例如，<code>"Windows(?!95|98|NT|2000)"</code>能匹配<code>"Windows3.1"</code>中的<code>"Windows"</code>，不能匹配<code>"Windows2000"</code>中的<code>"Windows"</code>。<br>
				预查不消耗字符，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。
			</td>
		</tr>
		<tr>
			<td class="text-center align-middle">(?&lt;=pattern)</td>
			<td>
				反向(look behind)肯定预查，与正向肯定预查方向相反。<br>
				例如，"<code>(?&lt;=95|98|NT|2000)Windows</code>"能匹配"<code>2000Windows</code>"中的"<code>Windows</code>"，不能匹配"<code>3.1Windows</code>"中的"<code>Windows</code>"。
			</td>
		</tr>
		<tr>
			<td class="text-center align-middle">(?&lt;!pattern)</td>
			<td>
				反向否定预查，与正向否定预查类似，只是方向相反。<br>
				例如<code>'(?&lt;!95|98|NT|2000)Windows'</code>能匹配<code>'3.1Windows'</code>中的<code>'Windows'</code>，不能匹配<code>'2000Windows'</code>中的<code>'Windows'</code>。
			</td>
		</tr>
		<tr>
			<td class="text-center align-middle">x|y</td>
    	<td>匹配<code> x </code>或<code> y </code></td>
		</tr>
		<tr>
			<td class="text-center align-middle">[xyz]</td>
    	<td>字符集合，匹配所包含的任意一个字符</td>
		</tr>
		<tr>
			<td class="text-center align-middle">[^xyz]</td>
    	<td>负值字符集合，匹配未包含的任意字符</td>
		</tr>
		<tr>
			<td class="text-center align-middle">[a-z]</td>
    	<td>字符范围，匹配指定范围内的任意字符。<code>'[a-z]'</code>可以匹配<code>'a'</code>到<code>'z'</code>范围内的任意小写字母字符。</td>
		</tr>
		<tr>
			<td class="text-center align-middle">[^a-z]</td>
    	<td>负值字符范围。匹配任何不在指定范围内的任意字符</td>
		</tr>
		<tr>
			<td class="text-center align-middle">\b</td>
    	<td>
				匹配一个单词边界，也就是指单词和空格间的位置。<br>
				例如，<code>'er\b'</code> 可以匹配<code>'never'</code> 中的 <code>'er'</code>，不能匹配 <code>'verb'</code> 中的 <code>'er'</code>。
			</td>
		</tr>
		<tr>
			<td class="text-center align-middle">\B</td>
    	<td>
				匹配非单词边界。<br>
				例如，<code>'er\b'</code> 可以匹配<code>'verb'</code> 中的 <code>'er'</code>，不能匹配 <code>'never'</code> 中的 <code>'er'</code>。
			</td>
		</tr>
		<tr>
			<td class="text-center align-middle">\cx</td>
    	<td>
				匹配由 <code>x</code> 指明的控制字符。<br>
				例如， <code>\cM</code> 匹配一个 <code>Control-M</code> 或回车符。<br>
				<code>x</code> 的值必须为 <code>A-Z</code> 或 <code>a-z</code> 之一。否则，将 <code>c</code> 视为一个原义的 <code>'c'</code> 字符。
			</td>
		</tr>
		<tr>
			<td class="text-center align-middle">\d</td>
    	<td>匹配一个数字字符。等价于 <code>[0-9]</code>。</td>
		</tr>
		<tr>
			<td class="text-center align-middle">\D</td>
    	<td>匹配一个非数字字符。等价于 <code>[^0-9]</code>。</td>
		</tr>
		<tr>
			<td class="text-center align-middle">\f</td>
    	<td>匹配一个换页符。等价于 <code>\x0c</code> 和 <code>\cL</code>。</td>
		</tr>
		<tr>
			<td class="text-center align-middle">\n</td>
    	<td>匹配一个换行符。等价于 <code>\x0a</code> 和 <code>\cJ</code>。</td>
		</tr>
		<tr>
			<td class="text-center align-middle">\r</td>
    	<td>匹配一个回车符。等价于 <code>\x0d</code> 和 <code>\cM</code>。</td>
		</tr>
		<tr>
			<td class="text-center align-middle">\s</td>
    	<td>匹配任何空白字符，包括空格、制表符、换页符等等。等价于 <code>[ \f\n\r\t\v]</code>。</td>
		</tr>
		<tr>
			<td class="text-center align-middle">\S</td>
    	<td>匹配任何非空白字符。等价于 <code>[^ \f\n\r\t\v]</code>。</td>
		</tr>
		<tr>
			<td class="text-center align-middle">\t</td>
    	<td>匹配一个制表符。等价于 <code>\x09</code> 和 <code>\cI</code>。</td>
		</tr>
		<tr>
			<td class="text-center align-middle">\v</td>
    	<td>匹配一个垂直制表符。等价于 <code>\x0b</code> 和 <code>\cK</code>。</td>
		</tr>
		<tr>
			<td class="text-center align-middle">\w</td>
    	<td>匹配字母、数字、下划线。等价于 <code>[A-Za-z0-9_]</code>。</td>
		</tr>
		<tr>
			<td class="text-center align-middle">\W</td>
    	<td>匹配非字母、数字、下划线。等价于 <code>[^A-Za-z0-9_]</code>。</td>
		</tr>
		<tr>
			<td class="text-center align-middle">\xn</td>
    	<td>
				匹配 n（十六进制转义值，且为确定的两个数字长）。<br>
				例如，<code>'\x41'</code> 匹配 <code>'A'</code>；<code>'\x041'</code> 等价于 <code>'\x04'&'1'</code>。<br>
				正则表达式中可以使用 ASCII 编码。
			</td>
		</tr>
		<tr>
			<td class="text-center align-middle">\num</td>
    	<td>匹配 num，其中 num 是一个正整数。对所获取的匹配的引用。例如，'(.)\1' 匹配两个连续的相同字符。</td>
		</tr>
		<tr>
			<td class="text-center align-middle">\n</td>
    	<td>标识一个八进制转义值或一个向后引用。如果 \n 之前至少 n 个获取的子表达式，则 n 为向后引用。否则，如果 n 为八进制数字 (0-7)，则 n 为一个八进制转义值。</td>
		</tr>
		<tr>
			<td class="text-center align-middle">\nm</td>
    	<td>标识一个八进制转义值或一个向后引用。如果 \nm 之前至少有 nm 个获得子表达式，则 nm 为向后引用。如果 \nm 之前至少有 n 个获取，则 n 为一个后跟文字 m 的向后引用。如果前面的条件都不满足，若 n 和 m 均为八进制数字 (0-7)，则 \nm 将匹配八进制转义值 nm。</td>
		</tr>
		<tr>
			<td class="text-center align-middle">\nml</td>
    	<td>如果 n 为八进制数字 (0-3)，且 m 和 l 均为八进制数字 (0-7)，则匹配八进制转义值 nml。</td>
		</tr>
		<tr>
			<td class="text-center align-middle">\un</td>
    	<td>匹配 n，其中 n 是一个用四个十六进制数字表示的 Unicode 字符。例如， \u00A9 匹配版权符号 (?)。</td>
		</tr>
	</tbody>
</table>

------------------------

### 运算符优先级
* 正则表达式从左到右计算，优先级顺序与算数表达式相近。

<table class="table table-bordered table-striped">
	<thead class="thead-light"><tr><th class="text-center" width="25%">运算符</th><th>描述</th></tr></thead>
	<tbody>
		<tr>
			<td class="text-center align-middle">\</td>
    	<td>转义符</td>
		</tr>
		<tr>
			<td class="text-center align-middle">(), (?:), (?=), []</td>
    	<td>圆括号和方括号</td>
		</tr>
		<tr>
			<td class="text-center align-middle">*, +, ?, {n}, {n,}, {n,m}</td>
    	<td>限定符</td>
		</tr>
		<tr>
			<td class="text-center align-middle">^, $, \任何元字符、任何字符</td>
    	<td>定位点和序列（即：位置和顺序）</td>
		</tr>
		<tr>
			<td class="text-center align-middle">|</td>
    	<td>
				替换，"或"操作<br>
				字符具有高于替换运算符的优先级，使得"m|food"匹配"m"或"food"。若要匹配"mood"或"food"，请使用括号创建子表达式，从而产生"(m|f)ood"。
			</td>
		</tr>
	</tbody>
</table>