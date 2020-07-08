// 测试删除操作
module.exports = {
    commands: [
        {
            name: 'delBlog',
            type: 'delete',
            target: 'Blog',
            query: {
                where: {
                    userId: 4
                }
            }
        },
        {
            name: 'blogs',
            type: 'values',
            target: 'Blog',
            query: {
                where: {
                    userId: 4
                }
            },
            fields: [
                'count#id=>total'
            ]
        }
    ]
}