(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{424:function(t,_,s){"use strict";s.r(_);var v=s(7),a=Object(v.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("ul",[_("li",[_("a",{attrs:{href:"#sql%E6%89%A7%E8%A1%8C%E9%A1%BA%E5%BA%8F"}},[t._v("SQL执行顺序")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E4%BD%BF%E7%94%A8"}},[t._v("正则表达式使用")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#mysql-%E5%B8%B8%E7%94%A8%E5%87%BD%E6%95%B0"}},[t._v("MySQL 常用函数")])])]),t._v(" "),_("h2",{attrs:{id:"sql执行顺序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sql执行顺序"}},[t._v("#")]),t._v(" SQL执行顺序")]),t._v(" "),_("p",[t._v("编写顺序")]),t._v(" "),_("div",{staticClass:"language-SQL line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DISTINCT")]),t._v("\n\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" list"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("\n\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("left_table"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("join_type"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v("\n\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("right_table"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("join_condition"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v("\n\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("where_condition"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v("\n\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("group_by_list"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HAVING")]),t._v("\n\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("having_condition"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v("\n\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("order_by_condition"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v("\n\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("limit_params"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br"),_("span",{staticClass:"line-number"},[t._v("12")]),_("br"),_("span",{staticClass:"line-number"},[t._v("13")]),_("br"),_("span",{staticClass:"line-number"},[t._v("14")]),_("br"),_("span",{staticClass:"line-number"},[t._v("15")]),_("br"),_("span",{staticClass:"line-number"},[t._v("16")]),_("br")])]),_("p",[t._v("执行顺序")]),t._v(" "),_("div",{staticClass:"language-sql line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("left_table"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" \t\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("join_condition"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("join_type"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\t\t"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v("\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("right_table"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v("\t\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("where_condition"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" \t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("group_by_list"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HAVING")]),t._v("\t\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("having_condition"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DISTINCT")]),t._v("\t\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" list"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v("\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("order_by_condition"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v("\t\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("limit_params"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br"),_("span",{staticClass:"line-number"},[t._v("12")]),_("br"),_("span",{staticClass:"line-number"},[t._v("13")]),_("br"),_("span",{staticClass:"line-number"},[t._v("14")]),_("br"),_("span",{staticClass:"line-number"},[t._v("15")]),_("br"),_("span",{staticClass:"line-number"},[t._v("16")]),_("br"),_("span",{staticClass:"line-number"},[t._v("17")]),_("br")])]),_("h2",{attrs:{id:"正则表达式使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式使用"}},[t._v("#")]),t._v(" 正则表达式使用")]),t._v(" "),_("p",[t._v("正则表达式（Regular Expression）是指一个用来描述或者匹配一系列符合某个句法规则的字符串的单个字符串。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("符号")]),t._v(" "),_("th",[t._v("含义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("^")]),t._v(" "),_("td",[t._v("在字符串开始处进行匹配")])]),t._v(" "),_("tr",[_("td",[t._v("$")]),t._v(" "),_("td",[t._v("在字符串末尾处进行匹配")])]),t._v(" "),_("tr",[_("td",[t._v(".")]),t._v(" "),_("td",[t._v("匹配任意单个字符, 包括换行符")])]),t._v(" "),_("tr",[_("td",[t._v("[...]")]),t._v(" "),_("td",[t._v("匹配出括号内的任意字符")])]),t._v(" "),_("tr",[_("td",[t._v("[^...]")]),t._v(" "),_("td",[t._v("匹配不出括号内的任意字符")])]),t._v(" "),_("tr",[_("td",[t._v("a*")]),t._v(" "),_("td",[t._v("匹配零个或者多个a(包括空串)")])]),t._v(" "),_("tr",[_("td",[t._v("a+")]),t._v(" "),_("td",[t._v("匹配一个或者多个a(不包括空串)")])]),t._v(" "),_("tr",[_("td",[t._v("a?")]),t._v(" "),_("td",[t._v("匹配零个或者一个a")])]),t._v(" "),_("tr",[_("td",[t._v("a1|a2")]),t._v(" "),_("td",[t._v("匹配a1或a2")])]),t._v(" "),_("tr",[_("td",[t._v("a(m)")]),t._v(" "),_("td",[t._v("匹配m个a")])]),t._v(" "),_("tr",[_("td",[t._v("a(m,)")]),t._v(" "),_("td",[t._v("至少匹配m个a")])]),t._v(" "),_("tr",[_("td",[t._v("a(m,n)")]),t._v(" "),_("td",[t._v("匹配m个a 到 n个a")])]),t._v(" "),_("tr",[_("td",[t._v("a(,n)")]),t._v(" "),_("td",[t._v("匹配0到n个a")])]),t._v(" "),_("tr",[_("td",[t._v("(...)")]),t._v(" "),_("td",[t._v("将模式元素组成单一元素")])])])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("select * from emp where name regexp '^T';\n\nselect * from emp where name regexp '2$';\n\nselect * from emp where name regexp '[uvw]';\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br")])]),_("h2",{attrs:{id:"mysql-常用函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql-常用函数"}},[t._v("#")]),t._v(" MySQL 常用函数")]),t._v(" "),_("p",[t._v("数字函数")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("函数名称")]),t._v(" "),_("th",[t._v("作 用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("ABS")]),t._v(" "),_("td",[t._v("求绝对值")])]),t._v(" "),_("tr",[_("td",[t._v("SQRT")]),t._v(" "),_("td",[t._v("求二次方根")])]),t._v(" "),_("tr",[_("td",[t._v("MOD")]),t._v(" "),_("td",[t._v("求余数")])]),t._v(" "),_("tr",[_("td",[t._v("CEIL 和 CEILING")]),t._v(" "),_("td",[t._v("两个函数功能相同，都是返回不小于参数的最小整数，即向上取整")])]),t._v(" "),_("tr",[_("td",[t._v("FLOOR")]),t._v(" "),_("td",[t._v("向下取整，返回值转化为一个BIGINT")])]),t._v(" "),_("tr",[_("td",[t._v("RAND")]),t._v(" "),_("td",[t._v("生成一个0~1之间的随机数，传入整数参数是，用来产生重复序列")])]),t._v(" "),_("tr",[_("td",[t._v("ROUND")]),t._v(" "),_("td",[t._v("对所传参数进行四舍五入")])]),t._v(" "),_("tr",[_("td",[t._v("SIGN")]),t._v(" "),_("td",[t._v("返回参数的符号")])]),t._v(" "),_("tr",[_("td",[t._v("POW 和 POWER")]),t._v(" "),_("td",[t._v("两个函数的功能相同，都是所传参数的次方的结果值")])]),t._v(" "),_("tr",[_("td",[t._v("SIN")]),t._v(" "),_("td",[t._v("求正弦值")])]),t._v(" "),_("tr",[_("td",[t._v("ASIN")]),t._v(" "),_("td",[t._v("求反正弦值，与函数 SIN 互为反函数")])]),t._v(" "),_("tr",[_("td",[t._v("COS")]),t._v(" "),_("td",[t._v("求余弦值")])]),t._v(" "),_("tr",[_("td",[t._v("ACOS")]),t._v(" "),_("td",[t._v("求反余弦值，与函数 COS 互为反函数")])]),t._v(" "),_("tr",[_("td",[t._v("TAN")]),t._v(" "),_("td",[t._v("求正切值")])]),t._v(" "),_("tr",[_("td",[t._v("ATAN")]),t._v(" "),_("td",[t._v("求反正切值，与函数 TAN 互为反函数")])]),t._v(" "),_("tr",[_("td",[t._v("COT")]),t._v(" "),_("td",[t._v("求余切值")])])])]),t._v(" "),_("p",[t._v("字符串函数")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("函数名称")]),t._v(" "),_("th",[t._v("作 用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("LENGTH")]),t._v(" "),_("td",[t._v("计算字符串长度函数，返回字符串的字节长度")])]),t._v(" "),_("tr",[_("td",[t._v("CONCAT")]),t._v(" "),_("td",[t._v("合并字符串函数，返回结果为连接参数产生的字符串，参数可以使一个或多个")])]),t._v(" "),_("tr",[_("td",[t._v("INSERT")]),t._v(" "),_("td",[t._v("替换字符串函数")])]),t._v(" "),_("tr",[_("td",[t._v("LOWER")]),t._v(" "),_("td",[t._v("将字符串中的字母转换为小写")])]),t._v(" "),_("tr",[_("td",[t._v("UPPER")]),t._v(" "),_("td",[t._v("将字符串中的字母转换为大写")])]),t._v(" "),_("tr",[_("td",[t._v("LEFT")]),t._v(" "),_("td",[t._v("从左侧字截取符串，返回字符串左边的若干个字符")])]),t._v(" "),_("tr",[_("td",[t._v("RIGHT")]),t._v(" "),_("td",[t._v("从右侧字截取符串，返回字符串右边的若干个字符")])]),t._v(" "),_("tr",[_("td",[t._v("TRIM")]),t._v(" "),_("td",[t._v("删除字符串左右两侧的空格")])]),t._v(" "),_("tr",[_("td",[t._v("REPLACE")]),t._v(" "),_("td",[t._v("字符串替换函数，返回替换后的新字符串")])]),t._v(" "),_("tr",[_("td",[t._v("SUBSTRING")]),t._v(" "),_("td",[t._v("截取字符串，返回从指定位置开始的指定长度的字符换")])]),t._v(" "),_("tr",[_("td",[t._v("REVERSE")]),t._v(" "),_("td",[t._v("字符串反转（逆序）函数，返回与原始字符串顺序相反的字符串")])])])]),t._v(" "),_("p",[t._v("日期函数")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("函数名称")]),t._v(" "),_("th",[t._v("作 用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("CURDATE 和 CURRENT_DATE")]),t._v(" "),_("td",[t._v("两个函数作用相同，返回当前系统的日期值")])]),t._v(" "),_("tr",[_("td",[t._v("CURTIME 和 CURRENT_TIME")]),t._v(" "),_("td",[t._v("两个函数作用相同，返回当前系统的时间值")])]),t._v(" "),_("tr",[_("td",[t._v("NOW 和  SYSDATE")]),t._v(" "),_("td",[t._v("两个函数作用相同，返回当前系统的日期和时间值")])]),t._v(" "),_("tr",[_("td",[t._v("MONTH")]),t._v(" "),_("td",[t._v("获取指定日期中的月份")])]),t._v(" "),_("tr",[_("td",[t._v("MONTHNAME")]),t._v(" "),_("td",[t._v("获取指定日期中的月份英文名称")])]),t._v(" "),_("tr",[_("td",[t._v("DAYNAME")]),t._v(" "),_("td",[t._v("获取指定曰期对应的星期几的英文名称")])]),t._v(" "),_("tr",[_("td",[t._v("DAYOFWEEK")]),t._v(" "),_("td",[t._v("获取指定日期对应的一周的索引位置值")])]),t._v(" "),_("tr",[_("td",[t._v("WEEK")]),t._v(" "),_("td",[t._v("获取指定日期是一年中的第几周，返回值的范围是否为 0〜52 或 1〜53")])]),t._v(" "),_("tr",[_("td",[t._v("DAYOFYEAR")]),t._v(" "),_("td",[t._v("获取指定曰期是一年中的第几天，返回值范围是1~366")])]),t._v(" "),_("tr",[_("td",[t._v("DAYOFMONTH")]),t._v(" "),_("td",[t._v("获取指定日期是一个月中是第几天，返回值范围是1~31")])]),t._v(" "),_("tr",[_("td",[t._v("YEAR")]),t._v(" "),_("td",[t._v("获取年份，返回值范围是 1970〜2069")])]),t._v(" "),_("tr",[_("td",[t._v("TIME_TO_SEC")]),t._v(" "),_("td",[t._v("将时间参数转换为秒数")])]),t._v(" "),_("tr",[_("td",[t._v("SEC_TO_TIME")]),t._v(" "),_("td",[t._v("将秒数转换为时间，与TIME_TO_SEC 互为反函数")])]),t._v(" "),_("tr",[_("td",[t._v("DATE_ADD 和 ADDDATE")]),t._v(" "),_("td",[t._v("两个函数功能相同，都是向日期添加指定的时间间隔")])]),t._v(" "),_("tr",[_("td",[t._v("DATE_SUB 和 SUBDATE")]),t._v(" "),_("td",[t._v("两个函数功能相同，都是向日期减去指定的时间间隔")])]),t._v(" "),_("tr",[_("td",[t._v("ADDTIME")]),t._v(" "),_("td",[t._v("时间加法运算，在原始时间上添加指定的时间")])]),t._v(" "),_("tr",[_("td",[t._v("SUBTIME")]),t._v(" "),_("td",[t._v("时间减法运算，在原始时间上减去指定的时间")])]),t._v(" "),_("tr",[_("td",[t._v("DATEDIFF")]),t._v(" "),_("td",[t._v("获取两个日期之间间隔，返回参数 1 减去参数 2 的值")])]),t._v(" "),_("tr",[_("td",[t._v("DATE_FORMAT")]),t._v(" "),_("td",[t._v("格式化指定的日期，根据参数返回指定格式的值")])]),t._v(" "),_("tr",[_("td",[t._v("WEEKDAY")]),t._v(" "),_("td",[t._v("获取指定日期在一周内的对应的工作日索引")])])])]),t._v(" "),_("p",[t._v("聚合函数")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("函数名称")]),t._v(" "),_("th",[t._v("作用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("MAX")]),t._v(" "),_("td",[t._v("查询指定列的最大值")])]),t._v(" "),_("tr",[_("td",[t._v("MIN")]),t._v(" "),_("td",[t._v("查询指定列的最小值")])]),t._v(" "),_("tr",[_("td",[t._v("COUNT")]),t._v(" "),_("td",[t._v("统计查询结果的行数")])]),t._v(" "),_("tr",[_("td",[t._v("SUM")]),t._v(" "),_("td",[t._v("求和，返回指定列的总和")])]),t._v(" "),_("tr",[_("td",[t._v("AVG")]),t._v(" "),_("td",[t._v("求平均值，返回指定列数据的平均值")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);