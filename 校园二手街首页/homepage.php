<?php
include("../mysql.php");
$b=array();
if(isset($_GET['type1']))//搜索框模糊查询
{
	$a=$_GET['type1'];
	$arr=mysql_query("select * from orders where introduce like'%$a%'");
	for($i=0;$result=mysql_fetch_assoc($arr);$i++)
	{
		$b[$i]=$result;
	}
}
elseif(isset($_GET['type2']))//搜索特定项
{
	$a=$_GET['type2'];
	$arr=mysql_query("select * from orders where introduce like'%$a%'");
	for($i=0;$result=mysql_fetch_assoc($arr);$i++)
	{
		$b[$i]=$result;
	}
}
else//如果搜索框为空则执行该条语句
{
	$arr=mysql_query("select * from orders");
	for($i=0;$result=mysql_fetch_assoc($arr);$i++)
	{
		$b[$i]=$result;
	}
}
echo json_encode($b);
?>