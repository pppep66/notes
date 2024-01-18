(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{422:function(a,t,e){"use strict";e.r(t);var n=e(7),_=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("ul",[t("li",[t("a",{attrs:{href:"#max_connections"}},[a._v("max_connections")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#back_log"}},[a._v("back_log")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#table_open_cache"}},[a._v("table_open_cache")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#thread_cache_size"}},[a._v("thread_cache_size")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#innodb_lock_wait_timeout"}},[a._v("innodb_lock_wait_timeout")])])]),a._v(" "),t("p",[a._v("从实现上来说，MySQL Server 是多线程结构，包括后台线程和客户服务线程。多线程可以有效利用服务器资源，提高数据库的并发性能。在Mysql中，控制并发连接和线程的主要参数包括 max_connections、back_log、thread_cache_size、table_open_cahce。")]),a._v(" "),t("h2",{attrs:{id:"max-connections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#max-connections"}},[a._v("#")]),a._v(" max_connections")]),a._v(" "),t("p",[a._v("采用max_connections 控制允许连接到MySQL数据库的最大数量，默认值是 151。如果状态变量 connection_errors_max_connections 不为零，并且一直增长，则说明不断有连接请求因数据库连接数已达到允许最大值而失败，这是可以考虑增大max_connections 的值。")]),a._v(" "),t("p",[a._v("Mysql 最大可支持的连接数，取决于很多因素，包括给定操作系统平台的线程库的质量、内存大小、每个连接的负荷、CPU的处理速度，期望的响应时间等。在Linux 平台下，性能好的服务器，支持 500-1000 个连接不是难事，需要根据服务器性能进行评估设定。")]),a._v(" "),t("h2",{attrs:{id:"back-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#back-log"}},[a._v("#")]),a._v(" back_log")]),a._v(" "),t("p",[a._v("back_log 参数控制MySQL监听TCP端口时设置的积压请求栈大小。如果MySql的连接数达到 max_connections时，新来的请求将会被存在堆栈中，以等待某一连接释放资源，该堆栈的数量即 back_log，如果等待连接的数量超过back_log，将不被授予连接资源，将会报错。5.6.6 版本之前默认值为 50 ， 之后的版本默认为 50 + （max_connections / 5）， 但最大不超过900。")]),a._v(" "),t("p",[a._v("如果需要数据库在较短的时间内处理大量连接请求， 可以考虑适当增大 back_log 的值。")]),a._v(" "),t("h2",{attrs:{id:"table-open-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-open-cache"}},[a._v("#")]),a._v(" table_open_cache")]),a._v(" "),t("p",[a._v("该参数用来控制所有SQL语句执行线程可打开表缓存的数量， 而在执行SQL语句时，每一个SQL执行线程至少要打开 1 个表缓存。该参数的值应该根据设置的最大连接数 max_connections 以及每个连接执行关联查询中涉及的表的最大数量来设定 ：max_connections x N ；")]),a._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SHOW")]),a._v(" VARIABLES "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("LIKE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'table_open_cache'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-- 查看大小")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"thread-cache-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thread-cache-size"}},[a._v("#")]),a._v(" thread_cache_size")]),a._v(" "),t("p",[a._v("为了加快连接数据库的速度，MySQL 会缓存一定数量的客户服务线程以备重用，通过参数 thread_cache_size 可控制 MySQL 缓存客户服务线程的数量。")]),a._v(" "),t("h2",{attrs:{id:"innodb-lock-wait-timeout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb-lock-wait-timeout"}},[a._v("#")]),a._v(" innodb_lock_wait_timeout")]),a._v(" "),t("p",[a._v("该参数是用来设置InnoDB 事务等待行锁的时间，默认值是50ms ， 可以根据需要进行动态设置。对于需要快速反馈的业务系统来说，可以将行锁的等待时间调小，以避免事务长时间挂起； 对于后台运行的批量处理程序来说， 可以将行锁的等待时间调大， 以避免发生大的回滚操作。")])])}),[],!1,null,null,null);t.default=_.exports}}]);