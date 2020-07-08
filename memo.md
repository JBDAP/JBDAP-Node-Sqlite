
返回值说明：
- create 返回的是一个数组，只有一个值，就是插入的最后一条记录的 id
- update/delete/increase/decrease 返回的是一个值，即影响到的数据条数

复杂查询说明：
- 关于 not，由于 knex 缺少 andWhereNot 所以
```
$not: {
  'hearts#lte': 10,
  'views#lte': 50
}
会被解析为：
not `hearts` <= 10 and not `views` <= 50
而非我们期待的：
not (`hearts` <= 10 and `views` <= 50)
如果想达到目的，请这样写：
$not: {
    $and: {
        'hearts#lte': 10,
        'views#lte': 50
    }
}
```
