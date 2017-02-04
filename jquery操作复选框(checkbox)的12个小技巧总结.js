1、获取单个checkbox选中项(三种写法)
$("input:checkbox:checked").val()
或者
$("input:[type='checkbox']:checked").val();
或者
$("input:[name='ck']:checked").val();
2、 获取多个checkbox选中项
$('input:checkbox').each(function() {
        if ($(this).attr('checked') ==true) {
                alert($(this).val());
        }
});
3、设置第一个checkbox 为选中值
$('input:checkbox:first').attr("checked",'checked');
或者
$('input:checkbox').eq(0).attr("checked",'true');
4、设置最后一个checkbox为选中值
$('input:radio:last').attr('checked', 'checked');
或者
$('input:radio:last').attr('checked', 'true');
5、根据索引值设置任意一个checkbox为选中值
$('input:checkbox).eq(索引值).attr('checked', 'true');索引值=0,1,2....
或者
$('input:radio').slice(1,2).attr('checked', 'true');
6、选中多个checkbox同时选中第1个和第2个的checkbox
$('input:radio').slice(0,2).attr('checked','true');
7、根据Value值设置checkbox为选中值
$("input:checkbox[value='1']").attr('checked','true');
8、删除Value=1的checkbox
$("input:checkbox[value='1']").remove();
9、删除第几个checkbox
$("input:checkbox").eq(索引值).remove();索引值=0,1,2....
如删除第3个checkbox:
$("input:checkbox").eq(2).remove();
10、遍历checkbox
$('input:checkbox').each(function (index, domEle) {
//写入代码
});
11、全部选中
$('input:checkbox').each(function() {
        $(this).attr('checked', true);
});
12、全部取消选择
$('input:checkbox').each(function () {
        $(this).attr('checked',false);
});

